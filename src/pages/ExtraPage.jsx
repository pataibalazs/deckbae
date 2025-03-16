import React from "react";
import Item1 from "../components/extras/Item1";
import Item2 from "../components/items/Item2";
import Item3 from "../components/items/Item3";
import Item4 from "../components/items/Item4";
import Item5 from "../components/items/Item5";

const ExtraPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-11/12 mt-10">
        <div className="bg-white">
          <div className="mx-auto max-w-5xl lg:text-center">
            <p className="mt-2 text-md font-bold tracking-tight text-red-600">
              Áraink
            </p>
            <p className="mt-2 mb-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900">
              Készen állsz az új otthonodra?
            </p>
          </div>
          <div className="flex flex-col mx-auto max-w-7xl">
            <Item1 />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExtraPage;
