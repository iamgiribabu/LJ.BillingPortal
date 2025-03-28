'use client'

/* eslint-disable react-hooks/exhaustive-deps */

import { generateInvoiceDetails } from "@/store/actions/invoiceDetails.action";
import { InvoiceState } from "@/store/reducers/invoiceReducer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const InvoiceDetails = () => {
  const dispatch = useDispatch();
  const invoiceDetails = useSelector((state: RootState) => state.invoice);
  const currentYear = new Date().getFullYear() % 100;
  const financialYear = `${currentYear}-${(currentYear + 1) % 100}`;

  const [placeOfSupply, setPlaceOfSupply] = useState(invoiceDetails.placeOfSupply ? invoiceDetails.placeOfSupply : "");
  const [poNumber, setPoNumber] = useState(invoiceDetails.poNo ? invoiceDetails.poNo : "NA"); 
  const [craneReg, setCraneReg] = useState(invoiceDetails.craneReg);
  useEffect(() => {
    const payload : InvoiceState = {
      invoiceNumber: invoiceDetails.invoiceNumber ? invoiceDetails.invoiceNumber : `001/LJL/${financialYear}`,
      invoiceDate: invoiceDetails.invoiceDate ? invoiceDetails.invoiceDate : new Date().toLocaleDateString("en-GB"), // Adding the missing invoiceDate
      placeOfSupply,
      poNo: poNumber,
      craneReg,
    }

    dispatch(generateInvoiceDetails(payload))
  },[placeOfSupply, poNumber, craneReg])

  return (
    <div className=" p-6 rounded-2xl  w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="font-medium w-1/2 text-right pr-4 text-[#4F3D88]">Invoice Number :</span>
          {/* <div className="border-l-2 border-black h-6"></div> */}
          <span className="text-black">{`${invoiceDetails.invoiceNumber ? invoiceDetails.invoiceNumber : `001/LJL/${financialYear}`}`} </span>
        </div>
        <div className="flex items-center">
          <span className="font-medium w-1/2 text-right pr-4 text-[#4F3D88]">Invoice Date :</span>
          {/* <div className="border-l-2 border-black h-6"></div> */}
          <span className="w-1/2 text-black">{`${invoiceDetails.invoiceDate ? invoiceDetails.invoiceDate : new Date().toLocaleDateString("en-GB")}` } </span>
        </div>
        <div className="flex items-center">
          <span className="font-medium w-1/2 text-right pr-4 text-[#4F3D88]">Place of Supply</span>
          {/* <div className="border-l-2 border-black h-6"></div> */}
          <input 
            type="text" 
            value={invoiceDetails.placeOfSupply ? invoiceDetails.placeOfSupply : placeOfSupply} 
            onChange={(e) => setPlaceOfSupply(e.target.value)} 
            className="border border-gray-300 rounded px-2 py-1 w-1/2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
            // className="w-1/2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F3D88] text-black"
            placeholder="Enter place" 
          />
        </div>
        <div className="flex items-center">
          <span className="font-medium w-1/2 text-right pr-4 text-[#4F3D88]">PO No.</span>
          {/* <div className="border-l-2 border-black h-6"></div> */}
          <input 
            type="text" 
            value={poNumber} 
            onChange={(e) => setPoNumber(e.target.value)} 
            className="border border-gray-300 rounded px-2 py-1 w-1/2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter PO No" 
          />
        </div>
        <div className="flex items-center">
          <span className="font-medium w-1/2 text-right pr-4 text-[#4F3D88]">Crane Reg.</span>
          {/* <div className="border-l-2 border-black h-6"></div> */}
          <select 
            value={invoiceDetails.craneReg ? invoiceDetails.craneReg : craneReg} 
            onChange={(e) => setCraneReg(e.target.value)} 
            className="border border-gray-300 rounded px-2 py-1 w-1/2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>Select Crane Registration</option> {/* Default empty option */}
            <option value="MH01EN6518">MH01EN6518</option>
            <option value="MH02XY1234">MH02XY1234</option>
            <option value="MH03AB5678">MH03AB5678</option>
            <option value="MH04CD9101">MH04CD9101</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
