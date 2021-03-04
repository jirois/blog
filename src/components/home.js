import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import './home.scss'
// import { WordsFading } from '../common/wordsFadding'

const Home = () => {
    const data = useStaticQuery(graphql`
    query HomeQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
//   const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed


  
  
    return (
        <div className='home'>

            <div className='avatar-container'>
          {avatar && 
          <Image
            fixed={avatar}
            alt={author?.name || ``}
            className="home-avatar"
            imgStyle={{
                borderRadius: `50%`,
               
            }} 
          />
        } 
        </div>
        <div>
        <h1 className="heading-h1">Hi There, <br />
        <span> I'm </span></h1>
        </div>
        <div className='btnContainer'>
                <button className='btn aboutme-btn'>
                    <Link to="/about">  About Me</Link> 
                </button>
            <button className='btn contactme-btn'>
             <Link to="/contact">Contact Me</Link>
            </button>
        </div>
        </div>
    )
}

export default Home;