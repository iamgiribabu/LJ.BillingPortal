'use client'
import React, { useEffect, useState } from 'react'
// import AddressInput from '../components/AddressInput'
import InvoiceDetails from '../components/InvoiceDetails'
import ServiceEntryTable from '../components/ServiceEntryTable'
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation';
import AddressDetails from '../components/AddressDetails'
import { addInvoicePriceCalculation } from '@/store/actions/invoiceDetails.action';

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const address = useSelector((state : RootState) => state.address)
  const services = useSelector((state : RootState) => state.services.services)
  const invoiceDetails = useSelector((state: RootState) => state.invoice);
  const [invoiceNumber, setInvoiceNumber] = useState<string>("");

  const handleSubmit = () => {
    console.log("Invoice Details", invoiceDetails);
    console.log("Address", address);
    console.log("Services", services);

    const totalAmountBeforeTax = services.reduce((acc, service) => acc + Number(service.taxableValue), 0);
    const cgst : number = parseFloat((totalAmountBeforeTax * 0.09).toFixed(2)); // 9% of total amount before tax
    const sgst : number = parseFloat((totalAmountBeforeTax * 0.09).toFixed(2)); // 9% of total amount before tax
    const igst : number = address.StateCode != 27 ? parseFloat((totalAmountBeforeTax * 0.18).toFixed(2)) : 0; // 18% of total amount before tax
    const netAmountAfterTax = parseFloat((totalAmountBeforeTax + cgst + sgst + igst).toFixed(2)); // Total amount after tax

    const invoice_data = {
      id: invoiceDetails.invoiceNumber,
      invoiceDetails: {...invoiceDetails, ...{totalAmountBeforeTax,
        cgst,
        sgst,
        igst,
        netAmountAfterTax}},
      address: address,
      services: services
    }

    dispatch(addInvoicePriceCalculation(invoice_data));

    router.push('/InvoicePage');
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/next-invoice-number', { method : 'GET'})
    .then((response) => response.json())
    .then((data) => {  
      setInvoiceNumber(data.nextInvoiceNumber);
      // dispatch({ type: "ADD_DASHBOARD_DETAILS", payload: data[0] })
    }
    ).catch((error) => {
      console.error("Error fetching invoices:", error);
    }
    )
  }, [])


  return (
    <div className="bg-[#F4F4F4] min-h-screen flex flex-col item-center m-0 p-0" >  
    <button 
      onClick={() => router.push('/')} 
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
      <AddressDetails/>
      {/* <AddressInput /> */}
      <InvoiceDetails invoiceNumber={invoiceNumber}/>
    </div>
    <ServiceEntryTable />
    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5">Submit</button>
    
    </div>
  )
}

export default Page