export const selectToken = store => store.auth.token;
export const selectError = store => store.auth.error;
export const selectUserData = store => store.auth.userData;
export const selectIsLoading = store => store.auth.isLoading;
export const selectIsLoggedIn = store => store.auth.isLoggedIn;
