## TMS - Front End




## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version x.x.x)
- Git installed

## Getting Started

To get a local copy up and running, follow these simple steps:

### Installation

1. Install Node.js: If you haven't already, you can download and install Node.js from [nodejs.org](https://nodejs.org/).

2. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
  

3. Change your working directory to the project root:
   cd project name
4. Install Global PNPM:
We recommend using PNPM as the package manager for your Next.js project. To install PNPM globally, run:
```bash
 npm install -g pnpm

```
 
5. Install Dependencies:
Now, install the project's dependencies using PNPM. In your project directory, run:
```bash
 pnpm install

```
This command will install all the required dependencies specified in the package.json file.

6. Run the Project:
```bash 
  pnpm dev

```
Your Next.js application should be accessible at http://localhost:3000 in your web browser.


<!-- First, install the packages:

```bash
npm install
# or
yarn install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```--->

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


# Backend Project README

This is the README file for a backend project. In this project, we'll be working with MsSQL and Redis databases. Follow the instructions below to set up and run the project.

## Prerequisites

Before you get started, make sure you have the following software and tools installed:

- [MsSQL](https://www.mssql.com/): The database system.
- [Redis](https://redis.io/): An in-memory data structure store.
- [pnpm](https://pnpm.io/): A package manager (you can also use npm or yarn).
- Code editor of your choice (e.g., Visual Studio Code).

## Setting Up the Environment

1. **Install Dependencies:**
   Use pnpm to install project dependencies. Run this command in the project directory:

   ```bash
   pnpm install

### Configuration: 
Create a .env file in the project's root directory and copy the data from the .example.env file into it. Configure the .env file with your database and Redis connection details, making sure to replace the following placeholders with your specific values:

DB_HOST=your_mssql_host

DB_USER=your_mssql_user

DB_PASSWORD=your_mssql_password

DB_DATABASE=your_mssql_database

REDIS_HOST=your_redis_host

REDIS_PORT=your_redis_port


Replace your_mssql_host, your_mssql_user, your_mssql_password, your_mssql_database, your_redis_host, and your_redis_port with your specific values.



Running the Project

To start the project in development mode, run the following command:
```bash
pnpm start:dev


This command will start the backend server and make it available for development and testing. You can access the API at http://localhost:YOUR_PORT, where YOUR_PORT is the port specified in your project configuration.


