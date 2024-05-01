import React from "react";

function Row({transactions}) {

    const rows = transactions ? transactions.map((trans, index) => {
        return <tr key={index+1}>
        <td>{trans.date}</td>
        <td>{trans.description}</td>
        <td>{trans.category}</td>
        <td>{trans.amount}</td>
    </tr>

    }) : null; 

    return (
        <>
            {rows}
        </>
    )
    
}

export default Row

