const { request, response } = require('express');

const getUser = (req = request, res = response) => {
    res.json({mensaje:'Hello World from get-controller'})
}

const putUser = (req, res) => {
    res.status(400).json({mensaje:'Hello World from put-controller'})
}

const postUser = (req, res) => {
    const body = req.body;
    res.status(201).json({mensaje:'Hello World from post-controller', body})
}

const deleteUser = (req, res) => {
    res.json({mensaje:'Hello World from delete-controller'})
}

module.exports = {
    getUser,
    putUser,
    postUser,
    deleteUser
}