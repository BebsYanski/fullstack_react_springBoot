import React, { useEffect, useState } from "react";
import { fetchEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees()
      .then((response) => {
        setEmployees(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Failed to load employee data. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading employee data...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  const addNewEmployee = () => {
    navigate("/add-employee");
  };

  return (
    <div>
      <h2 className="text-center">List of Employees</h2>
      <button
        type="button"
        class="btn btn-primary mb-2"
        onClick={addNewEmployee}
      >
        Add Employee
      </button>

      {employees.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No employees found.</p>
      )}
    </div>
  );
};

export default ListEmployeeComponent;
