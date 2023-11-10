//creating two object of student
var student1 = {
    firstName: 'juan',
    lastName: 'romero',
    age: 22,
    location: 'lima'
};
var student2 = {
    firstName: 'rony',
    lastName: 'gaspar',
    age: 40,
    location: 'pichanaki'
};
var studentsList = [student1, student2];
var tabla = document.createElement('table');
document.body.appendChild(tabla);
studentsList.forEach(function (student) {
    var fila = document.createElement('tr');
    var celdaNombre = document.createElement('td');
    celdaNombre.textContent = student.firstName;
    fila.appendChild(celdaNombre);
    var celdaLocation = document.createElement('td');
    celdaLocation.textContent = student.location;
    fila.appendChild(celdaLocation);
    tabla.appendChild(fila);
});
