import React from 'react';
import Layout from '../components/layout'
const ContactPage = ({ data, location }) => {
    const {siteTitle} = data.site.siteMetadata?.title || `Title`
    return (
        <Layout location={location} title={siteTitle}>
          <h1>Welcome to the contact page</h1>
        </Layout>
    )
}
export default ContactPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
}`