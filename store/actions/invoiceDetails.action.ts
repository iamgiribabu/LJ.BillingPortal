'use client'

import { Invoice } from "../reducers/allInvoiceReducer";
import { InvoiceState } from "../reducers/invoiceReducer";


export const generateInvoiceDetails = (invoiceDetails: InvoiceState) => {
  return {
    type: "GENERATE_INVOICE_DETAILS",
    payload: invoiceDetails
  };
}

export const addInvoicePriceCalculation = (invoiceDetails: Invoice) => {
  console.log("Invoice Details in action", invoiceDetails);
  return {
    type: "ADD_INVOICE",
    payload: invoiceDetails
  }
}