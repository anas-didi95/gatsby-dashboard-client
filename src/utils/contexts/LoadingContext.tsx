import React, { createContext, ReactNode, useState } from "react"

interface ILoadingContext {
  isLoading: () => boolean
  onLoading: () => void
  offLoading: () => void
}
const LoadingContext = createContext<ILoadingContext>({
  isLoading: () => false,
  onLoading: () => {},
  offLoading: () => {},
})

const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  type TData = { isLoading: boolean }
  const [data, setData] = useState<TData>({ isLoading: false })

  const isLoading = () => data.isLoading
  const onLoading = () => setData((prev) => ({ ...prev, isLoading: true }))
  const offLoading = () => setData((prev) => ({ ...prev, isLoading: false }))

  return (
    <LoadingContext.Provider value={{ isLoading, onLoading, offLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContext
export { LoadingProvider }
