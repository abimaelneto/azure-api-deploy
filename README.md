# Contents of /weather-api/weather-api/README.md

# Weather API

This project is a simple Node.js application using Express that queries a weather API to fetch and display temperature data for the last 7 days in Curitiba. The application provides temperature values in Celsius, Fahrenheit, and Kelvin, along with an indication of whether the temperature was cold, warm, or hot.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd weather-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file based on the `.env.example` file and add your API keys.

5. Start the application:
   ```
   npm start
   ```

## Usage

Once the application is running, you can access the weather data by sending a GET request to the following endpoint:
```
GET /weather
```

This will return a JSON response with the temperature data for the last 7 days in Curitiba.