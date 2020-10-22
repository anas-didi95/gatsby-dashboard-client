import { navigate } from "gatsby"
import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import Alert from "../../../../components/Alert"
import Box from "../../../../components/Box"
import Breadcrumb from "../../../../components/Breadcrumb"
import Button from "../../../../components/Button"
import ButtonGroup from "../../../../components/ButtonGroup"
import Form from "../../../../components/Form"
import FormInput from "../../../../components/FormInput"
import Panel from "../../../../components/Panel"
import AppLayout from "../../../../layouts/AppLayout"
import AlertContext from "../../../../utils/contexts/AlertContext"
import AuthContext from "../../../../utils/contexts/AuthContext"

const SecurityUserAddPage: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Security - Add User" location={location} needAuth={true}>
    <section className="section">
      <article className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-10">
            <Breadcrumb paths={["Security", "User"]} />
            <br />
            <Alert />
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
  const authContext = useContext(AuthContext)
  const [isLoading, setLoading] = useState<boolean>(false)
  const alertContext = useContext(AlertContext)

  const onSubmit = async (data: TForm) => {
    try {
      alertContext.clearAlert()
      setLoading(true)
      const response = await fetch(
        `${process.env.GATSBY_API_SECURITY}/api/user`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authContext.getAccessToken()}`,
          },
          body: JSON.stringify({
            username: data.username,
            password: data.password,
            fullName: data.fullName,
            email: data.email,
          }),
        }
      )
      const responseBody = await response.json()
      setLoading(false)

      if (responseBody.status.isSuccess) {
        navigate("/dashboard/security/user", {
          state: {
            alert: {
              message: responseBody.status.message,
              type: "is-success",
            },
          },
        })
      } else {
        console.error("[AddForm] responseBody", responseBody)
        alertContext.setAlert(responseBody.status.message, "is-danger")
      }
    } catch (e) {
      console.error("[AddForm] error", e)
      setLoading(false)
      alertContext.setAlert(
        "Request Error! Please refer console log for info",
        "is-danger"
      )
    }
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
              isLoading={isLoading}
            />
          </ButtonGroup>
        </Form>
      </Box>
    </Panel>
  )
}

export default SecurityUserAddPage
