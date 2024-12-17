# LedgerLink

Welcome to the LedgerLink, a crop insurance portal! This project allows users to submit insurance claims securely. Users can sign up using their **wallet address** and file claims, which will be stored in a decentralized database. 

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Testing](#testing)
- [Additional Information](#additional-information)

---

## Features

- **Sign-Up/Sign-In** using **wallet address**.
- **Submit Claims** with **policy number**, **claim type**, and **claim description**.
- **Claim Submission History** is stored under the user’s wallet address.
- **Real-Time Toast Notifications** for successful and failed submissions.
- **Responsive UI** with a modern design using Tailwind CSS.

## Project Structure

The project is divided into two main sections: the backend (smart contract) and the frontend (Next app).

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, React.js
- **Backend**: GunDB (Decentralized Database)
- **Wallet Integration**: Wallet provider (e.g., MetaMask or any web3 provider)
- **Notifications**: Toast notifications for feedback

---

## Getting Started

To get a local copy up and running, follow these steps:

Clone the repository:

```bash
git clone https://github.com/yourusername/ledgerlink.git
cd ledgerlink
code .
```

## Frontend Setup

Install the dependencies and start the development server:

```bash
cd frontend
npm install
npm run dev
```

## Backend Setup

### Hardhat Setup:

Hardhat is used for Ethereum smart contract development, testing, and deployment.
You'll deploy a smart contract to a local Ethereum blockchain using Hardhat, avoiding the need for public test networks like Rinkeby or Ropsten for this project.
The smart contract will interact with external data sources (like sensor data) and allow users to buy insurance based on conditions (e.g., if the input sensor data exceeds a threshold).

**Smart Contract Functions:**

- **Create Insurance**: Users can purchase insurance by sending ETH to the contract. Each policy stores the address of the buyer, the premium, and sensor data.
- **Sensor data Updates**: The contract owner can update sensor data daily.
- **Automated Payout**: If the input data threshold is exceeded for a set period, the contract automatically pays a settlement to the insured user.
  
**Key Solidity Functions:**

- **buyInsurance()**: Allows users to buy insurance by sending ETH.
- **updateTemperature()**: Allows the contract owner to input daily temperature updates.
- **paySettlement()**: Pays the insurance settlement to the farmer if the conditions are met.

## Testing:

Hardhat includes testing functionalities to simulate and validate the contract behavior.
Use Ethers.js and Chai for interacting with the contract and for testing.

**Hardhat Configuration**:

In the hardhat.config.js file, ensure configurations are set for deploying to the local chain and using Metamask.

## Additional Information

Ensure  **Node.js** and **npm** are installed.
**GunDB** is a decentralized database that requires no centralized backend server but is crucial for data storage.
**Wallet Integration**: Ensure you have a wallet provider (like MetaMask) connected to your app to authenticate users.
