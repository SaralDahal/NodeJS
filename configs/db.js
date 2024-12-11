import mongoose from "mongoose"

export const dbConnection = async () => {
    try {
        const { connection } = await mongoose.connect("mongodb+srv://sdahal2060:saral%40098@saral.slb53.mongodb.net/", {
            serverApi: {
                strict: false,
                deprecationErrors: true,
                version: "1"
            }
        })

        console.log("db connected successfully" + connection?.host)
    } catch (error) {
        console.log("db connected unseccussfullly", error.message)
        process.exit(1);
    }
}