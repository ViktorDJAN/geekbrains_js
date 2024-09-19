app.use(express.json());

//get whole list
app.get('/users', (req, res) => {
    const usersJson = fs.readFileSync(usersListPath, 'utf-8');
    const usersData = JSON.parse(usersJson);
    res.send({ users: usersData });
});

//get by id
app.get('/users/:id', (req, res) => {
    const usersJson = fs.readFileSync(usersListPath, 'utf-8');
    const usersData = JSON.parse(usersJson);
    const user = usersData.find((user) => user.id === Number(req.params.id));

    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null, message: 'Пользователь не найден' });
    }
});

//post
app.post('/users', (req, res) => {
    const validateData = userSchema.validate(req.body);
    if (validateData.error) {
        return res.status(400).send({error: validateData.error.details})
    };
    const usersJson = fs.readFileSync(usersListPath, 'utf-8');
    const usersData = JSON.parse(usersJson);

    uniqueID += 1;

    usersData.push({
        id: uniqueID, //"id": 1+1
        ...req.body // spread оператор,
    });
    fs.writeFileSync(usersListPath, JSON.stringify(usersData));

    res.send({
        id: uniqueID,
    });
});
//put
app.put('/users/:id', (req, res) => {
    const validateData = userSchema.validate(req.body);
    if (validateData.error) {
        return res.status(400).send({error: validateData.error.details})
    };
    const usersJson = fs.readFileSync(usersListPath, 'utf-8');
    const usersData = JSON.parse(usersJson);

    const user = usersData.find((user) => user.id === Number(req.params.id));

    if (user) {
        user.firstName = req.body.firstName;
        user.secondName = req.body.secondName;
        user.age = req.body.age;
        user.city = req.body.city;

        fs.writeFileSync(usersListPath, JSON.stringify(usersData));

        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null, message: 'Пользователь не найден' });
    }
});

//delete
app.delete('/users/:id', (req, res) => {
    const usersJson = fs.readFileSync(usersListPath, 'utf-8');
    const usersData = JSON.parse(usersJson);

    const usersIndex = usersData.findIndex((user) => user.id === Number(req.params.id));

    if (usersIndex > -1) {
        usersData.splice(usersIndex, 1); // Удаляет один элемент с позиции [userIndex], а цифра(единичка) - это количество удаляемых элементов, начиная с данной позиции

        fs.writeFileSync(usersListPath, JSON.stringify(usersData));
        res.send({ message: 'Пользователь успешно удален!' });
    } else {
        res.status(404);
        res.send({ message: 'Пользователь не найден!' });
    }
});
//processing unexisting routes
app.use((req, res) => {
    res.status(404). send({
        message: 'URL not found!'
    })
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});



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

////////////////////////////
