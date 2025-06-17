import StatusBadge from "./StatusBadge";
import sandalImage from '../assets/sandal.png';
import { Edit } from "lucide-react";
const mockData = [
  {
    id: 1,
    name: "Green Sandal",
    code: "-",
    barcode: "bt0055478",
    category: "Level 1 Cat",
    tax: "CST / HST",
    price: "$125.25",
    store: { status: "In Stock", count: 200 },
    warehouse: { status: "In Stock", count: 350 },
  },
  {
    id: 2,
    name: "Green Sandal",
    code: "-",
    barcode: "bt0055478",
    category: "Level 1 Cat",
    tax: "CST / HST",
    price: "$125.25",
    store: { status: "In Stock", count: 200 },
    warehouse: { status: "In Stock", count: 350 },
  },
  {
    id: 3,
    name: "Green Sandal",
    code: "-",
    barcode: "bt0055478",
    category: "Level 1 Cat",
    tax: "HST",
    price: "$125.25",
    store: { status: "In Stock", count: 25 },
    warehouse: { status: "In Stock", count: 350 },
  },
  {
    id: 4,
    name: "Green Sandal",
    code: "-",
    barcode: "bt0055478",
    category: "Level 1 Cat",
    tax: "CST / HST",
    price: "$125.25",
    store: { status: "In Stock", count: 200 },
    warehouse: { status: "In Stock", count: 20 },
  },
  {
    id: 5,
    name: "Green Sandal",
    code: "1102",
    barcode: "-",
    category: "Level 1 Cat",
    tax: "CST",
    price: "$125.25",
    store: { status: "In Stock", count: 200 },
    warehouse: { status: "In Stock", count: 500 },
  },
  {
    id: 6,
    name: "Green Sandal",
    code: "1102",
    barcode: "bt0055478",
    category: "Level 1 Cat",
    tax: "CST",
    price: "$125.25",
    store: { status: "Not Available", count: 0 },
    warehouse: { status: "In Stock", count: 350 },
  },
  {
    id: 7,
    name: "Green Sandal",
    code: "-",
    barcode: "bt0055478",
    category: "Level 1 Cat",
    tax: "Not Applied",
    price: "$125.25",
    store: { status: "In Stock", count: 200 },
    warehouse: { status: "In Stock", count: 350 },
  },
  {
    id: 8,
    name: "Green Sandal",
    code: "bt0055478",
    barcode: "bt0055478",
    category: "Level 1 Cat",
    tax: "Not Applied",
    price: "$125.25",
    store: { status: "Not Available", count: 200 },
    warehouse: { status: "Not Available", count: 350 },
  },
  {
    id: 9,
    name: "Green Sandal",
    code: "-",
    barcode: "bt0055478",
    category: "Level 1 Cat",
    tax: "Not Applied",
    price: "$125.25",
    store: { status: "In Stock", count: 200 },
    warehouse: { status: "In Stock", count: 350 },
  },
  {
    id: 10,
    name: "Green Sandal",
    code: "-",
    barcode: "bt0055478",
    category: "Level 1 Cat",
    tax: "CST / HST / VAT",
    price: "$125.25",
    store: { status: "In Stock", count: 200 },
    warehouse: { status: "In Stock", count: 350 },
  },
];
function ProductTable({ onEdit }) {
  return (
    <table className="w-full bg-white rounded shadow ">
      <thead>
        <tr className="bg-white text-left ">
          <th className="p-2">Products</th>
          <th className="p-2">Product code</th>
          <th className="p-2">Barcode</th>
          <th className="p-2">Category</th>
          <th className="p-2">Tax</th>
          <th className="p-2">Price</th>
          <th className="p-2">Store</th>
          <th className="p-2">Warehouse</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((row, idx) => (
          <tr key={row.id || idx} className={row.id === 3 ? "bg-green-50" : ""}>
            <td className="p-2 flex items-center gap-2 ">
              <img
                src={sandalImage}
                alt={row.name}
                className="w-6 h-6 rounded-full"
              />
              <span>{row.name}</span>
            </td>
            <td className="p-2">{row.code}</td>
            <td className="p-2">{row.barcode}</td>
            <td className="p-2">{row.category}</td>
            <td className="p-2">{row.tax}</td>
            <td className="p-2">{row.price}</td>
            <td className="p-2">
              <StatusBadge status={row.store.status} count={row.store.count} />
            </td>
            <td className="p-2">
              <StatusBadge
                status={row.warehouse.status}
                count={row.warehouse.count}
              />
            </td>
            <td className="p-2">
              <button onClick={() => onEdit(row)}>
                <Edit className="text-green-500 w-8 h-8 hover:scale-105 transition" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
