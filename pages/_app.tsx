import "@styles/reset.css"

import Layout from "@components/Layout"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Home">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
