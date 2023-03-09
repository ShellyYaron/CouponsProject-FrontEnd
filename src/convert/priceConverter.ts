const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "NIS",
    style: "currency",
})

function priceConverter(price: number) {
    return CURRENCY_FORMATTER.format(price)
}
export default priceConverter;