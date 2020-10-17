import { prefetchPathname } from "gatsby"
import React, { createContext, ReactNode, useState } from "react"

interface IAuthContext {
  isAuth: () => boolean
  getAccessToken: () => string
  setAccessToken: (accessToken: string) => void
}
const AuthContext = createContext<IAuthContext>({
  isAuth: () => false,
  getAccessToken: () => "",
  setAccessToken: (accessToken) => {},
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

  return (
    <AuthContext.Provider value={{ isAuth, getAccessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
export { AuthProvider }
