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
            //PUNTO 1
            let sql = 'SELECT COUNT(*) FROM students';
            let [result] = await connection.query(sql);
            console.log('El número total de alumnos en el bootcamp es:');
            console.log(result);

        //     //PUNTO 2
        //     let sql = 'SELECT (*) FROM BBDD 1 WHERE TABLE_NAME = "groups"';
        //     let [result] = await connection.query(sql);
        //     console.log('groups:');
        //     console.log(result);

        //     //PUNTO 3
        //     let sql = 'DELETE FROM marks WHERE mark > 5 AND date = 2022-01-01 ';
        //     let [result] = await connection.query(sql, [añoPasado]);
        //     console.log('Se han eliminado las notas que estaban por encima de 5 y eran del año 2022-01-01.');

        //     //PUNTO 4
        //     let sql = 'SELECT * FROM students WHERE date_in = 2022-01-01';
        //     let [result] = await connection.query(sql);
        //     console.log('Estudiantes del bootcamp este año:');
        //     console.log(result);

        //     //PUNTO 5
        //     let sql = 'SELECT subject, COUNT(*) AS teacher_id FROM teachers GROUP BY subject';
        //     let [result] = await connection.query(sql);
        //     console.log('Número de profesores por asignatura:');
        //     console.log(result);
        
        // // RETO 2
        //     //PUNTO 1
        //     let sql = 'SELECT student_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND date = 2022-01-01)';
        //     let [result] = await connection.query(sql);
        //     console.log('Alumnos:');
        //     console.log(result);

        //     //PUNTO 2
        //     let sql = 'SELECT subject_id, AVG(mark) AS media FROM marks WHERE date = 2022-01-01 GROUP BY subject_id';
        //     let [result] = await connection.query(sql);
        //     console.log('Media de notas en la fecha 2022-01-01 por asignatura:');
        //     console.log(result);

        //     //PUNTO 3
        //     let sql = 'SELECT student_id, AVG(mark) AS media_notas FROM marks WHERE date = 2023-01-01 GROUP BY student_id';
        //     let [result] = await connection.query(sql);
        //     console.log('Media de notas del año:');
        //     console.log(result);

    }
    catch(err)
    {
        console.log(err)
        await connection.end();
    }
}

main();