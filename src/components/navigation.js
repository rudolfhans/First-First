import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

const NavigationStyle = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  background: yellow;
  height: 100%;
  width: 20%;
`

const Navigation = () => (
  <NavigationStyle>
    <Link
      to="/"
      style={{
        background: "red",
        flex: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>INDEX</h1>
    </Link>

    <Link
      to="/about"
      style={{
        background: "lightgreen",
        flex: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>ABOUT</h1>
    </Link>

    <Link
      to="/work"
      style={{
        background: "lightgrey",
        flex: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>WORK</h1>
    </Link>

    <Link
      to="/random"
      style={{
        background: "yellow",
        flex: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>RANDOM</h1>
    </Link>

    <Link
      to="/contact"
      style={{
        background: "lightblue",
        flex: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>CONTACT</h1>
    </Link>
  </NavigationStyle>
)

export default Navigation

export const query = graphql`
  query {
    allContentfulFirstFirstAssets(filter: { imageTitle: { eq: "Logo" } }) {
      edges {
        node {
          imageTitle
        }
      }
    }
  }
`
