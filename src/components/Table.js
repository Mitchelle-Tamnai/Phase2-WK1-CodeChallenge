import React from "react";
import Row from "./Row";

function Table() {
    return (
        <>
            <table>
                <thead>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    <Row />
                </tbody>
            </table>
        </>
    )
}

export default Table