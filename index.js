const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5099;


app.use(cors())
app.use(express.json())

app.get('/',(req, res) => {
    res.send('Look mama i can code node now yeahhhoo')
});

const users = [
    {id: 1, name: 'shabnur', email: 'shabnur@gmail.com', phone: '01788888888'},
    {id: 2, name: 'shuchorita', email: 'shuchorita@gmail.com', phone: '01788888888'},
    {id: 3, name: 'rojina', email: 'rojina@gmail.com', phone: '01788888888'},
    {id: 4, name: 'sraboni', email: 'sraboni@gmail.com', phone: '01788888888'},
    {id: 5, name: 'srabonti', email: 'srabonti@gmail.com', phone: '01788888888'},
    {id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '01788888888'},
    {id: 7, name: 'sabana', email: 'sabana@gmail.com', phone: '01788888888'},
]

app.get('/users',(req, res) => {
   if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
   }
   else{
       res.send(users);
   }
});
app.get('/user/:id',(req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);

});
app.post('/user', (req, res) =>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits',(req, res) =>{
    res.send(['mango','apple','oranges']);
});

app.get('/fruits/mango/fazle', (req, res) =>{
    res.send('sour sour fazle flavor');
})

app.listen(port,() => {
    console.log('Listening to port', port);

})
