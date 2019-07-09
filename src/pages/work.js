import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Masonry from "react-masonry-css"

const WorkStyle = styled.div`
  height: 100vh;
  background: lightgrey;
`

const MasonryStyle = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  // Style your items
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`

export default ({ data }) => (
  <Layout>
    <WorkStyle>
      <div>Work</div>
      <MasonryStyle>
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        />
      </MasonryStyle>
    </WorkStyle>
  </Layout>
)
