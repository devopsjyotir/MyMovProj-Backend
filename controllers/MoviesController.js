const { Movie } = require('../sequelize/models')


// Get all movies
const GetAllMovies = async(req, res) => {
    try{
        const movies = await Movie.findAll()
        res.send(movies)
    } catch(error){
        throw error
    }
}

// Get Movie Details
const GetMovieDetails = async(req, res) => {
    try {
        const movies = await Movie.findByPk(req.params.movie_id)
        res.send(movies)
    } catch (error){
        throw error
    }
}







// Create movie 
const CreateMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body)
        res.send(newMovie)
    } catch (error){
        throw error
    }
}



module.exports = {
GetAllMovies,
GetMovieDetails,
CreateMovie
}