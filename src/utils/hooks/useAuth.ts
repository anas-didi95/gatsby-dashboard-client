const useAuth = () => {
  const API_URL = `${process.env.GATSBY_API_SECURITY}/api/jwt`
  if (!process.env.GATSBY_API_SECURITY) {
    console.error("[useAuth] GATSBY_API_SECURITY is undefined!")
  }

  const login = async (username: string, password: string) => {
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

      return {
        status: {
          isSuccess: responseBody.status.isSuccess ?? false,
          message: responseBody.status.message ?? "",
        },
        data: {
          accessToken: responseBody.data.accessToken ?? "",
        },
      }
    } catch (e) {
      console.log(e)
    }
  }

  return { login }
}

export default useAuth
