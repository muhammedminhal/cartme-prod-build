const express = require('express');
const path = require('path')
const app = express();
try {
    app.use(express.static(path.join(__dirname, 'landingpage')));
    app.use(express.static(path.join(__dirname, 'cartsme')));
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('/*', (req, res) => {
        let arrPath = req["path"] ? req["path"].
        split("/"): ["", ""]
        if (arrPath[1] == "shop")
            res.sendFile(__dirname + '/dist/index.html')
        else if (arrPath[1] == "admin")
            res.sendFile(__dirname + '/cartsme/index.html')
        else
            res.sendFile(__dirname + '/landingpage/index.html')
    })
    app.listen(4300, function () {
        console.log('App is listening on port 4300');
    });
} catch (error) {
    console.log(error);
    // res.sendFile(__dirname,'dist','index.html')

}