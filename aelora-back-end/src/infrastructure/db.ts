import mongoose from 'mongoose';

/*export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log(error);
    }
};*/

/*export const connectDB = () => {
    console.log("A");

    const connection = mongoose.connect(
        "mongodb+srv://kasunindrajithw0927_db_user:dvIQtPr3TtecuiFf@cluster0.wgnxx7b.mongodb.net/?appName=Cluster0"
    );
    connection.then(() => {
        console.log("Connect to MongoDB");
    })
    .catch((error) => {
        console.log("Error while connecting to MongoDB", error);
    });

    console.log("C");
}*/

export const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        const MONGODB_URI = process.env.MONGODB_URI;
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log("Error while connecting to MongoDB", error);
    }
};

