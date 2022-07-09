import React, { Component } from 'react'
import { AppFrame } from '../AppFrame'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { getCustomerByDni } from '../../selectors/customers'
import  CustomerEdit from '../CustomerEdit'
import { CustomerData } from '../CustomerData'


class CustomerContainer extends Component {


    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                 return   <CustomerControl {...this.props.customer} /> 
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
    customer: PropTypes.object.isRequired
}
const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})


export default withRouter(connect(mapStateToProps, null)(CustomerContainer));

