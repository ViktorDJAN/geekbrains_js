const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');





app.use((req, res, next) => {
    console.log('Received a request', req.method, req.url);
    next();

})

app.get('/', (req, res) => {
    // reading from the file

    const pathToFileHome = path.join(__dirname, 'resortingCounter.json');
    const resortingCounterData = JSON.parse(fs.readFileSync(pathToFileHome, 'utf-8'));
    let qtyVisits = resortingCounterData.count++;
    fs.writeFileSync(pathToFileHome, JSON.stringify(resortingCounterData, null, 2));
    res.send('Welcome to my site and qty of resorts = ' + qtyVisits);

})

app.get('/about', (req, res) => {
    const pathToFileHome = path.join(__dirname, 'resortingCounter2.json');
    const resortingCounterData = JSON.parse(fs.readFileSync(pathToFileHome, 'utf-8'));
    let qtyVisits = resortingCounterData.count++;
    fs.writeFileSync(pathToFileHome, JSON.stringify(resortingCounterData, null, 2));

    res.send('A bit About me qty resorts = ' + qtyVisits )
})
const port = 3000;
app.listen(port, () => {
    console.log("Server started on port " + port);
})