
# BrawlerXull-VikasLend: Decentralized Microloan Platform for Farmers

BrawlerXull-VikasLend is a decentralized platform designed to provide microloans to farmers using blockchain technology and multisignature wallets. The platform connects communities and individuals in need of financial support with lenders, ensuring secure, transparent, and efficient loan transactions.

---

## Features

- **Blockchain-Driven**: Built on Ethereum using Solidity smart contracts.
- **Multisignature Wallets**: Enhanced security for loan disbursement and repayment.
- **Microloans**: Support for small-scale loans, tailored to the needs of farmers.
- **Community Management**: Facilitate group loans and interactions through a community model.
- **Dashboard & Insights**: User-friendly interface with detailed loan tracking and community management tools.
- **Next.js Frontend**: Seamless, responsive, and performant user interface.

---

## Project Structure

```plaintext
BrawlerXull-VikasLend/
├── Contracts/       # Ethereum smart contracts using Solidity
├── backend/         # Node.js backend server with RESTful APIs
└── vikaslend/       # Next.js frontend with Tailwind CSS
```

### Key Directories:
- **`Contracts/`**: Contains Solidity smart contracts like `Community.sol`, `LoanContract.sol`, and `UserContract.sol`.
- **`backend/`**: Backend server for handling API requests, loan processing, and database management.
- **`vikaslend/`**: Next.js frontend for user interaction, including pages for community management, loan requests, and dashboards.

---

## Prerequisites

Make sure you have the following installed:
- **Node.js** (>= 16.x)
- **npm** (>= 8.x) or **yarn**
- **Hardhat** for contract development
- **MetaMask** or similar Ethereum wallet

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/BrawlerXull-VikasLend.git
   cd BrawlerXull-VikasLend
   ```

2. Install dependencies for each component:
   - **Contracts**:
     ```bash
     cd Contracts
     npm install
     ```
   - **Backend**:
     ```bash
     cd ../backend
     npm install
     ```
   - **Frontend**:
     ```bash
     cd ../vikaslend
     npm install
     ```

---

## Running the Project

### 1. Start the Blockchain Network
Run a local Ethereum network using Hardhat:
```bash
cd Contracts
npx hardhat node
```

### 2. Deploy Smart Contracts
Deploy contracts to the local network:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

### 3. Start the Backend Server
Run the backend server:
```bash
cd backend
npm start
```
The backend server will start on `http://localhost:5000`.

### 4. Start the Frontend
Run the Next.js frontend:
```bash
cd vikaslend
npm run dev
```
The frontend will be available at `http://localhost:3000`.

---

## Usage

1. Open the frontend at `http://localhost:3000`.
2. Connect your MetaMask wallet to the application.
3. Register or log in to manage loans, communities, and profiles.
4. Create or join a community and submit loan requests.
5. Lenders can review, approve, and fund loans via multisignature wallets.

---

## Smart Contracts Overview

| Contract                | Description                                      |
|-------------------------|--------------------------------------------------|
| `Community.sol`         | Manages farmer communities and group loans.      |
| `LoanContract.sol`      | Handles microloan issuance and repayment logic.  |
| `UserContract.sol`      | Tracks user information and roles.               |
| `CommunityFactory.sol`  | Factory contract to deploy and manage communities.|

---

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS, TypeScript
- **Backend**: Node.js, Express.js, MongoDB
- **Smart Contracts**: Solidity, Hardhat
- **Blockchain**: Ethereum, Ethers.js
- **State Management**: Redux Toolkit

---

## Future Enhancements

- Integration with decentralized identity (DID) systems.
- Support for additional blockchains.
- Mobile app for farmers with offline functionality.

---

## Contributing

We welcome contributions! To get started:

1. Fork this repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

Special thanks to the open-source community and blockchain developers for their invaluable tools and resources.

---

## Contact

For any inquiries or support, please reach out to us at [your-email@example.com].

---
