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
            database : "MUSEO"
        });
        console.log("Conexión correcta");

        // RETO 1
        // let sql = `SELECT  c.name AS nombreColeccion, c.formato AS expuesto, p.nombre AS nombre_pieza, p.prestado, p.fechaIN AS fecha_expiracion, 
        // pr.nombre AS propietario, pr.apellido AS apellido, pr.correo AS email 
        // FROM piezas p
        // JOIN propietarios pr ON p.idpropietarios = pr.idpropietarios
        // JOIN colecciones c ON p.idcolecciones = c.idcolecciones
        // WHERE p.prestado = 'true'`;
        // [result] = await connection.query(sql);
        // console.log('Objetos en préstamo:');
        // console.log(result);
       
        // RETO 2
        // let sql = `
        //     SELECT COUNT(*) AS total, colecciones.formato
        //     FROM Piezas
        //     INNER JOIN Colecciones ON Piezas.idcolecciones = Colecciones.idcolecciones
        //     GROUP BY colecciones.formato
        //     ORDER BY total DESC
        //     `;
        // let [result] = await connection.query(sql);

        // console.log('Número total de objetos por situación:');
        // console.log(result);
          
    }
    catch(err)
    {
        console.log(err)
        await connection.end();
    }
}
main();