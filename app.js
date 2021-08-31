const express = require("express");
require("./db/connection");

const Customer = require("./models/customers");

const app = express();
const port = 8000;

app.use(express.json());

//create new account for customer
app.post("/customers",async(req, res)=>{
    try {
        const addingCust = await new Customer(req.body)
        console.log(req.body);
        const CustRecord = addingCust.save();
        res.send(CustRecord);
    } catch (error) {
        res.send(e);
    }
})

//reterive balance for given account
app.get("/customers/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const CustRecord = await Customer.findById(_id);
        res.send(CustRecord.body.initialDeposit);
        console.log(CustRecord.body.initialDeposit);
    } catch (error) {
        res.send(e);
    }
})

app.listen(port,()=>{
    console.log('server is running on port '+ port)
});
