# Buy My Equity - Node Server

## About

This is a portfolio project demonstrating a backend server for a platform called "Buy My Equity." The server is built with Node.js, Express, and Sequelize, and it manages user, investor, and startup data, file uploads, and PDF invoice generation. The project structure includes controllers, database models, routers, and a PDF generator for temporary invoices.

**Note:** This project is for portfolio and demonstration purposes only. Please do not clone or use it for production.

## API Paths

The server exposes the following main API endpoints:

- **Investor APIs** (`/api/v1/investor`)
  - `POST /create` — Create a new investor

- **Startup APIs** (`/api/v1/startup`)
  - `POST /create` — Create a new startup
  - `PUT /upload/files` — Upload files for a startup
  - `GET /get/logo` — Retrieve a startup's logo
  - `POST /payment/details` — Set payment status for a startup

- **User APIs** (not mounted in main router, but available in `user.route.js`)
  - `POST /create-user` — Create a new user
  - `GET /get-response` — Test endpoint for user response

> **Note:** These endpoints are for demonstration purposes only.


## Developer Information

**Developed by:** Abhishek Das  
**Year:** 2022

> This section is reserved for documenting specific functions, classes, or modules.
> Please note: The code in this project is part of a personal portfolio and is protected intellectual property.
You are welcome to take inspiration or learn from the structure or ideas, but do not copy or reuse the code directly without permission.
If you'd like to understand the implementation or seek guidance, feel free to reach out.
