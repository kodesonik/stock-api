import { FirebaseAuthentification } from "../../helpers/utils";
import { ShopCollection, UserCollection } from "../data";
import { IOwner, IShop, Owner } from "../models";
import Shop from "../models/shop.model";

export default function makeAddShop (
        shopCollection: ShopCollection,
        ownerCollection: UserCollection<IOwner>,
        firebaseAuthentification: FirebaseAuthentification
    ) {
        return async function addShop(shopData: IShop, ownerData: IOwner) {
            if (!shopData) throw new Error('')
            if (!ownerData) throw new Error('')
            
            const shop = new Shop(null, shopData.name, shopData.address, shopData.accountExpiredAt, shopData.geolocation)

           const shopRes = await shopCollection.add({
                name: shop.name,
                address: shop.address,
                accountExpiredAt: shop.accountExpiredAt,
                geolocation: shop.geolocation
            })
            shop.id = shopRes.id
            const owner = new Owner(ownerData.id, ownerData.avatar, ownerData.name, ownerData.phoneNumber, ownerData.email, ownerData.shops)
            if (owner.id) {
               await ownerCollection.addShop(owner.id, shop.id)
               return { statusCode: 200, body: { message: 'success'}}
            } else {
                const authRes = await firebaseAuthentification.signup({
                    photoURL: ownerData.avatar,
                    displayName: ownerData.name,
                    email: ownerData.email,
                    password: 'password',
                    emailVerified: true,
                    phoneNumber: ownerData.phoneNumber,
                    disabled: false
                })
                owner.id = authRes.uid

                await ownerCollection.set(owner.id, {
                    name: owner.name,
                    avatar: owner.avatar,
                    phoneNumber: owner.phoneNumber,
                    email: owner.email,
                    shops: [shop.id]
                })
                return { statusCode: 200, body: { message: 'success'}}
            }
        }
    }