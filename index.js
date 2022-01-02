const fs = require("fs");

// ファイルのコピー
// 一気に読み取って一気に書き込むので、この処理をしている間他の処理がブロッキングされる。
// また、ファイルのサイズ分だけメモリを消費してしまう。
// const text = fs.readFileSync('src.txt', 'utf8');
// fs.writeFileSync('dest.txt', text);

// 非ブロッキングI/Oを使う
// メモリの問題は解消されない。
// fs.readFile('src.txt', 'utf8', (err, data) => {
//   fs.writeFile('dest.txt', data, () => {});
// });

// streamを使う
// const src = fs.createReadStream('src.txt', 'utf8');
// const dest = fs.createWriteStream('dest.txt', 'utf8');
// src.on('data', chunk => dest.write(chunk));
// src.on('end', () => dest.end());

// pipeで読みやすく
// pipeは読み取り可能ストリームと書き込み可能ストリームをつなげる。
const src = fs.createReadStream('src.txt', 'utf8');
const dest = fs.createWriteStream('dest.txt', 'utf8');
src.pipe(dest);
// 標準出力 process.stdoutもStreamオブジェクト
// src.pipe(process.stdout);