const jwt = require('jsonwebtoken');

module.exports = {
    verify: (req, res, next) => {
            // console.log(req.headers.token)
        try {
            const token = req.headers['token'];
            const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
            next();
        } catch (err) {
            res.json({
                msg: 'Token infalid, Please Login!'
            });
        }
    },
    // cekrole: (req, res, next) => {
    //     if (process.env.ROLE == 1) {
    //         next();
    //     } else {
    //         res.json({
    //             msg: 'You canot access!'
    //         })
    //     }
    // }
}