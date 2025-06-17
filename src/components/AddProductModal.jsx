import React, { useState } from "react";
import { RotateCw } from "lucide-react";

function AddProductModal({ open, onClose }) {
  const [taxes, setTaxes] = useState({
    GST: true,
    HST: true,
    VAT: true,
    Tax: true,
  });

  const handleTaxChange = (tax) => {
    setTaxes((prev) => ({ ...prev, [tax]: !prev[tax] }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-lg w-[800px] p-6 border-2 border-green-400 relative">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">Add New Product</h2>
          <button
            type="button"
            className="bg-orange-400 text-white px-4 py-1 rounded-md font-semibold"
          >
            Scan Barcode
          </button>
        </div>

        <form className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-400 font-bold text-sm mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input className="border rounded w-full py-1 px-2 pr-6 text-sm" />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  &#8250;
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 font-bold text-sm mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input className="border rounded w-full py-1 px-2 pr-6 text-sm" />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  &#8250;
                </span>
              </div>
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-gray-400 font-bold text-sm mb-1">
                Product Descriptions
              </label>
              <input className="border rounded w-full py-1 px-2 text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <label className="text-gray-400 font-bold text-sm mb-1">
                  Re Order Level (Stock) <span className="text-red-500">*</span>
                </label>
                <input className="border rounded w-full py-1 px-2 text-sm" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400 font-bold text-sm mb-1">
                  Expire Alert Days <span className="text-red-500">*</span>
                </label>
                <input className="border rounded w-full py-1 px-2 text-sm" />
              </div>
            </div>
          </div>

          <div className="flex gap-6 items-center mt-1">
            {["GST", "HST", "VAT", "Tax"].map((tax) => (
              <label
                key={tax}
                className="flex items-center text-gray-400 font-bold text-base gap-2"
              >
                {tax}
                <input
                  type="checkbox"
                  checked={taxes[tax]}
                  onChange={() => handleTaxChange(tax)}
                  className="accent-white w-5 h-5"
                />
              </label>
            ))}
          </div>
          <div className="border border-gray-400 border-2 py-2 px-4">
            <div className="flex gap-4 items-end">
              <div className="flex flex-col">
                <label className="text-gray-400 font-bold text-sm mb-1">
                  Image upload
                </label>
                <input
                  type="file"
                  className="hidden"
                  id="upload"
                  onChange={(e) => console.log(e.target.files)}
                />
                <label
                  htmlFor="upload"
                  className="cursor-pointer flex items-center border rounded bg-gray-100 px-3 py-2 w-20 h-8 justify-center"
                >
                  <svg></svg>
                </label>
              </div>
              <div className="flex items-center mt-6">
                <span className="text-gray-400 font-bold text-sm">
                  Use Scale
                </span>
                <input
                  type="checkbox"
                  className="accent-green-500 w-5 h-5 mr-2"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-gray-400 font-bold text-sm mb-1">
                  Product Code
                </label>
                <input className="border rounded w-full py-1 px-2 text-sm" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col flex-1">
                <label className="text-gray-400 font-bold text-sm mb-1">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input className="border rounded w-full py-1 px-2 text-sm" />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-gray-400 font-bold text-sm mb-1">
                  Unit of Scale <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    className="border rounded w-full py-1 px-2 text-sm"
                    readOnly
                    value="kg"
                  />
                  <span className="font-semibold text-sm"></span>
                </div>
              </div>
            </div>

            <div className="border rounded mt-2 p-2">
              <div className="font-bold text-sm mb-2">Product Location</div>
              <div className="grid grid-cols-4 gap-2">
                <div className="flex flex-col">
                  <label className="text-gray-400 font-bold text-sm mb-1">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input className="border rounded w-full py-1 px-2 text-sm" />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-400 font-bold text-sm mb-1">
                    Rack Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input className="border rounded w-full py-1 px-2 pr-6 text-sm" />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                      &#8250;
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-400 font-bold text-sm mb-1">
                    Rack Colum <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input className="border rounded w-full py-1 px-2 pr-6 text-sm" />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                      &#8250;
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-400 font-bold text-sm mb-1">
                    Rack Row <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input className="border rounded w-full py-1 px-2 pr-6 text-sm" />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                      &#8250;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-white text-green-600 rounded-full w-10 h-10 flex items-center justify-center text-2xl"
              title="Save"
            >
              <span className="bg-green-600 p-1 rounded-full">
                <RotateCw className="text-white w-4 h-4" />
              </span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-white border border-red-600 text-red-600 px-4 py-1 rounded-md font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-1 rounded-md font-semibold"
            >
              Add Product
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default AddProductModal;