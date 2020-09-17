const express = require('express');
const path = require('path')
const app = express();
try {
    app.use(express.static(path.join(__dirname, 'landingpage')));
    app.use((req, res, next) => {
        res.sendFile(__dirname + '/landingpage/index.html')
        next()
    })
    app.get('/*', (req, res) => {
        res.sendFile(__dirname + '/landingpage/index.html')
    })
    app.listen(4400, function() {
        console.log('App is listening on port 4400');
    });
} catch (error) {
    console.log(error);
    // res.sendFile(__dirname,'dist','index.html')

}