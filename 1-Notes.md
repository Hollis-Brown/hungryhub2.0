## I'm Building a Restaurant Delivery App

### Customer Features:
- User Registration/Login
- Profile Creation
- Restaurant Search & Discovery
- Order Placement
- Payment Integration
- Order Tracking

### Restaurant Features:
- Restaurant Registration
- Order Management
- Payment Processing

---

**Technologies and Tools:**

- **Frontend Framework:** React
  - Why: React is a popular JavaScript library for building user interfaces, particularly single-page applications. Its component-based architecture makes it ideal for developing dynamic and interactive UIs for web applications.

- **Frontend Build Tool:** Vite
  - Why: Vite provides a faster and leaner development experience for modern web projects. It offers instant server start-up and hot module replacement, significantly speeding up the development process compared to traditional build tools.

- **Backend Framework:** Express
  - Why: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of writing server-side applications and is widely used due to its simplicity and performance.

- **Backend Runtime:** Node.js
  - Why: Node.js is a runtime environment that executes JavaScript outside of a browser. It's highly efficient for building fast and scalable network applications. Node.js' non-blocking I/O model makes it perfect for real-time applications like a restaurant delivery app.

- **Database:** MySQL
  - Why: MySQL is a reliable, open-source relational database management system. It's known for its strong reliability, data integrity, and correctness. These characteristics make it suitable for applications that require complex queries and transactions, such as managing restaurant data and customer orders.

- **Package Managers:** npm (for Node.js)
  - Why: npm is the default package manager for Node.js. It helps in installing, updating, configuring, and managing Node.js packages. Using npm ensures consistency and streamlines dependency management across your project.

- **Environment Variable Management:** dotenv
  - Why: dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. It's useful for keeping sensitive information like database passwords secure and separate from your code.

- **HTTP Request Middleware:** cors, body-parser
  - Why: `cors` is used to enable Cross-Origin Resource Sharing (CORS) in your Express app, allowing your frontend to communicate with your backend even if they are hosted on different domains. `body-parser` middleware parses incoming request bodies in a middleware before your handlers, available under the `req.body` property, facilitating the processing of form data and JSON payloads.

- **Security:** JSON Web Token (JWT), bcrypt
  - Why: JWT is used for securely transmitting information between parties as a JSON object. It's ideal for authentication and information exchange in web applications. `bcrypt` is a library to hash passwords for safer storage, protecting against unauthorized access to user data.

---

**Folder Structure:**

```
food-delivery-app/
│
├── backend/                     # Server-side logic
│   ├── src/                    # Source files for the backend
│   │   ├── config/            # Configuration files (e.g., database connection)
│   │   ├── controllers/       # Controller functions for handling HTTP requests
│   │   ├── models/             # Database models
│   │   ├── routes/             # Routes definition
│   │   └── utils/              # Utility functions
│   ├── package.json            # Backend dependencies and scripts
│   └──.env                    # Environment variables for the backend
│
└── frontend/                    # Client-side UI
    ├── public/                 # Static assets (images, etc.)
    ├── src/                    # Source files for the frontend
    │   ├── components/         # Reusable UI components
    │   ├── pages/              # Page components (e.g., Home, RestaurantList, OrderPage)
    │   ├── App.js              # Main app component
    │   ├── index.js            # Entry point for the frontend
    │   └── App.css             # Global styles
    ├── package.json            # Frontend dependencies and scripts
    └──.env                    # Environment variables for the frontend
```

### Explanation of Key Folders:

- **`backend/src/config/`**: Contains configuration files such as database connection settings.
- **`backend/src/controllers/`**: Holds controller functions that handle business logic and interact with models.
- **`backend/src/models/`**: Defines database models for entities like restaurants and customers.
- **`backend/src/routes/`**: Defines the routes for your API, linking controllers to specific endpoints.
- **`backend/src/utils/`**: Contains utility functions that can be reused across different parts of the backend.
- **`frontend/public/`**: Stores static assets like images, logos, and icons.
- **`frontend/src/components/`**: Contains reusable UI components like buttons, input fields, and cards.
- **`frontend/src/pages/`**: Holds page components that represent different views in your app, such as the home page, restaurant listing, and order page.
- **`frontend/src/App.js`**: The main component that renders the rest of the application.
- **`frontend/src/App.css`**: Global styles that apply to the entire application.

---

### Backend Project Setup (Node.js + Express)

1. **Project Initialization**
   - Initialize a new Node.js project in the `backend` directory.
   - Install necessary packages (`express`, `mysql`, `cors`, `body-parser`, `dotenv`, `jsonwebtoken`, `bcryptjs`).

2. **Environment Configuration**
   - Create a `.env` file in the `backend` directory for environment variables.

3. **Folder Structure**
   - Inside `backend/src`, create the following folders:
     - `config`
     - `controllers`
     - `models`
     - `routes`
     - `utils`
     - `auth`

4. **Files Creation**
   - Inside `backend/src/config`, create a `db.js` file for database configuration.
   - Inside `backend/src/controllers`, create the following controller files:
     - `restaurantController.js` for handling operations related to restaurants.
     - `customerController.js` for managing operations for customers.
   - Inside `backend/src/models`, create the following model files:
     - `Restaurant.js` defining the schema for restaurant data.
     - `Customer.js` specifying the schema for customer data.
   - Inside `backend/src/routes`, create the following route files corresponding to your controllers:
     - `restaurantRoutes.js` for setting up API endpoints related to restaurants.
     - `customerRoutes.js` for configuring API endpoints for customer-related actions.
   - Inside `backend/src/utils`, create utility files as needed, such as:
     - `auth.js` for authentication utilities.
   - Inside `backend/src/auth`, create the following files for JWT-related functionalities:
     - `jwtStrategy.js` implementing the strategy for signing and verifying JWT tokens.
     - `authController.js` handling authentication-related controller functions.


5. **Main Application File**
   - In the root of `backend`, create an `index.js` file to set up your Express server and connect it to your routes.

---

### Frontend Project Setup (React + Vite)

1. **Project Initialization**
   - Initialize a new React project in the `frontend` directory using Vite.

2. **Environment Configuration**
   - Create a `.env` file in the `frontend` directory for environment variables.

3. **Folder Structure**
   - Inside `frontend/src`, create the following folders:
     - `components`
     - `pages`
     - `App.js`
     - `index.js`

4. **Files Creation**
   - Inside `frontend/src/components`, create reusable component files as needed (e.g., `Header.js`, `Footer.js`).
   - Inside `frontend/src/pages`, create page component files corresponding to your app's views (e.g., `HomePage.js`, `RestaurantPage.js`, `OrderPage.js`).
   - In `frontend/src/App.js`, set up your main app component to render the pages.
   - In `frontend/src/index.js`, set up your entry point for the React app.

### Final Steps

1. **Build and Run**
   - In both `backend` and `frontend` directories, run the build commands to compile your applications.
   - Set up proxying in your frontend to redirect API calls to your backend server.
   - Start both servers (backend and frontend) to see your app running.
