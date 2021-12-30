const express = require('express')

const User = require('../models/user.model')

const router = express.Router()

router.post('/', async (req, res) => {

    const username = req.body.username
    const city = req.body.city
    const age = req.body.age
    const education = req.body.education
    const gender = req.body.gender
    const contact = req.body.contact

    try {
        const user = await User.create({
            username, city, age, education, gender, contact
        })
        console.log("made request")
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send('User creation failed')
    }
})


router.get('/', async (req, res) => {
    console.log('getting students')
    const user = await User.find().lean().exec()
    res.status(200).send(user)
})



module.exports = router;