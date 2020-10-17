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
      const responseData = await response.json()
      return responseData
    } catch (e) {
      console.log(e)
    }
  }

  return { login }
}

export default useAuth
