import { useCallback, useState } from "react"
import SignUpForm from "../../components/auth/register"
import Button from "../../components/button"
import Container from "../../components/container"
import Title from "../../components/title"
import Login from "../../components/auth/login"

const VARIANT = ["LOGIN", "REGISTER"]
console.log(VARIANT)

const Authentication = () => {
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
      <main className="relative pt-[15vh] flex items-center justify-center">
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
            </div>
            <div className="w-[470px] h-[220px] bg-[#f3f3f3] my-10">
              <div className="mx-5">
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

export default Authentication
