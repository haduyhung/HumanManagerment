export const getLoggedUserInfo = () => localStorage.getItem("userInfo");

export const storeLoggedUserInfo = (accessToken: string) =>
  localStorage.setItem("userInfo", accessToken);

export const removeLoggedUserInfo = () => localStorage.removeItem("userInfo");
