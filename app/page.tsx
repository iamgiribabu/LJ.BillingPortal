'use client'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Navbar from "./components/navbar";
import { useDispatch } from "react-redux";
import { DashBoardDetailsState } from "@/store/reducers/dashBoardDetails";

export default function Home() {
  const dispatch = useDispatch();
  const allInvoices : DashBoardDetailsState[]  = useSelector((state: RootState) => state.dashBoardDetails)
 
  console.log(allInvoices);

  useEffect(()=>{
    fetch('http://localhost:5000/api/invoices', { method : 'GET'})
    .then((response) => response.json())
    .then((data) => {  
      console.log("res" ,data[0]);
      dispatch({ type: "ADD_DASHBOARD_DETAILS", payload: data[0] })
    }
    ).catch((error) => {
      console.error("Error fetching invoices:", error);
    }
    )
  },[])
  
  return (
    <div className="bg-[#F4F4F4] min-h-screen flex flex-col item-center m-0 p-0 text-black" >  
    <Navbar />
     <h1 className="text-center text-5xl font-extrabold mt-8 text-[#4F3D88]" style={{ fontFamily: "Cinzel, serif" }}>LJ Lifters Billing Portal Dashboard</h1>
     <div className="p-4 flex justify-between items-start"> 
      <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-1">Invoice No</th>
                  <th className="border border-gray-300 px-2 py-1">Client ID</th>
                  <th className="border border-gray-300 px-2 py-1">Company Name</th>
                  <th className="border border-gray-300 px-2 py-1">Invoice Date</th>
                  <th className="border border-gray-300 px-2 py-1">View Invoice</th>
                  <th className="border border-gray-300 px-2 py-1">Download Invoice</th>
                 

                </tr>
              </thead>
              <tbody>
                {[...allInvoices]
                  .sort((a, b) => new Date(b.InvoiceDate).getTime() - new Date(a.InvoiceDate).getTime())
                  .map((invoice, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-2 py-1">{invoice.InvoiceNumber}</td>
                    <td className="border border-gray-300 px-2 py-1">{invoice.ClientID}</td>
                    <td className="border border-gray-300 px-2 py-1 text-left">{invoice.CompanyName}</td>
                    <td className="border border-gray-300 px-2 py-1 ">{invoice.InvoiceDate ? new Date(invoice.InvoiceDate).toISOString().split('T')[0] : ''}</td>
                    <td className="border border-gray-300 px-2 py-1"><a href={`/invoice/${invoice.InvoiceNumber}`}>View Invoice</a></td>
                    <td className="border border-gray-300 px-2 py-1"><a href={`/invoice/${invoice.InvoiceNumber}/download`}>Download Invoice</a></td>
                  </tr>
                  ))}
              </tbody>
            </table>
     </div>
    </div>
  );
}
