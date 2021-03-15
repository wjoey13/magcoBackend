const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5555;
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res,next) => {

})
// app.listen(port, () => {
//     console.log(`What port is active? it's port ${port}`);
// });