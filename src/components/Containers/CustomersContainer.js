import React, { Component } from 'react'
import { AppFrame } from '../AppFrame'
import { CustomersActions } from '../customersActions'
import { CustomersList} from '../CustomersList'
import {  withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCustomers } from '../../actions/fetchCustomers'
import { getCustomers } from '../../selectors/customers'


 class CustomersContainer extends Component  {

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

CustomersContainer.defaultProps = {
     customers: []
}

const mapStateToProps = state => ({
     customers: getCustomers(state)
})

export default withRouter(connect(mapStateToProps, {fetchCustomers})(CustomersContainer));

