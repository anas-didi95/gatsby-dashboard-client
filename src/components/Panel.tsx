import React, { ReactNode } from "react"

interface IPanel {
  title: string
  children: ReactNode
  color?: "is-link"
}
const Panel: React.FC<IPanel> = ({ title, children, color }) => (
  <div className={`panel ${!!color ? color : ""}`}>
    <p className="panel-heading">{title}</p>
    {children}
  </div>
)

export default Panel
