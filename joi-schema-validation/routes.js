const express = require('express');
const router = express.Router();
const SchemaValidator = require('./middlewares/SchemaValidator');

const validateRequest = SchemaValidator(true);

const genericHandler = (req, res, next) => {
    res.json({
        status: 'success',
        data: req.body
    });
};

router.post('/people', validateRequest, genericHandler);
router.post('/auth/edit', validateRequest, genericHandler);
router.post('/fees/pay', validateRequest, genericHandler);

module.exports = router;
