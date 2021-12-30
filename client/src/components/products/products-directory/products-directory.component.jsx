import React from "react";
import "./products-directory.component.scss";
import ProductsDirectoryItem from "./products-directory-item.component";


class ProductsDirectoryComponent extends React.Component {
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
          category: "Diaries & Planners",
          imageUrl: "https://i.ibb.co/xsbLmg8/hope-house-press-leather-diary-studio-PJzc7-LOt2-Ig-unsplash.jpg",
          pageId: "diaries-planners",
          linkUrl: "products/diaries-planners",
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
          category: "Desk Items",
          imageUrl: "https://i.ibb.co/t4CHCq2/kari-shea-t-OVmshavtoo-unsplash.jpg",
          pageId: "desk-items",
          linkUrl: "products/desk-items",
        },
        {
          category: "Prints and Accessories",
          imageUrl: "https://i.ibb.co/KXS7D4R/prints-accessories.jpg",
          pageId: "prints-accessories",
          linkUrl: "products/prints-accessories",
        }
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

export default ProductsDirectoryComponent;
