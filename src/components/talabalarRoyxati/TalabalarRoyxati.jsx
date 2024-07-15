import React, { useState, useEffect } from "react";
import { Search } from "react-bootstrap-icons";
import { getDataRoyxat } from "../db";
import { Modal, Button } from "react-bootstrap";

function TalabalarRoyxati() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const data = getDataRoyxat();
    setStudents(data);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowModal = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.ism.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.otasingIsmi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="card">
        <div
          style={{ background: "blue", color: "white" }}
          className="card-header"
        >
          Talabalar Royxati
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <span className="input-group-text">
              <Search />
            </span>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Familya
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ism
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Otasining Ismi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Father Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Telegram User
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Class
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0
                          ? "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800"
                          : ""
                      } border-b dark:border-gray-700`}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {student.familya}
                      </td>
                      <td className="px-6 py-4">{student.ism}</td>
                      <td className="px-6 py-4 text-red-600">
                        {student.otasingIsmi}
                      </td>
                      <td className="px-6 py-4">{student.phone}</td>
                      <td className="px-6 py-4">{student.fatherPhone}</td>
                      <td className="px-6 py-4">
                        <a
                          href={student.telegramUser}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Telegram
                        </a>
                      </td>
                      <td className="px-6 py-4">{student.class}</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => handleShowModal(student)}
                        >
                          Korish
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-4 text-center">
                      No students found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedStudent && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Student Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Familya:</strong> {selectedStudent.familya}
            </p>
            <p>
              <strong>Ism:</strong> {selectedStudent.ism}
            </p>
            <p>
              <strong>Otasining Ismi:</strong> {selectedStudent.otasingIsmi}
            </p>
            <p>
              <strong>Phone:</strong> {selectedStudent.phone}
            </p>
            <p>
              <strong>Father Phone:</strong> {selectedStudent.fatherPhone}
            </p>
            <p>
              <strong>Telegram User:</strong>{" "}
              <a
                href={selectedStudent.telegramUser}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Telegram
              </a>
            </p>
            <p>
              <strong>Class:</strong> {selectedStudent.class}
            </p>
          </Modal.Body>
          <Modal.Footer>
            
            <button onClick={handleCloseModal} variant="secondary" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default TalabalarRoyxati;
