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

// Get User Movie relation by id
const GetUserRelations = async (req, res) => {
    try{ 
        let userId = parseInt(req.params.user_id)
        const userRelation = await Watchlist.findAll({
            where: {
                user_id: userId
            },
            attributes: ["user_id", "movie_id", "watched_status"]
        })
        res.send(userRelation)
    } catch (error) {
        throw error
    }
}


const GetWatchList = async (req, res) => {
    try{ 
        let userId = parseInt(req.params.user_id)
        const userRelation = await Watchlist.findAll({
            where: {
                user_id: userId,
                watched_status: 'false'
            },
            attributes: ["user_id", "movie_id", "watched_status"]
        })
        res.send(userRelation)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetAllRelations,
    GetUserRelations,
    GetWatchList
}


