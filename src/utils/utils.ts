export const formatPrice = (price: string) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(parseFloat(price));
};
