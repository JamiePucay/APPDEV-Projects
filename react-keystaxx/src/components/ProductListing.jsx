import { Link } from 'react-router-dom';

const ProductListing = () => {
  const products = [
    { id: 1, name: 'Artisan Keyboard Model A', price: 250, description: 'Premium artisan keyboard.' },
    { id: 2, name: 'Artisan Keyboard Model B', price: 250, description: 'Better keyboard.' },
    { id: 3, name: 'Artisan Keyboard Model C', price: 250, description: 'Pink keyboard.' },
    { id: 4, name: 'Artisan Keyboard Model D', price: 250, description: 'Galaxy keyboard.' },

  ];

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
