import Navbar from '../Navbar'

const Layout = ({ children, isForm }) => {
  return (
    <div>
        <Navbar isForm={isForm} />
        <main>
            { children }
        </main>
    </div>
  )
}

export default Layout