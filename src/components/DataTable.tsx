type Props = {
  headers: string[];
  rows: ReactNode[][];
  caption?: string;
};

export default function DataTable({ headers, rows, caption }: Props) {
  return (
    <div className="data-table">
      {caption && <p className="data-table__caption">{caption}</p>}
      <div className="data-table__scroll">
        <table>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
