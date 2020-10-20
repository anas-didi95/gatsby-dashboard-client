import React, { ReactNode } from "react"

interface IModal {
  isActive: boolean
  toggleActive: () => void
  title: string
  children: ReactNode
}
const Modal: React.FC<IModal> = ({
  isActive,
  toggleActive,
  title,
  children,
}) => (
  <div className={`modal ${isActive ? "is-active" : ""}`}>
    <div className="modal-background" />
    <div className="modal-card px-2">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button
          className="delete"
          aria-label="close"
          onClick={toggleActive}
        ></button>
      </header>
      <section className="modal-card-body has-text-black">{children}</section>
    </div>
  </div>
)

export default Modal
