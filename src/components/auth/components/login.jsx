import { useState } from "react"
import { toast } from "react-hot-toast"
import { isEmpty } from "lodash"
import SocialAuth from "./socialAuth"
import Button from "../../button"
import FormInput from '../../formInput'
import { signInAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase"

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

    if (isEmpty(email) || isEmpty(password)) {
      toast.error("Complete all fields!")
      return
    }

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
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

      <SocialAuth />
    </>
  )
}

export default Login
