import React, { ReactNode } from "react"

interface iButtonGroup {
  children: ReactNode
  align?: "right"
}

const ButtonGroup: React.FC<iButtonGroup> = ({ children, align }) => (
  <div className={`buttons ${!!align ? "is-" + align : ""}`}>
    {children}
  </div>
)

export default ButtonGroup
