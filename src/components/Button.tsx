import React, { useContext } from "react"
import LoadingContext from "../utils/contexts/LoadingContext"

interface IButton {
  type: "button" | "submit"
  color?: "is-primary" | "is-info" | "is-danger"
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
}) => {
  const loadingContext = useContext(LoadingContext)

  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${!!color ? color : ""} ${
        !!isInverted ? "is-inverted" : ""
      } ${!!isOutlined ? "is-outlined" : ""} ${
        loadingContext.isLoading() ? "is-loading" : ""
      }`}
      disabled={loadingContext.isLoading()}
    >
      {label}
    </button>
  )
}

export default Button
