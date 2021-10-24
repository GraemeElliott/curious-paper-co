import { createSelector } from "reselect";

const selectProducts = state => state.products;

export const selectCollections = createSelector(
    [selectProducts],
    products => products.products
);