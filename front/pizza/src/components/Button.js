import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const MyButton = styled(Link)`
  width: 120px;
  background-color: #98804f;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
  color: #CFCFC4;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color .2s, box-shadow .2s;
  box-shadow: 0px 0px 3px rgba(34,34,34,.8);

  &:hover {
    background-color: #a8905f;
  }

  &:active {
    box-shadow: none;
  }
`

const Button = props => {
  const {content, className} = props
  return (
    content !== 'SUBMIT' ?
    <MyButton className={className} to={`/${content.toLowerCase()}`}>{content}</MyButton>
    :
    <MyButton className={className}>{content}</MyButton>
  )
}

export default Button