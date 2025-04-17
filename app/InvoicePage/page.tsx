'use client'
import React from 'react'
import InvoiceTemplate from '../generateInvoice/InvoiceTemplate'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";


const Page = () => {
  const state= useSelector((state: RootState) => state);
  const invoiceRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/generateInvoice", {
            method: "POST",
            headers: {
                Accept: "application/pdf", // Ensure correct format
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch PDF: ${response.statusText}`);
        }

        const blob = await response.blob();

        // Debug: Check if PDF is valid in browser console
        console.log("✅ Blob type:", blob.type); // Should be "application/pdf"

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "invoice.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("❌ Error downloading PDF:", error);
    }
};
  const saveInvoice = async () => {
    const { invoice, address, services } = state;

    fetch("http://localhost:5000/api/createInvoice", 
      {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ invoice, address, services })})
      .then((response) => response.json())
      .catch((error) => console.error("Error saving invoice:", error))

  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <InvoiceTemplate invoiceRef={invoiceRef} state={state} />
      <button
        className='no-print bg-blue-500 text-white p-2 rounded mt-4'
        onClick={() => {
           handleDownloadPDF()
        }}
      >
        Download PDF
      </button>
      <button
      className ="no-print bg-green-500 text-white p-2 rounded mt-4"
      onClick={() => {
       saveInvoice()
      }}
      >
        Save Invoice
      </button>
    </div>
  )
}

export default Page