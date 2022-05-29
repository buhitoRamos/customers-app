import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

const customers = [
    {
        "dni": "30666777555",
        "name": "Juan Perez",
        "age": 37
    },
    {
        "dni": "20777666555",
        "name": "Otro",
        "age": 35
    },
    {
        "dni": "29777888555",
        "name": "Luis Martinez",
        "age": 32
    }

] 

export const fetchCustomers = createAction(FETCH_CUSTOMERS, ()=> customers)