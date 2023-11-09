import "./App.css";
import ProductDetail from "./ProductDetail";

function App() {
  let des =
    "Camiseta de algodón de alta calidad Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga odit qui beatae corporis ipsum ipsam earum ab quam consequuntur distinctio corrupti minus non expedita tenetur voluptate sint, in delectus? Neque ipsa commodi harum deleniti, culpa veritatis ipsam, nostrum quo recusandae porro dolorem soluta esse voluptas quisquam dolore architecto at perspiciatis, repellendus aperiam sunt maxime numquam tempora asperiores. Eaque incidunt, deserunt ratione ea exercitationem distinctio deleniti minus quam impedit ullam blanditiis, voluptatum eum officia aperiam nemo, omnis debitis. Ea esse explicabo aut quas iure quisquam distinctio amet unde! Maiores reprehenderit voluptate officia a repellat natus aut ullam iste non cumque.";
  return (
    <>
      <header>
        <h1>Detalles del producto</h1>
      </header>
      <main className="container">
        <ProductDetail
          product={{
            name: "Camiseta",
            price: 25.99,
            description: des,
            stock: 50,
            unit: "ud",
            SKU: "CAM-432-354",
          }}
        ></ProductDetail>
      </main>
    </>
  );
}

export default App;
