
import { combineReducers } from "redux";
// import serviceReducer from "./serviceReducer";
import invoiceReducer from "./invoiceReducer";
import addressReducer from "./addressReducer";
import serviceEntryReducer from "./serviceEntryTable";
import allInvoiceReducer from "./allInvoiceReducer";
import dashBoardDetailsReducer from "./dashBoardDetails";

const rootReducer = combineReducers({
//   service: serviceReducer,
  invoice: invoiceReducer,
  address : addressReducer,
  services : serviceEntryReducer,
  allInvoices : allInvoiceReducer,
  dashBoardDetails : dashBoardDetailsReducer
});

export default rootReducer;
