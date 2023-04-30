import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB connected successfully");
});

// const user = new UserModel({
//   firstName: "João",
//   lastName: "Silva",
//   email: "joao.silva@example.com",
//   birthDate: new Date("1990-01-01"),
//   gender: "male",
//   profilePicture: "https://example.com/joao_silva.jpg",
//   profileCover: "https://example.com/joao_silva_cover.jpg",
// });

// // Salvar o usuário no banco de dados
// (async function saveUser() {
//   // Salvar o usuário no banco de dados
//   try {
//     const result = await user.save();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// import { DataSource } from "typeorm";
// import "dotenv/config";

// export const AppDataSource = new DataSource(
//   process.env.NODE_ENV === "test"
//     ? {
//         type: "sqlite",
//         database: ":memory:",
//         synchronize: true,
//         entities: ["src/entities/*.ts"],
//       }
//     : {
//         type: "mongodb",
//         url: `${process.env.MONGODB_URL}`,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         logging: true,
//         synchronize: true,
//         entities: ["src/entities/*.ts"],
//         migrations: ["src/migrations/*.ts"],
//       }
// );
