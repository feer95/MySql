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

        // RETO 1 CORREGIDO
        // let sql = 'SELECT st.first_name, st.last_name, su.title FROM Students AS st JOIN Marks AS m ON st.student_id = m.student_id JOIN Subjects AS su ON m.subject_id = su.subject_id';
        // let [result] = await connection.query(sql);
        // console.log('Alumnos y asignatura:');
        // console.log(result);

        // RETO 2
        // let sql = 'SELECT t.first_name, t.last_name, s.title FROM teachers AS t JOIN subject_teacher AS st ON t.teachers_id = st.teacher_id JOIN subjects AS s ON st.subject_id = s.subject_id';
        // let [result] = await connection.query(sql);
        // console.log('Profesores y asignaturas:');
        // console.log(result);

        // // RETO 3 CORREGIDO
        // let sql = `
        // SELECT
        //     sub.title AS asignatura,
        //     t.first_name,
        //     t.last_name,
        //     COUNT(s.student_id) AS total_alumnos
        // FROM
        //     subject_teacher AS st
        //     JOIN subjects AS sub ON st.subject_id = sub.subject_id
        //     JOIN teachers AS t ON st.teacher_id = t.teachers_id
        //     JOIN students AS s ON st.grupo_id = s.grupo_id
        //     JOIN grupos AS g ON s.grupo_id = g.grupo_id
        // GROUP BY
        //     sub.title,
        //     t.first_name,
        //     t.last_name`;

        // let [result] = await connection.query(sql);
        // console.log('Número total de alumnos por asignatura:');
        // console.log(result);
    }
    catch(err)
    {
        console.log(err)
        await connection.end();
    }
}
main();