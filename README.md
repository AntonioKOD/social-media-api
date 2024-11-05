
# Social Media API

This project is a RESTful API designed for a social media platform, enabling users to share thoughts, react to friends' thoughts, and manage a friends list. Built with Node.js, Express.js, and MongoDB, it provides a robust backend for social networking applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Contributing](#contributing)
- [License](#license)

## Features

- CRUD operations for thoughts and reactions
- Friendship management
- Data validation and error handling

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AntonioKOD/social-media-api.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd social-media-api
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and add the following:

   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/socialmedia
   ```

5. **Start the Server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3001`.

## Usage

After setting up and starting the server, you can interact with the API using tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/). The API allows you to perform operations such as creating users, posting thoughts, adding reactions, and managing friendships.

## API Endpoints

The API provides the following endpoints:

### Users

- **Create User**: `POST /api/users`
- **Get All Users**: `GET /api/users`
- **Get User by ID**: `GET /api/users/:userId`
- **Update User**: `PUT /api/users/:userId`
- **Delete User**: `DELETE /api/users/:userId`

### Thoughts

- **Create Thought**: `POST /api/thoughts`
- **Get All Thoughts**: `GET /api/thoughts`
- **Get Thought by ID**: `GET /api/thoughts/:thoughtId`
- **Update Thought**: `PUT /api/thoughts/:thoughtId`
- **Delete Thought**: `DELETE /api/thoughts/:thoughtId`

### Reactions

- **Add Reaction**: `POST /api/thoughts/:thoughtId/reactions`
- **Delete Reaction**: `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`

### Friends

- **Add Friend**: `POST /api/users/:userId/friends/:friendId`
- **Remove Friend**: `DELETE /api/users/:userId/friends/:friendId`

## Models

The application uses the following Mongoose models:

### User

```javascript
{
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match a valid email address'],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
}
```

### Thought

```javascript
{
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
}
```

### Reaction

```javascript
{
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
}
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
