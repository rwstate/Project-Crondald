import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const MyButton = styled(Link)`
  width: 120px;
  background-color: navy;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
  color: #CFCFC4;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
`

const Button = props => {
  const {content} = props
  return (
  <MyButton to={`/${content.toLowerCase()}`}>{content}</MyButton>
  )
}

export default Button