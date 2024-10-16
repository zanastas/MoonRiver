/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDataRegistry,
  IDataRegistryInterface,
} from "../../../../contracts/dataRegistry/interfaces/IDataRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
    ],
    name: "addFile",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fileId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "addFilePermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "string",
            name: "key",
            type: "string",
          },
        ],
        internalType: "struct IDataRegistry.Permission[]",
        name: "permissions",
        type: "tuple[]",
      },
    ],
    name: "addFileWithPermissions",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fileId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "score",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "dlpId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "metadata",
                type: "string",
              },
              {
                internalType: "string",
                name: "proofUrl",
                type: "string",
              },
              {
                internalType: "string",
                name: "instruction",
                type: "string",
              },
            ],
            internalType: "struct IDataRegistry.ProofData",
            name: "data",
            type: "tuple",
          },
        ],
        internalType: "struct IDataRegistry.Proof",
        name: "proof",
        type: "tuple",
      },
    ],
    name: "addProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fileId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "filePermissions",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "fileProofs",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "score",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "dlpId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "metadata",
                type: "string",
              },
              {
                internalType: "string",
                name: "proofUrl",
                type: "string",
              },
              {
                internalType: "string",
                name: "instruction",
                type: "string",
              },
            ],
            internalType: "struct IDataRegistry.ProofData",
            name: "data",
            type: "tuple",
          },
        ],
        internalType: "struct IDataRegistry.Proof",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "files",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "ownerAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "url",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "addedAtBlock",
            type: "uint256",
          },
        ],
        internalType: "struct IDataRegistry.FileResponse",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "filesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class IDataRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IDataRegistryInterface {
    return new Interface(_abi) as IDataRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IDataRegistry {
    return new Contract(address, _abi, runner) as unknown as IDataRegistry;
  }
}
