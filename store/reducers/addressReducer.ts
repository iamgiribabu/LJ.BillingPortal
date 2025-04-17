const initialState = {
    CompanyName: "",
    AddressLine1: "",
    AddressLine2: "",
    AddressLine3: "",
    GSTIN: "",
    State: "",
    StateCode: "",
    ClientID: "",
  };
  
export interface IAddressState {
  ClientID?: string;
  CompanyName: string;
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  GSTIN: string;
  State: string;
  StateCode: string;
}

interface UpdateAddressAction {
    type: "ADD_ADDRESS";
    payload: {
        field: keyof IAddressState;
        value: string;
    };
}

type AddressAction = UpdateAddressAction;

const addressReducer = (state: IAddressState = initialState, action: AddressAction): IAddressState => {
    switch (action.type) {
        case "ADD_ADDRESS":
            return { ...state, [action.payload.field]: action.payload.value };
        default:
            return state;
    }
};
  
  export default addressReducer;