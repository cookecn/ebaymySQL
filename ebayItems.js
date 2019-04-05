function createProduct() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO items SET ?",
    {
      name: "macbook",
      price: 300.00,
      
    },

    {
      name: "iphone",
      price: 100.00,
      
    },

    {
      name: "corvette",
      price: 2000.00,
      
    },

    {
      name: "shirts",
      price: 3.00,
      
    },

    {
      name: "gokus power level",
      price: 9001.00,
      
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}
