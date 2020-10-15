import React from "react"

interface IFormInput {
  label: string
  type: "text" | "password"
  error: string | undefined
}

const FormInput: React.FC<IFormInput> = ({ label, type, error }) => (
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

export default FormInput
