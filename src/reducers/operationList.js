/*const list = [
    {type: "Spendings", title: "Shop", date: "22-02-1997", amount: "100"},
    {type: "Income", title: "Friend", date: "20-02-1997", amount: "200"},
];*/


export default function operationsList(state = [], action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.operation];

        default: return state;
    }};