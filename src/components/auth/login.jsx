import { useState } from "react"
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"
import FormInput from "../formInput"
import Button from "../button"
import { toast } from "react-hot-toast"
import { isEmpty } from "lodash"
import { useNavigate } from "react-router-dom"

const defaultFormInput = {
  email: "",
  password: "",
}

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormInput)
  const { email, password } = formFields
  const navigate = useNavigate()

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
      navigate("/")
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
