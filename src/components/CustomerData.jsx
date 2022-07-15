import React from "react";
import  PropTypes  from "prop-types";
import { CustomersActions } from "./customersActions";

export const CustomerData =  ( { name, dni, age, onBack } ) => {
    return (
        <div>
            <div>
                <div className="customers-data">
                    <h2>Datos del cliente</h2>
                        <div><strong>Nombre: </strong><i>{name}</i></div>
                        <div><strong>Dni: <i>{dni}</i></strong></div>
                        <div><strong>Edad: <i>{age}</i></strong></div>                 
                </div>
            </div>
            <CustomersActions>
                <button onClick={onBack}>Volver</button>
            </CustomersActions>
        </div>
    )
}
CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired
}