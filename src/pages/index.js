import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import LeftAbout from "../components/sections/leftAbout"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import { splashScreen } from "../config"

const IndexPage = ({ data }) => (
  <Layout splashScreen={splashScreen}>
    <SEO title="CCPC2020" />
    <Hero content={data.hero.edges} />
    {/* Articles is populated via Medium RSS Feed fetch */}
    {/*<Articles />*/}
    <About content={data.about.edges} />
    {/*<Interests content={data.interests.edges} />*/}
    <Projects content={data.projects.edges} />
    <LeftAbout content={data.leftAbout.edges} />
    <About content={data.contest.edges} />
    <LeftAbout content={data.judge.edges} />
    <Contact content={data.contact.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
{
  hero: allMdx(filter: {fileAbsolutePath: {regex: "/hero/"}}) {
    edges {
      node {
        body
        frontmatter {
          greetings
          title
          subtitlePrefix
          subtitle
          icon {
            childImageSharp {
              fluid(maxWidth: 60, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  about: allMdx(filter: {fileAbsolutePath: {regex: "/about/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  leftAbout: allMdx(filter: {fileAbsolutePath: {regex: "/leftAbout/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  contest: allMdx(filter: {fileAbsolutePath: {regex: "/contest/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  judge: allMdx(filter: {fileAbsolutePath: {regex: "/judge/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  interests: allMdx(filter: {fileAbsolutePath: {regex: "/interests/"}}) {
    edges {
      node {
        exports {
          shownItems
          interests {
            name
            icon {
              childImageSharp {
                fixed(width: 20, height: 20, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        frontmatter {
          title
        }
      }
    }
  }
  projects: allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}, frontmatter: {visible: {eq: "true"}}}, sort: {fields: [frontmatter___position], order: ASC}) {
    edges {
      node {
        body
        frontmatter {
          title
          category
          emoji
          screenshot {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
          position
          buttonVisible
          buttonUrl
          buttonText
        }
      }
    }
  }
  contact: allMdx(filter: {fileAbsolutePath: {regex: "/contact/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          name
          email
          profileImage {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`
