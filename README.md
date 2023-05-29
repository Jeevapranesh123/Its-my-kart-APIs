# Student Management System

This is a simple CRUD (Create, Read, Update, Delete) application for managing students using MongoDB and Node.js. It provides a RESTful API to perform operations on student data.

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

```bash
   git clone <repo-url>
```

2. Navigate to the project directory:

```bash
   cd student-management-system
```

3. Install the dependencies:

```bash
   npm install
```

4. Start the server:

```bash
   npm start
```
The nodejs server will start at port 9000. Head to [http://127.0.0.1:9000](http://127.0.0.1:9000) to test the APIs.

5. For seamless Installation and Deployment use the Dockerfile and docker-compose.yml file.

```bash
   docker-compose up
```

The server should be running on [http://localhost:3000](http://localhost:3000).

Also the server is running in cloud on [https://]


## Usage

Once the server is running, you can use the following endpoints to interact with the API:

- **POST /students:** Create a new student. Send a JSON object with the student's name, age, and grade, registration id in the request body.

- **GET /students:** Get a list of all students.

- **GET /students/:regid:** Get a single student by their REGID.

- **PUT /students/:regid:** Update a student by their REGID. Send a JSON object with the updated student data in the request body.

- **DELETE /students/:regid:** Delete a student by their REGID.

### Example Requests

#### Create a new student

```http
POST /students
Content-Type: application/json

{
  "name": "John Doe",
  "age": 18,
  "grade": "A"
  "regid": "60b9b0b9b8b7a3b9b8b7a3b9"
}
```

#### Get all students

```http
GET /students
```

#### Get a single student

```http
GET /students/60b9b0b9b8b7a3b9b8b7a3b9
```

#### Update a student

```http
PUT /students/60b9b0b9b8b7a3b9b8b7a3b9
Content-Type: application/json

{
  "name": "John Doe",
  "age": 18,
  "grade": "A"
}
```

#### Delete a student

```http
DELETE /students/60b9b0b9b8b7a3b9b8b7a3b9
```

### Postman Collection

You can also use the provided Postman collection to test the API. Download the collection JSON file from [here](Its-My-Cart.postman_collection.json) and import it into your Postman app.

The collection includes pre-configured requests for each endpoint along with example payloads.

The url in postman starts with env variable ```{{baseUrl}}```.

Create a Environment variable ```baseUrl``` and set it to ```http://localhost:9000``` for pre-configured test or  ```https://``` depending on your deployment.

Change the postman environment to the create environment variable to test the collection.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality of this project, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
