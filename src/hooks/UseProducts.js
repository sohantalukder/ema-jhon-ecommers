import { useEffect, useState } from "react";

const UseProducts = () => {
  const [products, SetProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => SetProducts(data.products));
  }, []);

  //Return necessary things
  return [products];
};

export default UseProducts;
