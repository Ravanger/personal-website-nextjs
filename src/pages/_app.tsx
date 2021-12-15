import type { AppProps } from "next/app"
import "modern-normalize/modern-normalize.css"
import "styles/global.scss"
import MainLayout from "layouts/MainLayout"

// TODO: Style scrollbar
// TODO: Hover boxes on image grid
// TODO: Work page images blur-up
// TODO: Light mode
// TODO: 404 Page
// TODO: Micro-interaction hover states, animations, etc

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
export default MyApp
