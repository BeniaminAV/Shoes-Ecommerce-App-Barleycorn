import Container from "../../container"
import { LiaShippingFastSolid } from "react-icons/lia"
import { PiArrowsLeftRight } from "react-icons/pi"
import { RiSecurePaymentLine } from "react-icons/ri"
import { FaRegHandshake } from "react-icons/fa"

const Care = () => {
  return (
    <Container>
      <div className="lg:h-[40vh] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  text-center items-center justify-center">
        <div className="flex flex-col items-center justify-center flex-grow h-[200px]  lg:border-r-[1px] px-4">
          <LiaShippingFastSolid size={40} />
          <h2 className="text-md font-semibold py-2">Free Shipping</h2>
          <p className="text-xs font-normal w-[250px]">
            Order before 3pm and we'll ship by the end of the same day.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow h-[200px]  lg:border-r-[1px] px-4">
          <PiArrowsLeftRight size={40} />
          <h2 className="text-md font-semibold py-2">
            Free Exchange And Return
          </h2>
          <p className="text-xs font-normal w-[250px]">
            You can exchange or return your order for free within 30 days. Easy
            and fast!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow h-[200px]  lg:border-r-[1px] px-4">
          <RiSecurePaymentLine size={40} />
          <h2 className="text-md font-semibold py-2">Secure Payments</h2>
          <p className="text-xs font-normal w-[250px]">
            You can pay by Credit Card, PayPal, Bank Transfer, and Scalapay.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow h-[200px]  px-4">
          <FaRegHandshake size={40} />
          <h2 className="text-md font-semibold py-2">Customer Care</h2>
          <p className="text-xs font-normal w-[250px]">
            Don't hesitate to contact us via chat or email with any questions.
            We are here to help you.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Care
