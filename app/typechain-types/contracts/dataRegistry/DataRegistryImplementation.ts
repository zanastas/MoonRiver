/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace IDataRegistry {
  export type PermissionStruct = { account: AddressLike; key: string };

  export type PermissionStructOutput = [account: string, key: string] & {
    account: string;
    key: string;
  };

  export type ProofDataStruct = {
    score: BigNumberish;
    dlpId: BigNumberish;
    metadata: string;
    proofUrl: string;
    instruction: string;
  };

  export type ProofDataStructOutput = [
    score: bigint,
    dlpId: bigint,
    metadata: string,
    proofUrl: string,
    instruction: string
  ] & {
    score: bigint;
    dlpId: bigint;
    metadata: string;
    proofUrl: string;
    instruction: string;
  };

  export type ProofStruct = {
    signature: BytesLike;
    data: IDataRegistry.ProofDataStruct;
  };

  export type ProofStructOutput = [
    signature: string,
    data: IDataRegistry.ProofDataStructOutput
  ] & { signature: string; data: IDataRegistry.ProofDataStructOutput };

  export type FileResponseStruct = {
    id: BigNumberish;
    ownerAddress: AddressLike;
    url: string;
    addedAtBlock: BigNumberish;
  };

  export type FileResponseStructOutput = [
    id: bigint,
    ownerAddress: string,
    url: string,
    addedAtBlock: bigint
  ] & { id: bigint; ownerAddress: string; url: string; addedAtBlock: bigint };
}

export interface DataRegistryImplementationInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "acceptOwnership"
      | "addFile"
      | "addFilePermission"
      | "addFileWithPermissions"
      | "addProof"
      | "filePermissions"
      | "fileProofs"
      | "files"
      | "filesCount"
      | "initialize"
      | "multicall"
      | "owner"
      | "pause"
      | "paused"
      | "pendingOwner"
      | "proxiableUUID"
      | "renounceOwnership"
      | "transferOwnership"
      | "unpause"
      | "upgradeToAndCall"
      | "version"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FileAdded"
      | "Initialized"
      | "OwnershipTransferStarted"
      | "OwnershipTransferred"
      | "Paused"
      | "PermissionGranted"
      | "ProofAdded"
      | "Unpaused"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addFile", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addFilePermission",
    values: [BigNumberish, AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addFileWithPermissions",
    values: [string, AddressLike, IDataRegistry.PermissionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addProof",
    values: [BigNumberish, IDataRegistry.ProofStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "filePermissions",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fileProofs",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "files", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "filesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addFile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addFilePermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addFileWithPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addProof", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "filePermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fileProofs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "files", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "filesCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export namespace FileAddedEvent {
  export type InputTuple = [
    fileId: BigNumberish,
    ownerAddress: AddressLike,
    url: string
  ];
  export type OutputTuple = [fileId: bigint, ownerAddress: string, url: string];
  export interface OutputObject {
    fileId: bigint;
    ownerAddress: string;
    url: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferStartedEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PermissionGrantedEvent {
  export type InputTuple = [fileId: BigNumberish, account: AddressLike];
  export type OutputTuple = [fileId: bigint, account: string];
  export interface OutputObject {
    fileId: bigint;
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProofAddedEvent {
  export type InputTuple = [fileId: BigNumberish, proofIndex: BigNumberish];
  export type OutputTuple = [fileId: bigint, proofIndex: bigint];
  export interface OutputObject {
    fileId: bigint;
    proofIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DataRegistryImplementation extends BaseContract {
  connect(runner?: ContractRunner | null): DataRegistryImplementation;
  waitForDeployment(): Promise<this>;

  interface: DataRegistryImplementationInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  addFile: TypedContractMethod<[url: string], [bigint], "nonpayable">;

  addFilePermission: TypedContractMethod<
    [fileId: BigNumberish, account: AddressLike, key: string],
    [void],
    "nonpayable"
  >;

  addFileWithPermissions: TypedContractMethod<
    [
      url: string,
      ownerAddress: AddressLike,
      permissions: IDataRegistry.PermissionStruct[]
    ],
    [bigint],
    "nonpayable"
  >;

  addProof: TypedContractMethod<
    [fileId: BigNumberish, proof: IDataRegistry.ProofStruct],
    [void],
    "nonpayable"
  >;

  filePermissions: TypedContractMethod<
    [fileId: BigNumberish, account: AddressLike],
    [string],
    "view"
  >;

  fileProofs: TypedContractMethod<
    [fileId: BigNumberish, index: BigNumberish],
    [IDataRegistry.ProofStructOutput],
    "view"
  >;

  files: TypedContractMethod<
    [fileId: BigNumberish],
    [IDataRegistry.FileResponseStructOutput],
    "view"
  >;

  filesCount: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [ownerAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;

  owner: TypedContractMethod<[], [string], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  version: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addFile"
  ): TypedContractMethod<[url: string], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "addFilePermission"
  ): TypedContractMethod<
    [fileId: BigNumberish, account: AddressLike, key: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addFileWithPermissions"
  ): TypedContractMethod<
    [
      url: string,
      ownerAddress: AddressLike,
      permissions: IDataRegistry.PermissionStruct[]
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addProof"
  ): TypedContractMethod<
    [fileId: BigNumberish, proof: IDataRegistry.ProofStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "filePermissions"
  ): TypedContractMethod<
    [fileId: BigNumberish, account: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "fileProofs"
  ): TypedContractMethod<
    [fileId: BigNumberish, index: BigNumberish],
    [IDataRegistry.ProofStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "files"
  ): TypedContractMethod<
    [fileId: BigNumberish],
    [IDataRegistry.FileResponseStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "filesCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[ownerAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "FileAdded"
  ): TypedContractEvent<
    FileAddedEvent.InputTuple,
    FileAddedEvent.OutputTuple,
    FileAddedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferStarted"
  ): TypedContractEvent<
    OwnershipTransferStartedEvent.InputTuple,
    OwnershipTransferStartedEvent.OutputTuple,
    OwnershipTransferStartedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "PermissionGranted"
  ): TypedContractEvent<
    PermissionGrantedEvent.InputTuple,
    PermissionGrantedEvent.OutputTuple,
    PermissionGrantedEvent.OutputObject
  >;
  getEvent(
    key: "ProofAdded"
  ): TypedContractEvent<
    ProofAddedEvent.InputTuple,
    ProofAddedEvent.OutputTuple,
    ProofAddedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "FileAdded(uint256,address,string)": TypedContractEvent<
      FileAddedEvent.InputTuple,
      FileAddedEvent.OutputTuple,
      FileAddedEvent.OutputObject
    >;
    FileAdded: TypedContractEvent<
      FileAddedEvent.InputTuple,
      FileAddedEvent.OutputTuple,
      FileAddedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferStarted(address,address)": TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;
    OwnershipTransferStarted: TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "PermissionGranted(uint256,address)": TypedContractEvent<
      PermissionGrantedEvent.InputTuple,
      PermissionGrantedEvent.OutputTuple,
      PermissionGrantedEvent.OutputObject
    >;
    PermissionGranted: TypedContractEvent<
      PermissionGrantedEvent.InputTuple,
      PermissionGrantedEvent.OutputTuple,
      PermissionGrantedEvent.OutputObject
    >;

    "ProofAdded(uint256,uint256)": TypedContractEvent<
      ProofAddedEvent.InputTuple,
      ProofAddedEvent.OutputTuple,
      ProofAddedEvent.OutputObject
    >;
    ProofAdded: TypedContractEvent<
      ProofAddedEvent.InputTuple,
      ProofAddedEvent.OutputTuple,
      ProofAddedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
