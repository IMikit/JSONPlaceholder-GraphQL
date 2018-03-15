const { GraphQLServer } = require('graphql-yoga')
const { getResourceByPath } = require('./api')


const resolvers = {
    Query: {
        posts: async () => await getResourceByPath('posts'),
        post: async (parent, args) => await getResourceByPath('posts', args.id),

        comments: async () => await getResourceByPath('comments'),
        comment: async (parent, args) => await getResourceByPath('comments', args.id),

        albums: async () => await getResourceByPath('albums'),
        album: async (parent, args) => await getResourceByPath('albums', args.id),

        photos: async () => await getResourceByPath('photos'),
        photo: async (parent, args) => await getResourceByPath('photos', args.id),

        todos: async () => await getResourceByPath('todos'),
        todo: async (parent, args) => await getResourceByPath('todos', args.id),

        users: async () => await getResourceByPath('users'),
        user: async (parent, args) => await getResourceByPath('users', args.id),
    },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start(() => console.log(`The server is running on http://localhost:4000`))