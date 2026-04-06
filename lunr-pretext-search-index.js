var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "線形代数とは",
  "body": " 線形代数とは  線形代数とはどのような学問なのだろうか？ 端的に答えるならば「線形空間( ベクトル空間)と線形写像の性質を明らかにする学問」ということになるだろう。 しかし、これでは初学者には意味が分からない。 これを乱暴に言い換えると「数ベクトルと行列の性質を明らかにする学問」ということになる。 つまり主役となるのは数ベクトルと行列である。 それ故、世界中の線形代数の授業は数ベクトルと行列の性質を延々と議論していく。 しかし、私は大学1年の時にいったい何のために行列を考えているのか、まったく分からなかった(そのためやる気がでなかった)。 真の主役である線形空間と線形写像が数ベクトルと行列に対応していることを説明してくれれば、行列積の不思議な定義の必然性も理解できて 行列が重要な概念であることが確信できたと思う。  この授業では数ベクトルと行列が一般的な線形空間と線形写像に対応していることも伝えていきたいと考えている。 まずは数ベクトルと行列をしっかり理解するところから始めよう。  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-vector",
  "level": "1",
  "url": "sec-vector.html",
  "type": "Section",
  "number": "1.1",
  "title": "数ベクトル",
  "body": " 数ベクトル  実数の集合を 、複素数の集合を と書く。 数ベクトル は単純に数(通常は実数か複素数)を並べたもので、以下のように表される。   数ベクトルに含まれる数のことを 成分 という。 数ベクトルの成分の個数を数ベクトルの 次元 という。 成分がすべて実数の数ベクトルを 実数ベクトル 、複素数の数ベクトルを 複素数ベクトル という(実数ベクトルを複素数ベクトルとみなしても問題はない)。 次元 の実数ベクトルの集合を 、次元 の複素数ベクトルの集合を と書く。 以下、便宜上実数ベクトルを対象にして説明するが、複素数ベクトルの場合も同様に様々な記号、用語、演算などが定義される。 数ベクトルに記号を与えるときは のように太字で表すことにする( と表す流儀もあるし、単に と表す流儀もある)。 各 について、数ベクトル の上から 番目の成分を の 第 成分 という。 数ベクトル の第 成分が のとき や と表す。 実数ベクトル を考えるとき、 の要素のことを スカラー という。  "
},
{
  "id": "sec-vector-2",
  "level": "2",
  "url": "sec-vector.html#sec-vector-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "数ベクトル "
},
{
  "id": "sec-vector-4",
  "level": "2",
  "url": "sec-vector.html#sec-vector-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "成分 次元 実数ベクトル 複素数ベクトル 第 成分 スカラー "
},
{
  "id": "sec-vector-op",
  "level": "1",
  "url": "sec-vector-op.html",
  "type": "Section",
  "number": "1.2",
  "title": "数ベクトルの和とスカラー倍",
  "body": " 数ベクトルの和とスカラー倍   数ベクトルの和とスカラー倍の定義  数ベクトルには和(足し算)とスカラー倍という2つの演算が定義される。   数ベクトルの和   次元実ベクトル について、 を と定義する。 次元が異なる数ベクトル同士の和は定義されない。     数ベクトルのスカラー倍   次元数ベクトル とスカラー について、 を と定義する。    また、 と定義する。つまり である。  さらに、数ベクトル に対して差(引き算)を と定義する。つまり である。  零ベクトル は成分がすべて0である数ベクトルである。 単に と書くと次元が分からないので、 と書く方が間違いがないが、大抵の場合は次元は文脈上明らかなので単に と表す。    数ベクトルの演算の性質  数ベクトルの和について以下の性質が成り立つことは簡単に確認できる。  任意の自然数 と について   [結合法則]  [交換法則]  [単位元の存在]  [逆元の存在]   同様にスカラー倍について以下の性質が成り立つことは簡単に確認できる。 任意の自然数 と と について   [結合法則]  [単位元]   さらに、数ベクトルの和とスカラー倍について以下の性質が成り立つことは簡単に確認できる。 任意の自然数 と と について   [分配法則]  [分配法則]    "
},
{
  "id": "subsec-vector-op-3",
  "level": "2",
  "url": "sec-vector-op.html#subsec-vector-op-3",
  "type": "Definition",
  "number": "1.2.1",
  "title": "数ベクトルの和.",
  "body": " 数ベクトルの和   次元実ベクトル について、 を と定義する。 次元が異なる数ベクトル同士の和は定義されない。   "
},
{
  "id": "subsec-vector-op-4",
  "level": "2",
  "url": "sec-vector-op.html#subsec-vector-op-4",
  "type": "Definition",
  "number": "1.2.2",
  "title": "数ベクトルのスカラー倍.",
  "body": " 数ベクトルのスカラー倍   次元数ベクトル とスカラー について、 を と定義する。   "
},
{
  "id": "sec-vector-intuition",
  "level": "1",
  "url": "sec-vector-intuition.html",
  "type": "Section",
  "number": "1.3",
  "title": "数ベクトルのイメージ",
  "body": " 数ベクトルのイメージ  数ベクトルをイメージするためには、 や を考えると都合がよい。 2次元の数ベクトル は二次元平面の座標 に対応していると考えることができるが、 そうではなくて原点 から への矢印だと考えるとよい。  例えば、 と は下の図のようにイメージするとよい。     そうすると数ベクトルの和 は     のように二つの矢印を繋げることで理解できる。 このように数ベクトルの和を考えるには 座標ではなく矢印で理解する方が都合がよい 。  また、スカラー倍については、ベクトルの「方向」を変えずに「長さ」を変化させる演算になる。     次元が4以上の場合や複素数ベクトルを考える場合はこのように理解することは厳密にはできないが、その場合でもこのようなイメージを持つことは理解の助けになる。  "
},
{
  "id": "sec-set",
  "level": "1",
  "url": "sec-set.html",
  "type": "Section",
  "number": "2.1",
  "title": "集合",
  "body": " 集合   集合と要素  集合 は対象の集まりである。例えば のように表す。 集合を構成するものを 要素 もしくは 元 という。  集合と要素の関係を   要素 は集合 に含まれる   要素 は集合 に含まれない  と表す。  で集合 の要素数を表すことにする。 要素数が無限の集合を考えることもできる。 例えば という集合は無限集合の例となる。 何も要素を持たない集合(要素数が零の集合)を 空集合 といい で表す。    集合の関係  集合 の要素がすべて集合 に含まれるとき、 を の 部分集合 という。 部分集合に関連する集合関係について記号を以下のように定義する。     "
},
{
  "id": "subsec-set-2",
  "level": "2",
  "url": "sec-set.html#subsec-set-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "集合 要素 元 "
},
{
  "id": "subsec-set-4",
  "level": "2",
  "url": "sec-set.html#subsec-set-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "空集合 "
},
{
  "id": "subsec-set-rel-2",
  "level": "2",
  "url": "sec-set.html#subsec-set-rel-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "部分集合 "
},
{
  "id": "sec-map",
  "level": "1",
  "url": "sec-map.html",
  "type": "Section",
  "number": "2.2",
  "title": "写像",
  "body": " 写像  集合 について、写像 は の各要素 について、 を対応させるものである。 写像 について、集合 を の 定義域 、 を の 値域 という。  また、 について、 を による の像 という。特に定義域の像を と書く。  一方で について、 を による の逆像(原像) という。  集合 の要素数を と書くことにする。 各 について、 のとき は 単射 であるという。 単射は 一対一写像 ということもある。 各 について、 のとき は 全射 であるという。 全射は 上への写像 ということもある。 が単射かつ全射のとき は 全単射 であるという。  写像 と について、 と の合成写像  を で定義する。  集合 上の 恒等写像  を で定義する。  が単射のとき、ある が存在して、 が存在する。 この は以下のように決めればよい。 各 について は空集合もしくは要素数1の集合である。 のとき、 と定義する。それ以外の については を好きなように定義すればよい。 このような について を満たす。  また、 が全単射のとき、上記のように決めた は も満たす。 このとき、 を の逆写像 といい で表す。 逆像と同じ記号だが混同しないように注意すること。 全単射 について、 が成り立つ。  特に有限集合 について、全単射 を 上の置換 という。  "
},
{
  "id": "sec-map-2",
  "level": "2",
  "url": "sec-map.html#sec-map-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "定義域 値域 "
},
{
  "id": "sec-map-3",
  "level": "2",
  "url": "sec-map.html#sec-map-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "による の像 "
},
{
  "id": "sec-map-4",
  "level": "2",
  "url": "sec-map.html#sec-map-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "による の逆像(原像) "
},
{
  "id": "sec-map-5",
  "level": "2",
  "url": "sec-map.html#sec-map-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "単射 一対一写像 全射 上への写像 全単射 "
},
{
  "id": "sec-map-6",
  "level": "2",
  "url": "sec-map.html#sec-map-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "と の合成写像 "
},
{
  "id": "sec-map-7",
  "level": "2",
  "url": "sec-map.html#sec-map-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "恒等写像 "
},
{
  "id": "sec-map-9",
  "level": "2",
  "url": "sec-map.html#sec-map-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "の逆写像 "
},
{
  "id": "sec-map-10",
  "level": "2",
  "url": "sec-map.html#sec-map-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "上の置換 "
},
{
  "id": "sec-matrix",
  "level": "1",
  "url": "sec-matrix.html",
  "type": "Section",
  "number": "2.3",
  "title": "行列",
  "body": " 行列  数ベクトルは数を縦に並べて表現されたが、行列は以下のように数を長方形に並べて表現される。   行列の行の数を 、列の数を とするとき、その行列は 行列であるという。 行の数 と列の数 のペア を行列の 型 という。 行列に含まれる数のことを 成分 という。 成分がすべて実数の行列を 実行列 、複素数の行列を 複素行列 という(実行列を複素行列とみなしても問題はない)。 実行列の集合を と書く(複素行列の場合も同様に と書く)。 行列に記号を与えるときは のように大文字のアルファベットを用いる。 また、各 と について 行 列の成分を  成分 という。 上の行列の例の場合、 成分は 、 成分は 、 成分は である。 行列 の 成分が のとき、 や と表す。 また、 行列を 正方行列 という。  "
},
{
  "id": "sec-matrix-4",
  "level": "2",
  "url": "sec-matrix.html#sec-matrix-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "型 成分 実行列 複素行列  成分 正方行列 "
},
{
  "id": "sec-matrix-map",
  "level": "1",
  "url": "sec-matrix-map.html",
  "type": "Section",
  "number": "2.4",
  "title": "写像としての行列",
  "body": " 写像としての行列  行列は 次元数ベクトルを 次元数ベクトルへ写す写像(関数) であると考えることができる。 行列 を 次元数ベクトルに作用させた結果得られる 次元数ベクトルは以下のように定義される。   以下の性質は簡単に確認できる。 任意の , , について    これらの性質のことを行列 が定める写像の 線形性 という。 線形性を持つ写像を 線形写像 という。 線形性は次のように表すこともできる。  任意の , , について   この線形性こそが、行列の本質である(次の節で意味が分かる)。  "
},
{
  "id": "sec-matrix-map-4",
  "level": "2",
  "url": "sec-matrix-map.html#sec-matrix-map-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "線形性 線形写像 "
},
{
  "id": "sec-matrix-linmap",
  "level": "1",
  "url": "sec-matrix-linmap.html",
  "type": "Section",
  "number": "2.5",
  "title": "線形写像は行列",
  "body": " 線形写像は行列  各 について 標準ベクトル  を  と定義する。つまり は第 成分が1でそれ以外の成分が0の数ベクトルである。  この が行列 で写る先について考えると、 が成り立つ。 右辺は行列 の 列目に他ならない。 つまり、 行列 は を の 列目に写す写像 であると分かる。  また、写像 が線形性 を満たすとすると、任意の について、 が得られる。 つまり、 は標準ベクトル の行き先のみによって定まる 。  一方で行列 は各 について を に写す線形写像を表す。 つまり、 は を表していることになる。 よって、 実行列は任意の の線形写像を表現できる ことになる。  このように行列を見るときは 列ごとに見ると線形写像として理解しやすい 。  "
},
{
  "id": "sec-matrix-linmap-2",
  "level": "2",
  "url": "sec-matrix-linmap.html#sec-matrix-linmap-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "標準ベクトル "
},
{
  "id": "sec-matrices",
  "level": "1",
  "url": "sec-matrices.html",
  "type": "Section",
  "number": "2.6",
  "title": "行列の例",
  "body": " 行列の例   零行列   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
