import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const RegisterForm = styled.div`
  box-sizing: border-box;
  padding-top: 2%;
  display: flex;
  width: 66%;
  height: 40%;
  background-color: rgba(179, 200, 213, 1);
  box-shadow: 0px 0px 5px rgba(179, 200, 213, 1);
  border-radius: 4px;
  margin-top: 40px;
  flex-direction: column;
`;

const Title = styled.div`
  letter-spacing: 8px;
  font-size: 36px;
  color: black;
  font-weight: 100;
  margin-left: 10%;
  margin-top: 2%;
  text-shadow: 0px 0px 3px;
`;

const Creds = styled.div`
  display: flex;
  margin-top: 2%;
  flex-direction: column;
  margin-left: 5%;
  height: 40%;
  width: 35%;
  justify-content: space-around;
`;

const Field = styled.input`
  box-sizing: border-box;
  border: none;
  height: 40px;
  width: 100%;
  font-size: 16px;
  padding-left: 5px;
  box-shadow: 1px 1px 6px #a5a5a5;
  border-radius: 3px;
  transition: box-shadow 0.3s;

  &:focus {
    transition: box-shadow 0.3s;
    outline: none;
    box-shadow: 1px 1px 0px #a5a5a5, inset 1px 1px 4px #a5a5a5;
  }
`;

const Submit = styled(Button)`
  margin-top: 3%;
  margin-left: 28%;
`;

const Questions = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 8px;
  width: 200px;
  justify-content: space-between;
`;

const Question = styled(Link)`
  font-size: 12px;
  text-decoration: none;
`;

const Register = (props) => {
  const [creds, setCreds] = useState({
    email: "",
    pass1: "",
    pass2: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    pass: false,
    passMatch: false,
  });

  const [creating, setCreating] = useState(false);

  useEffect(() => {});

  const { email, pass1, pass2 } = creds;

  const checkEmail = (newEmail) => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!re.test(newEmail)) {
      setErrors({ ...errors, email: true });
    } else {
      setErrors({ ...errors, email: false });
    }
  };

  const checkPass = (newPass) => {
    const re = /(?=.*[A-Z])(?=.*[0-9])/;
    if (newPass.length < 8 || !re.test(newPass)) {
      setErrors({ ...errors, pass: true });
    } else {
      setErrors({ ...errors, pass: false });
    }
  };

  const checkPassMatch = (newPass1, newPass2) => {
    if (newPass1 !== newPass2) {
      setErrors({ ...errors, passMatch: true });
    } else {
      setErrors({ ...errors, passMatch: false });
    }
  };

  const handleInput = (e, fieldID) => {
    const input = e.target.value;

    fieldID === "email"
      ? setCreds({ ...creds, email: input })
      : fieldID === "pass1"
      ? setCreds({ ...creds, pass1: input })
      : setCreds({ ...creds, pass2: input });
  };

  return (
    <RegisterForm>
      <Title>~Register~</Title>

      <Creds>
        <Field
          placeholder="email"
          value={email}
          onChange={(e) => handleInput(e, "email")}
        />
        <Field
          placeholder="password"
          value={pass1}
          onChange={(e) => handleInput(e, "pass1")}
        />
        <Field
          placeholder="confirm password"
          value={pass2}
          onChange={(e) => handleInput(e, "pass2")}
        />
        <Submit content="SUBMIT"></Submit>
      </Creds>

      <Questions>
        <Question>password?</Question>
        <Question to="/login">already registered?</Question>
      </Questions>
    </RegisterForm>
  );
};

export default Register;
