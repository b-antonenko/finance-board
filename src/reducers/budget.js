let initialBudget = 1000;

export default function budget(state = initialBudget, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.operation];

        default: return state;
    }}