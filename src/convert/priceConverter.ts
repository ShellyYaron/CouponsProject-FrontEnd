const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "NIS",
    style: "currency",
})
//convert SQL price to currency format

//convert SQL price to currency format

function priceConverter(price: number) {
    
    return CURRENCY_FORMATTER.format(price);

}
export default priceConverter;