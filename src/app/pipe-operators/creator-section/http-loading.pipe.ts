import { BehaviorSubject, Subject, pipe, tap } from "rxjs"

export const setLoadingTrue=(emmiter:BehaviorSubject<boolean>)=>{
   return pipe(tap((a)=>emmiter.next(true)))
}