import React, { Component } from 'react'
import { AppFrame } from '../AppFrame'
import { CustomersActions } from '../customersActions'
import { CustomersList} from '../CustomersList'
import {  withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCustomers } from '../../actions/fetchCustomers'


 class CustomerContainer extends Component  {

    componentDidMount() {
        this.props.fetchCustomers();
    }

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
                    body={this.renderBody(this.props.customers) }></AppFrame>
            </div>
        )
    }
};

CustomerContainer.defaultProps = {
     customers: []
}

const mapStateToProps = state => ({
     customers: state.customers
})

export default withRouter(connect(mapStateToProps, {fetchCustomers})(CustomerContainer));

