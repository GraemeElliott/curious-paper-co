import ShopData from '../../components/products-data/products-data';

const INITIAL_STATE = {
    products: ShopData
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productsReducer;