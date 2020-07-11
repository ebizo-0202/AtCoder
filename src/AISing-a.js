(async () => {
  process.stdin.setEncoding('utf8');
  let text = '';
  for await (const chunk of process.stdin) text += chunk;

  const lines = text.toString().split('\n');
  const tmpArray = lines[0].split(' ');
  const start = parseInt(tmpArray[0], 10);
  const end = parseInt(tmpArray[1], 10);
  const num = parseInt(tmpArray[2], 10);
  const target = new Array(end - start + 1).fill(null).map((_, i) => i + start)

  const result = target.filter(v => v % num === 0);
  console.log(result.length);
})();

