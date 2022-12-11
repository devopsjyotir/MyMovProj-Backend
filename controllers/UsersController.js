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

// Create a new user
const CreateUser = async (req, res) => {
    try{
        const newUser = await User.create(req.body)
        res.send(newUser)
    } catch (error){
        throw error
    }
}

// Update User by id
const UpdateUser = async (req, res) => {
    try{
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
        where:{id:userId},
        returning:true
    })
    res.send(updatedUser)
    } catch (error){
        throw error
    }
}



module.exports = {
    GetAllUsers,
    GetUserDetails,
    CreateUser,
    UpdateUser
}