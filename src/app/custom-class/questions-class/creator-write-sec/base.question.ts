import { AsyncValidator, Validator, ValidatorFn, Validators } from "@angular/forms"

export default class BaseQuestion{
    key:string
    required:boolean
    type:string
    defaultValue:string
    placeholder:string
    validators:Validators[]|undefined
    asyncValidator:AsyncValidator[]|undefined
    lable:string
    constructor(options:options={}){
     this.key=options.key||'default'
     this.defaultValue=options.defaultValue||''
     this.placeholder=options.placeholder||''
     this.validators=options.validators
     this.asyncValidator=options.asyncValidator
     this.lable=options.lable||''
     this.type=options.type||'text'
     this.required=options.required||false
    }
}
interface options{

    key?:string,
    defaultValue?:string
    placeholder?:string
    validators?:Validators[]
    asyncValidator?:AsyncValidator[],
    lable?:string,
    type?:string,
    required?:boolean
}