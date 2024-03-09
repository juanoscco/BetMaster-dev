# BETMASTER

BetMaster is a betting application that allows you to simulate matches and place bets in real-time.

## Server Architecture

The server architecture is based on a JSON endpoint structure, following a basic Model-View-Controller (MVC) pattern with Express and Node.js.

### JSON Endpoints

JSON endpoints provide an interface to interact with the application logic and access resources necessary for placing bets, simulating matches, etc.

### MVC Pattern

The MVC architecture divides the application into three main components:

- **Model**: Represents the data structure and application logic. Handles interaction with the database and data manipulation.

- **View**: Responsible for presenting information to the user. In the case of a JSON API, the view can be the representation of data returned by endpoints.

- **Controller**: Acts as an intermediary between the model and the view. Processes client requests, interacts with the model, and returns the appropriate response to the client.

## Technologies Used

- **Node.js**: Runtime environment for JavaScript on the server-side.
- **Express.js**: Web framework for Node.js that simplifies web application creation and route management.
- **PostgreSQL**: Relational database management system used to store structured data such as users, matches, bets, etc.
- **TypeORM**: Object-Relational Mapping (ORM) for TypeScript and JavaScript that simplifies interaction with the PostgreSQL database and facilitates data manipulation.

## Installation and Execution

1. Clone this repository: `git clone https://github.com/jcom-dev/betmaster.git`
2. Navigate to the server directory: `cd betmaster-dev/server`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## Contribution

If you wish to contribute to BetMaster, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -am 'Add a new feature'`
4. Push your branch: `git push origin feature/new-feature`
5. Submit a pull request.

## License

BetMaster is distributed under the MIT license. See the `LICENSE` file for more details.
