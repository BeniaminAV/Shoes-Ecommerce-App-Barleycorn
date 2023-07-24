import { useCallback, useState } from "react"
import Container from "../container"
import Title from "../title"
import Login from './components/login'
import SignUpForm from './components/register'
import Button from "../button"

const VARIANT = ["LOGIN", "REGISTER"]
console.log(VARIANT)

const Auth = () => {
  const [variant, setVariant] = useState("LOGIN")

  const setVar = useCallback(() => {
    if (variant === "LOGIN") {
      return setVariant("REGISTER")
    } else {
      return setVariant("LOGIN")
    }
  }, [variant])

  return (
    <Container>
      <main className="relative pt-[13vh] flex items-center justify-center">
        {variant === "LOGIN" ? (
          <>
            <div className="w-[470px]">
              <Title
                title={"Log in"}
                paragraph={
                  "If you are a registered user, please enter your e-mail address and password."
                }
                className={"text-center border-b-[1px]"}
                fontT={"5xl"}
                fontP={"lg"}
              />
              <Login />

              <div className="bg-[#f3f3f3] p-3 my-5 rounded-md">
                <Title
                  title={"Are you a new customer?"}
                  paragraph={
                    "Register and subscribe to the newsletter and get a 10% discount on your first purchase!"
                  }
                  className={"text-center"}
                />

                <Button
                  label={"Register now"}
                  buttonType={"green"}
                  onClick={setVar}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-[470px]">
              <Title
                title={"Sign in"}
                paragraph={`Are you already registered? Log in`}
                className={"text-center border-b-[1px]"}
                fontT={"5xl"}
                fontP={"lg"}
              />

              <Button buttonType={"green"} label={"Log in"} onClick={setVar} />

              <SignUpForm />
            </div>
          </>
        )}
      </main>
    </Container>
  )
}

export default Auth
