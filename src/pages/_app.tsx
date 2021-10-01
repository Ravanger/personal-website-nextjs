import type { AppProps } from "next/app"
import "modern-normalize/modern-normalize.css"
import "styles/global.scss"
import MainLayout from "layouts/MainLayout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
export default MyApp
