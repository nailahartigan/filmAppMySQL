const Film = require ("./film.model")       //dont requre curly brackets as mentioned module exports in film.model

exports.addFilm = async (filmObj) => {
    try {
        await Film.sync()
        await Film.create(filmObj)      //create = insert into
    } catch (error) {
        console.log(error)
    }
}

exports.listFilm = async () => {
    try {
        const list = await Film.findAll()
        console.log(list[0].dataValues)
    } catch (error) {
        console.log(error)
    }
}

exports.updateFilm = async (updateObj) => {
    try {
        await Film.update({like: updateObj.like},{where: {name: updateObj.name}})
        console.log(updateObj)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteFilm = async (film) => {
    try {
        await Film.destroy({where: film})

    } catch (error) {
        console.log(error)
    }
}