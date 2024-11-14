# Property Listing Backend

A backend server for a property listing application built with TypeScript, Sequelize, PostgreSQL, and Express. This server handles the database connection, exposes APIs for interacting with property data.

## Technologies Used
- **Node.js** (v16 or higher)
- **TypeScript**
- **Express.js**
- **Sequelize ORM**
- **PostgreSQL** (Database)
- **dotenv** (Environment Variable Management)
  
## Getting Started

### Installation

1. Clone the repository:

git clone https://github.com/yourusername/property-listing-backend.git


2. Install dependencies:

npm install

3. Set up environmet variables:

- DB_USER=your_database_user
- DB_HOST=localhost
- DB_PORT=5432
- DB_NAME=your_database_name
- DB_PASSWORD=your_database_password
- PORT=3000

4. Run sever:
   
npm run dev

### Endpoints
GET "/properties"