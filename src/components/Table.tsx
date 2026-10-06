import type { TableFormat } from "../types/TableFormat";

function Table(props: TableFormat) {
    return (
        <div className="col-sm-12 kartya mb-3">
          <h2>{props.title}</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                {props.table_head.map((item, index) => (
                    <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.table_body.map((row, index) => (
                <tr key={index}>
                    {row.map((item, i) => (
                        <td key={i}>{item}</td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
}
export default Table