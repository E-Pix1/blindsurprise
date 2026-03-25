import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "api", "json", "products.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(fileData);

    res.status(200).json(products);
  } catch (error) {
    console.error("Error loading products:", error);
    res.status(500).json({ error: "Failed to load products" });
  }
}
