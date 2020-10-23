import useConstants from "./useConstants"

const useAuth = () => {
  const constants = useConstants()

  const login = async (
    username: string,
    password: string
  ): Promise<{
    status: {
      isSuccess: boolean
      message: string
    }
    data: {
      accessToken: string
    }
  }> => {
    try {
      const response = await fetch(
        `${constants.getApiSecurity()}/api/jwt/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      )
      const responseBody = await response.json()
      return responseBody
    } catch (e) {
      console.error(e)
      return {
        status: {
          isSuccess: false,
          message: "ERROR! Login failed. Please refer console log for info.",
        },
        data: {
          accessToken: "",
        },
      }
    }
  }

  return { login }
}

export default useAuth
