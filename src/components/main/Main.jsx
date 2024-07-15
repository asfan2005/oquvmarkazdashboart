import React, { useState } from "react";
import {Menu,Dashboart} from "../index"
import "./main.css"
function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {isMenuOpen && <Menu onClose={handleMenuClose} setCurrentPage={setCurrentPage} />}
      <Dashboart onOpen={handleMenuOpen} isMenuOpen={isMenuOpen} currentPage={currentPage} />
    </div>
  );
}

export default Main;
