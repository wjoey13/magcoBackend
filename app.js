const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5309

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`wanna know what port is active? it is port ${port}`);
});

app.get('/', (req, res, next) =>{
    
})