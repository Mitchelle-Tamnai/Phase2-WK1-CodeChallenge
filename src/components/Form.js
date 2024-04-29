import React from "react";

function Form() {

    function addTransaction(event) {
        event.preventDefault()
        
        
    }

    return (
        <div className="container-fluid">
        <form className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="date" placeholder=""/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="text" placeholder="Description"/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="text" placeholder="Category"/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="text" placeholder="Amount"/>
            </div>
            <div>
                <button type="submit" className="btn btn-outline-primary btn-lg" onClick={addTransaction}>Add Transaction</button>
            </div>
        </form>
    </div>

    )
    
}

export default Form