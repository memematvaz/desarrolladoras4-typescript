import { Person } from './person';
import { Address } from './address';
import { Mail } from './mail';
import { Phone } from './phone';



class Person{
    private _name: string;
    private _surname: string;
    private _age: number;
    private _dni: string;
    private _birthday: string;
    private _color: string;
    private _sex: string;
    private _address: string;
    private _mail: string;
    private _phone: number;
    private _notes: string;

   
    constructor(
        name: string, 
        surname: string, 
        age: number, 
        dni: string, 
        birthday: string, 
        color: string, 
        sex: string, 
        address: string,
        mail: string,
        phone: number,
        notes: string) {
       //sospecho que esto es para predefinir el valor???? idk
            this._name = name;
            this._surname= surname;
            this._age = age;
            this._dni= dni;
            this._birthday = birthday;
            this._color= color;
            this._sex = sex;
            this._address= address;
            this._mail = mail;
            this._phone= phone;
            this._notes = notes;

        }
        
    }