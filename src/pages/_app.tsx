import '../styles/globals.css'
import Header from '../components/header'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import Menu from '../components/menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <main className='main'>
        <section className='main_section'>
          <Component {...pageProps} />
        </section>
        <section className='main_section_menu'>
          <Menu/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default MyApp
