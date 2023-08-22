import { type AppType } from 'next/app'
import { api } from '~/utils/api'
import '~/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default api.withTRPC(MyApp)
