import React from 'react';
import Layout from '../components/layout'
const AboutPage = ({ data, location }) => {
    const {siteTitle} = data.site.siteMetadata?.title || `Title`
    return (
        <Layout location={location} title={siteTitle}>
          <h1>Welcome to the about page</h1>
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