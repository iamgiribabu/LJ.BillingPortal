'use client'

import { InvoiceState } from "../reducers/invoiceReducer";


export const generateInvoiceDetails = (invoiceDetails: InvoiceState) => {
  return {
    type: "GENERATE_INVOICE_DETAILS",
    payload: invoiceDetails
  };
}