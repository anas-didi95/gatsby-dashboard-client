import React from "react"

interface IBreadcrumb {
  paths: string[]
}
const Breadcrumb: React.FC<IBreadcrumb> = ({ paths }) => (
  <nav className="breadcrumb is-medium" aria-label="breadcrumbs">
    <ul>
      <li>
        <a href="#">&nbsp;</a>
      </li>
      {paths.map((path, i) => (
        <li
          key={`path${i}`}
          className={`${i === paths.length - 1 ? "is-active" : ""}`}
        >
          <a
            href="#"
            className={`has-text-black ${
              i === paths.length - 1 ? "has-text-weight-bold" : ""
            }`}
          >
            {path}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Breadcrumb
