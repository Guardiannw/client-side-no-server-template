const cors = require('cors');
const express = require('express');
const app = express();
const uuid = require('uuid/v4');


let users = [
    {
        name: 'Timmy',
        age: 12,
        id: uuid()
    }
];

app.use(cors())
.get('/', (req, res) => {
    res.send(users);
}).post('/', express.json(), (req, res) => {
    const user = {...req.body, id: uuid()};

    users.push(user);

    res.send(user);
}).delete('/:user_id', (req, res) => {
    users = users.filter((user) => user.id !== req.params.user_id);

    res.sendStatus(200);
});

app.listen(8080);