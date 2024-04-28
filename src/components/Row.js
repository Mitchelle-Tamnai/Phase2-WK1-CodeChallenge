import React from "react";

function Row(props) {
    return (
        <>
            <td>
                <tr>{props.date}</tr>
                <tr>{props.product}</tr>
                <tr>{props.category}</tr>
                <tr>{props.price}</tr>
            </td>
        </>
    )
    
}

export default Row