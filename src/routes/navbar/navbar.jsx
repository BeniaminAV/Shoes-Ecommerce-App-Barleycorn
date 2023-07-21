import { Outlet } from "react-router-dom"
import Container from "../../components/container"
import UserOptions from "../../components/navbar/userSettings"
import Reduction from "../../components/navbar/reduction"
import LinkRoutes from "../../components/link"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  return (
    <main>
      <div className="fixed z-10  w-full hover:bg-white transition  ease-in">
        <Reduction />
        <Container>
          <div className="flex flex-row items-center justify-between py-4  gap-3 md:gap-0">
            <div className="lg:hidden">
              <LinkRoutes label={<GiHamburgerMenu size={20} />} to={"/shop"} />
            </div>

            <div className="flex items-center justify-between ">
              <LinkRoutes
                label="BARLEYCORN"
                to={"/"}
                className={"text-2xl font-bold lg:mr-10 text-rose-700"}
              />

              <div className="hidden items-center justify-center mt-1  lg:flex gap-x-10">
                <LinkRoutes label={"Novelti"} />
                <LinkRoutes label={"Collection"} />
                <LinkRoutes label={"Sales"} />
                <LinkRoutes label={"Customers Services"} />
                <LinkRoutes label={"Contact Us"} />
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
