import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import useConstants from "./useConstants"

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
  const constants = useConstants()

  const getUserList = async (): Promise<TUser[]> => {
    try {
      const response = await fetch(`${constants.getApiSecurity()}/graphql`, {
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
      const response = await fetch(`${constants.getApiSecurity()}/api/user`, {
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
      })
      const responseBody = await response.json()
      return responseBody
    } catch (e) {
      console.error("[useSecurityService] addUser failed!", e)
      throw e
    }
  }

  const getUserById = async (userId: string): Promise<TUser> => {
    try {
      const response = await fetch(`${constants.getApiSecurity()}/graphql`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authContext.getAccessToken()}`,
        },
        body: JSON.stringify({
          query: `
            query($id: String!) {
              getUserById(id: $id) {
                id
                username
                fullName
                email
                version
              }
            }
          `,
          variables: {
            id: userId,
          },
        }),
      })
      const responseBody = await response.json()
      return responseBody.data.getUserById
    } catch (e) {
      console.error("[useSecurityService] getUserById failed!", e)
      throw e
    }
  }

  const updateUser = async (
    user: TUser
  ): Promise<{
    status: {
      isSuccess: boolean
      message: string
    }
  }> => {
    try {
      const response = await fetch(
        `${constants.getApiSecurity()}/api/user/${user.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authContext.getAccessToken()}`,
          },
          body: JSON.stringify({
            fullName: user.fullName,
            email: user.email,
            version: user.version,
          }),
        }
      )
      const responseBody = await response.json()
      return responseBody
    } catch (e) {
      console.error("[useSecurityService] updateUser failed!", e)
      throw e
    }
  }

  const deleteUser = async (
    user: TUser
  ): Promise<{
    status: {
      isSuccess: boolean
      message: string
    }
  }> => {
    try {
      const response = await fetch(
        `${constants.getApiSecurity()}/api/user/${user.id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authContext.getAccessToken()}`,
          },
          body: JSON.stringify({
            version: user.version,
          }),
        }
      )
      const responseBody = await response.json()
      return responseBody
    } catch (e) {
      console.error("[useSecurityService] deleteUser failed!", e)
      throw e
    }
  }

  return { getUserList, addUser, getUserById, updateUser, deleteUser }
}

export default useSecurityService
