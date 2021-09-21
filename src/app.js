const command = process.argv[2]
const {addFilm, listFilm, updateFilm, deleteFilm} = require("./film/film.methods")

const app = async () => {
    switch (command) {
        case "add":
            const filmObj = {           //create function object
                name: process.argv[3],
                actor: process.argv[4],
                like: process.argv[5]
            }
            await addFilm(filmObj)
            //Pass filmObj to addFilm function
            break;
        case "list":
            await listFilm()
            break;
            // find all films from my SQL DB
        case "update":
            const update = {
                name: process.argv[3],
                like: process.argv[4]
            }
            await updateFilm(update)
            break;
        case "delete":
            const Film = {
                name: process.argv[3]
            }
            await deleteFilm(Film)
            break;

    }
}

app()