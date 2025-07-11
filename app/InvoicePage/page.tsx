'use client'
import React, { useState } from 'react'
import InvoiceTemplate from '../generateInvoice/InvoiceTemplate'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRef } from "react";
import { Invoice } from '@/store/reducers/allInvoiceReducer';
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";


const Page = () => {
  const state = useSelector((state: RootState) => state.allInvoices) as Invoice;
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleDownloadPDF = async () => {
    setIsLoading(true);
    setError(null);
    
    // const controller = new AbortController();
    // const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout

    try {
      console.log("State to be sent:", state);
      console.log("Generating PDF with state started:");
        const response = await fetch("http://localhost:5000/api/generateInvoiceHtml", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/pdf",
            },
            body: JSON.stringify(state), // Make sure to send the state
           // signal: controller.signal,
        });

        // clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`Failed to fetch PDF: ${response.statusText} (${response.status})`);
        }else{
            console.log("PDF generated successfully");
        }

        // const blob = await response.blob();
        
        // if (blob.size === 0) {
        //     throw new Error("Generated PDF is empty");
        // }

        // if (blob.type !== 'application/pdf') {
        //     throw new Error(`Invalid file type received: ${blob.type}`);
        // }

        // const url = window.URL.createObjectURL(blob);
        // const a = document.createElement("a");
        // a.href = url;
        // a.download = `invoice_${state.invoiceDetails.invoiceNumber || 'download'}.pdf`;
        
        // // Use a try-finally to ensure cleanup
        // try {
        //     document.body.appendChild(a);
        //     a.click();
        // } finally {
        //     document.body.removeChild(a);
        //     window.URL.revokeObjectURL(url);
        // }

    } catch (error) {
        console.error("Error downloading PDF:", error);
        if (error instanceof Error && error.name === 'AbortError') {
            setError("Request timed out after 60 seconds. Please try again.");
        } else {
            setError(error instanceof Error ? error.message : "Failed to generate PDF");
        }
    } 
    // finally {
    //     setIsLoading(false);
    //     clearTimeout(timeoutId);
    // }
};
const saveInvoice = async () => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch("http://localhost:5000/api/createInvoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Invoice saved successfully:", result);
  } catch (error) {
    console.error("Error saving invoice:", error);
    setError(error instanceof Error ? error.message : "Failed to save invoice");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className='flex flex-col items-center justify-center'>
      <InvoiceTemplate invoiceRef={invoiceRef} state={state} />
      {error && (
        <div className="text-red-500 mt-4 p-2 bg-red-100 rounded">
          {error}
        </div>
      )}
      <button
        className='no-print bg-blue-500 text-white p-2 rounded mt-4'
        onClick={() => {
           handleDownloadPDF()
        }}
      >
        {isLoading ? 'Generating PDF...' : 'Download PDF'}
      </button>
      <button
      className ="no-print bg-green-500 text-white p-2 rounded mt-4"
      onClick={() => {
       saveInvoice()
      }}
      >
        {isLoading ? 'Saving...' : 'Save Invoice'}
      </button>
    </div>
  )
}

export default Page