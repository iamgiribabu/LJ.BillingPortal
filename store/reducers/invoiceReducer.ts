
const initialInvoiceState = {
    // invoiceNumber: `001/LJL/${new Date().getFullYear().toString().slice(-2)}-${(new Date().getFullYear() + 1).toString().slice(-2)}`,
    // invoiceDate: new Date().toLocaleDateString(),
    // placeOfSupply: "",
    // poNo: "NA",
    // craneReg: "MH01EN6518",
    invoiceNumber: "",
    invoiceDate: "",
    placeOfSupply: "",
    poNo: "NA",
    craneReg: "",

  };

export interface InvoiceState {
    invoiceNumber: string;
    invoiceDate: string;
    placeOfSupply: string;
    poNo: string;
    craneReg: string;
}

interface UpdateInvoiceDetailsAction {
    type: "GENERATE_INVOICE_DETAILS";
    payload: Partial<InvoiceState>;
}

type InvoiceAction = UpdateInvoiceDetailsAction;

const invoiceReducer = (state: InvoiceState = initialInvoiceState, action: InvoiceAction): InvoiceState => {
    switch (action.type) {
        case "GENERATE_INVOICE_DETAILS":
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
  
  export default invoiceReducer;