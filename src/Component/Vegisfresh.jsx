import { useEffect, useRef } from "react";

const vegData = [
  {
    id: 1,
    name: "Green Peas",
    hindi: "मटर",
    category: "Fruit Vegetables",
    price: 29,
    oldPrice: 50,
    discount: "42% OFF",
    qty: "500 Gm",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/15_s.jpg",
  },
  {
    id: 2,
    name: "Cauliflower",
    hindi: "फूलगोभी",
    category: "Fruit Vegetables",
    price: 45,
    oldPrice: 60,
    discount: "25% OFF",
    qty: "1 Pc",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/30_b.jpg",
  },
  {
    id: 3,
    name: "Tomato",
    hindi: "टमाटर",
    category: "Fruit Vegetables",
    price: 22,
    oldPrice: 30,
    discount: "27% OFF",
    qty: "500 Gm",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/14_s.jpg",
  },
  {
    id: 4,
    name: "Fenugreek",
    hindi: "मेथी",
    category: "Leafy Vegetables",
    price: 12,
    oldPrice: 15,
    discount: "20% OFF",
    qty: "1 Bunch",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/fenugreek.jpg",
  },
  {
    id: 5,
    name: "Coriander",
    hindi: "कोथिंबीर",
    category: "Leafy Vegetables",
    price: 13,
    oldPrice: 18,
    discount: "28% OFF",
    qty: "1 Bunch",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/coriander_s.jpg",
  },
  {
    id: 6,
    name: "Cabbage",
    hindi: "कोबी",
    category: "Fruit Vegetables",
    price: 30,
    oldPrice: 35,
    discount: "14% OFF",
    qty: "1 Pc",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/7_s.jpg",
  },
  {
    id: 7,
    name: "Onion",
    hindi: "प्याज",
    category: "Root Vegetables",
    price: 35,
    oldPrice: 45,
    discount: "22% OFF",
    qty: "1 Kg",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/28_s.jpg",
  },
  {
    id: 8,
    name: "Potato",
    hindi: "आलू",
    category: "Root Vegetables",
    price: 28,
    oldPrice: 40,
    discount: "30% OFF",
    qty: "1 Kg",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/29_s.jpg",
  },
  {
    id: 9,
    name: "Carrot",
    hindi: "गाजर",
    category: "Root Vegetables",
    price: 40,
    oldPrice: 55,
    discount: "27% OFF",
    qty: "500 Gm",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/carrot_new_s.jpg",
  },
  {
    id: 10,
    name: "Capsicum",
    hindi: "शिमला मिर्च",
    category: "Fruit Vegetables",
    price: 65,
    oldPrice: 80,
    discount: "19% OFF",
    qty: "500 Gm",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/19_s.jpg",
  },
  {
    id: 11,
    name: "Spinach",
    hindi: "पालक",
    category: "Leafy Vegetables",
    price: 20,
    oldPrice: 25,
    discount: "20% OFF",
    qty: "1 Bunch",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/1_b.jpg",
  },
  {
    id: 12,
    name: "Ginger",
    hindi: "अदरक",
    category: "Root Vegetables",
    price: 90,
    oldPrice: 120,
    discount: "25% OFF",
    qty: "250 Gm",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/ginger.jpg",
  },
  {
    id: 13,
    name: "Garlic",
    hindi: "लहसुन",
    category: "Root Vegetables",
    price: 80,
    oldPrice: 100,
    discount: "20% OFF",
    qty: "250 Gm",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/26_b.jpg",
  },
  {
    id: 14,
    name: "Cucumber",
    hindi: "खीरा",
    category: "Fruit Vegetables",
    price: 25,
    oldPrice: 35,
    discount: "29% OFF",
    qty: "500 Gm",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/17_s.jpg",
  },
  {
    id: 15,
    name: "Bitter Gourd",
    hindi: "करेला",
    category: "Fruit Vegetables",
    price: 35,
    oldPrice: 45,
    discount: "22% OFF",
    qty: "500 Gm",
    img: "https://mandai.in/admin/assets/admin/images/mandai_online/product/24_b.jpg",
  },
];
const VegisFresh = () => {
  const carouselRef = useRef();

  const scrollNext = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth / 6, // scroll 1 card width
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
        <h3 className="fw-bold" style={{ fontSize: "1.8rem" }}>Fresh Veggies</h3>
        <a
          href="#"
          className="text-decoration-none fw-bold text-primary"
          style={{ fontSize: "1rem" }}
        >
          See All
        </a>
      </div>

      <div className="position-relative">
        {/* Products Row */}
        <div
          ref={carouselRef}
          className="d-flex overflow-hidden"
          style={{ scrollBehavior: "smooth", gap: "6px" }}
        >
          {vegData.map((veg) => (
            <div
              key={veg.id}
              className="card text-center position-relative"
              style={{
                flex: "0 0 calc(100% / 6 - 6px)", 
                height: "450px",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0,0,0,0.2)";
                const img = e.currentTarget.querySelector("img");
                img.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
                const img = e.currentTarget.querySelector("img");
                img.style.transform = "scale(1)";
              }}
            >
              {/* Fixed Discount Badge */}
              <span
                className="badge bg-danger position-absolute d-flex align-items-center justify-content-center"
                style={{
                  top: "10px",
                  left: "10px",
                  width: "80px",
                  height: "28px",
                  fontSize: "1.0rem",
                  zIndex: 10,
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                {veg.discount}
              </span>

              <img
                src={veg.img}
                alt={veg.name}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
              />

              <div className="card-body p-2">
                <h6 className="card-title mb-1" style={{ fontSize: "1rem" }}>
                  {veg.name}
                </h6>
                <small className="text-muted d-block" style={{ fontSize: "0.85rem" }}>
                  {veg.category}
                </small>
                <p className="mt-2 mb-1 fw-bold text-danger" style={{ fontSize: "0.95rem" }}>
                  ₹{veg.price}{" "}
                  <span className="text-muted text-decoration-line-through" style={{ fontSize: "0.85rem" }}>
                    ₹{veg.oldPrice}
                  </span>
                </p>
                <small className="text-muted" style={{ fontSize: "0.85rem" }}>
                  {veg.qty}
                </small>
                <div>
                  <button className="btn btn-sm btn-warning mt-2" style={{ fontSize: "1.85rem" }}>
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


export default VegisFresh;