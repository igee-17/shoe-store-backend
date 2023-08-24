## API Documentation

### Base URL
The base URL for all endpoints is: `https://shoe-store-5wdt.onrender.com`

### Create User
Endpoint: `/api/users`
Method: `POST`
Description: Creates a new user in the Firestore database.

Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "+1234567890"
}
```

Response:
- Status: 201 Created
- Body:
  ```json
  {
    "message": "User created successfully"
  }
  ```

### Store Cart Data
Endpoint: `/api/store`
Method: `POST`
Description: Stores the cart data for a user in the Firestore database.

Request Body:
```json
{
  "cartItem": {
    "id": "item123",
    "title": "Product Name",
    "price": 25.99,
    "quantity": 2
  }
}
```

Response:
- Status: 200 OK
- Body:
  ```
  Cart data stored successfully
  ```

## Testing the APIs
You can use Postman to test the APIs. Here are the steps:

1. Open Postman.
2. Create a new request.
3. Set the request method to `POST`.
4. Enter the URL based on the endpoint you want to test, for example:
   - For user creation: `http://localhost:3000/api/users`
   - For storing cart data: `http://localhost:3000/api/store`
5. Select the "Body" tab.
6. Choose the "raw" option and set the request body in JSON format as shown in the request body examples above.
7. Click the "Send" button to make the request.

Remember to adjust the data in the request body according to your requirements.

This Postman documentation provides a quick reference for testing the APIs you've set up in your Express.js backend.
