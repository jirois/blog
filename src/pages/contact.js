import React from 'react';
import Layout from '../components/layout'
import Contact from '../components/contact'
import { graphql } from 'gatsby'

const ContactPage = ({ data, location }) => {
    const {siteTitle} = data.site.siteMetadata?.title || `Title`
    return (
        <Layout location={location} title={siteTitle}>
          <Contact />
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