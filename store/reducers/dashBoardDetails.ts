export interface DashBoardDetailsState {
    ClientID : number,
    InvoiceNumber : string,
    CompanyName : string,
    InvoiceDate : Date,

}

const initialState : DashBoardDetailsState[] = []

interface DashBoardDetailsAction {
    type: string;
    payload: DashBoardDetailsState[];
}

const dashBoardDetailsReducer = (state: DashBoardDetailsState[] = initialState, action: DashBoardDetailsAction) => {
    switch(action.type) {
        case "ADD_DASHBOARD_DETAILS": return [ ...action.payload]
        default:
            return state
    }
}

export default dashBoardDetailsReducer;