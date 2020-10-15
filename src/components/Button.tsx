import React from "react"

interface IButton {
  type: "button" | "submit"
  color?: "primary" | "info"
  label: string
  isInverted?: boolean
  isOutlined?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<IButton> = ({
  type,
  color,
  label,
  isInverted,
  isOutlined,
  onClick,
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`button ${!!color ? "is-" + color : ""} ${
      !!isInverted ? "is-inverted" : ""
    } ${!!isOutlined ? "is-outlined" : ""}`}
  >
    {label}
  </button>
)

export default Button
