const express = require('express')

const app = express()

const Admin = require('./models/admin.model')

app.use(express.json())

app.post("/smu-admins", async (req, res) => {
    const admin = await Admin.create(req.body)

    return res.status(201).send({ admin })
})

module.exports = app;