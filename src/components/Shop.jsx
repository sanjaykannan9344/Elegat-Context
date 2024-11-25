export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">{children}</ul>
      {/* the children props from app.jsx parent component */}
    </section>
  );
}