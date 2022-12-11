const { Watchlist, Movie, User } = require('../sequelize/models')

// Get all relations 
const GetAllRelations = async (req, res) => {
    try{
        const relations = await Watchlist.findAll()
        res.send(relations)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllRelations
}


