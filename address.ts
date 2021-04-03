export class Address{
    constructor(
      private _street: string,
      private _number: number,
      private _floor: number,
      private _letter: string,
      private _postalcode: number,
      private _city: string,
      private _province: string
    ){}
  
    set street(street: string){
      this._street = street;
    }
    set number(number: number){
      this._number = number;
    }
    set floor(floor: number){
      this._floor = floor;
    }
    set letter(letter: string){
      this._letter = letter;
    }
    set postalcode(postalcode: number){
      this._postalcode = postalcode;
    }
    set city(city: string){
      this._city = city;
    }
    set province(province: string){
      this._province = province;
    }
  
    get street(): string{
      return this._street;
    }
    get number(): number{
      return this._number;
    }
    get floor(): number{
      return this._floor;
    }
    get letter(): string{
      return this._letter;
    }
    get postalcode(): number{
      return this._postalcode;
    }
    get city(): string{
      return this._city;
    }
    get province(): string{
      return this._province;
    }
  
    showAddress(): string{
      let address: string =`${this._street}, ${this._number} ${this._floor}º${this._letter} ${this._postalcode} ${this._city} (${this._province})`;
      return address;
    }
  }