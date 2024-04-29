import { Component } from "react";

class RenderLoop extends Component {
  products = [
    { id: 1, name: "black", price: "$1900", image: "./assets/products/black-car.jpg" },
    { id: 2, name: "red", price: "$1820", image: "./assets/products/red-car.jpg" },
    { id: 3, name: "silver", price: "$1720", image: "./assets/products/silver-car.jpg" },
    { id: 4, name: "steel", price: "$1520", image: "./assets/products/steel-car.jpg" },
  ];

  renderProduct = () => {
    let renderProduct = [];
    for (let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      let render = (
        <tr key={i}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img alt="picture" src={product.image} style={{width: "100px"}} />
          </td>
        </tr>
      );
      renderProduct.push(render);
    }
    return renderProduct;
  };

  render() {
    return (
      <div>
        <div className="table-responsive mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>{this.renderProduct()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RenderLoop;
