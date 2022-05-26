import React, { Component } from 'react'
import { AppFrame } from '../AppFrame'
import { CustomersActions } from '../customersActions'
import { CustomersList} from '../CustomersList'
import {  withRouter } from 'react-router-dom'


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

export default withRouter(class CustomerContainer extends Component  {

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomersList
                customers={customers}
                urlPath={'customers/'}
            ></CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo cliente</button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame
                    header={'Listado de clientes'}
                    body={this.renderBody(customers) }></AppFrame>
            </div>
        )
    }
})

