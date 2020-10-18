import React, { createContext, ReactNode, useState } from "react"

interface IAuthContext {
  isAuth: () => boolean
  getAccessToken: () => string
  setAccessToken: (accessToken: string) => void
  logOut: () => void
}
const AuthContext = createContext<IAuthContext>({
  isAuth: () => false,
  getAccessToken: () => "",
  setAccessToken: (accessToken) => {},
  logOut: () => {},
})

type TAuthData = {
  accessToken: string
}
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<TAuthData>({
    accessToken: "",
  })

  const getAccessToken = () => data.accessToken

  const isAuth = () => !!data.accessToken

  const setAccessToken = (accessToken: string) =>
    setData((prev) => ({ ...prev, accessToken }))

  const logOut = () => setData({ accessToken: "" })

  return (
    <AuthContext.Provider
      value={{ isAuth, getAccessToken, setAccessToken, logOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
export { AuthProvider }
