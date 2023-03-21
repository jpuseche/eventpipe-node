express = require('express');
app = express()

app.use(express.static('src'))

app.get('/', (req, res) => {
    res.sendFile('/landing-page.html', {root: __dirname + "/src/views"});
});

port = 3000
app.listen(port, () => {
    console.log('listening at server ' + port);
});