module.exports = function(app, db) {
	app.post('/notes', (req, res) => {
		//Create note here
		console.log(req.body)
		res.send('Hello')
	});
};