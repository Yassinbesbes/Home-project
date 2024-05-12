import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // Import cors middleware

const app = express();
dotenv.config();

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static("public"));

// Add cors middleware to allow cross-origin requests
app.use(cors());

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Database is connected successfully.");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));

    const productSchema = new mongoose.Schema({
        title: String,
        price: Number,
        src: String, // URL or path to the product image
        detail: String // Description or details about the product
    });

const ProductModel = mongoose.model("products", productSchema);

app.get("/getProducts", async (req, res) => {
    try {
        const productData = await ProductModel.find();
        res.json(productData);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
