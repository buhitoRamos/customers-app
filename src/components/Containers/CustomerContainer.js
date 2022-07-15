import React, { Component } from 'react'
import { AppFrame } from '../AppFrame'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { getCustomerByDni } from '../../selectors/customers'
import  CustomerEdit from '../CustomerEdit'
import { CustomerData } from '../CustomerData'
import { fetchCustomers } from '../../actions/fetchCustomers'


class CustomerContainer extends Component {

    componentDidMount() {
        if(!this.props.customer.dni) {
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
    }

    handleOnBack = ()=> {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                if(this.props.customer) {}
                const CustomerControl = match ? CustomerEdit : CustomerData;
                 return   <CustomerControl {...this.props.customer} 
                 onSubmit={this.handleSubmit}
                 onBack={this.handleOnBack}/> 
            }
        } />
    )

    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente: ${this.props.dni}`}
                    body={this.renderBody()}></AppFrame>
            </div>
        )
    }
};

CustomerContainer.defaultProps = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
    fetchCustomers: PropTypes.func.isRequired
}
const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})


export default withRouter(connect(mapStateToProps, {fetchCustomers})(CustomerContainer));

