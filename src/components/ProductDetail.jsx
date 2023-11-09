import "./ProductDetail.css";
import PropTypes from "prop-types";

ProductDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    SKU: PropTypes.string.isRequired,
  }),
};

function ProductDetail({ product }) {
  return (
    <section className="card">
      <article className="left-column">
        <h2>{product.name}</h2>
        <div className="info">
          <p>Precio: ${product.price}</p>
          <p>SKU: {product.SKU}</p>
          <p>Cantidad de producto: {product.stock}</p>
        </div>
      </article>

      <article className="right-column">
        <h3>Descripción</h3>
        <p>{product.description}</p>
      </article>
    </section>
  );
}

export default ProductDetail;
