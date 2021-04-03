export class Phone{
    constructor(
        private _type: string, 
        private _numberPhone: number
    ){}

    set numberPhone(numberPhone: number){
      this._numberPhone = numberPhone;
    }

    get numberPhone(): number{
      return this._numberPhone;
    }
}