import React, { Component } from 'react'
import { AppFrame } from '../AppFrame'
import { CustomersActions } from '../customersActions'
import {  withRouter } from 'react-router-dom'

export default withRouter(class HomeContainer extends Component  {

    _handleOnClick = () => {     
        this.props.history.push('/customers', { replace: true });
    }

    render() {
        return (
            <div>
                <AppFrame
                    header='HOME'
                    body={
                        <div>Esta es la pantalla inicial
                            <CustomersActions>
                                <button onClick={this._handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }></AppFrame>
            </div>
        )
    }
})

