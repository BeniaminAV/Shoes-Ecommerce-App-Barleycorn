import Container from "../container"
import { Email, Phone, Whap } from "../../assets/contact/index"

const ContactAll = () => {
  return (
    <Container>
      <div className="mt-10 w-full">
        <p className="text-md text-center">
          If you need telephone assistance you can contact us <br />
          from Monday to Friday from 9 to 17.30 at this number: 07xxxxxxxx
        </p>

        <div className="lg:flex lg:flex-row items-center justify-center text-center mt-20">
          
          <span className="lg:max-w-[500px] flex flex-col items-center justify-center py-5">
            <img src={Whap} alt={`name ${Whap}`} />
            <h2 className="text-4xl font-semibold py-5">Whatsapp</h2>
            <p className="h-[100px]">
              Contact us on Whatsapp, we will be happy to provide you with more
              information about our products and offer you after-sales
              assistance. If you need help, don't hesitate to contact us.
            </p>
          </span>

          <span className="lg:max-w-[500px] flex flex-col items-center justify-center py-5">
            <img src={Phone} alt={`name ${Phone}`} />
            <h2 className="text-4xl font-semibold py-5">Telephone</h2>
            <p className="h-[100px]">
              Contact us by phone on 07xxxxxxxx, our Customer Care is
              operational from 9 to 17.30 from Monday to Friday.
            </p>
          </span>

          <span className="lg:max-w-[500px] flex flex-col items-center justify-center py-5">
            <img src={Email} alt={`name ${Email}`} />
            <h2 className="text-4xl font-semibold py-5">E-mail</h2>
            <p className="h-[100px]">
              For any further request, write to our email address
              help@xxxxxxx.com, Customer Care will take care of you within 24
              hours from Monday to Friday
            </p>
          </span>
          
        </div>

        <div className="border-b-[1px] " />
        
      </div>
    </Container>
  )
}

export default ContactAll
