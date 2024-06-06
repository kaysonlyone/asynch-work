const fakeData = [
    {id:1, name: "entry1" },
    {id:2, name: "entry2"},
    {id:3, name: "entry3"}
];


const express = require('express');
const bodyParser = require('bodyParser');

const app = express();//app is set to the express database
const port = 3000;//port is set to 3000 where the server will be hosted

app.use(bodyParser.json())//body parse milidware is added to to parse json data

//implement a get request to get all the data
//this is simply a get request that has a request to grab all the data from the datbase and has a response to the request with returning all the data in that data base
app.get('/api/data', (req, res) => {
        res.json(fakeData)
});

//implement a post request to add a new id to the database
app.post('/api/data', (req,res) => {
    const newEntryType = req.body;//establishinga variable of new entry where we will put thr creation of a new entry to be placed in the database
    setTimeout(() => {
        fakeData.push(newEntryType);//using the push method to push the new entry to the database called fake data
        res.status(201).json(newEntryType); //sends back http code 201 to show everything is ok and it has been created
    }, 2000) //set timeout of 2000 milliseconds or two second
})

//implement a put request to update the data in the database
app.put('/app/data/:id', (req,res) => {
    const id = parseInt(req.params.id);//establishing a variable called id to find the id in the and converts it over to as integer
    const updatedEntry = req.body;// establishing a variable callled update entry to process the put request

    setTimeout(() => {
        //using for each method to iterate throught the database by id and entry and then run conditional statement to check if its their.
        fakeData.forEach(entry => {
            if(entry.id === id){
                entry.name = updatedEntry.name;
            }
        });
    
        res.json(updataEntry);
    }, 2000)// set timeout of 2000 milliseconds or 2 second
})

//implement a delete request to remove the data from the database
app.delete('/app/data/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const indexToDelete = fakeData.findIndex(entry => entry.id === id);// returns the index of the first entry.id element that meets the criterial.

    //condtional statement to check if the entry exists in fake data database
    setTimeout(() => {
        if(index !== -1){
            fakeData.splice(index,1);//if the entry exists in thedata base remove it from the database suing the slice method
            res.status(204);
        }else{
            res.status(404).json({error:'Entry not found'});//if the entry sint found it will send back a 404 
        }
        res.json(indexToDelete);
    }, 2000);
});