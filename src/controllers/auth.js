const jwt = require('jsonwebtoken');
const conn = require('../configs/db');
const authModels = require('../models/auth');
const miscHelpers = require('../helpers/helpers');
const bcrypt = require('bcryptjs');

module.exports = {
    loginUser: (req, res) => {
        const username = req.body.username;
        conn.query("SELECT * FROM `user` WHERE username= ?", [username], (err, result) => {
            if (!err) {
                if (result.length > 0) {
                    const passwordInput = req.body.password;
                    const passwordHash = result[0].password;
                    const id_user = result[0].id;
                    const role = result[0].role;
                    const data = "";
                    bcrypt.compare(passwordInput, passwordHash, function (err, resPass) {
                        if (resPass) {
                            const token = jwt.sign({ id_user, username, role }, process.env.PRIVATE_KEY)
                            res.json({
                                id: id_user,
                                username: username,
                                token: token,
                            });
                        } else {
                            res.json({ msg: 'Password Wrong!' })
                        }
                    });
                } else {
                    res.json({ msg: 'Username not found, please register!' });
                }
            } else {
                console.log(err);
            }
        })

    },

    logout: (req, res) => {
        process.env.TOKEN = "";
        process.env.SESSION = "";
        res.send("Succes Logout!");
    },

    register: (req, res) => {
        const { username, password, role } = req.body;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                const data = {
                    username: username,
                    password: hash,
                    role: role
                }
                conn.query("SELECT * FROM `user` WHERE username=?", username, (err, result) => {
                    if (!err) {
                        if (result.length > 0) {
                            res.json({ msg: 'username already registered!' });
                        } else {
                            authModels.register(data)
                                .then((result) => {
                                    miscHelpers.response(res, result, 200);
                                })
                                .catch(err => console.log(err));
                        }
                    }
                });
            });
        });
    },

    getAll: (req, res) => {
        authModels.getAll()
            .then((result) => {
                miscHelpers.response(res, result, 200)
            })
            .catch(err => console.log(err))
    },
    getUserByID: (req, res) => {
        const id = req.params.id
        conn.query("Select username from user WHERE id=?", id, (err, result) => {
            res.json(result)
        })
    }
}