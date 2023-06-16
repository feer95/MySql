const mysql = require ('mysql2/promise');

async function main ()
{
    try 
    {
        let connection = await mysql.createConnection(
        {
            host : "localhost",
            user : "root",
            password : "My.12345.Sql",
            database : "BBDD 1"
        });
        console.log("Conexión correcta");
    
// RETO 1
    // PUNTO 3 

// let sql = 'ALTER TABLE direccion ADD COLUMN codigo_postal VARCHAR(255)';
// let [result] = await connection.query(sql);
// console.log('Columna codigo_postal añadida');

// sql = 'ALTER TABLE direccion DROP COLUMN calle';
// [result] = await connection.query(sql);
// console.log('Columna calle eliminada ');

//     // PUNTO 4

// let sql = 'DROP TABLE direccion';
// let [result] = await connection.query(sql);
// console.log('Tabla dirección eliminada');

//     // PUNTO 5

// let sql = 'UPDATE marks SET mark = 0';
// let [result] = await connection.query(sql);
// console.log('Notas de estudiantes actualizadas');
// console.log(result);

//     // PUNTO 6

// let sql = 'SELECT first_name, last_name FROM students';
// let [result] = await connection.query(sql);
// console.log('Estudiantes:');
// console.log(result);

//     // PUNTO 7

// let sql = 'SELECT * FROM teachers';
// let [result] = await connection.query(sql);
// console.log('Datos de los profesores:');
// console.log(result);

// // RETO 2
//     // PUNTO 1

// let sql = 'DELETE FROM marks WHERE date < "2013-01-01"';
// let [result] = await connection.query(sql);
// console.log('Notas antiguas eliminadas');

//     // PUNTO 2

// let sql = 'UPDATE marks SET mark = 5 WHERE mark < 5';
// let [result] = await connection.query(sql);
// console.log('Aprobamos a los suspendidos');
    }
    catch(err)
    {
        console.log(err)
        await connection.end();
    }
}
main();