import React, { useState } from "react";
import { useForm } from "react-hook-form";

function SinfQoshish() {
  const { register, handleSubmit, reset } = useForm();
  const [sinfList, setSinfList] = useState([]);

  const onSubmit = (data) => {
    // Yangi sinf obyekti tuzish
    const newSinf = {
      sinfName: data.sinfName,
      oqituvchiIsmi: data.oqituvchiIsmi,
      talabalarSoni: data.talabalarSoni,
    };

    // Sinf listiga yangi sinfni qo'shish
    setSinfList([...sinfList, newSinf]);

    // Formani tozalash
    reset();
  };

  return (
    <div className="card">
      <div
        style={{ background: "blue", color: "white", padding: "10px" }}
        className="card-header"
      >
        Sinf Qo'shish
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body flex flex-wrap"
      >
        <div className="w-full md:w-1/4 mb-2 md:mb-0">
          <input
            type="text"
            className="form-control w-full"
            placeholder="Sinf nomi"
            {...register("sinfName", { required: true })}
          />
        </div>
        <div className="w-full md:w-1/4 mb-2 md:mb-0 mx-2">
          <input
            type="text"
            className="form-control w-full"
            placeholder="O'qituvchi ismi"
            {...register("oqituvchiIsmi", { required: true })}
          />
        </div>
        <div className="w-full md:w-1/4 mb-2 md:mb-0">
          <input
            type="number"
            className="form-control w-full"
            placeholder="Talabalar soni"
            {...register("talabalarSoni", { required: true })}
          />
        </div>
        <div className="w-full md:w-1/12 mx-2">
          <button type="submit" className="btn btn-info w-full">
            Saqlash
          </button>
        </div>
      </form>

      {/* Sinflar ro'yxati */}
      <div className="card-body">
        <h2>Sinflar Ro'yxati</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Sinf nomi</th>
              <th>O'qituvchi ismi</th>
              <th>Talabalar soni</th>
            </tr>
          </thead>
          <tbody>
            {sinfList.map((sinf, index) => (
              <tr key={index}>
                <td>{sinf.sinfName}</td>
                <td>{sinf.oqituvchiIsmi}</td>
                <td>{sinf.talabalarSoni}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SinfQoshish;
