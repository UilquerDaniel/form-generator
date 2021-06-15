const express = require('express');
const app = express();
const port = 3000
//**************************/
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

//const bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())

//**************************/
const consign = require('consign')
const db = require('./config/db.js')
app.db = db




consign()
  .include('./config/passport.js')
  .then('./config/middleware.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)



//**************************** */

//**************************** */
app.listen(port, () => {
  console.log(` servindo na porta ${port}...
  \n Seja bem vindo! `)
})
