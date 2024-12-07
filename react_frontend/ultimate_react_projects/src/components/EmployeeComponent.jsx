import React, { useState } from "react";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <h2 className="text-center card-header">Add Employee</h2>
        </div>
      </div>
      <form action=""></form>
    </div>
  );
};

export default EmployeeComponent;
