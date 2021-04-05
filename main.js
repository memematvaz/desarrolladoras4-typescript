"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var address_1 = require("./address");
var mail_1 = require("./mail");
var phone_1 = require("./phone");
var agenda = [];
function Agenda() {
    var person1 = new person_1.Person('María', 'Mateo Vázquez', 29, '45110653Z', '31/3/1992', 'Rosa', 'Mujer', [new address_1.Address('Avenida del Mediterráneo', 45, 8, 'A', 28007, 'Madrid', 'Madrid')], [new mail_1.Mail('Personal', 'memematvaz@gmail.com')], [new phone_1.Phone('Personal', 680495883)], 'Nada que anotar');
    var person2 = new person_1.Person('Antonio', 'García Espinosa', 56, '32245670E', '2/9/1965', 'Blanco', 'Hombre', [new address_1.Address('Calle San Felipe', 13, 1, 'B', 11360, 'San Roque', 'Cádiz')], [new mail_1.Mail('Personal', 'antonioge@gmail.com')], [new phone_1.Phone('Personal', 956780555)], 'El teléfono es fijo');
    var person3 = new person_1.Person('Lucía', 'Herrero Carrasco', 30, '45245670E', '12/2/1991', 'Verde', 'Mujer', [new address_1.Address('Paseo de las Hermosas', 13, 1, 'B', 28004, 'Madrid', 'Madrid')], [new mail_1.Mail('Personal', 'herrcarr@gmail.com')], [new phone_1.Phone('Personal', 641345648)], 'Nada que anotar');
    agenda.push(person1);
    agenda.push(person2);
    agenda.push(person3);
    return agenda;
}
Agenda();
var dni = '45110653Z';
var newAddress = new address_1.Address('Calle Perseo', 20, 2, 'C', 28007, 'Madrid', 'Madrid');
var newPhone = new phone_1.Phone('Personal', 666555444);
var newMail = new mail_1.Mail('Trabajo', 'mariamateo@empresa.com');
function changeData(dni, newAddress, newMail, newPhone) {
    agenda.map(function (person) {
        if (person.dni === dni) {
            person.setAddress(newAddress);
            person.setMail(newMail);
            person.setPhone(newPhone);
            checkAgenda();
        }
        else {
            checkAgenda();
        }
    });
}
changeData(dni, newAddress, newMail, newPhone);
function checkAgenda() {
    console.log(agenda);
}
//Se mostrarán desde el módulo principal los 3 registros con los cambios realizados anteriormente en la consola.
