import React, { useState } from "react";

const Advertencia = () => {
  const [cerrar, setCerrar] = useState(true);
  const closeWarning = () => {
    setCerrar(false);
  };
  return (
    <>
      <div
        className={`${
          cerrar ? "" : "hidden"
        } flex justify-center items-center bg-green-200 h-8`}
      >
        <h6 className="flex text-xs">
          Disfruta de los mejores destinos a un muy buen precio
        </h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 h-6 w-6 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={closeWarning}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </>
  );
};
export default Advertencia;
