import { useState } from "react"
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"
import FormInput from "../formInput"
import Button from "../button"
import { toast } from "react-hot-toast"

const defaultFormInput = {
  email: "",
  password: "",
}

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormInput)
  const { email, password } = formFields

  const resetFormField = () => {
    setFormFields(defaultFormInput)
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      toast.success("You logged In")
      resetFormField()
    } catch (error) {
      console.log(error, "email or password incorect")
      toast.error("Email or Password incorect!")
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <>
      <form onSubmit={onSubmit} className="py-5">
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
      </form>
      <Button buttonType={"red"} label="Log In" onClick={onSubmit} />
    </>
  )
}

export default Login
