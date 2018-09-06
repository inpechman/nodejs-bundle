const express = require('express');

const teamRouter = express.Router();


const data = [
    {
        "id": "1",
        "firstName": "Zoe",
        "lastName": "Treutel",
        "phone": "(242) 237-9791 x80086"
    },
    {
        "id": "2",
        "firstName": "Jamil",
        "lastName": "Lesch",
        "phone": "1-730-872-0936 x71860"
    },
    {
        "id": "3",
        "firstName": "Clair",
        "lastName": "Fritsch",
        "phone": "816.413.4634 x5476"
    },
    {
        "id": "4",
        "firstName": "Caleb",
        "lastName": "Rice",
        "phone": "545-644-0741 x7400"
    },
    {
        "id": "5",
        "firstName": "Harmon",
        "lastName": "Marks",
        "phone": "247-588-7556"
    },
    {
        "id": "6",
        "firstName": "Oda",
        "lastName": "Oberbrunner",
        "phone": "153.056.4549 x79796"
    },
    {
        "id": "7",
        "firstName": "Darius",
        "lastName": "Paucek",
        "phone": "628.479.6649 x346"
    },
    {
        "id": "8",
        "firstName": "Quinn",
        "lastName": "Effertz",
        "phone": "1-955-146-2833 x76017"
    },
    {
        "id": "9",
        "firstName": "Axel",
        "lastName": "Ward",
        "phone": "301.489.0562 x12074"
    }
];

const getMemberById = (id)=>{
    for (const member of data) {
        if (member.id === id) return member
    }
    return null
};
const addMemberToData =(member)=>{
    const newMember = {id: data.length + 1, ...member};
    data.push(newMember);
};

teamRouter.get('/member',(req,res)=>{
    res.send(data)
});
teamRouter.get('/member/:id',(req,res)=>{
    console.log(req);
    const member = getMemberById(req.params.id);
    if (member) res.send(member);
    else res.sendStatus(404)
});
teamRouter.post('/member', (req,res)=>{
    console.log(req);
    addMemberToData({...req.body});
    res.sendStatus(201)
});
module.exports = teamRouter;