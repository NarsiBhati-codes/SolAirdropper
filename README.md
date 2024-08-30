# SolAirdropper

**SolAirdropper** is a basic decentralized application (DApp) built on the Solana blockchain. This DApp allows users to connect their Solana wallets and receive SOL airdrops with just a few clicks. It serves as an introductory project for developers interested in Solana, showcasing how to integrate wallet functionality and interact with the blockchain.

## Features

- **Wallet Connection**: Easily connect your Solana wallet using the WalletMultiButton.
- **SOL Airdrop**: Specify the amount of SOL you want to receive and airdrop it directly to your connected wallet.
- **User-Friendly Interface**: A clean and simple UI that makes it easy to interact with the Solana blockchain.

## Tech Stack

- **Frontend**: React
- **Blockchain**: Solana
- **Wallet Integration**: Solana Wallet Adapter

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/SolAirdropper.git
   cd SolAirdropper
   ```

2. **Install dependencies:**

   If you're using npm:

   ```bash
   npm install
   ```

   Or if you're using yarn:

   ```bash
   yarn install
   ```

### Running the Application

1. **Start the development server:**

   If you're using npm:

   ```bash
   npm start
   ```

   Or if you're using yarn:

   ```bash
   yarn start
   ```

2. **Open your browser** and navigate to `http://localhost:3000` to see the app in action.

### Usage

- **Connect your Wallet**: Click on the "Connect Wallet" button to connect your Solana wallet.
- **Specify Airdrop Amount**: Enter the amount of SOL you wish to receive in the input field.
- **Request Airdrop**: Click the "Send Airdrop" button to receive the specified amount of SOL in your wallet.

### Project Structure

- **`src/App.tsx`**: Main application file where the Solana wallet connection and airdrop functionality are handled.
- **`src/components/Airdrop.tsx`**: Component responsible for handling the airdrop logic.

### Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** (`git checkout -b feature/your-feature-name`).
3. **Make your changes** and commit them (`git commit -m 'Add some feature'`).
4. **Push to the branch** (`git push origin feature/your-feature-name`).
5. **Create a Pull Request**.

Please ensure your code follows the project's coding standards and passes all tests.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgements

- **Solana** for their robust blockchain technology.
- **React** for providing a solid foundation for building the frontend.
- **Solana Wallet Adapter** for simplifying wallet integration.

---

**Happy coding!**
