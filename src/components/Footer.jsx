import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <div className="row mt-5 bg-dark text-white p-2">
      <div className="col">
        <h5>Pokemon League</h5>
        <p>&copy; {fullYear} I wanna be the very best</p>
      </div>
    </div>
  );
};

export default Footer;
