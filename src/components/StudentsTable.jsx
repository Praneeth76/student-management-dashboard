import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import AddStudentModal from "./AddStudentModal"; 
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStudents(studentList);
    };

    fetchStudents();
  }, [students]); 

  const handleAddStudent = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Student List</h2>
      <button onClick={handleAddStudent}>Add Student</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Roll Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>{student.rollNumber}</td>
              <td>
                <FaEye /> <FaEdit /> <FaTrashAlt />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && <AddStudentModal onClose={handleCloseModal} />}
    </div>
  );
};

export default StudentsPage;
