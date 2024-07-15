import React from "react";
import "./dashboart.css";
import { List, PersonCircle } from "react-bootstrap-icons";
import {
  Home,
  SinfQoshish,
  RoyxatdanOtish,
  TalabalarRoyxati,
  Natijalar,
  OylikTolovlar,
} from "../index";

function Dashboart({ onOpen, isMenuOpen, currentPage }) {
  // Function to close menu if it's open
  const handleCloseMenu = () => {
    if (isMenuOpen) {
      onOpen(); // Call onOpen function to close menu
    }
  };

  return (
    <div className={`dashboart ${isMenuOpen ? "" : "w-100"}`}>
      <header className="d-flex justify-content-between align-items-center p-3">
        {!isMenuOpen && <List className="fs-2" onClick={onOpen} />}
        <div className="flex items-center">
          <div className="flex items-center gap-3" onClick={handleCloseMenu}>
            <PersonCircle className="fs-2" />
            <div>
              <strong>asfan.coder@gmail.com</strong> <br />
              <span>Password: asfan2005</span>
            </div>
          </div>
        </div>
      </header>
      {currentPage === "home" && (
        <div>
          <Home />
        </div>
      )}
      {currentPage === "registration" && (
        <div>
          <RoyxatdanOtish />
        </div>
      )}
      {currentPage === "addClass" && (
        <div>
          <SinfQoshish />
        </div>
      )}
      {currentPage === "studentList" && (
        <div>
          <TalabalarRoyxati />
        </div>
      )}
      {currentPage === "results" && (
        <div>
          <Natijalar />
        </div>
      )}
      {currentPage === "monthlyPayments" && (
        <div>
          <OylikTolovlar />
        </div>
      )}
    </div>
  );
}

export default Dashboart;
