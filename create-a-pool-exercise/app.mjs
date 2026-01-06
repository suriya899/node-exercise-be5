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

app.listen(port, () => {
	console.log(`🚀 Server is running at ${port}`);
});
