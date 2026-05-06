export const getCartSummary = (items) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = subtotal * 0.1;
  const total = subtotal + gst;

  return {
    subtotal,
    gst,
    total,
  };
};