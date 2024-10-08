export interface topSection {
    description:string,
    difficulty_level:string
    healthiness:string
    image_url:string
    name:string
    price:number
    thumbnail:string|null
}
export interface ingredient{
    name:string
}
export interface procedureStep{
    order_of_step:number
    name:string
    description:string
    image_url:string
}
 export type FinalResponse=[[topSection],ingredient[],procedureStep[]]