const Product = require('./productModel');
const products = require('./products.json');

async function importData() {
  try {
    await Product.insertMany(products);
    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error('Error importing data', error);
    process.exit(1);
  }
}

importData();
