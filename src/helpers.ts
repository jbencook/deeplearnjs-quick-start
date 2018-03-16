import {Tensor} from 'deeplearn';

export function tolist(x: Tensor) {
  function recursiveToList(index: number[], startdim: number): any {
    // base case
    if (startdim >= x.rank) {
      return x.get(...index);
    }
    const n = x.shape[startdim];
    let result = [];
    for (let i = 0; i < n; i++) {
      index[startdim] = i;
      result[i] = recursiveToList(index, startdim + 1);
    }
    return result;
  };
  return recursiveToList([], 0);
}

export function print(x: Tensor) {
  if (x.rank === 0) {
    console.log(x.get());
  } else if (x.rank <= 4) {
    console.log(tolist(x));
  }
}
