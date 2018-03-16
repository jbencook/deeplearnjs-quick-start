import * as dl from 'deeplearn';

export function helloDeeplearnJS() {
  // Instantiate a 2D tensor
  const x = dl.tensor2d([[1, 2], [3, 4]]);

  // We get a shape property
  console.log(x.shape);

  // We can retrieve the data synchronously
  console.log(x.dataSync());

  // Or we can retrieve the data with a promise
  x.data().then(data => console.log(data));
}
