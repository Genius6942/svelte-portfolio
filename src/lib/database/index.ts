import { MONGODB_URI } from "$env/static/private";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import type { OptionalId, Document, WithId, Filter } from "mongodb";
// Replace the placeholder with your Atlas connection string
const uri = MONGODB_URI;

export const database = import.meta.env.DEV ? "dev" : "prod";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// @ts-ignore
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  // @ts-ignore
  if (!global._mongoClientPromise) {
    // @ts-ignore
    global._mongoClientPromise = client.connect();
  }
  // @ts-ignore
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export { clientPromise as dbClient };

let connecting: boolean | Promise<MongoClient> = true;

(async () => {
  // Connect to the MongoDB cluster
  connecting = client.connect();
  await connecting;
  connecting = false;
})();

export const query = async <T = any>(
  collection: string,
  query: Filter<Document>,
  projection: Document = {}
) => {
  if (connecting) await connecting;
  return (await client
    .db(database)
    .collection(collection)
    .find(query)
    .project(projection)
    .toArray()) as WithId<T>[];
};

export const update = async <T = any>(collection: string, query: any, update: any) => {
  if (connecting) await connecting;
  return (await client.db(database).collection(collection).updateOne(query, update)) as T;
};

export const insert = async <T = any>(collection: string, doc: OptionalId<Document>) => {
  if (connecting) await connecting;
  return (await client.db(database).collection(collection).insertOne(doc)) as T;
};

export const updateOrInsert = async <T = any>(collection: string, search: any, set: any) => {
  if (connecting) await connecting;
  const queryRes = await query(collection, search);
  if (queryRes.length > 0) {
    return await update<T>(collection, search, { $set: { ...set } });
  } else {
    return await insert<T>(collection, set);
  }
};

export const remove = async (collection: string, search: any) => {
  if (connecting) await connecting;
  const res = await client.db(database).collection(collection).deleteOne(search);
  return !!res.deletedCount;
};

export const transformID = <T extends { _id: ObjectId }>(object: T) => {
  return { ...object, _id: object._id.toString() } as Omit<T, "_id"> & {
    _id: string;
  };
};
