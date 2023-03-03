import { Link } from "react-router-dom";
import img from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration img={img} alt="Alt tag" />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Eter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Eter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Eter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
