import { connect } from "mongoose";

const mongoDBUrl = process.env.MONGO_URI;

if (!mongoDBUrl) {
  throw new Error("Mongo db url not found");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const connectDb = async () => {
  if (cached.conn) {
    console.log("Cached DB Connected Successfully");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = connect(mongoDBUrl).then((c) => c.connection);
  }

  try {
    cached.conn = await cached.promise;
    console.log("DB Connected Successfully");
  } catch (error) {
    throw error;
  }

  return cached.conn;
};

export default connectDb;
