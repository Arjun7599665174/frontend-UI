const Table = ({ columns, data, actions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[850px] text-sm">
        <thead>
          <tr className="text-left text-slate-500 border-b">
            {columns.map((column) => (
              <th key={column.label} className="py-3 px-3">
                {column.label}
              </th>
            ))}

            {actions && (
              <th className="py-3 px-3 text-right">Actions</th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <tr key={row.id} className="border-b last:border-b-0">
                {columns.map((column) => (
                  <td key={column.label} className="py-4 px-3">
                    {column.render(row)}
                  </td>
                ))}

                {actions && (
                  <td className="py-4 px-3">
                    <div className="flex justify-end gap-3">
                      {actions(row)}
                    </div>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="text-center py-8 text-slate-400"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;