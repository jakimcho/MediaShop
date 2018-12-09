import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, onOrder, data, onUpdate }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        columns={columns}
        data={data}
        onOrder={onOrder}
        onUpdate={onUpdate}
      />
    </table>
  );
};

export default Table;
