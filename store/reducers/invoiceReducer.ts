
const initialInvoiceState = {
    invoiceNumber: "",
    invoiceDate: "",
    placeOfSupply: "",
    poNo: "NA",
    craneReg: "",
    totalAmountBeforeTax: 0,
    cgst: 0,
    sgst: 0,
    igst: 0,
    netAmountAfterTax: 0

  };

export interface InvoiceState {
    invoiceNumber: string;
    invoiceDate: string;
    placeOfSupply: string;
    poNo: string;
    craneReg: string;
    totalAmountBeforeTax: number;
    cgst: number;
    sgst: number;
    igst: number;
    netAmountAfterTax: number;
}

interface UpdateInvoiceDetailsAction {
    type: "GENERATE_INVOICE_DETAILS";
    payload: Partial<InvoiceState>;
}

// interface AddInvoicePriceAction {
//     type: "ADD_INVOICE_PRICE_CALCULATION";
//     payload: {
//         totalAmountBeforeTax: number;
//         cgst: number;
//         sgst: number;
//         igst: number;
//         netAmountAfterTax: number;
//     };
// }

type InvoiceAction = UpdateInvoiceDetailsAction 

const invoiceReducer = (state: InvoiceState = initialInvoiceState, action: InvoiceAction): InvoiceState => {
    switch (action.type) {
        case "GENERATE_INVOICE_DETAILS":
            return {
                ...state,
                ...action.payload,
            };
        
        // case "ADD_INVOICE_PRICE_CALCULATION":
        //     return {
        //         ...state,
        //         totalAmountBeforeTax: action.payload.totalAmountBeforeTax,
        //         cgst: action.payload.cgst,
        //         sgst: action.payload.sgst,
        //         igst: action.payload.igst,
        //         netAmountAfterTax: action.payload.netAmountAfterTax
        //     };
        default:
            return state;
    }
};
  
  export default invoiceReducer;