# Cryptocurrency App

Cryptocurrency App is a React-based cryptocurrency quotation app that allows users to select a fiat currency and a cryptocurrency to fetch real-time price quotations. It is built using React, Zustand for state management, react-hook-form for form handling, and [CryptoCompare API](https://min-api.cryptocompare.com/documentation) for fetching data.

## API Usage in the Cryptocurrency App

The Cryptocurrency App relies on the CryptoCompare API to fetch real-time cryptocurrency data. Two key API endpoints are used in this project:

1. [Toplist by Market Cap API](https://min-api.cryptocompare.com/documentation?key=Price&cat=multipleSymbolsFullPriceEndpoint): This API provides a list of the top 10 cryptocurrencies sorted by market capitalization. It helps display popular cryptocurrencies so that users can select from a list of widely traded coins.

2. [Multiple Symbols Full Data API](https://min-api.cryptocompare.com/documentation?key=Toplists&cat=topExchangesFullEndpoint): This API fetches detailed trading data for a list of cryptocurrencies. It returns real-time information such as:

- IMAGEURL
- PRICE
- HIGHDAY
- LOWDAY
- CHANGEPCT24HOUR
- LASTUPDATE

This is used to display a cryptocurrency's price and trading details after the user submits the form.

## Features

- Fetches real-time cryptocurrency data
- Uses **Zustand** for efficient state management
- Built-in form validation with **react-hook-form**
- Responsive UI for seamless user experience
- **Simple CSS spinner** for loading state
- **Error handling** for smooth API requests

## Technologies Used

- React – Frontend UI
- Zustand – State management
- React Hook Form – Form handling & validation
- Axios – API calls
- CryptoCompare API – Fetching cryptocurrency data
- Zod – Data validation
- TypeScript – Strong typing for scalability
- CSS Spinner – Simple UI loader

## Explanation of Key Technologies

- [Zustand (State Management)](https://zustand.docs.pmnd.rs/getting-started/introduction):
  Zustand is a lightweight and powerful state management library that allows for global state management without the complexity of Redux.

- [Zod (Schema Validation)](https://www.npmjs.com/package/zod):
  Zod is a TypeScript-first validation library that ensures API responses match expected structures.

- [Simple CSS Spinner](https://tobiasahlin.com/spinkit/):
  A CSS spinner improves user experience by visually indicating that data is being loaded.

## Deploy in Vercel

[Cryptocurrency App](https://crypto-app-flax-ten.vercel.app/)

![Home Page](./src/assets/screenshots/Screenshot1.png)

![Searching](./src/assets/screenshots/Screenshot2.png)

![Result](./src/assets/screenshots/Screenshot3.png)
