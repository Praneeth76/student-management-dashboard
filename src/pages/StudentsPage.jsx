import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import StudentsTable from "../components/StudentsTable";
import AddStudentModal from "../components/AddStudentModal";

const StudentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="students-page">
      <Sidebar />
      <div className="main-content">
        <StudentsTable />
      </div>
      {isModalOpen && <AddStudentModal onClose={closeModal} />}
    </div>
  );
};

export default StudentsPage;
