import type { AppProps } from "next/app"
import "modern-normalize/modern-normalize.css"
import "styles/global.scss"
import MainLayout from "layouts/MainLayout"

// TODO: Style scrollbar
// TODO: Fix fonts
// TODO: Fix navbar on project page
// TODO: Hover boxes on image grid

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
export default MyApp
