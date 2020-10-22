import React from "react"
import { useForm } from "react-hook-form"
import Box from "../../../../components/Box"
import Breadcrumb from "../../../../components/Breadcrumb"
import Button from "../../../../components/Button"
import ButtonGroup from "../../../../components/ButtonGroup"
import Form from "../../../../components/Form"
import FormInput from "../../../../components/FormInput"
import Panel from "../../../../components/Panel"
import AppLayout from "../../../../layouts/AppLayout"

const SecurityUserAddPage: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Security - Add User" location={location} needAuth={true}>
    <section className="section">
      <article className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-10">
            <Breadcrumb paths={["Security", "User"]} />
            <br />
            <AddForm />
          </div>
          <div className="column" />
        </div>
      </article>
    </section>
  </AppLayout>
)

const AddForm: React.FC<{}> = () => {
  type TForm = {
    username: string
    password: string
    fullName: string
    confirmPassword: string
    email: string
  }
  const { register, errors, handleSubmit, watch } = useForm<TForm>()

  const onSubmit = (data: TForm) => {
    console.log("data", data)
  }

  return (
    <Panel title="Add User" color="is-link">
      <Box>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="columns is-multiline">
            <div className="column is-6">
              <FormInput
                label="Username"
                name="username"
                type="text"
                error={errors.username?.message}
                register={register({ required: "Username is mandatory!" })}
              />
            </div>
            <div className="column is-6">
              <FormInput
                label="Password"
                name="password"
                type="password"
                error={errors.password?.message}
                register={register({ required: "Password is mandatory"! })}
              />
            </div>
            <div className="column is-6">
              <FormInput
                label="Full Name"
                name="fullName"
                type="text"
                error={errors.fullName?.message}
                register={register({ required: "Full Name is mandatory!" })}
              />
            </div>
            <div className="column is-6">
              <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                error={errors.confirmPassword?.message}
                register={register({
                  validate: (value) =>
                    watch().password === value || "Password is not matched!",
                })}
              />
            </div>
            <div className="column is-6">
              <FormInput
                label="Email"
                name="email"
                type="email"
                error={errors.email?.message}
                register={register({ required: "Email is mandatory!" })}
              />
            </div>
          </div>
          <ButtonGroup align="right">
            <Button
              label="Submit"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              color="primary"
            />
          </ButtonGroup>
        </Form>
      </Box>
    </Panel>
  )
}

export default SecurityUserAddPage
