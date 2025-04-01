'use client'
import React from 'react'
import InvoiceTemplate from '../generateInvoice/InvoiceTemplate'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const Page = () => {
  const state= useSelector((state: RootState) => state);
  const invoiceRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async  () => {
    if (!invoiceRef.current) return;

    const canvas = await html2canvas(invoiceRef.current, { 
      scale: 2, // Increase resolution
      useCORS: true, // Fixes issues with external fonts/images
      logging: false,
      allowTaint: true, // Helps with cross-origin images
      width: invoiceRef.current.scrollWidth, 
      height: invoiceRef.current.scrollHeight,
      windowWidth: invoiceRef.current.scrollWidth,
      windowHeight: invoiceRef.current.scrollHeight,

    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
      putOnlyUsedFonts: true,
      floatPrecision: 16, // or "smart", default is 16
    });
    const imgWidth = pdf.internal.pageSize.getWidth() //210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    
    // Save to file system (change this for API upload)
    pdf.save("invoice.pdf");
  };


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
    </div>
  )
}

export default Page