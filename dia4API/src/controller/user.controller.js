const {pool} = require("/Users/Feer/Desktop/CodeN/MOD. 5/Códigos/MySql/dia4API/database.js")

// RETO 1

    // PUNTO 1 =======================================

const getStudentsById = async (request, response) => 
{
    try 
    {
        let sql;
        let studentId = request.params.student_id;
            if (studentId != null) 
            {
                sql = `SELECT * FROM students WHERE student_id = ${studentId}`;
            }
            else 
            {
                sql = "SELECT * FROM students";
            }
        let [result] = await pool.query(sql);
        response.send(result);
    } 
    catch (err) 
    {
        console.log(err);
    }
};

    // PUNTO 2  =======================================

const getStudents = async (request, response) =>
{
    try
    {     
        let sql = "SELECT * FROM students";
        let [result] = await pool.query(sql);
        response.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
};
    // PUNTO 3  =======================================

const postStudent = async (request, response) => 
{
    try 
    {
        let sql = "INSERT INTO students (first_name, last_name, grupo_id, date_in) " +
                "VALUES ('" + request.body.first_name + "', '" +
                            request.body.last_name + "', '" +
                            request.body.grupo_id + "', '" +
                            request.body.date_in + "')";

        console.log(sql);
        let [result] = await pool.query(sql);
        console.log(result);

        if (result.insertId) 
        {
            response.send(String(result.insertId));
        } 
        else 
        {
            response.send("-1");
        }
    } 
    catch (error) 
    {
        console.log(error);
    }
};

    //PUNTO 4 =======================================

const putStudent = async (request, response) => 
{
    try 
    {
        let studentId = request.body.student_id;
        let firstName = request.body.first_name;
        let lastName = request.body.last_name;
        let grupoId = request.body.grupo_id;
        let dateIn = request.body.date_in;
    
        let sql = `UPDATE students SET first_name = ?, last_name = ?, grupo_id = ?, date_in = ? WHERE student_id = ?`;
        await pool.query(sql, [firstName, lastName, grupoId, dateIn, studentId]);
    
        if (studentId > 0) 
        {
            response.send("Student updated successfully");
        } 
        else 
        {
            response.send("Student not found");
        }
    } 
    catch (error) 
    {
        console.log(error);
    }
};
   
    //PUNTO 5 =======================================

const delStudent = async (request, response) => 
{
    try 
    {
        let studentId = request.body.student_id;

        let sql = `DELETE FROM students WHERE student_id = ?`;
        await pool.query(sql, [studentId]);

        if (studentId > 0) 
        {
            response.send("Student deleted successfully");
        } 
        else 
        {
            response.send("Student not found");
        }
    } 
    catch (error) 
    {
        console.log(error);
    }
};

module.exports = { getStudents, getStudentsById, postStudent, putStudent, delStudent };