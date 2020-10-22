import React, { ReactNode } from "react"

interface ITable {
  headers: string[]
  widths: number[]
  children?: ReactNode
}
const Table: React.FC<ITable> = ({ headers, widths, children }) => (
  <div className="table-container">
    <table className="table is-striped is-bordered is-fullwidth is-hoverable">
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={header} style={{ width: `${widths[i]}%` }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!!children ? (
          children
        ) : (
          <tr>
            <td className="has-text-centered" colSpan={headers.length}>
              No record found
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr className="has-background-light">
          <td colSpan={headers.length} />
        </tr>
      </tfoot>
    </table>
  </div>
)

export default Table
