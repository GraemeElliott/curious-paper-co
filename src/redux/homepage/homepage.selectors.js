import { createSelector } from "reselect";

const selectHomepagePanel = state => state.homepage;

export const selectHomepagePanels = createSelector(
    [selectHomepagePanel],
    homepage => homepage.mainContentPanels

);