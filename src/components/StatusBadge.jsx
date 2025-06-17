export default function StatusBadge({ status, count }) {
  let color = "bg-green-100 text-green-700 border-green-400";
  if (status === "Not Available")
    color = "bg-red-100 text-red-600 border-red-400";
  else if (count <= 25)
    color = "bg-orange-100 text-orange-600 border-orange-400";
  return (
    <span
      className={`border px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}
    >
      {status === "Not Available" ? status : `${count || 0} In Stock`}
    </span>
  );
}
