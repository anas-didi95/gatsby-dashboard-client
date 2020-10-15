import React from "react"

interface IFormField {
  label: string
  type: "text" | "password"
  error: string | undefined
}

const FormField: React.FC<IFormField> = ({ label, type, error }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input
        className={`input ${!!error ? "is-danger" : "is-link"}`}
        type={type}
      />
    </div>
    {!!error && <p className="help is-danger">{error}</p>}
  </div>
)

export default FormField
