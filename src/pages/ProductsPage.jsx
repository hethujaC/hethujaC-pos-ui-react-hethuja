import { useState } from "react";
import ProductFilters from "../components/ProductFilters";
import ProductTable from "../components/ProductTable";
import AddProductModal from "../components/AddProductModal";
export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <ProductFilters
        onAddProduct={() => setModalOpen(true)}
        onRefresh={() => window.location.reload()}
      />
      <ProductTable onEdit={() => setModalOpen(true)} />
      <AddProductModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
