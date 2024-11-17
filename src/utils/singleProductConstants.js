export const productItem = (userCart, productId) =>
  userCart?.regular_items?.find((item) => item?.product === productId) || null;
