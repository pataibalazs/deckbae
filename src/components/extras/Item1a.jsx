"use client";

import { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const product = {
  name: "Santa Cruz",
  basePrice: 29380000, // Base price in HUF
  image: {
    src: "/pictures/houses/santa-cruz/haz.png",
    alt: "Santa Cruz ház",
  },
};

const extras = [
  {
    id: 1,
    name: "Garázs",
    price: 2000000,
    description: "Házcsatlakozású garázs külön bejárattal",
  },
  {
    id: 2,
    name: "Szauna",
    price: 1500000,
    description: "Beépített 4 személyes finn szauna",
  },
  {
    id: 3,
    name: "Napelemes rendszer",
    price: 3500000,
    description: "5kW teljesítményű napelemes rendszer",
  },
  {
    id: 4,
    name: "Jakuzzi",
    price: 2800000,
    description: "6 személyes kültéri jakuzzi",
  },
  {
    id: 5,
    name: "Prémium konyha",
    price: 1200000,
    description:
      "Prémium kivitelű amerikai konyha minőségi háztartási gépekkel",
  },
  {
    id: 6,
    name: "Hőszivattyús fűtés",
    price: 2500000,
    description: "Energiahatékony levegő-víz hőszivattyús fűtési rendszer",
  },
];

function formatPrice(price) {
  return new Intl.NumberFormat("hu-HU").format(price);
}

export default function Item1() {
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [totalPrice, setTotalPrice] = useState(product.basePrice);

  useEffect(() => {
    const extrasTotal = selectedExtras.reduce((sum, extraId) => {
      const extra = extras.find((e) => e.id === extraId);
      return sum + (extra ? extra.price : 0);
    }, 0);

    setTotalPrice(product.basePrice + extrasTotal);
  }, [selectedExtras]);

  const toggleExtra = (extraId) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  const isExtraSelected = (extraId) => {
    return selectedExtras.includes(extraId);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Main image */}
          <div>
            <img
              alt={product.image.alt}
              src={product.image.src}
              className="aspect-video w-full object-cover sm:rounded-lg shadow-md"
            />
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="flex flex-col items-center lg:items-end">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center lg:text-right">
                {product.name}
              </h1>

              <div className="mt-3">
                <div className="flex flex-col items-center lg:items-end">
                  <p className="text-4xl font-bold tracking-tight text-gray-900">
                    Bruttó: {formatPrice(totalPrice)} Ft
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Alap ár: {formatPrice(product.basePrice)} Ft
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Összesen</h3>
                <p className="text-2xl font-bold text-red-600">
                  {formatPrice(totalPrice)} Ft
                </p>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                A végső ár tartalmazza az alapárat és a kiválasztott
                kiegészítőket
              </p>

              <Link
                to="/contact"
                className="mt-6 w-full bg-red-600 py-3 px-4 rounded-md text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 inline-flex items-center justify-center"
              >
                Felkeresem a DECKBAE csapatát
              </Link>
            </div>
          </div>
        </div>

        {/* Extras section - moved to bottom */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h3 className="text-2xl font-medium text-gray-900 text-center mb-8">
            Válasszon kiegészítőket
          </h3>
          <p className="text-lg text-gray-500 text-center mt-1 mb-8">
            Kattintson a kívánt opciókra az árkalkulációhoz
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((extra) => (
              <button
                key={extra.id}
                onClick={() => toggleExtra(extra.id)}
                className={`relative flex flex-col items-start p-5 border rounded-lg ${
                  isExtraSelected(extra.id)
                    ? "border-red-600 bg-red-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex w-full justify-between">
                  <h4 className="text-lg font-medium text-gray-900">
                    {extra.name}
                  </h4>
                  {isExtraSelected(extra.id) ? (
                    <CheckCircleIcon className="h-6 w-6 text-red-600" />
                  ) : (
                    <XCircleIcon className="h-6 w-6 text-gray-400" />
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {extra.description}
                </p>
                <p className="mt-3 font-medium text-gray-900">
                  + {formatPrice(extra.price)} Ft
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
