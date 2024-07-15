import React from "react";
import "./menu.css";
import {
  XCircle,
  House,
  PersonPlus,
  ClipboardCheck,
  List,
  CashStack,
} from "react-bootstrap-icons";

function Menu({ onClose, setCurrentPage }) {
  return (
    <div className="menu">
      <XCircle className="menu_icons" onClick={onClose} />

      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-5rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
            Jumayev Web site
          </h5>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            onClick={() => setCurrentPage("home")}
          >
            <div className="grid place-items-center mr-4">
              <House className="h-5 w-5" />
            </div>
            Home
          </div>
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            onClick={() => setCurrentPage("registration")}
          >
            <div className="grid place-items-center mr-4">
              <PersonPlus className="h-5 w-5" />
            </div>
            Ro'yxatdan Otish
          </div>
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            onClick={() => setCurrentPage("addClass")}
          >
            <div className="grid place-items-center mr-4">
              <ClipboardCheck className="h-5 w-5" />
            </div>
            Sinf qo'shish
          </div>
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            onClick={() => setCurrentPage("studentList")}
          >
            <div className="grid place-items-center mr-4">
              <List className="h-5 w-5" />
            </div>
            Talabalar Ro'yxati
          </div>
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            onClick={() => setCurrentPage("results")}
          >
            <div className="grid place-items-center mr-4">
              <House className="h-5 w-5" />
            </div>
            Natijalar
          </div>
          <div
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            onClick={() => setCurrentPage("monthlyPayments")}
          >
            <div className="grid place-items-center mr-4">
              <CashStack className="h-5 w-5" />
            </div>
            Oylik Tolovlar
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
