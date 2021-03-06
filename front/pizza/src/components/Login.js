import React, { useState } from "react"
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
  box-sizing: border-box;
  border: none;
  height: 40px;
  width: 100%;
  font-size: 16px;
  padding-left: 5px;
  box-shadow: 1px 1px 6px #a5a5a5;
  border-radius: 3px;
  transition: box-shadow .3s;
  
  &:focus {
    transition: box-shadow .3s;
    outline: none;
    box-shadow: 1px 1px 0px #a5a5a5, inset 1px 1px 4px #a5a5a5;
  }
`

const Submit = styled(Button)`
  margin-top: 3%;
  margin-left: 28%;
`

const Questions = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 8px;
  width: 150px;
  justify-content: space-between;
`

const Question = styled(Link)`
  font-size: 12px;
  text-decoration: none;
`

const Login = props => {
  const [creds, setCreds] = useState({
    email: '',
    pass: '',
  })
  const {email, pass} = creds

  const handleInput = (e, fieldID) => {
    const input = e.target.value
    
    fieldID === 'email'
    ?
    setCreds({...creds, email: input})
    :
    setCreds({...creds, pass: input}) 
  }

  return (
    <LoginForm>
      <Title>~LOGIN~</Title>

      <Creds>
        <Field placeholder="email" value={email} onChange={e => handleInput(e, 'email')}/>
        <Field placeholder="password" value={pass} onChange={e => handleInput(e, 'pass')}/>
        <Submit content="SUBMIT" />
      </Creds>

      <Questions>
        <Question>password?</Question>
        <Question to="/register">new user?</Question>
      </Questions>
    </LoginForm>
  )
}

export default Login