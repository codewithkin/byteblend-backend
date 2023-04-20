const User = require('../models/User');

const createUser = async (req, res) => {
    const userJson = JSON.stringify(req.body);
    const userInfo = JSON.parse(userJson);
    const { email } = userInfo;
    const exists = await User.exists({ email })
    //res.json({doesItExist: exists});
    if(exists == null) {
        User.create(userInfo)
            .then((uer) => res.json({userInfo}))
    } else {
        res.json({ mssg: "The user already exists" });
    }

    return exists;
}

const updateUserPassword = async (req, res) => {
    //Getting the user's id
    const { email } = req.body;

    //Finding the new Password that is being sent in the body
    const { newPassword } = req.body;

    //Find the document with the provided id
    try {
        const user = User.find({ email })
            .then((user) => res.json({ user }))
            .then((user) => User.updateOne({ password: newPassword }))
    }
    catch(e) {
        throw new Error("Problem changing the password")
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const userToDelete = await User.findByIdAndDelete(id)
        .then(user => res.json({ user }))
        .catch(error => res.json({ error }))
}

const getUser = async (req, res) => {
    const { email } = req.params;
    const exists = await User.findOne({ email });
    //res.json({ email })
    if(exists != null) { 
        const user = await User.find({ email })
            .then((usr) => { return res.json({ usr }) })
            .catch((error) => re.json({error}));
    } else {
        res.json({ mssg: "This user does not exist" });
    } 
}

module.exports = {
    getUser, getUser, deleteUser, createUser, updateUserPassword
}