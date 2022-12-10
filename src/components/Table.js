import { useState } from "react";
import { useSortableTable } from "../useSortableTable";

const Table = ({ caption, data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <>
      <table className="table">
        <caption>{caption}</caption>
        <thead>
          <tr>
            {columns.map(({ label, accessor, sortable }) => {
              const cl = sortable
                ? sortField === accessor && order === "asc"
                  ? "up"
                  : sortField === accessor && order === "desc"
                  ? "down"
                  : "default"
                : "";
              return (
                <th
                  key={accessor}
                  onClick={
                    sortable ? () => handleSortingChange(accessor) : null
                  }
                  className={cl}
                >
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <tr key={data.id}>
                {columns.map(({ accessor }) => {
                  const tData = data[accessor] ? data[accessor] : "——";
                  return <td key={accessor}>{tData}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
