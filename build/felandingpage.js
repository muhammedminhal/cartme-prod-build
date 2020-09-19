const express = require('express');
const path = require('path')
const app = express();
try {
    app.use(express.static(path.join(__dirname, 'landingpage')));
    app.use(express.static(path.join(__dirname, 'cartsme')));
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('/*', (req, res) => {
        let strPath = req["path"]
        let arrPath = strPath && strPath != "" ? strPath.split("/") : ["", ""]
        if (arrPath[1] == "shop") {
            console.log("admin")
            res.sendFile(__dirname + '/dist/index.html')
        } else if (arrPath[1] == "admin") {
            console.log("admin")
            res.sendFile(__dirname + '/cartsme/index.html')
        } else {
            console.log("landingpage")
            res.sendFile(__dirname + '/landingpage/index.html')
        }
    })
    app.listen(8080, function () {
        console.log('App is listening on port 8080');
    });
} catch (error) {
    console.log(error);
    // res.sendFile(__dirname,'dist','index.html')

}