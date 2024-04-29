import React, {useState} from "react";
import Row from "./Row";

function Table() {

    const [transactions, setTransactions] = useState([
        {
            date: "2024-01-05",
            description: "Paycheck from YouTube",
            category: "Income",
            amount: "50,000.00"

        },
        {
            date: "2024-03-29",
            description: "Phillips Airfryer",
            category: "Electronics",
            amount: "5,000.00"

        },
        {
            date: "2023-12-11",
            description: "Shopping Spree at Harrods",
            category: "Fashion",
            amount: "125,000.00"

        },
        {
            date: "2023-12-31",
            description: "Uber Payments",
            category: "Transportation",
            amount: "10,000.00"

        },
        {
            date: "2023-12-17",
            description: "Burna Boy's London concert",
            category: "Entertainment",
            amount: "30,000.00"

        }
    ]
)

    function filterItems(event){
        const change = event.target.value
        const filter = transactions.filter(transactions => {
            return transactions.category.toLowerCase().includes(change.toLowerCase())
        })

        setTransactions([...filter])

    }

    return (
        <>
            <div className="p-3">
                <input onChange={filterItems} className="form-control me-2" type="search" placeholder="Search for Recent Transactions"/>
            </div>
            <div class="container-fluid">
    <form class="row">
        <div class="col-lg-3 col-md-4 col-sm-6">
            <input class="form-control mb-2" type="date" placeholder=""/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
            <input class="form-control mb-2" type="text" placeholder="Description"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
            <input class="form-control mb-2" type="text" placeholder="Category"/>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
            <input class="form-control mb-2" type="text" placeholder="Amount"/>
        </div>
    </form>
</div>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <Row transactions={transactions}/>
                </tbody>
            </table>
        </>
    )
}

export default Table