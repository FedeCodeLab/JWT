import DBLocal from "db-local";
const { Schema } = new DBLocal({ path: "./db" });

const User = Schema("user", {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export class userRepository {
  static create({ username, password }) {}
  static login({ username, password }) {}
}
