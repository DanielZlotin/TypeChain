/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type BigNumber from "bignumber.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "../types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface DataTypesPure extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): DataTypesPure;
  clone(): DataTypesPure;
  methods: {
    pure_address(): NonPayableTransactionObject<string>;

    pure_bool(): NonPayableTransactionObject<boolean>;

    pure_bytes(): NonPayableTransactionObject<string>;

    pure_bytes1(): NonPayableTransactionObject<string>;

    pure_enum(): NonPayableTransactionObject<string>;

    pure_int256(): NonPayableTransactionObject<string>;

    pure_int8(): NonPayableTransactionObject<string>;

    pure_named(): NonPayableTransactionObject<{
      uint256_1: string;
      uint256_2: string;
      0: string;
      1: string;
    }>;

    pure_stat_array(): NonPayableTransactionObject<string[]>;

    pure_string(): NonPayableTransactionObject<string>;

    pure_struct(): NonPayableTransactionObject<[string, string]>;

    pure_tuple(): NonPayableTransactionObject<{
      0: string;
      1: string;
    }>;

    pure_uint256(): NonPayableTransactionObject<string>;

    pure_uint8(): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
