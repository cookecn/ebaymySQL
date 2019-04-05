var myql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    password: "",
    database: ebay_db
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    postItem();
    bidItem();
});


/* The basic application is fairly simple: Upon loading up the program, 
  the user is prompted on whether they would like to "POST AN ITEM" or "BID ON AN ITEM"*/

  inquirer
  .prompt([
    {
      type: 'list',
      name: 'ebayBid',
      message: 'Which would you rather?',
      choices: ['Post an item', 'Bid on an item'],
    },
  ])
  .then(function(user) {
    console.log('Answer:', answers.ebayBid);
    if (user.choices[0]) {
        whatItem();
    } else {
        bidItem();
    }
  });

  function whatItem() {
    inquirer
    .prompt([

        {
            type: "input",
            name: "userItem",
            message: "What is your item name?"
            
        },
       
    ]).then(function(user) {
        console.log('You said your item name was: ', user.userItem);
        connection.query(

        )
    })
  }

  function bidItem() {

  }

/* If the user selects "POST AN ITEM" they are prompted for an assortment of 
information regarding the item and then that information is added to the database 
so that others can bid on it*/


/* If the user selects "BID ON AN ITEM" they are shown a list of all available 
items and then are prompted to select what they would like to bid on. The console 
then asks them how much they would like to bid, and their bid is compared to the 
previous highest bid. If their bid is higher, inform the user of their success and 
replace the previous bid with the new one. If their bid is lower (or equal), inform 
the user of their failure and boot them back to the selection screen.*/
















/*inquirer
  .prompt([
    {
      type: 'password',
      name: 'secret',
      message: 'What is your password?',
    },
  ])
  .then(answers => {
    // Logging out the secret defeats the purpose though ;)
    
  });*/