import { AddressState } from "./addressReducer";
import { InvoiceState } from "./invoiceReducer";
import { Service } from "./serviceEntryTable";

export interface Invoice {
    id : string,
    invoiceDetails : InvoiceState ,
    address : AddressState,
    services : Service[]
  }

const InitialInvoiceState : Invoice | object = {}

interface InvoiceAction {
    type: string;
    payload: Invoice ;
}

const allInvoiceReducer = (state: Invoice | object = InitialInvoiceState, action: InvoiceAction) => {
    switch(action.type) {
        case "GET_INVOICEs": return state
        case "ADD_INVOICE": return  action.payload
        // case "DELETE_INVOICE": return state.filter((invoice) => invoice.id !== action.payload)
        // case "GET_SINGLE_INVOICE": return [state.find((invoice) => invoice.id === action.payload) || state[0]]
        // case "UPDATE_INVOICE":
        //     return {...state, invoiceDetails : {...state.invoiceDetails, [action.payload.field] : action.payload.value}}
        // case "UPDATE_ADDRESS":
        //     return {...state, address : {...state.address, [action.payload.field] : action.payload.value}}
        // case "ADD_SERVICE":
        //     return {...state, services : [...state.services, action.payload]}
        // case "DELETE_SERVICE":
        //     return {...state, services : state.services.filter((service) => service.id !== action.payload).map((service, index) => ({...service, id : index + 1}))}
        default:
            return state
    }
}

export default allInvoiceReducer;
