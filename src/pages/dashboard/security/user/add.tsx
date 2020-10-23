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
import useSecurityService, {
  TUser,
} from "../../../../utils/hooks/useSecurityService"

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
  const [isLoading, setLoading] = useState<boolean>(false)
  const alertContext = useContext(AlertContext)
  const securityService = useSecurityService()

  const onSubmit = async (data: TForm) => {
    try {
      const user: TUser = {
        email: data.email,
        fullName: data.fullName,
        id: "",
        password: data.password,
        username: data.username,
        version: 0,
      }
      alertContext.clearAlert()
      setLoading(true)
      const responseBody = await securityService.addUser(user)
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
        alertContext.setAlert(responseBody.status.message, "is-danger")
      }
    } catch (e) {
      setLoading(false)
      alertContext.setAlert(
        "Add user failed! Please refer console log for info",
        "is-danger"
      )
    }
  }

  const onBack = () => {
    if (confirm("Are you sure to go back? All changes will be discarded.")) {
      navigate("/dashboard/security/user")
    }
  }

  return (
    <Panel title="Add User" color="is-link">
      <Box>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="columns is-multiline is-variable is-4">
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
              type="button"
              label="Back"
              onClick={onBack}
              color="is-danger"
              isInverted={true}
            />
            <Button
              label="Submit"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              color="is-primary"
              isLoading={isLoading}
            />
          </ButtonGroup>
        </Form>
      </Box>
    </Panel>
  )
}

export default SecurityUserAddPage
