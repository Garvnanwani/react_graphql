import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: "https://movie-api-graphql.vercel.app"
})

export default client
