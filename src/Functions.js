
export let currentDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
};

export let countBudget = (state) => {
  let budget = 0;
  let filteredStateIncome = state.filter((item)=>{
      return item.type === "Income";
  });
  filteredStateIncome.forEach((item)=>{
      return budget += +item.amount
  });
  let filteredStateSpendings = state.filter((item)=>{
      return item.type === "Spendings";
  });
    filteredStateSpendings.forEach((item)=>{
        return budget -= +item.amount
    });
  return budget;
};

export let countTotalSpendings = (state) => {
    let amount = 0;
    let filteredStateSpendings = state.filter((item)=>{
        return item.type === "Spendings";
    });
    filteredStateSpendings.forEach((item)=>{
        return amount += +item.amount
    });
    return amount;
};

export let returnLastSpendings= (state) => {
    if (state.length > 0) {
        let filteredStateSpendings = state.filter((item)=>{
            return item.type === "Spendings";
        });
        if (filteredStateSpendings.length > 0) {
            return filteredStateSpendings[filteredStateSpendings.length - 1].amount;
        } else return 0
    } else return 0

};

export let returnLastIncome = (state) => {
    if (state.length > 0) {
        let filteredStateIncome = state.filter((item)=>{
            return item.type === "Income";
        });
        return filteredStateIncome[filteredStateIncome.length - 1].amount;
    }
    else return 0;
};

let counter = (name, arr) => {
    let value = 0;
    let filteredArr = arr.filter((item)=>{
        return item.target === name;
    });
    filteredArr.forEach((item)=>{value += +item.amount});
    return {name: name, value: value}
};

export let sortSpendings = (state) => {
    let groupsOfSpendings = [];
    let names = ["Shopping(food)", "Shopping(alcohol)", "Home payments",
        "Taxes", "Trips", "Vacations", "Restaurants", "Food Delivery",
        "Entertainment", "Sport", "Other"];
    let filteredStateSpendings = state.filter((item)=>{
        return item.type === "Spendings";
    });
    names.forEach((name)=>{groupsOfSpendings.push(counter(name, filteredStateSpendings))});
    console.log(groupsOfSpendings)
    return groupsOfSpendings;
};

export let filterCurrency = (state) => {
    let result = [...state.filter(item =>{ return item.txt === "Долар США"}), ...state.filter(item =>{return item.txt === "Євро"}), ...state.filter(item =>{return item.txt === "Російський рубль"})]
    return result;
};