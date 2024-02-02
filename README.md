# Exchange Rate Web Application

## Project Description
This project is a simple web application that allows users to select a base currency and fetch exchange rates using the open.er-api.com API. It uses Web Workers to offload the exchange rate processing to a separate thread for potential performance improvements.

## How to Run the Project Locally
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Select a base currency from the dropdown menu
4. Click on the button that says Get Exchange Rates

## Web Workers and Performance Improvements
The project leverages Web Workers to process exchange rates in a separate thread, enhancing the application's performance. By offloading heavy computations to Web Workers, the main thread remains responsive, providing a smoother user experience.

## Challenges Faced and Solutions
### Challenge: Asynchronous API Request
Fetching exchange rates from the API is an asynchronous operation, and processing large datasets could potentially block the main thread.

### Solution: Web Workers
To overcome this, Web Workers are employed to handle the processing asynchronously. The `worker.js` file processes exchange rates independently, ensuring the main thread remains free for user interactions.

## References and Resources
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [open.er-api.com Documentation](https://open.er-api.com/)
- [Web workers in JavaScript and when to use them](https://benestudio.co/web-workers-in-javascript-and-when-to-use-them/)
