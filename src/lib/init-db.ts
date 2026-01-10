import { db } from './mysql';
import bcrypt from 'bcryptjs';

export async function initDb() {
  // CONTACT REQUESTS
  await db.query(`
        CREATE TABLE IF NOT EXISTS contact_requests (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50),
            brand_name VARCHAR(255) NOT NULL,
            website_or_instagram VARCHAR(255),
            business_type VARCHAR(100) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

  // CAREERS
  await db.query(`
        CREATE TABLE IF NOT EXISTS careers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            role VARCHAR(100) NOT NULL,
            portfolio_link VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

  // USERS (ADMINS)
  await db.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM('admin', 'viewer') DEFAULT 'admin',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

  // AUDIT LOGS
  await db.query(`
        CREATE TABLE IF NOT EXISTS audit_logs (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            action VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

  // DEFAULT ADMIN
  const adminUsername = 'admin';
  const adminPassword = 'P@$$w0rd!';

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await db.execute(
    `
        INSERT IGNORE INTO users (username, password, role)
        VALUES (?, ?, 'admin')
        `,
    [adminUsername, hashedPassword]
  );
}
