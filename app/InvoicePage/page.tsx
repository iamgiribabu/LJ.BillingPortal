'use client'
import React from 'react'
import InvoiceTemplate from '../generateInvoice/InvoiceTemplate'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Page = () => {
    const state= useSelector((state: RootState) => state);
    const handleDownloadPDF = () => {
      const element = document.querySelector('.invoice-container') as HTMLElement;
      if (element) {
          import('html2pdf.js').then((html2pdf) => {
              html2pdf.default()
                  .set({ html2canvas: { scale: 2 }, filename: 'invoice.pdf' })
                  .from(element)
                  .save();
          });
      }
  };
  return (
    <div className='flex flex-col items-center justify-center'>
      <InvoiceTemplate state={state} />
      <button
        className='bg-blue-500 text-white p-2 rounded mt-4'
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