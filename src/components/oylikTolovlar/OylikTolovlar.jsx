import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Search } from "react-bootstrap-icons";
function OylikTolovlar() {
  const { register, handleSubmit, reset } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const openHistoryModal = (student) => {
    setSelectedStudent(student);
    setShowHistoryModal(true);
  };
  const closeHistoryModal = () => setShowHistoryModal(false);

  const mySubmit = (data) => {
    data.date = new Date().toISOString().split("T")[0]; // Add current date
    const updatedStudents = [...students];
    const studentIndex = updatedStudents.findIndex(
      (s) => s.familya === data.familya && s.ism === data.ism
    );
    if (studentIndex !== -1) {
      updatedStudents[studentIndex].history.push(data);
    } else {
      data.history = [data];
      updatedStudents.push(data);
    }
    setStudents(updatedStudents);
    closeModal();
    reset();
  };

  return (
    <div className="card">
      <div
        style={{
          background: "blue",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="card-header"
      >
        <span className="my-2">Oylik Tolovlar</span>
        <button
          onClick={openModal}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Tolov Qilish
        </button>
      </div>

      {showModal && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-gray-800 bg-opacity-50"
        >
          <div className="relative bg-white rounded-lg shadow-lg w-1/2">
            <div className="p-4">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-900">
                  Tolov Malumotlari
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <form onSubmit={handleSubmit(mySubmit)}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Familya"
                    {...register("familya")}
                  />
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Ismingiz"
                    {...register("ism")}
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Pul Miqdori"
                    {...register("price")}
                  />
                  <select
                    {...register("type")}
                    className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled selected>
                      Pul turi
                    </option>
                    <option value="Naqd">Naqd</option>
                    <option value="Plastig">Plastig</option>
                  </select>
                  <select
                    {...register("moon")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled selected>
                      Qaysi oy Tanlansin
                    </option>
                    <option value="Yanvar">Yanvar</option>
                    <option value="Fevral">Fevral</option>
                    <option value="Mart">Mart</option>
                    <option value="Aprel">Aprel</option>
                    <option value="May">May</option>
                    <option value="Iyun">Iyun</option>
                    <option value="Iyul">Iyul</option>
                    <option value="Avgust">Avgust</option>
                    <option value="Sentabr">Sentabr</option>
                    <option value="Oktabr">Oktabr</option>
                    <option value="Noyabr">Noyabr</option>
                    <option value="Dekabr">Dekabr</option>
                  </select>
                  <div className="flex items-center justify-end p-4 border-t">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-danger mx-2">
                      Saqlash
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {showHistoryModal && selectedStudent && (
        <div
          id="history-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-gray-800 bg-opacity-50"
        >
          <div className="relative bg-white rounded-lg shadow-lg w-1/2">
            <div className="p-4">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-900">
                  Tolovlar Tarixi - {selectedStudent.familya}{" "}
                  {selectedStudent.ism}
                </h3>
                <button
                  type="button"
                  onClick={closeHistoryModal}
                  className="text-gray-400 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
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
                        Pul Miqdori
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pul Turi
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Oy
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Sana
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedStudent.history.map((payment, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0
                            ? "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800"
                            : ""
                        } border-b dark:border-gray-700`}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {payment.familya}
                        </td>
                        <td className="px-6 py-4">{payment.ism}</td>
                        <td className="px-6 py-4">{payment.price}</td>
                        <td className="px-6 py-4">{payment.type}</td>
                        <td className="px-6 py-4">{payment.moon}</td>
                        <td className="px-6 py-4">{payment.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="card-body">
        <h5 className="card-title">Tolovlar Ro'yhati</h5>
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
                Pul Miqdori
              </th>
              <th scope="col" className="px-6 py-3">
                Pul Turi
              </th>
              <th scope="col" className="px-6 py-3">
                Oy
              </th>
              <th scope="col" className="px-6 py-3">
                Sana
              </th>
              <th scope="col" className="px-6 py-3">
                Korish
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
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
                <td className="px-6 py-4">{student.price}</td>
                <td className="px-6 py-4">{student.type}</td>
                <td className="px-6 py-4">{student.moon}</td>
                <td className="px-6 py-4">{student.date}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openHistoryModal(student)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Tolovlar Tarixi
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OylikTolovlar;
