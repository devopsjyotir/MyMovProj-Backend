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




module.exports = {
GetAllMovies
}