import { type AppType } from 'next/app'
import { api } from '~/utils/api'
import '~/styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react'
import { Toaster } from 'react-hot-toast'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Toaster position='bottom-center' />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default api.withTRPC(MyApp)
