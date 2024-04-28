import React from "react";

function Table() {
    return (
        <>
            <table>
                <thead>
                    <th>Date</th>
                    <th>Product/Item</th>
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