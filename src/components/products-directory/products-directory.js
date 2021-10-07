import React from "react";
import "./products-directory.scss";
import ProductsDirectoryItem from "./products-directory-item";


class ProductsDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      productCategories: [
        {
          category: "Notebooks",
          imageUrl: "https://i.ibb.co/XbRPD1n/notebooks.jpg",
          size: "large",
          id: "notebooks",
          linkUrl: "products/notebooks",
        },
        {
          category: "Washi Tape",
          imageUrl: "https://i.ibb.co/0cSrqt5/washi-tape.jpg",
          id: "washi-tape",
          linkUrl: "products/washi-tape",
        },
        {
          category: "Pens and Pencils",
          imageUrl: "https://i.ibb.co/vPNCzfM/pens-pencils.jpg",
          id: "pens-pencils",
          linkUrl: "products/pens-pencils",
        },
        {
          category: "Prints and Accessories",
          imageUrl: "https://i.ibb.co/KXS7D4R/prints-accessories.jpg",
          size: "large",
          id: "prints-accessories",
          linkUrl: "products/prints-accessories",
        },
      ],
    };
  }

  render() {
    return (
      <div className="product-directory-menu">
        {this.state.productCategories.map(({ category , imageUrl, id, size }) => (
          <ProductsDirectoryItem key={id} category={category} imageUrl={imageUrl} size={size} id={id} />
        ))}
      </div>
    );
  }
}

export default ProductsDirectory;
