import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"

export type TUser = {
  id: string
  username: string
  fullName: string
  version: number
  password: string
  email: string
}

const useSecurityService = () => {
  const authContext = useContext(AuthContext)
  const API_SECURITY = process.env.GATSBY_API_SECURITY
  if (!process.env.GATSBY_API_SECURITY) {
    console.error("[useSecurityService] GATSBY_API_SECURITY is undefined!")
  }

  const getUserList = async (): Promise<TUser[]> => {
    try {
      const response = await fetch(`${API_SECURITY}/graphql`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authContext.getAccessToken()}`,
        },
        body: JSON.stringify({
          query: `
              query {
                getUserList {
                  id
                  username
                  fullName
                  version
                }
              }
            `,
          variables: null,
        }),
      })
      const responseBody = await response.json()
      return responseBody.data.getUserList
    } catch (e) {
      console.error("[useSecurityService] getUserList failed!", e)
      throw e
    }
  }

  const addUser = async (
    user: TUser
  ): Promise<{
    status: {
      isSuccess: boolean
      message: string
    }
  }> => {
    try {
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
            username: user.username,
            password: user.password,
            fullName: user.fullName,
            email: user.email,
          }),
        }
      )
      const responseBody = await response.json()
      return responseBody
    } catch (e) {
      console.error("[useSecurityService] addUser failed!", e)
      throw e
    }
  }

  return { getUserList, addUser }
}

export default useSecurityService
