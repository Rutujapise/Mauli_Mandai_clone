import { useRef } from "react";

const fruitData = [
  {
    id: 1,
    name: "Apple",
    category: "Fresh Fruits",
    price: 120,
    oldPrice: 150,
    discount: "20% OFF",
    qty: "1 Kg",
    img: "https://via.placeholder.com/250x250.png?text=Apple",
  },
  {
    id: 2,
    name: "Banana",
    category: "Fresh Fruits",
    price: 40,
    oldPrice: 50,
    discount: "20% OFF",
    qty: "1 Dozen",
    img: "https://via.placeholder.com/250x250.png?text=Banana",
  },
  {
    id: 3,
    name: "Orange",
    category: "Citrus Fruits",
    price: 80,
    oldPrice: 100,
    discount: "20% OFF",
    qty: "1 Kg",
    img: "https://via.placeholder.com/250x250.png?text=Orange",
  },
  {
    id: 4,
    name: "Mango",
    category: "Tropical Fruits",
    price: 200,
    oldPrice: 250,
    discount: "20% OFF",
    qty: "1 Kg",
    img: "https://via.placeholder.com/250x250.png?text=Mango",
  },
  {
    id: 5,
    name: "Grapes",
    category: "Fresh Fruits",
    price: 90,
    oldPrice: 120,
    discount: "25% OFF",
    qty: "500 Gm",
    img: "https://via.placeholder.com/250x250.png?text=Grapes",
  },
  {
    id: 6,
    name: "Pineapple",
    category: "Tropical Fruits",
    price: 150,
    oldPrice: 180,
    discount: "17% OFF",
    qty: "1 Pc",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/fruits_products_pineapple_s.jpg",
  },
  {
    id: 7,
    name: "Strawberry",
    category: "Berries",
    price: 250,
    oldPrice: 300,
    discount: "17% OFF",
    qty: "250 Gm",
    img: "https://via.placeholder.com/250x250.png?text=Strawberry",
  },
  {
    id: 8,
    name: "Papaya",
    category: "Tropical Fruits",
    price: 100,
    oldPrice: 130,
    discount: "23% OFF",
    qty: "1 Pc",
    img: "https://via.placeholder.com/250x250.png?text=Papaya",
  },
  {
    id: 9,
    name: "Watermelon",
    category: "Melons",
    price: 60,
    oldPrice: 80,
    discount: "25% OFF",
    qty: "1 Pc",
    img: "https://via.placeholder.com/250x250.png?text=Watermelon",
  },
  {
    id: 10,
    name: "Kiwi",
    category: "Exotic Fruits",
    price: 300,
    oldPrice: 350,
    discount: "14% OFF",
    qty: "3 Pc",
    img: "https://via.placeholder.com/250x250.png?text=Kiwi",
  },
  {
    id: 11,
    name: "Pomegranate",
    category: "Fresh Fruits",
    price: 180,
    oldPrice: 220,
    discount: "18% OFF",
    qty: "1 Kg",
    img: "https://via.placeholder.com/250x250.png?text=Pomegranate",
  },
  {
    id: 12,
    name: "Guava",
    category: "Tropical Fruits",
    price: 70,
    oldPrice: 100,
    discount: "30% OFF",
    qty: "1 Kg",
    img: "https://via.placeholder.com/250x250.png?text=Guava",
  },
  {
    id: 13,
    name: "Dragon Fruit",
    category: "Exotic Fruits",
    price: 400,
    oldPrice: 450,
    discount: "11% OFF",
    qty: "1 Pc",
    img: "https://via.placeholder.com/250x250.png?text=Dragon+Fruit",
  },
  {
    id: 14,
    name: "Blueberry",
    category: "Berries",
    price: 500,
    oldPrice: 600,
    discount: "17% OFF",
    qty: "125 Gm",
    img: "https://via.placeholder.com/250x250.png?text=Blueberry",
  },
  {
    id: 15,
    name: "Cherry",
    category: "Berries",
    price: 450,
    oldPrice: 520,
    discount: "13% OFF",
    qty: "250 Gm",
    img: "https://via.placeholder.com/250x250.png?text=Cherry",
  },
  {
    id: 16,
    name: "Pear",
    category: "Fresh Fruits",
    price: 160,
    oldPrice: 200,
    discount: "20% OFF",
    qty: "1 Kg",
    img: "https://via.placeholder.com/250x250.png?text=Pear",
  },
  {
    id: 17,
    name: "Litchi",
    category: "Seasonal Fruits",
    price: 300,
    oldPrice: 350,
    discount: "14% OFF",
    qty: "500 Gm",
    img: "https://via.placeholder.com/250x250.png?text=Litchi",
  },
  {
    id: 18,
    name: "Coconut",
    category: "Tropical Fruits",
    price: 50,
    oldPrice: 70,
    discount: "29% OFF",
    qty: "1 Pc",
    img: "https://via.placeholder.com/250x250.png?text=Coconut",
  },
  {
    id: 19,
    name: "Custard Apple",
    category: "Seasonal Fruits",
    price: 180,
    oldPrice: 220,
    discount: "18% OFF",
    qty: "500 Gm",
    img: "https://via.placeholder.com/250x250.png?text=Custard+Apple",
  },
  {
    id: 20,
    name: "Blackberry",
    category: "Berries",
    price: 350,
    oldPrice: 420,
    discount: "17% OFF",
    qty: "125 Gm",
    img: "https://via.placeholder.com/250x250.png?text=Blackberry",
  },
];

const FruitsFresh = () => {
  const carouselRef = useRef();

  const scrollNext = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth / 6,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth / 6,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-fluid mt-4" style={{ paddingLeft: "15px", paddingRight: "15px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold" style={{ fontSize: "1.8rem" }}>Fresh Fruits</h3>
        <a href="#" className="text-decoration-none fw-bold text-primary" style={{ fontSize: "1rem" }}>
          See All
        </a>
      </div>

      <div className="position-relative">
        <div
          ref={carouselRef}
          className="d-flex overflow-hidden"
          style={{ scrollBehavior: "smooth", gap: "6px" }}
        >
          {fruitData.map((fruit) => (
            <div
              key={fruit.id}
              className="card text-center position-relative"
              style={{
                flex: "0 0 calc(100% / 6 - 6px)",
                height: "450px",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
                const img = e.currentTarget.querySelector("img");
                img.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
                const img = e.currentTarget.querySelector("img");
                img.style.transform = "scale(1)";
              }}
            >
              <span
                className="badge bg-danger position-absolute d-flex align-items-center justify-content-center"
                style={{
                  top: "10px",
                  left: "10px",
                  width: "80px",
                  height: "28px",
                  fontSize: "1rem",
                  zIndex: 10,
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                {fruit.discount}
              </span>

              <img
                src={fruit.img}
                alt={fruit.name}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
              />

              <div className="card-body p-2">
                <h6 className="card-title mb-1" style={{ fontSize: "1rem" }}>
                  {fruit.name}
                </h6>
                <small className="text-muted d-block" style={{ fontSize: "0.85rem" }}>
                  {fruit.category}
                </small>
                <p className="mt-2 mb-1 fw-bold text-danger" style={{ fontSize: "0.95rem" }}>
                  ₹{fruit.price}{" "}
                  <span className="text-muted text-decoration-line-through" style={{ fontSize: "0.85rem" }}>
                    ₹{fruit.oldPrice}
                  </span>
                </p>
                <small className="text-muted" style={{ fontSize: "0.85rem" }}>
                  {fruit.qty}
                </small>
                <div>
                  <button className="btn btn-sm btn-warning mt-2" style={{ fontSize: "0.85rem" }}>
                    🛒 Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
        >
          ◀
        </button>
        <button
          onClick={scrollNext}
          className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default FruitsFresh;
