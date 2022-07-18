import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";
import { CustomersActions } from "./customersActions";


//validación local (tiene prioridad)
const isNumber = value => (
    isNaN(Number(value)) && "Este campo debe ser un número"
)

//validación local
const isRequired = value => (
    !value && "Este campo es requerido"
);

//validación global (se da por el hight order component) es a modo de ejemplo de otra alternativa
const validate = values => {
    const error = {};
    if (!values.name) {
        error.name = "Este campo es requerido";
    }
    return error
}
const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
           meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);
 const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form onSubmit={handleSubmit}>
                    <Field 
                    name="name"
                    label="Nombre"
                    component={MyField}
                    //validate={isRequired}
                     />         
                    <Field 
                    name="dni"
                    label="Dni"
                    component={MyField}
                    validate={[isRequired, isNumber]} />                
                    <Field 
                    name="age"
                    label="Edad"
                    type="number"
                    component={MyField}
                    validate={isNumber} />
                    <CustomersActions>
                        <button type="submit" disabled={submitting}>Aceptar</button>
                        <button type="button" onClick={onBack}>Cancelar</button>
                    </CustomersActions>
            </form>
        </div>
    )
}
CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired

}
const customerEditForm = reduxForm({ 
    form: 'CustomerEdit',
    validate,
    enableReinitialize: true,
    keepDirtyOnReinitialize: false,
})(CustomerEdit);
export default setPropsAsInitial(customerEditForm)