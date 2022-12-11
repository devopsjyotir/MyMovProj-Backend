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

// update movie 
const UpdateMovie = async (req, res) => {
    try{
        let movieId = parseInt(req.params.movie_id)
        let updatedMovie = await Movie.update(req.body, {
            where:{id:movieId},
            returning:true
        })
        res.send(updatedMovie)
    } catch (error) {
        throw error
    }
}

// delete Movie
const DeleteMovie = async (req, res) => {
    try {
        let movieId = parseInt(req.params.movie_id)
        await Movie.destroy({where:{id:movieId}})
        res.send({message:`Deleted Movie with id of ${movieId}`})
    } catch (error) {
        throw error
    }
}


module.exports = {
GetAllMovies,
GetMovieDetails,
CreateMovie,
UpdateMovie,
DeleteMovie
}