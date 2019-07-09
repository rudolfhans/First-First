import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const AboutStyle = styled.div`
  background: lightgreen;
  min-height: 100vh;
`

export default () => (
  <Layout>
    <AboutStyle>About</AboutStyle>
  </Layout>
)
