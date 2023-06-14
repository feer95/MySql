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
        // let sql = 'SELECT first_name, last_name, title FROM students AS s LEFT JOIN subjects AS sub ON title = title';
        // let [result] = await connection.query(sql);
        // console.log('Alumnos y asignatura:');
        // console.log(result);

        // RETO 2
        // let sql = 'SELECT first_name, last_name, title FROM teachers AS t INNER JOIN subjects AS s ON title = title';
        // let [result] = await connection.query(sql);
        // console.log('Profesores y asignaturas:');
        // console.log(result);

        // // RETO 3
        // let sql = `
        //     SELECT sub.title AS asignatura, t.first_name, t.last_name, COUNT(*) AS total_alumnos
        //     FROM subject_teacher AS st
        //     JOIN subjects AS sub ON st.subject_id = sub.subject_id
        //     JOIN teachers AS t ON st.teacher_id = t.teachers_id
        //     JOIN students AS s ON st.grupo_id = s.grupo_id
        //     GROUP BY sub.title, t.first_name, t.last_name

        //     UNION

        //     SELECT sub.title AS asignatura, NULL, NULL, 0 AS total_alumnos
        //     FROM subjects AS sub
        //     LEFT JOIN subject_teacher AS st ON sub.subject_id = st.subject_id
        //     WHERE st.subject_id IS NULL`;
        //     let [result] = await connection.query(sql);
        //     console.log('Número total de alumnos por asignatura:');
        //     console.log(result);
    }
    catch(err)
    {
        console.log(err)
        await connection.end();
    }
}

main();