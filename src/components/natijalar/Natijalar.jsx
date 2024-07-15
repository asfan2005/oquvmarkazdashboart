import React, { useEffect, useState } from "react";
import { getDataRoyxat } from "../db";

function Natijalar() {
  const [students, setStudents] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // Alertni ko'rsatish uchun muhit o'zgaruvchisi

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataRoyxat();
      setStudents(data);
    };

    fetchData();
  }, []);

  const handleSaveResults = () => {
    // Saqlash tugmasi bosilganda
    const updatedStudents = students.map((student) => ({
      ...student,
      natija: student.natija || 0, // Natija mavjud bo'lsa, uni saqlang
    }));

    // Logga chiqaring
    console.log("Saqlash tugmasi bosildi", updatedStudents);

    // Alertni ko'rsatish
    setShowAlert(true);

    // Natijalarni tozalash
    setStudents((prevStudents) =>
      prevStudents.map((student) => ({ ...student, natija: "" }))
    );

    // Bu erda saqlash funktsiyasini chaqirishingiz mumkin
    // saveDataRoyxat(updatedStudents);
  };

  const handleInputChange = (index, value) => {
    const updatedStudents = [...students];
    updatedStudents[index].natija = value; // Qiymatni o'zgartiring
    setStudents(updatedStudents); // State ni yangilang
  };

  return (
    <div>
      {/* Alert oynasi */}
      {showAlert && (
        <div
          className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-4"
          role="alert"
        >
          <p className="font-bold">Informational message</p>
          <p className="text-sm">Saqlash muvaffaqiyatli amalga oshirildi.</p>
        </div>
      )}
      <div className="card">
        <div
          className="card-header"
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Natijalar Sahifasi
        </div>
        <div className="card-body">
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
                    Sinf
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Natija
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.length > 0 ? (
                  students.map((student, index) => (
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
                      <td className="px-6 py-4">{student.class}</td>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          className="form-control w-25"
                          placeholder="Natija"
                          value={student.natija || ""}
                          onChange={(e) =>
                            handleInputChange(index, parseInt(e.target.value))
                          }
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-4 text-center">
                      Talabalar topilmadi
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-text">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 my-4"
            onClick={handleSaveResults}
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
}

export default Natijalar;
