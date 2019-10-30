const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs  = require('express-handlebars');
const postRoute = require('./routes/posts');

const app = express();

app.engine('handlebars', expressHbs({
	extname: 'handlebars',
    defaultLayout: ''
}));
app.set('view engine', 'handlebars');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(postRoute);

app.use('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000, () => {
	console.log('Server started on port 3000')
})
