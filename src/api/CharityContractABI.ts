import Web3 from "web3";

const CharityContractABI: any = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageUri",
        type: "string",
      },
    ],
    name: "addEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "charityEvents",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "money",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "imageUri",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isVerified",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
    ],
    name: "fundEvent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEvents",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "money",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "imageUri",
            type: "string",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isVerified",
            type: "bool",
          },
        ],
        internalType: "struct CharityEvent[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
    ],
    name: "verifyEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export function getCharityContract(web3: Web3) {
  const contract = new web3.eth.Contract(
    CharityContractABI,
    "0x2fF785b719D72dD5ff93b979b4c8E322e4B5FAD3"
  );
  return contract;
}
