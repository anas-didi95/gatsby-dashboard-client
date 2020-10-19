import React, { createContext, ReactNode, useState } from "react"

type TAlertType = "is-success" | "is-danger" | undefined
type TAlert = {
  message: string
  type: TAlertType
}
interface IAlertContext {
  setAlert: (message: string, type: TAlertType) => void
  getAlert: () => TAlert
  hasAlert: () => boolean
  clearAlert: () => void
}
const AlertContext = createContext<IAlertContext>({
  setAlert: (a, b) => {},
  getAlert: () => ({ message: "", type: undefined }),
  hasAlert: () => false,
  clearAlert: () => {},
})

const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<TAlert>({
    message: "",
    type: undefined,
  })

  const setAlert = (message: string, type: TAlertType) =>
    setData({ message, type })
  const getAlert = () => data
  const hasAlert = () => !!data.message && !!data.type
  const clearAlert = () => setData({ message: "", type: undefined })

  return (
    <AlertContext.Provider value={{ setAlert, getAlert, hasAlert, clearAlert }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
export { AlertProvider, TAlertType, TAlert }
