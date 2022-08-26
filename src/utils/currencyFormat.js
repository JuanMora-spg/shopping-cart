function currencyFormat(value) {
  value = Number(value);

  return Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
}

export { currencyFormat };
