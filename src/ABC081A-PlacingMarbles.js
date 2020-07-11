(async () => {
  process.stdin.setEncoding('utf8');
  let text = '';
  for await (const chunk of process.stdin) text += chunk;

  const lines = text.toString().split('\n');
  const tmpArray = lines[0].split('');
  const first = parseInt(tmpArray[0], 10);
  const second = parseInt(tmpArray[1], 10);
  const third = parseInt(tmpArray[2], 10);

  console.log(`${first+second+third}`);
})();
