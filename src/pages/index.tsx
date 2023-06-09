import { Locale, usePersonalsQuery } from '@/graphql/generated/index.generated'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data } = usePersonalsQuery({
    variables: {
      locales: [Locale.PtBr, Locale.En],
    },
  })

  return (
    <main
      className={`${inter.className} flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {data?.personals[0].title}
    </main>
  )
}
