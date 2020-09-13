import React from "react"
import {Link} from "react-router-dom"
import Button from "./Button"
import styled from "styled-components"

const Header = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1C1C16;
  background-color: #72d3fe;
  cursor: default;
`

const Logo = styled.div`
  margin-left: 80px;
  padding-bottom: 5px;
  font-size: 36px;
  color: #FF7600;
  font-weight: 900; 
`

const Auths = styled.div`
  width: 300px;
  height: 80%;
  margin-right: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Nav = () => {
  
  return (
    <Header>
      <Logo>PizZachary</Logo>
      <Auths>
        <Button content="LOGIN" />
        <Button content="REGISTER" />
      </Auths>
    </Header>
  )
}

export default Nav