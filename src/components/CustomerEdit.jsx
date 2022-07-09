import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";

const isNumber = value => (
    isNaN(Number(value)) && "Este campo debe ser un número"
)
const isRequired = value => (
    !value && "Este campo es requerido"
);
const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
           meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);
 const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form action="">
                    <Field 
                    name="name"
                    label="Nombre"
                    component={MyField}
                    validate={isRequired}
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
            </form>
        </div>
    )
}
CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number

}
const customerEditForm = reduxForm({ form: 'CustomerEdit' })(CustomerEdit);
export default setPropsAsInitial(customerEditForm)