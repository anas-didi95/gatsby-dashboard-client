import React, { ReactNode } from "react"

interface IForm {
  children: ReactNode
  title?: string
}

const Form: React.FC<IForm> = ({ children, title }) => (
  <form>
    {!!title && <p className="title has-text-black is-4">{title}</p>}
    {children}
  </form>
)

export default Form
