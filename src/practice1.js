(async () => {
  process.stdin.setEncoding('utf8');
  let text = '';
  for await (const chunk of process.stdin) text += chunk;

  const lines = text.toString().split('\n');
  const first = parseInt(lines[0], 10);
  const tmpArray = lines[1].split(' ');
  const second = parseInt(tmpArray[0], 10);
  const third = parseInt(tmpArray[1], 10);
  const label = lines[2];

  console.log(`${first + second + third} ${label}`);
})();
