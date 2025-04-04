import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const api = import.meta.env.VITE_API;
const accessToken = "64bebc1e2c6d3f056a8c85b7";
const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `${api}/flower/product/${productId}?access_token=${accessToken}`
        );
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{product?.name}</h1>
      <img src={product?.main_image} alt={product?.name} />
      <p>Price: ${product?.price}</p>
      <p>Description: {product?.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
