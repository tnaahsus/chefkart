import React from "react";
import Table from "./components/Table";
import './App.css'
import data from "./data.json";

const columns = [
  { label: "First Name", accessor: "first_name", sortable: true },
  { label: "Last Name", accessor: "last_name", sortable: true },
  { label: "Gender", accessor: "gender", sortable: true },
  { label: "Email", accessor: "email", sortable: true },
  { label: "Mobile", accessor: "mobile", sortable: true },
  { label: "Area", accessor: "area", sortable: true },
  { label: "Airport Code", accessor: "airport code", sortable: true },
];

const App = () => {
  return (
      <Table caption="Data" data={data} columns={columns} />
  );
};

export default App;
