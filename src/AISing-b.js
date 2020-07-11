(async () => {
  process.stdin.setEncoding('utf8');
  let text = '';
  for await (const chunk of process.stdin) text += chunk;

  const lines = text.toString().split('\n');
  const tmpArray = lines[1].split(' ');
  const count = lines[0];
  let result = 0;

  for (let i = 0; i < tmpArray.length; i++) {
    if (i % 2 === 0) {
      if (tmpArray[i] % 2 === 1) {
        result ++;
      }
    }
  }

  console.log(result);
})();

