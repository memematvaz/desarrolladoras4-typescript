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

  return agenda;
}

Agenda()

const dni: string = '45110653Z'
const newAddress: Address = new Address(
  'Calle Perseo', 20, 2, 'C', 28007, 'Madrid', 'Madrid'
)
const newPhone: Phone = new Phone(
  'Personal', 666555444
)
const newMail: Mail = new Mail(
  'Trabajo', 'mariamateo@empresa.com'
)

function changeData(
  dni: string,
  newAddress: Address,
  newMail: Mail,
  newPhone: Phone,
): void {
  agenda.map(
    person => {
      if(person.dni === dni){
        person.setAddress(newAddress);
        person.setMail(newMail);
        person.setPhone(newPhone);
        checkAgenda()
      }else{
        checkAgenda()
      }
    }
  )
}

changeData(dni, newAddress, newMail, newPhone)


function checkAgenda(){
  console.log(agenda)
}


//Se mostrarán desde el módulo principal los 3 registros con los cambios realizados anteriormente en la consola.

