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
                userId: userId
            },
            attributes: ["userId", "movieId"]
        })
        res.send(userRelation)
    } catch (error) {
        throw error
    }
}

const GetUserMovieRelations = async (req, res) => {
    try{ 
        let userId = parseInt(req.params.user_id)
        let movieId = parseInt(req.params.movie_id)
        const userRelation = await Watchlist.findAll({
            where: {
                userId: userId,
                movieId: movieId
            },
            attributes: ["userId", "movieId"]
        })
        res.send(userRelation)
    } catch (error) {
        throw error
    }
} 

// get yet to watch movies
const GetWatchList = async (req, res) => {
    try{ 
        let userId = parseInt(req.params.user_id)
        const userRelation = await Watchlist.findAll({
            where: {
                userId: userId,
           
            },
            attributes: ["userId", "movieId", ]
        })
        res.send(userRelation)
    } catch (error) {
        throw error
    }
}

// GEt only watched movies 
const GetWatchedMovies = async (req, res) => {
    try{ 
        let userId = parseInt(req.params.user_id)
        const userRelation = await Watchlist.findAll({
            where: {
                userId: userId,
           
            },
            attributes: ["userId", "movieId"]
        })
        res.send(userRelation)
    } catch (error) {
        throw error
    }
}

// Create Relation
const CreateRelation = async (req, res ) => {
    try {
        const newRelation = await Watchlist.create(req.body)
        res.send(newRelation)
    } catch (error){
        throw error
    }
}



module.exports = {
    GetAllRelations,
    GetUserRelations,
    GetWatchList,
    GetWatchedMovies,
    CreateRelation,
    GetUserMovieRelations
}


