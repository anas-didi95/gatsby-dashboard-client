import React from "react"

interface IFormInput {
  label: string
  type: "text" | "password" | "email"
  error: string | undefined
  register?: any
  name: string
}

const FormInput: React.FC<IFormInput> = ({
  label,
  type,
  error,
  register,
  name,
}) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <div className="control">
      <input
        id={name}
        name={name}
        className={`input ${!!error ? "is-danger" : "is-link"}`}
        type={type}
        ref={register}
      />
    </div>
    {!!error && <p className="help is-danger">{error}</p>}
  </div>
)

export default FormInput
