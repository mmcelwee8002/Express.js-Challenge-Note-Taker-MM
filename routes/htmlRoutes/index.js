const { Router } = require('express');
const path = require('path');
const express = require('express').Router;

Router.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '../../public.index.html'))
});

Router.get("*", (req, res) =>{
    res.sendfile(path.join(__dirname, '../../public.notes.html'))
});



module.exports = router;