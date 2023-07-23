import Directory from "./components/directory"

export const Shoes = ({ shoes, title, paragraph }) => {
  return (
    <>
      <Directory shoes={shoes} title={title} paragraph={paragraph}></Directory>
    </>
  )
}

export default Shoes
