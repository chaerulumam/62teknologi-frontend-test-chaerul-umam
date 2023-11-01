import React, { useState } from "react";
import Spinner from "./Spinner";

const Table = (props) => {
  const { column = [], data, loading, className } = props;

  const [filterData, setFilterData] = useState([]);

  const handleFilter = (event) => {
    const { value, name } = event.target;

    if (value) {
      const filter = data.filter((item) =>
        String(item[name]).toLowerCase().includes(value.toLowerCase())
      );
      setFilterData(filter);
    } else {
      setFilterData([]);
    }
  };

  const columns = column.map((item, id) => {
    return <th key={`th-${id}`}>{item.name}</th>;
  });

  const columnFilters = column.map((item, id) => {
    return (
      <th key={`th-filter-${item.id}`} className="px-6 py-3">
        {item.enableFilter && (
          <input
            className="p-2 border rounded focus:outline-none focus:border-blue-300"
            name={item.id}
            onChange={handleFilter}
            placeholder={`Filter ${item.name}`}
          />
        )}
      </th>
    );
  });

  let dataRow = data;
  if (filterData.length > 0) dataRow = filterData;
  let rows =
    dataRow && dataRow.length > 0 ? (
      dataRow.map((row, rowId) => {
        return (
          <tr key={`tr-${rowId}`}>
            {column.map((col, colId) => {
              return (
                <td
                  key={`td-${colId}`}
                  style={{ width: col.width && `${col.width}%` }}
                  className="border p-2"
                >
                  {row[col.id]}
                </td>
              );
            })}
          </tr>
        );
      })
    ) : (
      <tr>
        <td
          colSpan={columns.length}
          className="border p-2 text-center font-sans"
        >
          {loading ? <Spinner loading={loading} /> : "No Data"}
        </td>
      </tr>
    );

  let tableClassName = ["w-full table-auto"];
  if (className) tableClassName.push(className);

  return (
    <table className={tableClassName.join(" ")}>
      <thead>
        <tr>{columns}</tr>
        {rows && rows.length > 0 && <tr>{columnFilters}</tr>}
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
