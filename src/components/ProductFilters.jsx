import React from "react";
import { RotateCw, Search } from "lucide-react";

function ProductFilters({ onAddProduct, onRefresh }) {
  return (
    <div className="bg-white p-4 rounded flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <label className="font-bold text-lg mr-1">Products</label>

        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute top-1/2 -translate-y-1/2 text-green-600 w-4 h-4" />
          <input
            type="text"
            placeholder="Search product by name or id..."
            className="border rounded px-8 py-1 w-full text-sm"
          />
        </div>

        <label className="text-gray-400 font-bold ml-2">Search By</label>
        <div className="relative min-w-[140px]">
          <select className="appearance-none border rounded px-2 py-1 w-full text-sm pr-6">
            <option value=""></option>
            <option value="name">Name</option>
            <option value="id">ID</option>
          </select>

          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            &#8250;
          </span>
        </div>

        <button
          className="bg-green-500 text-white px-4 py-1 rounded ml-auto flex items-center gap-2"
          onClick={onAddProduct}
        >
          <span className="text-lg">+</span> Add Products
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="text-gray-400 font-bold">Category</label>
        <div className="relative min-w-[140px]">
          <select className="appearance-none border rounded px-2 py-1 w-full text-sm pr-6">
            <option value=""></option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            &#8250;
          </span>
        </div>

        <label className="text-gray-400 font-bold">Select Product</label>
        <input
          type="text"
          placeholder="Search product by name or id..."
          className="border rounded px-2 py-1 min-w-[180px] text-sm"
        />

        <label className="text-gray-400 font-bold">Short By</label>
        <div className="relative min-w-[140px]">
          <select className="appearance-none border rounded px-2 py-1 w-full text-sm pr-6">
            <option value=""></option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            &#8250;
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="border border-gray-400 rounded-lg px-4 py-2 flex gap-3 items-center ">
          <label className="text-gray-400 font-bold">Color</label>
          <div className="relative min-w-[120px]">
            <select className="appearance-none border rounded px-2 py-1 w-full text-sm pr-6">
              <option value=""></option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              &#8250;
            </span>
          </div>

          <label className="text-gray-400 font-bold">Thickness</label>
          <div className="relative min-w-[120px]">
            <select className="appearance-none border rounded px-2 py-1 w-full text-sm pr-6">
              <option value=""></option>
              <option value="thin">Thin</option>
              <option value="medium">Medium</option>
              <option value="thick">Thick</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              &#8250;
            </span>
          </div>

          <label className="text-gray-400 font-bold">Diameter</label>
          <div className="relative min-w-[120px]">
            <select className="appearance-none border rounded px-2 py-1 w-full text-sm pr-6">
              <option value=""></option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              &#8250;
            </span>
          </div>
        </div>

        <button
          className="bg-white border border-2 border-green-600 text-green-700 px-4 py-1 rounded flex items-center gap-2 ml-auto"
          onClick={onRefresh}
        >
          <span className="bg-green-600 p-1 rounded-full">
            <RotateCw className="text-white w-4 h-4" />
          </span>
          <div className="text-gray-600 font-bold">Refresh</div>
        </button>
      </div>
    </div>
  );
}

export default ProductFilters;
