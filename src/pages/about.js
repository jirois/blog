import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import About from '../components/about'

const AboutPage = ({ data, location }) => {
    const {siteTitle} = data.site.siteMetadata?.title || `Title`
    return (
        <Layout location={location} title={siteTitle}>
          <About />
        </Layout>
    )
}
export default AboutPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
}`