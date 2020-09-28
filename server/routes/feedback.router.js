const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// POST route for submitResponse
router.post('/', (req, res) => {
    const newResponse = req.body
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

    pool.query(sqlText, [newResponse.question1, newResponse.question2, newResponse.question3, newResponse.question4])
        .then(result => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
})

module.exports = router;
