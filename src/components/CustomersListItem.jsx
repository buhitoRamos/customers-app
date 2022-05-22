import React from "react";
import  PropTypes  from "prop-types";
import { Link } from "react-router-dom";

export const CustomersListItem =  ({ name, editActions, delActions, urlPath, dni }) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <Link to={`${urlPath}${dni}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${dni}/edit`}>{editActions}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${dni}/del`}>{delActions}</Link>
                </div>
            </div>
        </div>
    )
}
CustomersListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editActions: PropTypes.string.isRequired,
    delActions: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired
}