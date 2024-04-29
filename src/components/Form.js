import React,{useState} from "react";
import Button from "./Button";


function Form({transactions, setTransactions}) {
    const [newTransactions, setNewTransactions] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
})

    function handleSubmit(event) {
        event.preventDefault()
        setTransactions([...transactions, newTransactions])
        
    }

    function handleChange(event){
        setNewTransactions(
            {
                ...newTransactions,
                [event.target.name] : event.target.value
            }
        )

    }

    return (
        <div className="container-fluid">
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="date" onChange={handleChange} value={newTransactions.date} placeholder="" name="date"/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="text" onChange={handleChange} value={newTransactions.description} placeholder="Description" name="description"/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="text" onChange={handleChange} value={newTransactions.category} placeholder="Category" name="category"/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <input className="form-control mb-2" type="text" onChange={handleChange} value={newTransactions.amount} placeholder="Amount" name="amount"/>
            </div>
            <Button/>
        </form>
    </div>

    )
    
}

export default Form