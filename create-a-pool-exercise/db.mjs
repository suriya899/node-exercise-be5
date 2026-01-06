import * as pg from "pg";
const { Pool } = pg.default;

// ⚠️ สำคัญ: Username และ Password จะแตกต่างกันตาม OS และวิธีการติดตั้ง PostgreSQL
//
// สำหรับ Windows:
//   - Username = postgres
//   - Password = postgrespassword (หรือรหัสผ่านที่คุณตั้งไว้)
//   - Hostname = localhost
//   - Database name = postgres_database
//   - ตัวอย่าง: "postgresql://<username>:<password>@<hostname>:5432/<database_name>"
//
// สำหรับ macOS (Homebrew):
//   - Username = ชื่อ user ของ macOS (ตรวจสอบด้วยคำสั่ง: whoami)
//   - Password = ไม่ต้องใส่ (ถ้า pgAdmin 4 เวอร์ชัน 7.2+ จะใช้ macOS Keychain)
//   - Hostname = localhost
//   - Database name = postgres_database
//   - ตัวอย่าง: "postgresql://<yourmacusername>@<hostname>:5432/<database_name>"
//
// หมายเหตุ: วิธีการตรวจสอบเวอร์ชัน pgAdmin 4 คือ คลิกที่เมนูบาร์ "pgAdmin 4" ด้านบนสุดของหน้าจอ -> "About pgAdmin 4" -> "Version"

// แก้ไขโค้ดเพื่อให้เชื่อมต่อกับ Database ได้ข้างล่างนี้ 🔽🔽🔽
const pool = new Pool({
	connectionString:
		"postgresql://postgres:Post028688992@localhost:5432/lesson-5-node",
});

export { pool };

// ก่อนจะเทสบน postman ให้ใช้คำสั่ง "npm run start" รันบน terminal ก่อนนะ 😄
// ทุกครั้งที่มีการแก้ไขโค้ด ต้องรันคำสั่ง "npm run start" รันบน terminal อีกครั้ง
// ถ้ารันสำเร็จ terminal จะแสดงข้อความว่า "🚀 Server is running at 4000"
// 💡 สามารถใช้ดาวน์โหลด extension ชื่อ "Postman" ใน VS Code ได้เหมือนกันนะ :)
