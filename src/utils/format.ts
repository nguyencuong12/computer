const FormatUtils = {
  formatPriceVND: (price: number) => {
    return price.toLocaleString("vi", { style: "currency", currency: "VND" });
  },
};

export { FormatUtils };
