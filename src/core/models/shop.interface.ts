export default interface IShop {
    id?: string
    name: string
    address: string
    accountExpiredAt: string
    geolocation: {
        longitude: number
        latitude: number
    }
}
