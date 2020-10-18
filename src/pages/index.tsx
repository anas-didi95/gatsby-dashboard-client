import { navigate } from "gatsby"
import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import Alert from "../components/Alert"
import Box from "../components/Box"
import Button from "../components/Button"
import ButtonGroup from "../components/ButtonGroup"
import Form from "../components/Form"
import FormInput from "../components/FormInput"
import AppLayout from "../layouts/AppLayout"
import AlertContext from "../utils/contexts/AlertContext"
import AuthContext from "../utils/contexts/AuthContext"
import useAuth from "../utils/hooks/useAuth"

const IndexPage: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Login" location={location}>
    <section className="hero is-info is-fullheight-with-navbar">
      <div className="hero-body">
        <LoginForm />
      </div>
    </section>
  </AppLayout>
)

const LoginForm: React.FC<{}> = () => {
  type Form = {
    username: string
    password: string
  }
  const { register, handleSubmit, errors } = useForm<Form>()
  const auth = useAuth()
  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)
  const [hasSubmit, setHasSubmit] = useState<boolean>(false)

  const onSubmit = async (data: Form) => {
    if (hasSubmit) {
      return
    }
    setHasSubmit(true)
    alertContext.clearAlert()
    const responseBody = await auth.login(data.username, data.password)

    if (responseBody.status.isSuccess) {
      authContext.setAccessToken(responseBody.data.accessToken)
      navigate("/dashboard")
    } else {
      alertContext.setAlert(responseBody.status.message, "is-danger")
      setHasSubmit(false)
    }
  }

  return (
    <section className="container">
      <div className="columns">
        <div className="column" />
        <article className="column is-6">
          <Box>
            <Form title="Login Form" onSubmit={handleSubmit(onSubmit)}>
              <Alert />
              <FormInput
                name="username"
                label="Username"
                type="text"
                error={errors.username?.message}
                register={register({ required: "Username is mandatory!" })}
              />
              <FormInput
                name="password"
                label="Password"
                type="password"
                error={errors.password?.message}
                register={register({ required: "Password is mandatory!" })}
              />
              <ButtonGroup align="right">
                <Button
                  type="submit"
                  color="primary"
                  label="Login"
                  onClick={handleSubmit(onSubmit)}
                  isLoading={hasSubmit}
                />
              </ButtonGroup>
            </Form>
          </Box>
        </article>
        <div className="column" />
      </div>
    </section>
  )
}

export default IndexPage
