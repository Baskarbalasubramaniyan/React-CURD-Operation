import React, { useState } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const postData = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      checked,
    });
    navigate("/read");
  };

  return (
    <Form className="form">
      <Form.Field>
        <label>First Name</label>
        <br />
        <br />
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Enter Your First Name"
        />
      </Form.Field>
      <br />

      <Form.Field>
        <label>Last Name</label>
        <br />
        <br />
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Enter Your Last Name"
        />
      </Form.Field>
      <br />

      <Form.Field>
        <Checkbox
          value={checked}
          onChange={(event) => setChecked(!checked)}
          label="Agree The Terms & Conditions"
        />
      </Form.Field>
      <br />
      <Button onClick={postData}>Submit</Button>
    </Form>
  );
}

export default Create;
