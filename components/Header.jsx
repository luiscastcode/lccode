
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 ">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
           
        </div>
        {/*navegacion movil*/}
        <div className="xl:hidden"><MobileNav/></div>
      </div>
    </header>
  )
}

export default Header