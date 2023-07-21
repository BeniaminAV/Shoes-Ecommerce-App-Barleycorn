import { useState } from "react"
import {
  createDocumentForAuth,
  createUserAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase"
import FormInput from "../formInput"
import Button from "../button"
import { toast } from "react-hot-toast"

const defaultFormInput = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormInput)
  const { displayName, email, password, confirmPassword } = formField

  const resetFormField = () => {
    setFormField(defaultFormInput)
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Password doesn't match!")
    }

    try {
      const { user } = await createUserAuthWithEmailAndPassword(email, password)

      await createDocumentForAuth(user, { displayName })
      toast.success("Resgistred")
      resetFormField()
    } catch (error) {
      console.log(error.message)
      toast.error("User exists")
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    setFormField({ ...formField, [name]: value })
  }

  return (
    <>
      <form onSubmit={onSubmit} className="py-5">
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
      </form>
      <Button
        type="submit"
        onClick={onSubmit}
        label={"Sign In"}
        className="py-10"
      />
    </>
  )
}

export default SignUpForm
