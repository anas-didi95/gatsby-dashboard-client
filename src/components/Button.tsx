import React from "react"

interface IButton {
  type: "button" | "submit"
  color?: "primary"
  label: string
}

const Button: React.FC<IButton> = ({ type, color, label }) => (
  <button type={type} className={`button ${!!color ? "is-" + color : ""}`}>{label}</button>
)

export default Button
