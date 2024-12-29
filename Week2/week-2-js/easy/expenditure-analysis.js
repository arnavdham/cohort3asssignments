/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categorytotals={};
  for (let i=0;i<transactions.length;i++)
  {
    if (categorytotals[transactions[i].category])
    {
      categorytotals[transactions[i].category]+=transactions[i].price;
    }
    else
    {
      categorytotals[transactions[i].category]=transactions[i].price;
    }
  }
  const result = [];

  for (let category in categorytotals) {
    result.push({
      category: category,
      totalSpent: categorytotals[category]
    });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
