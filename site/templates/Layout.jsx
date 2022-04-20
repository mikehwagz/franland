import { h } from 'hyposcript'
import Header from './Header'
import Footer from './Footer'
// import Menu from './Menu'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* <Menu /> */}
    </>
  )
}
