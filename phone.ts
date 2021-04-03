export class Phone{
    constructor(
        private _type: number, 
        private _numberPhone: number
    ){}
  
    set type(type: number){
      this._type = type;
    }
    set numberPhone(numberPhone: number){
      this._numberPhone = numberPhone;
    }

    get type(): number{
        return this._type;
    }
    get numberPhone(): number{
      return this._numberPhone;
    }
}