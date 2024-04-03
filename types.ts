import { StaticImageData } from "next/image"

export interface Billboard {
    id : string,
    label : string,
    imageUrl : string
}

export interface Category {
    _id : string,
    name : string,
    billboardId : Billboard
}

export interface Product {
    id : number,
    label : string,
    images : StaticImageData[],
    rating : number,
    price : number,
    discount : number,
    description : string
}
export interface Image {
    url : StaticImageData,
}
export interface Color {
    _id : string,
    name : string,
    value : string,
}
export interface Size {
    _id : string,
    name : string,
    value : string,
}

export interface CartItem {
    id : string,
    name : string,
    image : string,
    price : number,
    quantity : number,
    color : string,
    size : string,
    inStockCount : number,
    totalPrice : number,
    date : Date
}

export interface ReviewCardProps {
    id : number,
    name : string,
    rating : number,
    comment : string
    date : string
}