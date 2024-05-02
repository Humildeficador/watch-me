import { Model, createServer } from 'miragejs'
import { genres } from '../utils/genres'
import { movies } from '../utils/movies'

export function makeServer() {
    return createServer({
        models: {
            genre: Model,
            movie: Model
        },

        seeds(server) {
            server.db.loadData({
                genres,
                movies
            })
        },

        routes() {
            this.namespace = 'api'

            this.get('/genres')

            this.get('/movies')
        },
    })
}