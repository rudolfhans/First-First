import React from "react"
import styled from "styled-components"
import Navigation from "../components/navigation"

const LayoutStyle = styled.div`
  #content {
    float: right;
    width: 80%;
  }
`

export default ({ children }) => (
  <LayoutStyle>
    <Navigation />
    <div id="content">{children}</div>
  </LayoutStyle>
)
