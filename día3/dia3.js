const mysql = require ("mysql2/promise");

async function main ()
{
    try 
    {
        let connection = await mysql.createConnection(
        {
            host : "localhost",
            user : "root",
            password : "/",
            database : "/"
        });
        console.log("Conexión correcta");

        // RETO 1

        let sql = 'SELECT s.first_name, s.last_name, m.mark FROM students AS s LEFT JOIN marks AS m ON s.student_id = m.student_id';
        let [result] = await connection.query(sql);
        console.log('Alumnos y asignatura:');
        console.log(result);

        // // RETO 2
        // let sql = 'SELECT first_name, last_name, subject_is FROM teachers AS t INNER JOIN subjects AS s ON p.subject_id = s.subject_id';
        // let [result] = await connection.query(sql);
        // console.log('Profesores y asignaturas:');
        // console.log(result);

        // // RETO 3



    }
    catch(err)
    {
        console.log(err)
        await connection.end();
    }
}

main();