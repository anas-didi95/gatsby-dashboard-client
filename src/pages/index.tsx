import React from "react"
import { useForm } from "react-hook-form"
import Box from "../components/Box"
import Button from "../components/Button"
import ButtonGroup from "../components/ButtonGroup"
import Form from "../components/Form"
import FormInput from "../components/FormInput"
import AppLayout from "../layouts/AppLayout"

const IndexPage: React.FC<{}> = () => (
  <AppLayout title="Login">
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

  const handler = {
    onSubmit: (data: Form) => {
      console.log("data:", data)
    },
  }

  return (
    <section className="container">
      <div className="columns">
        <div className="column" />
        <article className="column is-6">
          <Box>
            <Form title="Login Form" onSubmit={handleSubmit(handler.onSubmit)}>
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
                  onClick={handleSubmit(handler.onSubmit)}
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
