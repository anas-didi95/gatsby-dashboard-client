import { navigate } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Alert from "../../../../components/Alert"
import Box from "../../../../components/Box"
import Breadcrumb from "../../../../components/Breadcrumb"
import Button from "../../../../components/Button"
import ButtonGroup from "../../../../components/ButtonGroup"
import Form from "../../../../components/Form"
import FormInput from "../../../../components/FormInput"
import LabelValue from "../../../../components/LabelValue"
import Panel from "../../../../components/Panel"
import AppLayout from "../../../../layouts/AppLayout"
import AlertContext from "../../../../utils/contexts/AlertContext"
import LoadingContext from "../../../../utils/contexts/LoadingContext"
import useSecurityService, {
  TUser,
} from "../../../../utils/hooks/useSecurityService"

const SecurityUserEditPage: React.FC<{ location: any }> = ({ location }) => (
  <AppLayout title="Security - Edit User" location={location} needAuth={true}>
    <section className="section">
      <article className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-10">
            <Breadcrumb paths={["Security", "User"]} />
            <br />
            <Alert />
            <EditForm userId={location.state?.id ?? ""} />
          </div>
          <div className="column" />
        </div>
      </article>
    </section>
  </AppLayout>
)

const EditForm: React.FC<{ userId: string }> = ({ userId }) => {
  type TForm = {
    fullName: string
    email: string
  }
  const { register, errors, handleSubmit, setValue } = useForm<TForm>()
  const [user, setUser] = useState<TUser>({
    email: "-",
    fullName: "-",
    id: "-",
    password: "-",
    username: "-",
    version: -1,
  })
  const securityService = useSecurityService()
  const alertContext = useContext(AlertContext)
  const loadingContext = useContext(LoadingContext)

  useEffect(() => {
    ;(async () => {
      try {
        loadingContext.onLoading()
        const responseBody = await securityService.getUserById(userId)
        setUser({ ...responseBody, password: "****" })
        loadingContext.offLoading()
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  useEffect(() => {
    setValue("fullName", user.fullName)
    setValue("email", user.email)
  }, [user.username])

  const onSubmit = async (data: TForm) => {
    try {
      alertContext.clearAlert()
      loadingContext.onLoading()
      const responseBody = await securityService.updateUser({
        email: data.email,
        fullName: data.fullName,
        id: user.id,
        password: "",
        username: user.username,
        version: user.version,
      })

      if (responseBody.status.isSuccess) {
        navigate("/dashboard/security/user/detail", {
          state: {
            id: userId,
            alert: { message: responseBody.status.message, type: "is-success" },
          },
        })
      }
    } catch (e) {
      loadingContext.offLoading()
      alertContext.setAlert(
        "Update user failed! Please refer console log for info",
        "is-danger"
      )
    }
  }

  const onBack = () => {
    if (confirm("Are you sure to go back? All changes will be discarded.")) {
      navigate("/dashboard/security/user/detail", { state: { id: userId } })
    }
  }

  return (
    <Panel title="Edit User" color="is-link">
      <Box>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="columns is-multiline">
            <div className="column is-6">
              <LabelValue label="Username">{user.username}</LabelValue>
            </div>
            <div className="column is-6">
              <LabelValue label="Password">{user.password}</LabelValue>
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
                label="Email"
                name="email"
                type="text"
                error={errors.email?.message}
                register={register({ required: "Email is mandatory!" })}
              />
            </div>
          </div>
          <hr />
          <ButtonGroup align="right">
            <Button
              label="Back"
              color="is-danger"
              isOutlined
              type="button"
              onClick={onBack}
            />
            <Button
              label="Update"
              color="is-primary"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            />
          </ButtonGroup>
        </Form>
      </Box>
    </Panel>
  )
}

export default SecurityUserEditPage
