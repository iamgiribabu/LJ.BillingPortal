'use client'
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Invoice } from "@/store/reducers/allInvoiceReducer";
import Navbar from "./components/navbar";
export default function Home() {

  const allInvoices: Invoice[] = useSelector((state: RootState) => state.allInvoices).filter((invoice): invoice is Invoice => typeof invoice !== 'string');
  console.log(allInvoices);
  
  return (
    <div className="bg-[#F4F4F4] min-h-screen flex flex-col item-center m-0 p-0 text-black" >  
    <Navbar />
     <h1 className="text-center text-5xl font-extrabold mt-8 text-[#4F3D88]" style={{ fontFamily: "Cinzel, serif" }}>LJ Lifters Billing Portal Dashboard</h1>
     <div className="p-4 flex justify-between items-start"> 
      <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-1">Invoice ID</th>
                  <th className="border border-gray-300 px-2 py-1">Invoice Date</th>
                  <th className="border border-gray-300 px-2 py-1">Client</th>
                  <th className="border border-gray-300 px-2 py-1">View Invoice</th>
                  <th className="border border-gray-300 px-2 py-1">Download Invoice</th>
                 

                </tr>
              </thead>
              <tbody>
                {allInvoices.map((invoice) => (
                  <tr key={invoice.id} className="text-center">
                    <td className="border border-gray-300 px-2 py-1">{invoice.id}</td>
                    <td className="border border-gray-300 px-2 py-1 ">{invoice.invoiceDetails.invoiceDate}</td>
                    <td className="border border-gray-300 px-2 py-1 text-left">{invoice.address.billedToName}</td>
                    <td className="border border-gray-300 px-2 py-1"><a href={`/invoice/${invoice.id}`}>View Invoice</a></td>
                    <td className="border border-gray-300 px-2 py-1"><a href={`/invoice/${invoice.id}/download`}>Download Invoice</a></td>
                  
                    
                    
                  </tr>
                ))}
              </tbody>
            </table>
     </div>
    </div>
  );
}
