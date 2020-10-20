import { graphql, useStaticQuery } from "gatsby"
import { FixedObject } from "gatsby-image"
import { MetadataQuery } from "../../../graphql-types"

interface IMetadataQuery {
  title: string
  description: string
  icon: FixedObject
  social: {
    website: string
    github: string
    linkedin: string
  }
}
const useMetadataQuery = (): IMetadataQuery => {
  const data: MetadataQuery = useStaticQuery(graphql`
    query Metadata {
      site: site {
        siteMetadata {
          title
          description
          social {
            website
            github
            linkedin
          }
        }
      }
      icon: file(relativePath: { eq: "dashboard.png" }) {
        relativePath
        childImageSharp {
          fixed(width: 28) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return {
    title: data.site?.siteMetadata?.title ?? "",
    description: data.site?.siteMetadata?.description ?? "",
    icon: data.icon?.childImageSharp?.fixed as FixedObject,
    social: {
      website: data.site?.siteMetadata?.social?.website ?? "",
      github: data.site?.siteMetadata?.social?.github ?? "",
      linkedin: data.site?.siteMetadata?.social?.linkedin ?? "",
    },
  }
}

export default useMetadataQuery
