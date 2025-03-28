const initialState = {
    billedToName: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    gstin: "",
    state : "",
    code: "",
  };
  
export interface AddressState {
    billedToName: string;
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    gstin: string;
    state: string;
    code: string;
}

interface UpdateAddressAction {
    type: "UPDATE_ADDRESS";
    payload: {
        field: keyof AddressState;
        value: string;
    };
}

type AddressAction = UpdateAddressAction;

const addressReducer = (state: AddressState = initialState, action: AddressAction): AddressState => {
    switch (action.type) {
        case "UPDATE_ADDRESS":
            return { ...state, [action.payload.field]: action.payload.value };
        default:
            return state;
    }
};
  
  export default addressReducer;