import Container from "../../container"

const Footer = () => {
  return (
    <div className="h-[60vh] bg-black">
      <Container>
        
        <div className="text-white text-center pt-20">
          <h2 className="text-4xl">BARLEYCORN</h2>
          <p className="text-xs py-2">Made in Italy since 1991</p>
        </div>

        <div className="text-white lg:flex items-center justify-between pt-20 lg:mx-40 text-center">
          
          <span className="w-[350px]">
            <h2 className="text-xl py-5">Customer Care</h2>
            <div className="text-xs lg:flex hidden lg:flex-col">
              <p className="py-1">Payment Methods</p>
              <p className="py-1">Shipping, Exchange And Return</p>
              <p className="py-1">Frequently Asked Questions (FAQ)</p>
              <p className="py-1">Track Your Order</p>
            </div>
          </span>

          <span className="w-[350px]">
            <div className="text-xs">
              <h2 className="text-xl py-5">About</h2>
              <div className="text-xs lg:flex hidden lg:flex-col">
                <p className="py-1">Our Trip</p>
                <p className="py-1">General Terms And Conditions</p>
                <p className="py-1">Privacy Policy</p>
                <p className="py-1">Contact Us</p>
              </div>
            </div>
          </span>

          <span className="w-[350px]">
            <div className="text-xs">
              <h2 className="text-xl py-5">Follow us</h2>
              <div className="text-xs lg:flex hidden lg:flex-col">
                <p className="py-1">Instagram</p>
                <p className="py-1">Facebook</p>
                <p className="py-1">Whatsapp</p>
                <p className="py-1">Whatsapp</p>
              </div>
            </div>
          </span>
        </div>

        <p className="relative lg:top-20 top-10  text-neutral-500 text-xs text-center">
          &copy; 2023 FASHION MARKET
        </p>
        
      </Container>
    </div>
  )
}

export default Footer
