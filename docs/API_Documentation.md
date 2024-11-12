API Documentation
Overview
This API provides endpoints to manage an e-commerce platform where users (Lovecraftian squids) buy and sell human cities as products. The platform includes user authentication, CRUD operations for cities, reviews for cities, order processing, and admin functionalities. Each endpoint has specific requirements and returns structured JSON responses.

Table of Contents
Authentication
City Operations
Review Operations
Order Management
Admin Functions
Error Handling
Example Requests and Responses
Authentication

1. Register New User
   Endpoint: /api/auth/register
   Method: POST
   Description: Registers a new user.
   Request Body:
   json

   {
   "username": "string",
   "password": "string"
   }
   Response:
   201 Created: User registered successfully.
   400 Bad Request: Validation errors (e.g., missing username/password).

2. Login
   Endpoint: /api/auth/login
   Method: POST
   Description: Authenticates a user and provides a JWT token.
   Request Body:
   json

   {
   "username": "string",
   "password": "string"
   }
   Response:
   200 OK: Returns the JWT token.
   401 Unauthorized: Incorrect credentials.
   City Operations

3. Create a New City
   Endpoint: /api/cities
   Method: POST
   Description: Adds a new city as a product to the marketplace.
   Request Body:
   json

   {
   "name": "string",
   "description": "string",
   "price": "number"
   }
   Response:
   201 Created: City created.
   400 Bad Request: Validation errors.

4. Get All Cities
   Endpoint: /api/cities
   Method: GET
   Description: Retrieves a list of all cities available in the marketplace.
   Response:
   200 OK: Returns an array of cities.
5. Get City by ID
   Endpoint: /api/cities/:id
   Method: GET
   Description: Retrieves details of a specific city.
   Response:
   200 OK: Returns city details.
   404 Not Found: City not found.
6. Update City
   Endpoint: /api/cities/:id
   Method: PUT
   Description: Updates city information.
   Request Body: Fields to be updated (e.g., name, description, price).
   Response:
   200 OK: City updated.
   404 Not Found: City not found.
7. Delete City
   Endpoint: /api/cities/:id
   Method: DELETE
   Description: Deletes a city from the marketplace.
   Response:
   200 OK: City deleted.
   404 Not Found: City not found.
   Review Operations
8. Add a Review for a City
   Endpoint: /api/reviews
   Method: POST
   Description: Submits a review for a city.
   Request Body:
   json

   {
   "cityId": "string",
   "rating": "number",
   "content": "string"
   }
   Response:
   201 Created: Review added.
   400 Bad Request: Validation errors.

9. Get Reviews by City
   Endpoint: /api/reviews/city/:cityId
   Method: GET
   Description: Retrieves reviews for a specific city.
   Response:
   200 OK: Array of reviews.
10. Update Review
    Endpoint: /api/reviews/:id
    Method: PUT
    Description: Updates a specific review.
    Response:
    200 OK: Review updated.
    404 Not Found: Review not found.
11. Delete Review
    Endpoint: /api/reviews/:id
    Method: DELETE
    Description: Deletes a review.
    Response:
    200 OK: Review deleted.
    404 Not Found: Review not found.
    Order Management
12. Create Order
    Endpoint: /api/orders
    Method: POST
    Description: Creates a new order for a city.
    Request Body:
    json

    {
    "userId": "string",
    "cityId": "string",
    "quantity": "number"
    }
    Response:
    201 Created: Order created.
    400 Bad Request: Validation errors.

13. Get Orders by User
    Endpoint: /api/orders/user/:userId
    Method: GET
    Description: Retrieves orders placed by a user.
    Response:
    200 OK: Array of orders.
14. Update Order Status
    Endpoint: /api/orders/:id/status
    Method: PUT
    Description: Updates the status of an order.
    Request Body:
    json

    {
    "status": "string"
    }
    Response:
    200 OK: Status updated.
    404 Not Found: Order not found.
    Admin Functions

15. Get All Users
    Endpoint: /api/admin/users
    Method: GET
    Description: Retrieves a list of all users (Admin only).
    Response:
    200 OK: Array of users.
    403 Forbidden: Not authorized.
16. Get All Cities (Admin)
    Endpoint: /api/admin/cities
    Method: GET
    Description: Retrieves all cities in the system (Admin only).
    Response:
    200 OK: Array of cities.
    403 Forbidden: Not authorized.
    Error Handling
    400 Bad Request: Returned when the request data is invalid or incomplete.
    401 Unauthorized: Returned when user authentication fails.
    403 Forbidden: Returned when a user attempts to access a restricted endpoint (e.g., admin-only).
    404 Not Found: Returned when a requested resource cannot be found (e.g., city, review).
    500 Internal Server Error: Returned when an unexpected server error occurs.
    Example Requests and Responses
    Register New User
    Request

http
Copy code
POST /api/auth/register
Content-Type: application/json

{
"username": "newUser",
"password": "password123"
}
Response

json
Copy code
{
"message": "User created successfully"
}
Get All Cities
Request

http
Copy code
GET /api/cities
Response

json
Copy code
[
{
"id": "1",
"name": "City Alpha",
"description": "A bustling metropolis now under squid control.",
"price": 500000
},
{
"id": "2",
"name": "City Beta",
"description": "A quiet coastal town, perfect for cephalopod relaxation.",
"price": 300000
}
]
Submit a Review for a City
Request

http
Copy code
POST /api/reviews
Content-Type: application/json

{
"cityId": "1",
"rating": 5,
"content": "Amazing city with a unique squid-friendly atmosphere!"
}
Response

json
Copy code
{
"id": "123",
"cityId": "1",
"rating": 5,
"content": "Amazing city with a unique squid-friendly atmosphere!"
}
Admin - Get All Users
Request

http
Copy code
GET /api/admin/users
Authorization: Bearer [AdminToken]
Response

json
Copy code
[
{
"id": "user1",
"username": "squidMaster"
},
{
"id": "user2",
"username": "cityCollector"
}
]
This documentation covers the key functionality and usage of each endpoint, including required parameters, response structures, and potential error responses, providing developers with a clear guide to integrating with the API.

# **API Documentation**

## Overview

This document provides an overview of all API endpoints available in the Lovecraftian e-commerce platform. Here, users can buy and sell human cities as products. The API includes endpoints for user authentication, city (product) management, review operations, order processing, and administrative functions.

Each endpoint is explained with its request method, endpoint URL, required parameters, example requests, and expected responses.

---

## Table of Contents

1. [Authentication](#authentication)

   - [Register New User](#register-new-user)
   - [Login](#login)

2. [City Operations](#city-operations)

   - [Create a New City](#create-a-new-city)
   - [Get All Cities](#get-all-cities)
   - [Get City by ID](#get-city-by-id)
   - [Update City](#update-city)
   - [Delete City](#delete-city)

3. [Review Operations](#review-operations)

   - [Add a Review for a City](#add-a-review-for-a-city)
   - [Get Reviews by City](#get-reviews-by-city)
   - [Update Review](#update-review)
   - [Delete Review](#delete-review)

4. [Order Management](#order-management)

   - [Create Order](#create-order)
   - [Get Orders by User](#get-orders-by-user)
   - [Update Order Status](#update-order-status)

5. [Admin Functions](#admin-functions)

   - [Get All Users](#get-all-users)
   - [Get All Cities (Admin)](#get-all-cities-admin)

6. [Error Handling](#error-handling)
7. [Example Requests and Responses](#example-requests-and-responses)

---

## 1. Authentication

### Register New User

- **Endpoint**: `/api/auth/register`
- **Method**: `POST`
- **Description**: Registers a new user in the system.
- **Request Body**:

  ```json
  {
    "username": "string",
    "password": "string"
  }
  Response:
  201 Created: Successful registration.
  400 Bad Request: Missing required fields.
  Login
  Endpoint: /api/auth/login
  Method: POST
  Description: Authenticates a user, returning a JWT token.
  Request Body:
  json


  {
  "username": "string",
  "password": "string"
  }
  Response:
  200 OK: JWT token.
  401 Unauthorized: Invalid credentials.
  ```

2. City Operations
   Create a New City
   Endpoint: /api/cities
   Method: POST
   Description: Adds a new city to the platform.
   Request Body:
   json

   {
   "name": "string",
   "description": "string",
   "price": "number"
   }
   Response:
   201 Created: City added.
   400 Bad Request: Invalid data.
   Get All Cities
   Endpoint: /api/cities
   Method: GET
   Description: Retrieves all cities in the platform.
   Response:
   200 OK: Array of city objects.
   Get City by ID
   Endpoint: /api/cities/:id
   Method: GET
   Description: Retrieves details of a specific city.
   Response:
   200 OK: City details.
   404 Not Found: City not found.
   Update City
   Endpoint: /api/cities/:id
   Method: PUT
   Description: Updates an existing city.
   Request Body: Fields like name, description, or price.
   Response:
   200 OK: City updated.
   404 Not Found: City not found.
   Delete City
   Endpoint: /api/cities/:id
   Method: DELETE
   Description: Removes a city from the platform.
   Response:
   200 OK: City deleted.
   404 Not Found: City not found.

3. Review Operations
   Add a Review for a City
   Endpoint: /api/reviews
   Method: POST
   Description: Adds a review for a city.
   Request Body:
   json

   {
   "cityId": "string",
   "rating": "number",
   "content": "string"
   }
   Response:
   201 Created: Review added.
   400 Bad Request: Invalid data.
   Get Reviews by City
   Endpoint: /api/reviews/city/:cityId
   Method: GET
   Description: Retrieves reviews for a specific city.
   Response:
   200 OK: Array of reviews.
   Update Review
   Endpoint: /api/reviews/:id
   Method: PUT
   Description: Updates a review.
   Response:
   200 OK: Review updated.
   404 Not Found: Review not found.
   Delete Review
   Endpoint: /api/reviews/:id
   Method: DELETE
   Description: Removes a review.
   Response:
   200 OK: Review deleted.
   404 Not Found: Review not found.

4. Order Management
   Create Order
   Endpoint: /api/orders
   Method: POST
   Description: Creates a new order.
   Request Body:
   json

   {
   "userId": "string",
   "cityId": "string",
   "quantity": "number"
   }
   Response:
   201 Created: Order created.
   400 Bad Request: Invalid data.
   Get Orders by User
   Endpoint: /api/orders/user/:userId
   Method: GET
   Description: Retrieves all orders for a user.
   Response:
   200 OK: Array of orders.
   Update Order Status
   Endpoint: /api/orders/:id/status
   Method: PUT
   Description: Updates the status of an order.
   Request Body:
   json

   {
   "status": "string"
   }
   Response:
   200 OK: Status updated.
   404 Not Found: Order not found.

5. Admin Functions
   Get All Users
   Endpoint: /api/admin/users
   Method: GET
   Description: Retrieves all users (Admin only).
   Response:
   200 OK: Array of user data.
   403 Forbidden: Unauthorized.
   Get All Cities (Admin)
   Endpoint: /api/admin/cities
   Method: GET
   Description: Retrieves all cities (Admin only).
   Response:
   200 OK: Array of city data.
   403 Forbidden: Unauthorized.
6. Error Handling
   Common HTTP status codes used:

400 Bad Request: Invalid data in request.
401 Unauthorized: Authentication failure.
403 Forbidden: Unauthorized access (Admin only).
404 Not Found: Resource does not exist.
500 Internal Server Error: Unhandled server error. 7. Example Requests and Responses
Example: Register New User
http
Copy code
POST /api/auth/register
Content-Type: application/json

{
"username": "newUser",
"password": "password123"
}
Response

json
Copy code
{
"message": "User created successfully"
}
Example: Get All Cities
http
Copy code
GET /api/cities
Response

json
Copy code
[
{
"id": "1",
"name": "City Alpha",
"description": "Bustling city under squid rule.",
"price": 500000
},
{
"id": "2",
"name": "City Beta",
"description": "Coastal haven for squid relaxation.",
"price": 300000
}
]
This document provides a complete reference for the API. Each endpoint is organized with descriptions, request structures, response formats, and example data. This helps developers easily understand the functionality and integration steps.
