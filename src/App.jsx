import React, { useState } from "react";
import './index.css';
import Filter from "./components/Filter";
import DataTable from "./components/StudentTable";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const studentsData = [
    { lastName: "Litob", firstName: "Gabriel", course: "BSIT", birthdate: "2003-04-22" },
    { lastName: "Stark", firstName: "Tony", course: "BSIS", birthdate: "2000-08-21" },
    { lastName: "Rogers", firstName: "Steve", course: "BSCS", birthdate: "2003-05-10" },
    { lastName: "Wayne", firstName: "Bruce", course: "BSDS", birthdate: "2015-09-25" },
    { lastName: "Jobs", firstName: "Steve", course: "BSDS", birthdate: "2015-09-25" },
  ];

  return (
    <div>
      <h1>Student Data Table</h1>
      <Filter 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        minDate={minDate} 
        setMinDate={setMinDate} 
        maxDate={maxDate} 
        setMaxDate={setMaxDate}
      />
      <DataTable 
        students={studentsData}
        searchTerm={searchTerm} 
        minDate={minDate} 
        maxDate={maxDate} 
      />
    </div>
  );
}

export default App;
