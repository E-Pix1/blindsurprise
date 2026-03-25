export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Beach Time!",
      price: 0,
      stock: 10,
      description: "A summer-themed blind bag featuring Cool, Amazing, and ULTRA Cool surprises.",
      rarityLevels: ["Cool", "Amazing", "ULTRA Cool"],
      creators: "E‑Pix® and Liza Wuol® 2026",
      images: [
        "/beach-time-front.jpg",
        "/beach-time-back.jpg"
      ]
    }
  ];

  res.status(200).json(products);
}
