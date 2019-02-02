const promise = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res('hello from the promise');
    }, 1000);
  });

function* asyncAwait() {
  let result = yield promise();
  console.log(result + ' and hey look I added something to it');
}

function processAsyncRequest(generator) {
  generator
    .next()
    .value.then(value => {
      generator.next(value);
    })
    .catch(e => generator.next(e));
}

var gen = asyncAwait();
processAsyncRequest(gen);
console.log('hello from outside the promise');
