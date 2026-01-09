import express from "express";
import { pool } from "./db.mjs";

const app = express();
const port = 4000;

app.use(express.json());

app.get("/movies", async (req, res) => {
	const result = await pool.query("select * from movies");

	return res.json({
		data: result.rows,
	});
});

// 📍 **** สร้าง API เพื่อใช้ในการดูข้อมูลหนังแต่ละเรื่องด้วย movieId ตรงนี้ ****

//1.เข้าถึงชุดข้อมูลที่จำเป็นต้องใช้ คือ movieId อยู่ใน endpoint parameter
//2.เขียน query เพื่ออ่านข้อมูลโพสต์ด้วย connection pool
//select * from post where movie_id=? ซึ่ง movieId มาจาก endpoint parameter
//3.return response กลับไปหา client

app.get("/movies/:movieId", async (req, res) =>{
	try{
const movieIdFromClient =  req.params.movieId;

const results = await pool.query
(`SELECT * FROM movies WHERE movie_id = $1`,[movieIdFromClient]);

return res.status(200).json({
	data: results.rows[0],
});
	}catch (error){
		return res.status(500).json ({ message: "ไม่สามารถเชื่อมต่อ Database ได้" });
}
})


app.listen(port, () => {
	console.log(`🚀 Server is running at ${port}`);
});
