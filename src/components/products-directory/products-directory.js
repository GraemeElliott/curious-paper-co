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
          pageId: "notebooks",
          linkUrl: "products/notebooks",
        },
        {
          category: "Washi Tape",
          imageUrl: "https://i.ibb.co/0cSrqt5/washi-tape.jpg",
          pageId: "washi-tape",
          linkUrl: "products/washi-tape",
        },
        {
          category: "Pens and Pencils",
          imageUrl: "https://i.ibb.co/vPNCzfM/pens-pencils.jpg",
          pageId: "pens-pencils",
          linkUrl: "products/pens-pencils",
        },
        {
          category: "Prints and Accessories",
          imageUrl: "https://i.ibb.co/KXS7D4R/prints-accessories.jpg",
          pageId: "prints-accessories",
          linkUrl: "products/prints-accessories",
        },
      ],
    };
  }

  render() {
    return (
      <div className="product-directory-menu">
        {this.state.productCategories.map(({ category , imageUrl, pageId, linkUrl }) => (
          <ProductsDirectoryItem key={pageId} category={category} imageUrl={imageUrl} linkUrl={linkUrl} pageId={pageId} />
        ))}
      </div>
    );
  }
}

export default ProductsDirectory;
