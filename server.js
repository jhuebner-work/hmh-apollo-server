
const { ApolloServer, gql } = require('apollo-server');
const assessments = require('./assessments.json');

const typeDefs = gql`
  type Answer {
    id: String
    value: String
  }

  type Step {
    id: String
    questionText: String
    correctAnswer: Int
    possibleAnswers: [Answer]
    userInput: Boolean
  }

  type Problem {
    id: String
    steps: [Step]
  }

  type Query {
    problems: [Problem]
  }
`;

const resolvers = {
  Query: {
    problems: () => assessments.problems
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});