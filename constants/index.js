export const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_text",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "_amount",
        "type": "int256"
      }
    ],
    "name": "addTransaction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "deleteTransaction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTransactions",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "text",
            "type": "string"
          },
          {
            "internalType": "int256",
            "name": "amount",
            "type": "int256"
          }
        ],
        "internalType": "struct ExpenseTracker.Transaction[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "transactions",
    "outputs": [
      {
        "internalType": "string",
        "name": "text",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "amount",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export const EXPENSETRACKER_CONTRACT_ADDRESS = "0x1c47aC358E216D49a41787B22a53072B287a8656";