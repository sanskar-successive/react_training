// 15.Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.

import { useMemo, useState } from "react";
import { studentArray } from "./studentArray";

const StudentList = () => {
  
  const [studentList, setStudentList] = useState(studentArray);
  const [newStudent, setNewStudent] = useState("");
  const handleAddNewStudent = () => {
    if(newStudent.length>0) setStudentList([...studentList, newStudent]);
    setNewStudent("");
  };
  const memoizedStudentList = useMemo(() => {
    return studentList;
  }, [studentList]);

  return (
    <>
      <div>
        <h3>Students List</h3>
        <input
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          type="text"
          placeholder="Add new student"
        />
        <button onClick={handleAddNewStudent}>Add new student</button>
        <ul>
          {memoizedStudentList.map((student) => (
            <li>{student}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StudentList;
