interface CancellablePromise {
  then: (onfulfilled?: () => any, onrejected?: () => any) => Promise<any>
  done: (...args: any[]) => any
  cancel: () => void
}

export default CancellablePromise
