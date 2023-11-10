// creatting interface de object
interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
//creating two object of student
let student1: student = {
    firstName: 'juan',
    lastName: 'romero',
    age: 22,
    location: 'lima'
};

let student2: student = {
    firstName: 'rony',
    lastName: 'gaspar',
    age: 40,
    location: 'pichanaki'
}

let studentsList: student[] = [student1, student2];

let tabla = document.createElement('table');
document.body.appendChild(tabla);

studentsList.forEach((student) => {
    let fila = document.createElement('tr');

    let celdaNombre = document.createElement('td');
    celdaNombre.textContent = student.firstName;
    fila.appendChild(celdaNombre);

    let celdaLocation = document.createElement('td');
    celdaLocation.textContent = student.location;
    fila.appendChild(celdaLocation);

    tabla.appendChild(fila)
})
