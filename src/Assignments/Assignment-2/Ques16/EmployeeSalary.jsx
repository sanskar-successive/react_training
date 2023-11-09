// 16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.

import { useMemo, useState } from "react";
import { employees } from "./employees";

const EmployeeSalary = () => {
  
  const [employeeList, setEmployeeList] = useState(employees);
  const [newEmployee, setNewEmployee] = useState({name:"", salary:""});
  const [salarySum, setSalarySum] = useState(
    employees.reduce((acc, item) => {
      return acc + item.salary;
    }, 0)
  );
  const handleAddNewEmployee = () => {
    if(newEmployee.name.length>0 && newEmployee.salary>0){
      setEmployeeList([...employeeList, newEmployee]);
      setSalarySum(salarySum + parseInt(newEmployee.salary));
    }
    setNewEmployee({ name: "", salary: "" });
  };
  const memoizedEmployeeList = useMemo(() => {
    return employeeList;
  }, [employeeList]);
  const averageSalary = useMemo(() => {
    return salarySum / employeeList.length;
  }, [salarySum, employeeList]);

  return (
    <>
      <h4>Employee Salary</h4>
      <input
        value={newEmployee.name}
        onChange={(event) =>
          setNewEmployee({ ...newEmployee, name: event.target.value })
        }
        type="text"
        placeholder="Employee name"
      />
      <input
        value={newEmployee.salary}
        onChange={(event) =>
          setNewEmployee({ ...newEmployee, salary: event.target.value })
        }
        type="number"
        placeholder="Employee salary"
      />
      <button onClick={handleAddNewEmployee}>Add New Employee</button>
      <ul>
        {memoizedEmployeeList.map((item) => (
          <li>
            {item.name} - {item.salary}
          </li>
        ))}
      </ul>
      <h3>
        {salarySum}, {employeeList.length} - Average Salary : {averageSalary}
      </h3>
    </>
  );
};

export default EmployeeSalary;
