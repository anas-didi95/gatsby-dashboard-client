import React from "react"

interface IButton {
  type: "button" | "submit"
  color?: "primary" | "info"
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
      className={`button ${!!color ? "is-" + color : ""} ${!!isInverted ? "is-inverted" : ""
        } ${!!isOutlined ? "is-outlined" : ""} ${isLoading ? "is-loading" : ""}`}
      disabled={isLoading}
    >
      {label}
    </button>
  )

export default Button
