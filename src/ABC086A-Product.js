(async () => {
  process.stdin.setEncoding('utf8');
  let text = '';
  for await (const chunk of process.stdin) text += chunk;

  const lines = text.toString().split('\n');
  const tmpArray = lines[0].split(' ');
  const first = parseInt(tmpArray[0], 10);
  const second = parseInt(tmpArray[1], 10);

  if ((first * second) % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
})();
