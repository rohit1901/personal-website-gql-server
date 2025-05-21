import { MongoClient } from 'mongodb';

async function getMongoClient(): Promise<MongoClient> {
  // @ts-ignore
  if (!global.mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not set.');
    }
    const client = new MongoClient(uri);
    // @ts-ignore
    global.mongoClientPromise = client.connect().catch((err: Error) => {
      // Reset the promise so future calls can retry
      // @ts-ignore
      global.mongoClientPromise = undefined;
      throw new Error(`Failed to connect to MongoDB: ${err.message}`);
    });
  }
  // @ts-ignore
  return global.mongoClientPromise;
}

export async function getMongoDb() {
  const mongoClient = await getMongoClient();
  const dbName = process.env.MONGODB_NAME;
  if (!dbName) {
    throw new Error('MONGODB_NAME environment variable is not set.');
  }
  return mongoClient.db(dbName);
}
