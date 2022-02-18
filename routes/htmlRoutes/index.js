
const path = require('path');
// const router = require('express').Router;
const express = require('express').Router;
const router = require('../apiRoutes/notes')

router.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '../../public.index.html'))
});

router.get("*", (req, res) =>{
    res.sendfile(path.join(__dirname, '../../public.notes.html'))
});



module.exports = router;