export class Phone{
    constructor(
        private _type: string, 
        private _numberPhone: number
    ){}
  
    set type(type: string){
      this._type = type;
    }
    set numberPhone(numberPhone: number){
      this._numberPhone = numberPhone;
    }

    get type(): string{
        return this._type;
    }
    get numberPhone(): number{
      return this._numberPhone;
    }
}