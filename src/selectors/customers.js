import { createSelector } from "reselect";
export const getCustomers = state => state.customers;
export const getCustomerById = ( state, props ) => state.customers.find( c => c.dni === props.dni)
export const getCustomerByDni = createSelector(
    (state, props) => state.customers.find(c => c.dni === props.dni), 
    customer => customer
);