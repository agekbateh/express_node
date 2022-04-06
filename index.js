const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let arr = [1,2,3]

app.get('/', (req, res) => {
	return res.send(arr);
});

app.post('/change', (req, res) => {
	const newData = JSON.parse(req.body.data);
	arr	= newData;

	res.json(arr)
});

app.listen(3000, () => console.log('App listening on port 3000!'));
