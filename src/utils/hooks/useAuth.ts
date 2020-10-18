const useAuth = () => {
  const API_URL = `${process.env.GATSBY_API_SECURITY}/api/jwt`
  if (!process.env.GATSBY_API_SECURITY) {
    console.error("[useAuth] GATSBY_API_SECURITY is undefined!")
  }

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
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
      const responseBody = await response.json()
      return responseBody
    } catch (e) {
      console.error(e)
      return {
        status: {
          isSuccess: false,
          message: "ERROR! Login failed. Kindly refer console log for info.",
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
