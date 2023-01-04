function cb1(data) {
  console.log('resolve');
  if (data) {
    return data;
  }

  return;
}

function cb2(data) {
  if (data) {
    throw new Error(data);
  }

  throw new Error();
}

function myPromise(parent) {
  //   if (cb1) {
  //     cb1();
  //   }

  if (cb2) {
    cb2();
  }
}

myPromise((cb1, cb2) => {
  if (true) {
    cb2();
  } else {
    cb2();
  }
});

function abc() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
}
