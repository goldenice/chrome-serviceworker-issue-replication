const express = require('express');
const app = express();

app.use('/target.pdf', function(req, res, next) {
	console.log('Triggering middleware');
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("X-Content-Type-Options", "nosniff");
	res.setHeader("X-Frame-Options", "SAMEORIGIN");
	res.setHeader("X-XSS-Protection", "1; mode=block");
	res.setHeader("Expires", '0');
	res.setHeader("Pragma", 'no-cache');
	res.setHeader("Content-Type", "application/pdf")
	res.removeHeader('X-Powered-By');
	res.removeHeader('ETag');
	return next();
});

app.use(express.static('web'));
app.listen(1337, () => console.log('Started server on 1337'));
