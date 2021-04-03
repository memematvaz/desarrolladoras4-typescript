import { Person } from './person';
import { Address } from './address';
import { Mail } from './mail';
import { Phone } from './phone';

function Agenda(): Array<Person> {
  let agenda: Array<Person> = [];
  
  const person1: Person = new Person(
    'María',
    'Mateo Vázquez',
    29,
    '45110653Z',
    '31/3/1992',
    'Rosa',
    'Mujer',
    [new Address('Avenida del Mediterráneo', 45, 8, 'A', 28007, 'Madrid', 'Madrid')],
    [new Mail('Personal', 'memematvaz@gmail.com')],
    [new Phone('Personal', 680495883)],
    'Nada que anotar'
  );

  const person2: Person = new Person(
    'Antonio',
    'García Espinosa',
    56,
    '32245670E',
    '2/9/1965',
    'Blanco',
    'Hombre',
    [new Address('Calle San Felipe', 13, 1, 'B', 11360, 'San Roque', 'Cádiz')],
    [new Mail('Personal', 'antonioge@gmail.com')],
    [new Phone('Personal', 956780555)],
    'El teléfono es fijo'
  );

  const person3: Person = new Person(
    'Lucía',
    'Herrero Carrasco',
    30,
    '45245670E',
    '12/2/1991',
    'Verde',
    'Mujer',
    [new Address('Paseo de las Hermosas', 13, 1, 'B', 28004, 'Madrid', 'Madrid')],
    [new Mail('Personal', 'herrcarr@gmail.com')],
    [new Phone('Personal', 641345648)],
    'Nada que anotar'
  );


  agenda.push(person1);
  agenda.push(person2);
  agenda.push(person3);

  console.log(agenda)
  return agenda;
  
}

Agenda()


//Se modificará uno de los registros de persona añadidos, realizando la búsqueda por DNI y añadiendo una nueva dirección, un nuevo mail y un nuevo teléfono. Estos cambios se deben realizar mediante el uso de métodos definidos previamente en las clases.



//Se mostrarán desde el módulo principal los 3 registros con los cambios realizados anteriormente en la consola.


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