// creatting interface de object
interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
//creating two object of student
const student1: student = {
    firstName: 'juan',
    lastName: 'romero',
    age: 22,
    location: 'lima'
};

const student2: student = {
    firstName: 'rony',
    lastName: 'gaspar',
    age: 40,
    location: 'pichanaki'
}

const studentsList: student[] = [student1, student2];

const tabla = document.createElement('table');
document.body.appendChild(tabla);

studentsList.forEach((student) => {
    const fila = document.createElement('tr');

    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = student.firstName;
    fila.appendChild(celdaNombre);

    const celdaLocation = document.createElement('td');
    celdaLocation.textContent = student.location;
    fila.appendChild(celdaLocation);

    tabla.appendChild(fila)
})
