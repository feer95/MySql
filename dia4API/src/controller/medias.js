const {pool} = require("/Users/Feer/Desktop/CodeN/MOD. 5/Códigos/MySql/dia4API/database.js")

// RETO 2

    // PUNTO 1

const getMedia = async (request, response) => 
{
    try 
    {
        let studentId = request.params.student_id;
        let sql = "SELECT AVG(mark) AS media FROM marks WHERE student_id = ?"; 
        let [result] = await pool.query(sql, [studentId]);
        let media = result[0].media;
    
        if (studentId != null) 
        {
            response.send(`La media del estudiante ${studentId} es ${media}`);
        } 
        else 
        {
            response.send("No se encuentra");
        }
    } 
    catch (error) 
    {
        console.log(error);
        response.send("Error");
    }
};

    // PUNTO 2
      
const getApuntadasById = async (request, response) => 
{
    try 
    {
        let studentId = request.params.student_id;
    
        let sql = `
        SELECT s.title
        FROM subjects s
        JOIN marks m ON s.subject_id = m.subject_id
        WHERE m.student_id = ?
        `;
        let [result] = await pool.query(sql, [studentId]);
    
        if (studentId != null) 
        {
            let asignaturas = result.map((fila) => fila.title);
            response.send(`El alumno ${studentId} está apuntado a: ${asignaturas}`);
        } 
        else 
        {
            response.send("El alumno no está apuntado a ninguna asignatura");
        }
    } 
    catch (error) 
    {
        console.log(error);
        response.send("Error al obtener las asignaturas del alumno");
    }
};

    // PUNTO 3

const getApuntadas = async (request, response) => 
{
    try 
    {
        let sql = "SELECT first_name, last_name, subjects.title " +
                    "FROM students " +
                    "JOIN marks ON students.student_id = marks.student_id " +
                    "JOIN subjects ON marks.subject_id = subjects.subject_id";
    
        let [result] = await pool.query(sql);
    
        if (!null) 
        {
            let alumnosApuntadas = result.map((fila) => 
            {
                return {
                first_name: fila.first_name,
                last_name: fila.last_name,
                title: fila.title
                };
            });
    
            response.send(alumnosApuntadas);
        } 
        else 
        {
            response.send("No hay alumnos apuntados");
        }
    } 
    catch (error) 
    {
        console.log(error);
        response.send("Error");
    }
};

    // PUNTO 4

const getImpartidasById = async (request, response) => 
{
    try 
    {
        let profesorId = request.params.teacher_id;
    
        let sql =
            "SELECT s.title " +
            "FROM subjects AS s " +
            "JOIN subject_teacher AS st ON s.subject_id = st.subject_id " +
            "JOIN teachers AS t ON st.teacher_id = t.teacher_id " +
            "WHERE t.teacher_id = ?";
    
        let [result] = await pool.query(sql, [profesorId]);
    
        if (result.length > 0) 
        {
            let asignaturasImpartidas = result.map((linea) => linea.title);
            response.send(asignaturasImpartidas);
        } 
        else 
        {
            response.send("No se encontraron asignaturas");
        }
    } 
    catch (error) 
    {
        console.log(error);
        response.send("Error");
    }
};
      
    // PUNTO 5
 
const getImpartidas = async (request, response) => 
{
    try 
    {
        let sql =
            "SELECT t.first_name, t.last_name, s.title " +
            "FROM teachers AS t " +
            "JOIN subject_teacher AS st ON t.teacher_id = st.teacher_id " +
            "JOIN subjects AS s ON st.subject_id = s.subject_id";
    
        let [result] = await pool.query(sql);
    
        if (result.length > 0) 
        {
            let profesoresImpartiendo = result.map((linea) => ({
            nombre: linea.first_name,
            apellido: linea.last_name,
            asignatura: linea.title,}));

            response.send(profesoresImpartiendo);
        } 
        else 
        {
        response.send("No se encontraron profesores impartiendo asignaturas");
        }
    } 
    catch (error) 
    {
        console.log(error);
        response.send("Error");
    }
};
      




module.exports = { getMedia, getApuntadasById, getApuntadas, getImpartidasById, getImpartidas };