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
    initPrompts();
});


/* The basic application is fairly simple: Upon loading up the program, 
  the user is prompted on whether they would like to "POST AN ITEM" or "BID ON AN ITEM"*/

  //add an exit
function initPrompts() {
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'ebayBid',
        message: 'Which would you rather?',
        choices: ['Post an item', 'Bid on an item'],
      },
    ])
    .then(function(answer) {
      console.log('Answer:', answer.list);
      if (answer.list === 'Post an item') {
          whatItem();
      } else if {
          bidItem();
      } else {
          connection.end;
      }
    });
}


  function whatItem() {
    inquirer
    .prompt([

        {
            type: "input",
            name: "item",
            message: "What is your item name?"
            
        },
        //add a category option
        {
            type: "choice",
            name: "userItemAdd",
            message: "Would you like to add your item to ebay?",
            choices: ['Y', 'N']
        },
        //add startingbid option
        {
            type:
            name:
            validate 
        }

       
    ]).then(function(user) {
        console.log('You said your item name is: ', user.userItem);
        if (user.choices === 'Y') {
            console.log("Adding your item to ebay");
            var query = connection.query(
                "INSERT INTO items WHERE ?",
                {
                    item_name: answer.item,
                    category: answer.category,
                    starting_bid: answer.startingBid || 0,
                    highest_bid: answer.startingBid || 0

                }
            )
        } else {
            initPrompts();
        }

        console.log
        var query = connection.query(
            "INSERT INTO items "
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