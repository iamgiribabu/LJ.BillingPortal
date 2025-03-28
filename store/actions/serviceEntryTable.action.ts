import { Service } from "../reducers/serviceEntryTable";

// import { ADD_SERVICE, DELETE_SERVICE, UPDATE_SERVICE } from "./actionTypes";
export const ADD_SERVICE = "ADD_SERVICE";
export const DELETE_SERVICE = "DELETE_SERVICE";
export const UPDATE_SERVICE = "UPDATE_SERVICE";



interface AddServiceAction {
    type: typeof ADD_SERVICE;
    payload: Service[];
}

export const addService = (service: Service[]): AddServiceAction => ({
    type: ADD_SERVICE,
    payload: service,
});

export const deleteService = (id : number) => ({
  type: DELETE_SERVICE,
  payload: id,
});

// export const updateService = (service) => ({
//   type: UPDATE_SERVICE,
//   payload: service,
// });
