// Condition:
// Create a function sortOperations that sorts an array of objects by year,
// present arrays with dates in the MM-DD format as values

// Example:
// result = {
//   "2017": [
//     "07-31",
//     "08-22"
//   ],
//   "2018": [
//     "01-01",
//     "02-22"
//   ]
// }

const operations = [
  { "date": "2017-07-31", "amount": "5422" },
  { "date": "2017-06-30", "amount": "5220" },
  { "date": "2017-05-31", "amount": "5365" },
  { "date": "2017-08-31", "amount": "5451" },
  { "date": "2017-09-30", "amount": "5303" },
  { "date": "2018-03-31", "amount": "5654" },
  { "date": "2017-10-31", "amount": "5509" },
  { "date": "2017-12-31", "amount": "5567" },
  { "date": "2018-01-31", "amount": "5597" },
  { "date": "2017-11-30", "amount": "5359" },
  { "date": "2018-02-28", "amount": "5082" },
  { "date": "2018-04-14", "amount": "2567" }
];

function sortOperations(operations) {
  const structed = operations.reduce((acc, item) => {
    const [year, month, day] = item.date.split("-");

    const prevDateList = acc[year] || [];

    acc[year] = [...prevDateList, [month, day].join("-")]

    return acc;
  }, {})

  return Object.keys(structed).map((key) => structed[key] = structed[key].sort())
}

console.log(sortOperations(operations));