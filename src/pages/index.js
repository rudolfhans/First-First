import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const IndexStyle = styled.div`
  height: 100vh;
  background: red;
`

export default () => (
  <Layout>
    <IndexStyle>Landingpage</IndexStyle>
  </Layout>
)
