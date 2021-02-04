const { ApolloServer, gql } = require('apollo-server');

// スキーマの定義
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// クエリで取得するデータ
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crishton"
  }
];

// クエリ発行時の処理を指定する
const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({typeDefs, resolvers});

// サーバーを起動
server.listen().then(url => {
  console.log(`🚀 Server ready at ${url}`);
});
