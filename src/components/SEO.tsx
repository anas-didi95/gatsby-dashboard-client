import React from "react"
import { Helmet } from "react-helmet"

interface ISEO {
  title: string
  description: string
  siteTitle: string
}

const SEO: React.FC<ISEO> = ({ title, description, siteTitle }) => (
  <Helmet
    htmlAttributes={{
      lang: "en",
    }}
    title={title}
    titleTemplate={`%s | ${siteTitle}`}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      /*{
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: author,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      },*/
    ].concat([])}
  />
)

export default SEO
