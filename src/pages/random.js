import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const RandomStyle = styled.div`
  height: 100vh;
  background: yellow;
  
`

export default () => (
  <Layout>
    <RandomStyle>RANDOM</RandomStyle>
  </Layout>
)
