const mysql = require ("mysql2/promise");

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
            //PUNTO 1 MEDIA AÑADIR
            // let sql = "SELECT AVG(mark) AS average_mark FROM marks WHERE subject_id = 1";
            // let [result] = await connection.query(sql);
            // console.log('Porfin la nota media:');
            // console.log(result);


            //PUNTO 2
            // let sql = 'SELECT COUNT(*) FROM students';
            // let [result] = await connection.query(sql);
            // console.log('El número total de alumnos en el bootcamp es:');
            // console.log(result);

        //     //PUNTO 3
            // let sql = 'SELECT * FROM grupos';
            // let [result] = await connection.query(sql);
            // console.log('grupos:');
            // console.log(result);

            //PUNTO 4 CORREGIDO Sin prueba
            // let sql = "DELETE FROM marks WHERE mark > 5 AND date >= '2022-01-01' AND date <= '2023-12-01'";
            // let [result] = await connection.query(sql);
            // console.log('Se han eliminado las notas que estaban por encima de 5 y eran del año 2022-01-01.');
            // console.log(result);

        //     //PUNTO 5 CORREGIDO
            // let sql = "SELECT * FROM students WHERE (date_in BETWEEN '2022-01-01' AND '2023-12-01')";
            // let [result] = await connection.query(sql);
            // console.log('Estudiantes del bootcamp este año:');
            // console.log(result);

        //     //PUNTO 6
            // let sql = 'SELECT subject_id, COUNT(*) AS recuento FROM subject_teacher GROUP BY subject_id';
            // let [result] = await connection.query(sql);
            // console.log('Número de profesores por asignatura:');
            // console.log(result);
        
        // // RETO 2
        //     //PUNTO 1 CORREGIDO
            // let sql = "SELECT student_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND marks.date BETWEEN '2022-01-01' AND '2022-12-01')";
            // let [result] = await connection.query(sql);
            // console.log('Alumnos:');
            // console.log(result);

        //     //PUNTO 2 CORREGIDO
            // let sql = "SELECT subject_id, AVG(mark) AS media FROM marks WHERE ( date BETWEEN '2022-01-01' AND '2022-12-01') GROUP BY subject_id";
            // let [result] = await connection.query(sql);
            // console.log('Media de notas por asignatura:');
            // console.log(result);

        //     //PUNTO 3 CORREGIDO
            // let sql = "SELECT student_id, AVG(mark) AS media_notas FROM marks WHERE ( date BETWEEN '2022-01-01' AND '2022-12-01')  GROUP BY student_id";
            // let [result] = await connection.query(sql);
            // console.log('Media de notas del año:');
            // console.log(result);
    }
    catch(err)
    {
        console.log(err)
        await connection.end();
    }
}
main();