import { ADD_SERVICE, DELETE_SERVICE } from "../actions/serviceEntryTable.action";

const initialState = {
  services: [],
};

export interface Service {
    id: number;
    description: string;
    hsnSac: string;
    qty: number | string;
    rate: number | string;
    taxableValue: number | string;
  }

interface Action {
    type: string;
    payload: Service | number | { id: number; qtyInShift: number | string; rate: number | string };
}

interface State {
    services: Service[];
}

const serviceEntryReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ADD_SERVICE:

            return { services: Array.isArray(action.payload) ? action.payload : state.services };

        case DELETE_SERVICE:
            const updatedServices: Service[] = state.services
                .filter((service) => service.id !== action.payload)
                .map((service, index) => ({ ...service, id: index + 1 })); // Reset IDs

            return { ...state, services: updatedServices };

        default:
            return state;
    }
};

export default serviceEntryReducer;
