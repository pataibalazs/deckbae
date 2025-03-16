"use client";

import { useState, useEffect } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const product = {
  name: "Santa Cruz",
  basePrice: 29380000, // Base price in HUF
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "/pictures/houses/santa-cruz/haz.png",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      src: "/pictures/houses/santa-cruz/terv.png",
      alt: "Angled front view with bag zipped and handles upright.",
    },
  ],
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
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
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 focus:ring-3 focus:ring-red-500/50 focus:ring-offset-4 focus:outline-hidden"
                  >
                    <span className="sr-only">{image.name}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <img
                        alt=""
                        src={image.src}
                        className="size-full object-cover"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-red-500"
                    />
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels>
              {product.images.map((image) => (
                <TabPanel key={image.id}>
                  <img
                    alt={image.alt}
                    src={image.src}
                    className="aspect-video w-full object-cover sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <div className="flex flex-col">
                <p className="text-3xl tracking-tight text-gray-900">
                  Bruttó: {formatPrice(totalPrice)} Ft
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Alap ár: {formatPrice(product.basePrice)} Ft
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">
                Válasszon kiegészítőket
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                Kattintson a kívánt opciókra az árkalkulációhoz
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {extras.map((extra) => (
                  <button
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`relative flex flex-col items-start p-4 border rounded-lg ${
                      isExtraSelected(extra.id)
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex w-full justify-between">
                      <h4 className="font-medium text-gray-900">
                        {extra.name}
                      </h4>
                      {isExtraSelected(extra.id) ? (
                        <CheckCircleIcon className="h-5 w-5 text-red-600" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {extra.description}
                    </p>
                    <p className="mt-2 font-medium text-gray-900">
                      + {formatPrice(extra.price)} Ft
                    </p>
                  </button>
                ))}
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
      </div>
    </div>
  );
}
