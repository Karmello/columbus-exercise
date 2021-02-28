export default (price: number) => (price === 0 ? 0 : price.toFixed(2) + ' kr')
