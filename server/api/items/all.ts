export default defineEventHandler(() => {
  return [
    {
      id: 1,
      name: "Laptop",
      image: "logo.png",
      category: "Electronics",
      price: 100,
      available: true,
    },
    {
      image: "logo.png",
      id: 2,
      name: "Sofa",
      category: "Furniture",
      price: 50,
      available: true,
    },
    {
      image: "logo.png",
      id: 3,
      name: "Car",
      category: "Vehicles",
      price: 200,
      available: true,
    },
    {
      id: 4,
      name: "Smartphone",
      image: "logo.png",
      category: "Electronics",
      price: 30,
      available: false,
    },
    {
      image: "logo.png",
      id: 5,
      name: "Table",
      category: "Furniture",
      price: 20,
      available: true,
    },
  ];
});
