import { Outlet } from "react-router-dom"
import Container from "../../components/container"
import UserOptions from "../../components/navbar/userSettings"
import Reduction from "../../components/navbar/reduction"
import LinkRoutes from "../../components/link"
import { GrClose } from "react-icons/gr"
import { GiHamburgerMenu } from "react-icons/gi"
import { useCallback, useEffect, useState } from "react"
import UserMenu from "../../components/navbar/userMenu"

const TOP_OFFSET = 99

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener("scroll", handleShow)
    return () => window.removeEventListener("scroll", handleShow)
  })

  const openBar = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  const handleCloseNav = () => {
    setIsOpen(false) 
  }

  return (
    <main>
      <div
        className={`fixed z-10 w-full transition ease-in
      ${
        showBackground
          ? "bg-white  border-b-[1px] shadow-sm"
          : "bg-white lg:bg-transparent  lg:hover:bg-white hover:text-black text-black lg:text-white"
      }
      `}>
        <Reduction />
        <Container>
          <div className="flex items-center justify-between py-4  gap-3 md:gap-0">
            <div className="lg:hidden cursor-pointer mt-2">
              {isOpen ? (
                <div>
                  <button>
                    <GrClose size={20} onClick={openBar} />
                  </button>
                  <UserMenu onClick={handleCloseNav} />
                </div>
              ) : (
                <button>
                  <GiHamburgerMenu size={20} onClick={openBar} />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between ">
              <LinkRoutes
                label="BARLEYCORN"
                to={"/"}
                className={"text-2xl font-bold lg:mr-10 text-rose-700"}
              />

              <div className="hidden items-center justify-center mt-1  lg:flex gap-x-10">
                <LinkRoutes label={"Novelty"} to={"/novelty"} />
                <LinkRoutes label={"Collection"} to={"/collection"} />
                <LinkRoutes label={"Sales"} to={"sales"} />
                <LinkRoutes
                  label={"Customers Services"}
                  to={"/customService"}
                />
                <LinkRoutes label={"Contact Us"} to={"contact"} />
              </div>
            </div>
            <UserOptions />
          </div>
        </Container>
      </div>
      <Outlet />
    </main>
  )
}

export default Navbar
