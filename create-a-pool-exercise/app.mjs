import express from "express";
import { pool } from "./db.mjs";

const app = express();
const port = 4001;

app.use(express.json());

app.get("/movies", async (req, res) => {
	const result = await pool.query("select * from movies");

	return res.json({
		data: result.rows,
	});
});

app.post("/movies",async (req, res) => {
	try{
	const { title, description, genres, year, poster, rating } 
	= req.body;

	await pool.query(
		`INSERT INTO movies (title, description, genres, year, poster, rating)
		VALUES ($1, $2, $3, $4, $5, $6)`,
		[
			title,
			description,
			genres,
			year,
			poster,
			rating,
		]
	);
	return res.status(201).json(
	{
			message : "Movie has been created.",
		}
	);
} catch (error) {
	return res.status(500).json({
		message: error.message,
	})
}
});


app.listen(port, () => {
	console.log(`🚀 Server is running at ${port}`);
});
