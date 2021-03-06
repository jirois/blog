import React from "react"
import { Link } from "gatsby"
import Footer from '../components/Footer'
import Header from '../components/Header'
import './layout.scss'
// import Sidebar from '../components/sidebar'
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      // <Link className="header-link-home" to="/">
      //   {title}
      // </Link>
      <Header />

    )
  }

  return (
    <div className="layout" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main className="content-layout">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
