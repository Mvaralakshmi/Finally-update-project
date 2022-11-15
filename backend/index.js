const express=require("express");
const bodyParser=require("body-parser");

const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/cards', (req, res) => {
    const str = [
        {
            name: 'Mixmax',
            user_name:"Vishal",
            budget_name: 'Software Subscription',
            owner_id: 1,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/G7KKjwP/fire.png"
            },
            available_to_spend: {
            value: 9,
            currency: "SGD"
            },
            card_type: "BURNER",
            expiry: "Expires: 9 Feb",
            limit: 10,
            status: 'active'
        },
        {
            name: 'NewMIne',
            user_name:"Rajesh",
            budget_name: 'Software Subscription',
            owner_id: 2,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value: 1,
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 10,
            status: 'active'
        },
        {
            name: 'Motion',
            user_name:"Rajith",
            budget_name: 'Software subscription',
            owner_id: 3,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value: 15,
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 15,
            status: 'active'
        },
        {
            name: 'Quickbooks',
            user_name:"Rajesh",
            budget_name: 'Software Subscription',
            owner_id: 4,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value: 1,
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 10,
            status: 'your'
        },
        {
            name: 'Lyzoo',
            user_name:"Mayank",
            budget_name: 'Software subscription',
            owner_id: 5,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value: 180,
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 180,
            status: 'active'
        },
        {
            name: 'Xero',
            user_name:"Mayank",
            budget_name: 'Software subscription',
            owner_id: 6,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value:"50",
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 50,
            status: 'active'
        }
        ,{
            name: 'Mookambika',
            user_name:"Rajith",
            budget_name: 'Miscellaneous',
            owner_id: 7,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value: 20,
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 20,
            status: 'active'
        },
        {
            name: 'Pandadoc',
            user_name:"Mayank",
            budget_name: 'Software subscription',
            owner_id: 8,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value: 180,
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 180,
            status: 'block'
        },
        {
            name: 'Apple Dev License',
            user_name:"Rajesh",
            budget_name: 'Sales Singapore',
            owner_id: 9,
            spent: {
            value: 148,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/G7KKjwP/fire.png"
            },
            available_to_spend: {
            value: 30,
            currency: "SGD"
            },
            card_type: "BURNER",
            expiry: "Expires : 9 August",
            limit: 178,
            status: 'block'
        },
        {
            name: 'EverSoft',
            user_name:"Rajith",
            budget_name: 'Miscellaneous',
            owner_id: 10,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value: 180,
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 20,
            status: 'block'
        },
        {
            name: 'BrainCord',
            user_name:"Mayank",
            budget_name: 'Software subscription',
            owner_id: 11,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value:"50",
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 50,
            status: 'your'
        },
        {
            name: 'Mookambika',
            user_name:"Rajith",
            budget_name: 'Miscellaneous',
            owner_id: 12,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value: 180,
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 20,
            status: 'your'
        },
        {
            name: 'Pandadoc',
            user_name:"Mayank",
            budget_name: 'Software Subscription',
            owner_id: 13,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value: 180,
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "Aug",
            limit: 180,
            status: 'your'
        }
        ,
        {
            name: 'WelKart',
            user_name:"Melson",
            budget_name: 'Software subscription',
            owner_id: 14,
            spent: {
            value: 0,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value:"50",
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August",
            limit: 50,
            status: 'block'
        },
        {
            name: 'Velsoft',
            user_name:"Vishal Kumar",
            budget_name: 'Software Subscription',
            owner_id: 15,
            spent: {
            value: 1,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/G7KKjwP/fire.png"
            },
            available_to_spend: {
            value: 10,
            currency: "SGD"
            },
            card_type: "BURNER",
            expiry: "Expires : 9 Feb",
            limit: 10,
            status: 'block' 
        },
        {
            name: 'Honeywell',
            user_name:"Rajith Varma",
            budget_name: 'Software subscription',
            owner_id: 16,
            spent: {
            value: 3,
            currency: "SGD",
            imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
            },
            available_to_spend: {
            value: 15,
            currency: "SGD"
            },
            card_type: "SUBSCRIPTION",
            expiry: "August ",
            limit: 15,
            status: 'your'
        }
]
    res.end(JSON.stringify(str));
});

app.listen(4000,()=>{
    console.log("On 4000 port server is running")
})