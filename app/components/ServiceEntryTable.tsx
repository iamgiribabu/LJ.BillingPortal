'use client'
import { useEffect, useState } from "react";
// import { Trash2, Edit } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const ServiceEntryTable = () => {
  const dispatch = useDispatch();
    interface Service {
        id: number;
        description: string;
        hsnSac: string;
        qty: number | string;
        rate: number | string;
        taxableValue: number | string;
      }
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState({
    description: "",
    hsnSac: "",
    qty: "",
    rate: "",
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

  const handleAddService = () => {
    // if (!form.description || !form.hsnSac || !form.qty || !form.rate) return;
    // const taxableValue = !form.qty ? 1 * parseFloat(form.rate) : (parseFloat(form.qty) * parseFloat((form.rate))).toFixed(2);
    // setServices([...services, { id: services.length + 1, description: form.description, hsnSac: form.hsnSac, rate: parseFloat(form.rate).toFixed(2), qty: form.qty, taxableValue }]);
    const taxableValue = !form.qty
    ? Math.round(1 * parseFloat(form.rate))
    : Math.round(parseFloat(form.qty) * parseFloat(form.rate));
  setServices([
    ...services,
    {
      id: services.length + 1,
      description: form.description,
      hsnSac: form.hsnSac,
      rate: Math.round(parseFloat(form.rate)), // Round the rate
      qty: form.qty,
      taxableValue, // Already rounded
    }])
    setForm({ description: "", hsnSac: "", qty: "", rate: "" });
  };

  const handleDelete = (id : number) => {
    // setServices(services.filter((service) => service.id !== id));
    const updatedServices = services.filter((service) => service.id !== id).map((service, index) => ({
      ...service,
      id: index + 1,
    }));
    setServices(updatedServices);
  };
useEffect(() =>{
  if (services.length > 0) {
    dispatch({type: "ADD_SERVICE", payload: services})

  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [services])
  return (
    <div className=" p-6 w-full max-w-full text-black mx-auto">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Service Entry</h2>
      <div className="grid grid-cols-5 gap-4 mb-4">
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border px-2 py-1 rounded w-full text-black"
        />
        <input
          type="number"
          name="hsnSac"
          maxLength={10}
          value={form.hsnSac}
          onChange={handleChange}
          placeholder="HSN/SAC"
          className="border px-2 py-1 rounded w-full text-black"
        />
        <input
          type="text"
          name="qty"
          value={form.qty}
          onChange={handleChange}
          placeholder="Qty in Shift"
          className="border px-2 py-1 rounded w-full text-black"
        />
        <input
          type="number"
          name="rate"
          value={form.rate}
          onChange={handleChange}
          placeholder="Rate (₹)"
          className="border px-2 py-1 rounded w-full text-black"
        />
        <button
          onClick={handleAddService}
          className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
        >
          Add
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 py-1">Sr No</th>
            <th className="border border-gray-300 px-2 py-1">Description</th>
            <th className="border border-gray-300 px-2 py-1">HSN/SAC</th>
            <th className="border border-gray-300 px-2 py-1">Qty in Shift</th>
            <th className="border border-gray-300 px-2 py-1">Rate (₹)</th>
            <th className="border border-gray-300 px-2 py-1">Taxable Value (₹)</th>
            <th className="border border-gray-300 px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="text-center">
              <td className="border border-gray-300 px-2 py-1">{service.id}</td>
              <td className="border border-gray-300 px-2 py-1 text-left">{service.description}</td>
              <td className="border border-gray-300 px-2 py-1">{service.hsnSac}</td>
              <td className="border border-gray-300 px-2 py-1">{service.qty}</td>
              <td className="border border-gray-300 px-2 py-1">₹{service.rate}</td>
              <td className="border border-gray-300 px-2 py-1">₹{Number(service.taxableValue).toFixed(2)}</td>
              <td className="border border-gray-300 px-2 py-1">
                <div className="flex justify-center space-x-4">
                  <button onClick={() => {}} className="text-blue-500">
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                  </button>
                  <button onClick={() => handleDelete(service.id)} className="text-red-500">
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </button>
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceEntryTable;
  