import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Password don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Fail to create account!");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Eter name"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        icon="person"
      />
      <TextInput
        type="text"
        placeholder="Eter email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon="alternate_email"
      />
      <TextInput
        type="password"
        placeholder="Eter password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon="lock"
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        icon="lock_clock"
      />
      <Checkbox
        text="I agree to the Terms &amp; Conditions"
        required
        value={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
