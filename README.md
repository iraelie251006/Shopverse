# E-Commerce Platform

This repository contains the code for an **E-Commerce platform** built using **Next.js**, **TypeScript**, and **Prisma ORM**. The application is designed to provide a modern and scalable solution for online stores, offering features such as product browsing, shopping cart management, and secure authentication.

## Features

- **Product Catalog:** Display products with details such as price, description, and category. Users can filter and search for products based on their preferences.
- **Server-Side Rendering (SSR):** Optimized for SEO with server-side rendering powered by Next.js.
- **Responsive Design:** A fully responsive layout that ensures a seamless experience on both mobile and desktop devices.
- **Secure API:** The application uses Next.js API Routes to handle backend logic, ensuring a secure and maintainable codebase.
- **Database Integration:** Data is stored in a PostgreSQL database, managed with Prisma for an efficient and easy-to-use ORM solution.

## Tech Stack

- **Frontend:** 
  - [Next.js](https://nextjs.org/) - A React framework for building modern web applications.
  - [TypeScript](https://www.typescriptlang.org/) - A strongly-typed programming language that improves code reliability and maintainability.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework that enables fast and flexible design.

- **Backend:**
  - [Prisma](https://www.prisma.io/) - An open-source ORM that simplifies database management and querying.

- **Database:**
  - [PostgreSQL](https://www.postgresql.org/) - A powerful open-source relational database system.

- **Hosting:**
  - [Vercel](https://vercel.com/) for deployment.

## Getting Started

To get started with this project locally, follow the steps below:

### 1. Clone the Repository

Clone the repository to your local machine using:

```bash
git clone https://github.com/iraelie251006/Shopverse.git
cd DatabaseStarter
```

### 2. Install Dependencies

Install the necessary dependencies using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory and add the following environment variables:

```bash
DATABASE_URL=your_postgres_connection_string
NEXTAUTH_SECRET=your_secret_key
```

Replace your_postgres_connection_string with the connection string for your PostgreSQL database and your_secret_key with a secure string for JWT token signing.

### 4. Set Up the Database

Run the following Prisma commands to generate the Prisma client and push the database schema:

```bash
npx prisma generate
npx prisma db push
```

If you are using migrations, run the following command to apply your database migrations:

```bash
npx prisma migrate dev --name init
```

### 5. Run the Development Server

Start the development server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 6. Deployment

This project is optimized for deployment on platforms like Vercel and Railway. To deploy the application, follow the deployment instructions for your chosen platform.

For Vercel, simply connect your GitHub repository and Vercel will automatically deploy the application.
For Railway, follow the platform’s instructions to deploy the app using GitHub integration or manual setup.

### 7.Contributing

We welcome contributions to improve this project! If you find bugs, have suggestions for features, or would like to improve the documentation, please feel free to open an issue or submit a pull request.

To contribute:

**1**. Fork the repository.

**2**. Create a new branch (git checkout -b feature/your-feature-name).

**3**. Make your changes.

**4**. Commit your changes (git commit -m 'Add your feature').

**5**. Push to the branch (git push origin feature/your-feature-name).

**6**. Open a pull request.

### 8.License

This project is licensed under the MIT License - see the LICENSE file for details.

### 9.Acknowledgements

- [Next.js](https://nextjs.org/) - A React framework for building modern web applications.
 
- [TypeScript](https://www.typescriptlang.org/) - A strongly-typed programming language that improves code reliability and maintainability.
 
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework that enables fast and flexible design.
 
- [Prisma](https://www.prisma.io/) - An open-source ORM that simplifies database management and querying.
 
- [PostgreSQL](https://www.postgresql.org/) - A powerful open-source relational database system.


### 10.Author

**Niyubwayo Irakoze Elie**
- [LinkedIn](https://www.linkedin.com/in/niyubwayo-irakoze-elie-14b003284/)
