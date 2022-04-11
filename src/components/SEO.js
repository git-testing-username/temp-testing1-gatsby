import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metadesc = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} tset | ${site.siteMetadata.title} `}
      meta={[{ name: "description", content: description }]}
    ></Helmet>
  )
}

export default SEO
