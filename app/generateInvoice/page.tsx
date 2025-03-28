'use client'
import React from 'react'
import AddressInput from '../components/AddressInput'
import InvoiceDetails from '../components/InvoiceDetails'
import ServiceEntryTable from '../components/ServiceEntryTable'
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from 'react-redux'
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import InvoiceTemplate from './InvoiceTemplate'
// import { Invoice } from '@/store/reducers/allInvoiceReducer'

import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const address = useSelector((state : RootState) => state.address)
  const services = useSelector((state : RootState) => state.services.services)
  const invoiceDetails = useSelector((state: RootState) => state.invoice);
  // const invoiceRef = useRef(null);

  // const [invoiceData, setInvoiceData] = useState<Invoice>({
  //   id: "",
  //   invoiceDetails: {
  //     invoiceNumber: "",
  //     invoiceDate: "",
  //     placeOfSupply: "",
  //     poNo: "",
  //     craneReg: ""
  //   },
  //   address: {
  //     billedToName: "",
  //     addressLine1: "",
  //     addressLine2: "",
  //     addressLine3: "",
  //     gstin: "",
  //     state: "",
  //     code: ""
  //   },
  //   services: []
  // }) 
  // const handleDownloadPDF = async () => {
    
  //   setTimeout(async () => {
  //     if (!invoiceRef.current) return;
  //   const canvas = await html2canvas(invoiceRef.current, {
  //     scale: 2,
  //     useCORS: true,
  //     allowTaint: true,
  //     onclone: (document) => {
  //       const invoiceContainer = document.getElementById("invoice-container");
  //       if (invoiceContainer) {
  //         invoiceContainer.style.display = "block";
  //       }
  //     },
  //   });
    
  //   const imgData = canvas.toDataURL("image/png", 1.0);
  //   const pdf = new jsPDF("p", "mm", "a4");
    
  //   const imgWidth = 210;
  //   const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //   pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  //   pdf.save(`Invoice_${invoiceDetails.invoiceNumber}.pdf`);
  //   }, 500);
  // };

  const handleSubmit = () => {
    console.log("Invoice Details", invoiceDetails);
    console.log("Address", address);
    console.log("Services", services);

    // setInvoiceData({
    //   id: invoiceDetails.invoiceNumber,
    //   invoiceDetails: invoiceDetails,
    //   address: address,
    //   services: services
    // } )

    dispatch({ type: "ADD_INVOICE", payload: {
      id: invoiceDetails.invoiceNumber,
      invoiceDetails: invoiceDetails,
      address: address,
      services: services
    } });

    
    
    router.push('/InvoicePage');

    // handleDownloadPDF();
  }

  return (
    <div className="bg-[#F4F4F4] min-h-screen flex flex-col item-center m-0 p-0" >  
    <button 
      onClick={() => router.push('/InvoicePage')} 
      className="flex items-center text-lg text-blue-500 hover:text-blue-700 font-bold py-2 px-4 mx-5"
    >
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 mr-2" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2}
      >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15 19l-7-7 7-7" 
      />
      </svg>
      Back
    </button>
    <div className="  p-4 flex justify-between items-start">
      <AddressInput />
      <InvoiceDetails />
    </div>
    <ServiceEntryTable />
    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5">Submit</button>
    
     {/* Hidden Invoice Template for PDF */}
     {/* <div className="hidden">
        <div ref={invoiceRef} id="invoice-container">
          <InvoiceTemplate invoice={invoiceData} />
        </div>
      </div> */}
    
    </div>
  )
}

export default Page