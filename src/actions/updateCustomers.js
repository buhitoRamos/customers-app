import { UPDATE_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

import { urlCustomers } from '../api/url'
import { apiPut } from "../api";

export const updateCustomers = createAction(UPDATE_CUSTOMERS,  (id, customer)=> apiPut(urlCustomers, id, customer)())