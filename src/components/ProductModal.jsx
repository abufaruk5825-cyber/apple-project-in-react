function ProductModal({ product, onClose, addToCart }) {
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={product.image} alt={product.name} className="modal-img" />
        <h2>{product.name}</h2>
        <p className="modal-tagline">{product.tagline}</p>
        <p className="modal-price">{product.price}</p>
        <ul className="modal-features">
          {product.features.map((f, i) => <li key={i}>✓ {f}</li>)}
        </ul>
        <div className="modal-btns">
          <a href={product.link} target="_blank" rel="noreferrer" className="modal-learn">
            View on Apple.com
          </a>
          <button className="modal-cart" onClick={() => { addToCart({ name: product.name, price: product.price }); onClose(); }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
