import React from "react"
import Head from "next/head"

import MainMenu from "@components/MainMenu"

type LayoutProps = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = "Title" }: LayoutProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <MainMenu />
    </header>
    <main>{children}</main>
  </div>
)

export default Layout
