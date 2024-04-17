interface Description{
    isThere:boolean,data:string
}
interface Procedure{
    heading:string,
    data:string,
    containsImage:boolean,
    img:string
}
interface CreatorDescription{
    creatorImageUrl:string,
    creatorName:string,
    numberOfFollowers:number
}
interface FurtherReplies{
    personWhoRepiledInfo:IndividualComment,
    repliedTo:string
}
interface IndividualComment{
    userName:string,
    userProfileUrl:string,
    data:string,
    likes:number,
    dislikes:number
    furtherReplies:FurtherReplies[]
}
export interface RecipeDataFromServer {
    name:string,
    ingridients:string[],
    description:Description,
    procedure:Procedure[]
    aboutCreator:CreatorDescription
    comments:IndividualComment[]
}
