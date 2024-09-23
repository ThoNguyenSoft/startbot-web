import { Manrope } from 'next/font/google'
// import '@/styles/globals.css'
import './globals.css'

// import { dir } from "i18next";

import MasterProvider from '@/core/components/template/layout/MasterProvider'
import { cn } from '@/lib/utils/utils'
import { RootLayoutProps } from '@/types/common'
import Head from 'next/head'

const inter = Manrope({ subsets: ['latin'] })

// const languages = ["en", "vi"];

// export async function generateStaticParams() {
//     return languages?.map(lng => ({ lng }));
// }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body className={cn('bg-secondary antialiased', inter.className)}>
        <MasterProvider>{children}</MasterProvider>
        {/* <Analytics /> */}
        {/* <Toaster /> */}
        {/* <TailwindIndicator /> */}
      </body>
    </html>
  )
}
