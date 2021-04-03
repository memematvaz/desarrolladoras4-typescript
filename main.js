"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var address_1 = require("./address");
var mail_1 = require("./mail");
var phone_1 = require("./phone");
function Agenda() {
    var agenda = [];
    var person1 = new person_1.Person('María', 'Mateo Vázquez', 29, '45110653Z', '31/3/1992', 'Rosa', 'Mujer', [new address_1.Address('Avenida del Mediterráneo', 45, 8, 'A', 28007, 'Madrid', 'Madrid')], [new mail_1.Mail('Personal', 'memematvaz@gmail.com')], [new phone_1.Phone('Personal', 680495883)], 'Nada que anotar');
    var person2 = new person_1.Person('Antonio', 'García Espinosa', 56, '32245670E', '2/9/1965', 'Blanco', 'Hombre', [new address_1.Address('Calle San Felipe', 13, 1, 'B', 11360, 'San Roque', 'Cádiz')], [new mail_1.Mail('Personal', 'antonioge@gmail.com')], [new phone_1.Phone('Personal', 956780555)], 'El teléfono es fijo');
    agenda.push(person1);
    agenda.push(person2);
    console.log(agenda);
    return agenda;
}
Agenda();
/*
function showAgenda(agenda: Array<Person>): void{
  for (const person of agenda){
    console.log(person.showPersonInfo());
  }
}

function addNewPerson(
  numberDni: string,
  newAddress: Address,
  newMail: Mail,
  newPhone: Phone
): void{
  for (const person of agenda){
    if (person.dni === numberDni) {
      person.addAddress(newAddress);
      person.addMail(newMail);
      person.addPhone(newPhone);
    }
  }
}
*/ 
