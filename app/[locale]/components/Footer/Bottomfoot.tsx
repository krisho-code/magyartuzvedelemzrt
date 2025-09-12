import React from "react";

const Bottomfoot = () => {
  return (
    <div className="bottomfoot flex items-center justify-center h-24 md:h-12 border-t-2 border-gray-200">
      <div className="container flex flex-col gap-2 md:flex-row items-center justify-between px-8">
        <p className="text-regular-nomral">
          &copy; 2025 Magyar Tűzvédelem Zrt. | Minden jog fenntartva
        </p>
        <ul className="links flex items-center gap-4">
          <li>
            <a href="#" className="text-regular-nomral">
              GYIK
            </a>
          </li>
          <li>
            <a href="#" className="text-regular-nomral">
              Sütik
            </a>
          </li>
          <li>
            <a href="#" className="text-regular-nomral">
              Egyéb
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottomfoot;
