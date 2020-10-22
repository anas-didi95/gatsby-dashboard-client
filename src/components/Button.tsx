import React from "react"

interface IButton {
  type: "button" | "submit"
  color?: "is-primary" | "is-info" | "is-danger"
  label: string
  isInverted?: boolean
  isOutlined?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isLoading?: boolean
}

const Button: React.FC<IButton> = ({
  type,
  color,
  label,
  isInverted,
  isOutlined,
  onClick,
  isLoading,
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`button ${!!color ? color : ""} ${
      !!isInverted ? "is-inverted" : ""
    } ${!!isOutlined ? "is-outlined" : ""} ${isLoading ? "is-loading" : ""}`}
    disabled={isLoading}
  >
    {label}
  </button>
)

export default Button
