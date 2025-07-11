const initialState = {
    CompanyName: '',
    AddressLine1: '',
    AddressLine2: '',
    AddressLine3: '',
    GSTIN: 0,
    State: '',
    StateCode: 0
};
  
export interface IAddressState {
  ClientID?: string;
  billedToName: string;
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  GSTIN: number;
  State: string;
  StateCode: number;
}

interface UpdateAddressAction {
    type: "ADD_ADDRESS";
    payload: {
        field: keyof IAddressState;
        value: string | number;
    };
}

type AddressAction = UpdateAddressAction;

const addressReducer = (state: IAddressState = initialState, action: AddressAction): IAddressState => {
    switch (action.type) {
        case "ADD_ADDRESS":{
            return { ...state, ...action.payload };}
        default:
            return state;
    }
};
  
  export default addressReducer;