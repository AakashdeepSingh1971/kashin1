import { db } from './mysql';

export async function initDb() {
    const createTableQuery = `
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
  `;

    await db.query(createTableQuery);
}
