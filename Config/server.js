const express = require('express')
const database= require(__dirname+'/databaseConfig').database

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))


app.use('/',
  express.static(__dirname + '/../public')
)
app.use('/api/vendors',require(__dirname+'/../Domains/Vendor/VendorAPI').route);
app.use('/api/products',require(__dirname+'/../Domains/Product/ProductAPI').route);
app.use('/api/users',require(__dirname+'/../Domains/User/UserAPI').route);
app.use('/api/carts',require(__dirname+'/../Domains/Cart/CartAPI').route);


database.sync()
  .then(() => {
    console.log('database synced successfully...');
    const PORT=process.env.PORT||1156;
    app.listen(PORT,()=>{
        console.log('server is running at '+'http://localhost:'+PORT);
    })
  })
