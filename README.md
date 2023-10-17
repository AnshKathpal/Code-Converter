# Code Converter App

## Description
Code Converter is a web application that helps developers with code-related tasks. It provides features like code conversion, code quality analysis, code debugging, and code execution. The app integrates OpenAI's ChatGPT to offer assistance and explanations for code-related queries. This readme offers an overview of the Code Converter app, highlighting its integration with ChatGPT, as well as the technology stack used.

## Features
- **Code Conversion**: Convert code between Python, JavaScript, Java, and C++ languages.

- **Code Quality Analysis**: Analyze code for quality and provide suggestions for improvement.

- **Code Debugging**: Debug code by identifying and helping to fix errors and issues.

- **Code Execution**: Execute code and display its output.

- **Login with OAuth**: Authenticate users with GitHub OAuth for a personalized experience.

## Tech Stack
### Frontend
- **React**: The user interface is built using React, offering a modern and responsive design.

- **Chakra UI**: Chakra UI is used for creating a visually appealing and accessible design.

### Backend
- **Node.js**: The server-side logic is implemented using Node.js, providing a scalable runtime for the backend.

- **Express.js**: Express.js is used as the web application framework to handle routing and middleware operations.

- **Mongoose**: Mongoose is utilized for MongoDB database interactions, making it easy to work with data models.

- **MongoDB**: The app's data is stored in a MongoDB database.

### Integration
- **OpenAI ChatGPT 3.5**: The application integrates with ChatGPT for code-related queries and explanations.

## Installation and Setup
1. Clone the repository from GitHub.

2. Navigate to the project directory and install the required dependencies for both the frontend and backend using `npm install`.

3. Set up a MongoDB database and configure the database connection in the backend.

4. Create environment variables for sensitive information, such as the OpenAI API key.

5. Run the frontend and backend servers using `npm start`.

6. Access the Code Converter app via a web browser by navigating to the specified URL (usually `http://localhost:3000`).

## Usage
1. Open the Code Converter app in your web browser.

2. Log in with your GitHub account using OAuth to access personalized features.

3. Use the app to convert, analyze, debug, and execute code in different languages.

4. For code-related queries, interact with ChatGPT, which provides explanations and assistance.

5. Enjoy a seamless coding experience with the app's features.

## Contributing
Contributions to the Code Converter app are welcome. Please follow the guidelines outlined in the CONTRIBUTING.md file.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Author
- Ansh Kathpal

## Acknowledgments
Special thanks to the React, Node.js, and OpenAI communities for providing the tools and resources that made this application possible.