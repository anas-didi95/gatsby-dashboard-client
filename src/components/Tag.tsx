import React from "react"

interface ITag {
  value: string
  color?: "is-success" | "is-warning" | "is-danger"
}
const Tag: React.FC<ITag> = ({ value, color }) => (
  <span className={`tag ${!!color ? color : ""} is-rounded has-text-weight-semibold`}>
    {value}
  </span>
)

export default Tag
