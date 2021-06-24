// an array of objects
var array = [
    {name: "Иванов О. В.", value: 10},
    {name: "Иванов Олег Иваныч", value: 5},
    {name: "Иванов Илья Петрович", value: 10},
    {name: "Петров Петр Петрович", value: 15},
    {name: "Сидоров Сергей Иваныч", value: 10},
    {name: "Сидоров Иван Иваныч ", value: 10},
];


// ——— calculating the value based on the entire array using "reduce()" function ——— //

// "total" takes the result of a previous function call
// "item" is the next array element
var groupByNames = array.reduce((total, item) => {

    // replacing other symbols after first space with empty string using regex
    // and summing the values that have equal strings in "total"
    total[item.name.replace(/ .*/, '')] = (total[item.name.replace(/ .*/, '')] || 0) + item.value;

    // reducing an array to a single value "total"
    return total;

}, {});


// output the object to the browser console
console.log(groupByNames);