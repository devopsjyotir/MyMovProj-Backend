const { User } = require('../sequelize/models')

// Get all USers
const GetAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}


// Find User by id
const GetUserDetails = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.user_id)
        res.send(users)
    } catch (error) {
        throw error
    }
}



module.exports = {
    GetAllUsers,
    GetUserDetails
}