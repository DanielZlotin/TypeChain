import type BN from 'bn.js'
import type BigNumber from 'bignumber.js'
import type { EventEmitter } from 'events'
import type { EventLog, PromiEvent, TransactionReceipt } from 'web3-core/types'
import type { Contract } from 'web3-eth-contract'

export interface EstimateGasOptions {
  from?: string
  gas?: number
  value?: number | string | BN | BigNumber
}

export interface EventOptions {
  filter?: object
  fromBlock?: BlockType
  topics?: string[]
}

export type Callback<T> = (error: Error, result: T) => void
export interface ContractEventLog<T> extends EventLog {
  returnValues: T
}
export interface ContractEventEmitter<T> extends EventEmitter {
  on(event: 'connected', listener: (subscriptionId: string) => void): this
  on(event: 'data' | 'changed', listener: (event: ContractEventLog<T>) => void): this
  on(event: 'error', listener: (error: Error) => void): this
}

export interface NonPayableTx {
  nonce?: string | number | BN | BigNumber
  chainId?: string | number | BN | BigNumber
  from?: string
  to?: string
  data?: string
  gas?: string | number | BN | BigNumber
  maxPriorityFeePerGas?: string | number | BN | BigNumber
  maxFeePerGas?: string | number | BN | BigNumber
  gasPrice?: string | number | BN | BigNumber
}

export interface PayableTx extends NonPayableTx {
  value?: string | number | BN | BigNumber
}

export interface NonPayableTransactionObject<T> {
  arguments: any[]
  call(tx?: NonPayableTx, block?: BlockType): Promise<T>
  send(tx?: NonPayableTx): PromiEvent<TransactionReceipt>
  estimateGas(tx?: NonPayableTx): Promise<number>
  encodeABI(): string
}

export interface PayableTransactionObject<T> {
  arguments: any[]
  call(tx?: PayableTx, block?: BlockType): Promise<T>
  send(tx?: PayableTx): PromiEvent<TransactionReceipt>
  estimateGas(tx?: PayableTx): Promise<number>
  encodeABI(): string
}

export type BlockType = 'latest' | 'pending' | 'genesis' | 'earliest' | number | BN | BigNumber
export type BaseContract = Omit<Contract, 'clone' | 'once'>
