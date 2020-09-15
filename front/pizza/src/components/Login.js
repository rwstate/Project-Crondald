import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from "./Button"

const LoginForm = styled.div`
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
`

const Title = styled.div`
  letter-spacing: 8px;
  font-size: 36px;
  color: black;
  font-weight: 100;
  margin-left: 10%;
  margin-top: 2%;
  text-shadow: 0px 0px 3px;
`

const Creds = styled.div`
  display: flex;
  margin-top: 2%;
  flex-direction: column;
  margin-left: 5%;
  height: 30%;
  width: 35%;
  justify-content: space-around;
`

const Field = styled.input`
  border: none;
  height: 40px;
  width: 100%;
  font-size: 16px;
  padding-left: 5px;
  box-shadow: 1px 1px 6px #BEBEBE;
  border-radius: 3px;
`

const Submit = styled(Button)`
  margin-top: 3%;
  margin-left: 28%;
`

const Questions = styled.div`
  
`

const Question = styled(Link)`
  font-size: 10px;
`

const Login = props => {
  return (
    <LoginForm>
      <Title>~LOGIN~</Title>

      <Creds>
        <Field placeholder="email"/>
        <Field placeholder="password"/>
        <Submit content="SUBMIT"></Submit>
      </Creds>

    </LoginForm>
  )
}

export default Login