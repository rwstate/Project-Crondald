import React from "react"
import Button from "./Button"
import styled from "styled-components"

const Header = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  background-image: linear-gradient(to bottom right, rgba(179, 200, 213, 1), rgba(179, 200, 213, .3));
  box-shadow: 0px 1px 1px rgba(34,34,34,.1);
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
      <Logo></Logo>
      <Auths>
        <Button content="LOGIN" />
        <Button content="REGISTER" />
      </Auths>
    </Header>
  )
}

export default Nav