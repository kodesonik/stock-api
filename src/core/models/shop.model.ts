import { IShop } from "."

 export default  class Shop implements IShop {
    private _id: string
   private _name: string
   private _address: string
   private _accountExpiredAt: string
   private _geolocation: { 
        longitude: number
        latitude: number
    }
    constructor(
        id: string,
        name: string,
        address: string,
        accountExpiredAt: string,
        geolocation: { longitude: number, latitude: number}
    ) {
        this._id = id
        this._name = name
        this._address = address
        this._accountExpiredAt = accountExpiredAt
        this._geolocation = geolocation
    }
    
    set id (value: string) {
        this._id = value
    }

    get id () {
        return this._id
    }

    get name () {
        return this._name
    }

    get address () {
        return this._address
    }

    get accountExpiredAt () {
        return this._accountExpiredAt
    }

    get geolocation () {
        return this._geolocation
    }

}
