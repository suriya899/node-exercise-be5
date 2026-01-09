import express from "express";
import { pool } from "./db.mjs";

const app = express();
const port = 4000;

app.use(express.json());

app.get("/movies", async (req, res) => {
	let result
	try {
		// แก้ไขโค้ดให้สามารถกรองผลลัพธ์ด้วย Parameter ได้ข้างล่างนี้ 🔽🔽🔽

		//1. สร้าง api อ่านข้อมูล ด้วย query parameter
		const genres = req.query.genres;
		//2. เขียน query เพื่ออ่านข้อมูลด้วย connection pool
		result = await pool.query(
			`SELECT * FROM movies
			WHERE 
			(genres = $1 or $1 IS NULL OR $1 = '')`,
			[genres] 
		);
		// แก้ไขโค้ดให้สามารถกรองผลลัพธ์ด้วย Parameter ได้ข้างบนนี้ 🔼🔼🔼

		return res.json({
			data: result.rows,
		});
	} catch (e) {
		console.error(e);
		return res.json({
			message: "ไม่สามารถเชื่อมต่อ Database ได้",
		});
	}
});

app.listen(port, () => {
	console.log(`🚀 Server is running at ${port}`);
});
