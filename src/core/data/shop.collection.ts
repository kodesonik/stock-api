import { FirestoreDb } from "../../db";
import { IShop } from "../models";

export default class ShopCollection extends FirestoreDb<IShop> {
    constructor() {
        super('shops')
    }
}