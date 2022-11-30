import express from 'express';
import { Product } from './objects';
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

/* constants init*/
const PORT = 1906;
const PATH = './database/superlist.txt';
let superList = new Array<Product>;
let superListDB = fs.readFileSync(PATH,'utf8');

// On server startup : Converting the DB Products to usable products
function createSuperListFromDB() {
  // Splitting the db to products 
  let dbProducts = superListDB.split('/');

  // running over all the db products 
  dbProducts.forEach(currentDBProduct => {
    // Splitting the product to name and amount
    let splittedDBProduct = currentDBProduct.split('*'); 
    if (splittedDBProduct[0] != '' ) {
      let newProduct = new Product(splittedDBProduct[0], Number.parseInt(splittedDBProduct[1]));
      superList.push(newProduct);
    }
  });
}


function writeToDB() {
  let productsString = "";
  superList.forEach(currentProduct => {
    productsString+= currentProduct.productName + '*' + currentProduct.productAmount + '/';
  });
  fs.writeFileSync(PATH, productsString);
}

// When client side wants to add a product, adding it and writing to the DB 
app.post('/update-superlist', function requestHandler(req, res, data) {
  superList = req.body.data;
  writeToDB();
  res.send('Product Added Succesfuly');
});

// On client startup: Sending the superlist from the DB
app.get('/superlist', (req, res) => {
  res.send(superList);
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});

createSuperListFromDB();