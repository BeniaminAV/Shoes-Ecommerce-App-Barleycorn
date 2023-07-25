import Container from "../../container"
import Title from "../../title"

const Subscribe = () => {
  return (
    <div className="h-[40vh] text-center bg-[#313131] flex items-center justify-center">
      <Container>
        <Title
          title="-10% on your purchase"
          paragraph="Subscribe to the newsletter to get a 10% discount coupon on your first purchase!
Stay up to date and discover the latest news and promotions."
          className='text-white'
        />
      </Container>
    </div>
  )
}

export default Subscribe
