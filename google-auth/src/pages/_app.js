import '@/styles/globals.css'
import {SessionProvider} from "next"
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
        <Component {...pageProps}></Component>
    </SessionProvider>
  )
}
