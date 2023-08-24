import React, { useState, useEffect } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const updateuser = async () => {
    await axios.put(API_URL + id, {
      firstName,
      lastName,
      checked,
    });
    navigate("./read");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setChecked(localStorage.getItem("checked"));
  }, []);
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
      <Button onClick={updateuser}>Update</Button>
    </Form>
  );
}

export default Update;
