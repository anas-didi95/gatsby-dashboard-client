import React, { ReactNode } from "react"

interface IForm {
  children: ReactNode
  title?: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<IForm> = ({ children, title, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {!!title && <p className="title has-text-black is-4">{title}</p>}
    {children}
  </form>
)

export default Form
