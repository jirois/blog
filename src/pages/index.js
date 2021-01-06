import React from 'react';
import Layout from '../components/layout'
import Hero from '../components/hero'
import Home from '../components/home'
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
    return (
        <Layout location='/' title={siteTitle}>
           <SEO title="Omas Ajiri" />
            <Hero />
            <Home />
        </Layout>
    )
}
export default IndexPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
}`