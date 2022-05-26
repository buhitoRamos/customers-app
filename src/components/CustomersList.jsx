import React from "react";
import PropTypes from "prop-types";
import { CustomersListItem } from "./CustomersListItem";

export const CustomersList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map(c =>
                        <CustomersListItem
                            key={c.dni}
                            name={c.name}
                            dni={c.dni}
                            editActions={'Editar'}
                            delActions={'Eliminar'}
                            urlPath={urlPath}>
                        </CustomersListItem>
                    )
                }
            </div>
        </div>
    )
}
CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired
}