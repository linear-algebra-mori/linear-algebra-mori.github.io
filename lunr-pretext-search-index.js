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
  "type": "定義",
  "number": "1.2.1",
  "title": "数ベクトルの和.",
  "body": " 数ベクトルの和   次元実ベクトル について、 を と定義する。 次元が異なる数ベクトル同士の和は定義されない。   "
},
{
  "id": "subsec-vector-op-4",
  "level": "2",
  "url": "sec-vector-op.html#subsec-vector-op-4",
  "type": "定義",
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
  "body": " 写像   写像、象、逆像  集合 について、写像 は の各要素 について、 を対応させるものである。 写像 について、集合 を の 定義域 、 を の 値域 という。  また、 について、 を による の像 という。特に定義域の像を と書く。  一方で について、 を による の逆像(原像) という。    単射、全射、全単射、逆写像  各 について、 のとき は 単射 であるという。 単射は 一対一写像 ということもある。 各 について、 のとき は 全射 であるという。 全射は 上への写像 ということもある。 が単射かつ全射のとき は 全単射 であるという。  写像 と について、 と の合成写像  を で定義する。  集合 上の 恒等写像  を で定義する。  が単射のとき、ある が存在して、 が存在する。 この は以下のように決めればよい。 各 について は空集合もしくは要素数1の集合である。 のとき、 と定義する。それ以外の については を好きなように定義すればよい。 このような について を満たす。  また、 が全単射のとき、上記のように決めた は も満たす。 このとき、 を の逆写像 といい で表す。 逆像と同じ記号だが混同しないように注意すること。 全単射 について、 が成り立つ。  特に有限集合 について、全単射 を 上の置換 という。   "
},
{
  "id": "subsec-map-image-2",
  "level": "2",
  "url": "sec-map.html#subsec-map-image-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "定義域 値域 "
},
{
  "id": "subsec-map-image-3",
  "level": "2",
  "url": "sec-map.html#subsec-map-image-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "による の像 "
},
{
  "id": "subsec-map-image-4",
  "level": "2",
  "url": "sec-map.html#subsec-map-image-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "による の逆像(原像) "
},
{
  "id": "subsec-map-inverse-2",
  "level": "2",
  "url": "sec-map.html#subsec-map-inverse-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "単射 一対一写像 全射 上への写像 全単射 "
},
{
  "id": "subsec-map-inverse-3",
  "level": "2",
  "url": "sec-map.html#subsec-map-inverse-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "と の合成写像 "
},
{
  "id": "subsec-map-inverse-4",
  "level": "2",
  "url": "sec-map.html#subsec-map-inverse-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "恒等写像 "
},
{
  "id": "subsec-map-inverse-6",
  "level": "2",
  "url": "sec-map.html#subsec-map-inverse-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "の逆写像 "
},
{
  "id": "subsec-map-inverse-7",
  "level": "2",
  "url": "sec-map.html#subsec-map-inverse-7",
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
  "title": "線形写像としての行列",
  "body": " 線形写像としての行列   写像としての行列  行列は 次元数ベクトルを 次元数ベクトルへ写す写像(関数) であると考えることができる。   写像 としての行列   行列 を 次元数ベクトル に作用させた結果得られる 次元数ベクトルは以下のように定義される。    このようにして 行列は という写像だと理解できる。    行列が表す写像の線形性   線形写像   写像 が    を満たすとき 線形写像 という。    任意の行列 について、写像 が線形写像であることは から簡単に確認できる。   線形性の条件   写像 について以下は同値   は線形写像。              に関する帰納法で証明する。まずは の場合を証明する。 次に    の場合を考えることで、  の場合を考えることで、    この線形性こそが、行列の本質である(次の章で意味が分かる)。   "
},
{
  "id": "def-mat-vec",
  "level": "2",
  "url": "sec-matrix-map.html#def-mat-vec",
  "type": "定義",
  "number": "2.4.1",
  "title": "写像 <span class=\"process-math\">\\(\\mathbb{R}^m\\to\\mathbb{R}^n\\)<\/span> としての行列.",
  "body": " 写像 としての行列   行列 を 次元数ベクトル に作用させた結果得られる 次元数ベクトルは以下のように定義される。   "
},
{
  "id": "subsec-matrix-lin-2",
  "level": "2",
  "url": "sec-matrix-map.html#subsec-matrix-lin-2",
  "type": "定義",
  "number": "2.4.2",
  "title": "線形写像.",
  "body": " 線形写像   写像 が    を満たすとき 線形写像 という。   "
},
{
  "id": "subsec-matrix-lin-4",
  "level": "2",
  "url": "sec-matrix-map.html#subsec-matrix-lin-4",
  "type": "命題",
  "number": "2.4.3",
  "title": "線形性の条件.",
  "body": " 線形性の条件   写像 について以下は同値   は線形写像。              に関する帰納法で証明する。まずは の場合を証明する。 次に    の場合を考えることで、  の場合を考えることで、   "
},
{
  "id": "sec-matrix-linmap",
  "level": "1",
  "url": "sec-matrix-linmap.html",
  "type": "Section",
  "number": "2.5",
  "title": "線形写像は行列",
  "body": " 線形写像は行列   標準ベクトルを用いた数ベクトルの分解  各 について 標準ベクトル  を  と定義する。つまり は第 成分が1でそれ以外の成分が0の 次元数ベクトルである。 任意の 次元ベクトル は標準ベクトルを用いて と表すことができる。    標準ベクトルを用いた行列の理解    任意の 行列 について    標準ベクトル が行列 で写る先について考えると、 が成り立つ。 右辺は行列 の 列目に他ならない。    つまり、 行列 は を の 列目に写す写像 であると分かる。 このように行列を見るときは 列ごとに見ると線形写像として理解しやすい 。    線形写像は行列で表すことができる  写像 が線形性を満たすとすると、任意の について、 が得られる。 つまり線形写像 は標準ベクトルの行き先 のみによって定まる 。  一方で行列 は各 について を に写す線形写像を表す。 つまり、 は を表していることになる。 よって、 任意の の線形写像は 実行列で表現できる ことになる。   "
},
{
  "id": "subsec-vector-e-2",
  "level": "2",
  "url": "sec-matrix-linmap.html#subsec-vector-e-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "標準ベクトル "
},
{
  "id": "prop-matrix-e",
  "level": "2",
  "url": "sec-matrix-linmap.html#prop-matrix-e",
  "type": "命題",
  "number": "2.5.1",
  "title": "",
  "body": "  任意の 行列 について    標準ベクトル が行列 で写る先について考えると、 が成り立つ。 右辺は行列 の 列目に他ならない。   "
},
{
  "id": "sec-matrices",
  "level": "1",
  "url": "sec-matrices.html",
  "type": "Section",
  "number": "2.6",
  "title": "行列の例",
  "body": " 行列の例   零行列  成分がすべて 0 である行列を 零行列 といい、 と表す。 の零行列であることが分かるように と表すこともある。  零行列は任意の 次元数ベクトルを 次元零ベクトルへ写す写像であると理解できる。    対角行列  正方行列について考える。 各 について、 成分のことを 正方行列の対角成分 という。 対角成分でない成分のことを 正方行列の非対角成分 という。 非対角成分がすべて 0 である正方行列を 対角行列 という。  一般に対角行列 について、 である。 つまり、 対角行列は数ベクトルの各成分を伸び縮みさせる写像 を表す。 例えば なので   という写像になる。  対角成分がすべて 1 である対角行列を 単位行列 といい と表す( と表す流儀もある)。 行列のサイズが分かるように と表すこともある。 任意の 次元数ベクトル について、 である。 クロネッカーのデルタ を用いて、 と表すこともできる。    置換行列  正方行列 で各行、各列に 1 が一つだけ存在して、それ以外の要素がすべて 0 であるような行列を 置換行列 という。  例えば は置換行列である。 置換行列は 数ベクトルの成分を置換する 写像を表す。    2次元回転行列  任意の について 実行列 を 2次元回転行列 という。   なので、   という写像になる。 つまり、 2次元回転行列 は2次元実ベクトルを 回転させる行列 である。   "
},
{
  "id": "subsec-zero-matrix-2",
  "level": "2",
  "url": "sec-matrices.html#subsec-zero-matrix-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "零行列 "
},
{
  "id": "subsec-diagonal-matrix-2",
  "level": "2",
  "url": "sec-matrices.html#subsec-diagonal-matrix-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "正方行列の対角成分 正方行列の非対角成分 対角行列 "
},
{
  "id": "subsec-diagonal-matrix-4",
  "level": "2",
  "url": "sec-matrices.html#subsec-diagonal-matrix-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "単位行列 "
},
{
  "id": "subsec-perm-matrix-2",
  "level": "2",
  "url": "sec-matrices.html#subsec-perm-matrix-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "置換行列 "
},
{
  "id": "subsec-rotate-matrix-2",
  "level": "2",
  "url": "sec-matrices.html#subsec-rotate-matrix-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "2次元回転行列 "
},
{
  "id": "sec-matrix-ops",
  "level": "1",
  "url": "sec-matrix-ops.html",
  "type": "Section",
  "number": "2.7",
  "title": "行列の和とスカラー倍",
  "body": " 行列の和とスカラー倍   行列の和とスカラー倍の定義   行列の和   行列 について、その和を と定義する。 型が異なる行列同士の和は定義されない。    行列のスカラー倍の定義   スカラー と 行列 について、スカラー倍を と定義する。   数ベクトルの場合と同様に と定義する。また、 と定義する。  次元数ベクトルを 行列とみなしても演算のルールとしては矛盾が生じない。    行列の和とスカラー倍の線型写像としての意味    任意の自然数 と と と について    行列 数ベクトルの定義 と行列のスカラー倍の定義 より   行列の和の定義 より       行列の和とスカラー倍のその他の性質  数ベクトルの和とスカラー倍と同様に以下の性質が成り立つ。  任意の自然数 と について   [結合法則]  [交換法則]  [単位元の存在]  [逆元の存在]   任意の自然数 と と について   [結合法則]  [単位元]   任意の自然数 と と について   [分配法則]  [分配法則]    "
},
{
  "id": "subsec-matrix-add-2",
  "level": "2",
  "url": "sec-matrix-ops.html#subsec-matrix-add-2",
  "type": "定義",
  "number": "2.7.1",
  "title": "行列の和.",
  "body": " 行列の和   行列 について、その和を と定義する。 型が異なる行列同士の和は定義されない。  "
},
{
  "id": "subsec-matrix-add-3",
  "level": "2",
  "url": "sec-matrix-ops.html#subsec-matrix-add-3",
  "type": "定義",
  "number": "2.7.2",
  "title": "行列のスカラー倍の定義.",
  "body": " 行列のスカラー倍の定義   スカラー と 行列 について、スカラー倍を と定義する。  "
},
{
  "id": "subsec-matrix-ops-mean-2",
  "level": "2",
  "url": "sec-matrix-ops.html#subsec-matrix-ops-mean-2",
  "type": "命題",
  "number": "2.7.3",
  "title": "",
  "body": "  任意の自然数 と と と について    行列 数ベクトルの定義 と行列のスカラー倍の定義 より   行列の和の定義 より    "
},
{
  "id": "sec-matrix-mul",
  "level": "1",
  "url": "sec-matrix-mul.html",
  "type": "Section",
  "number": "2.8",
  "title": "行列の積",
  "body": " 行列の積   行列の積の定義   行列の積   行列 と 行列 の積を と定義する。 の列数と の行数が等しくないとき、行列積 は定義されない。    行列 が 行列の場合、行列積 は を数ベクトルとみなした場合の行列の作用 と等しい。    線形写像の合成写像   写像 , が線形写像であると仮定する。このとき、合成写像 は線型写像である。   任意の と について   任意の について       行列の積と合成写像  行列 数ベクトルの定義と行列 行列の定義を見比べると以下の事実が確認できる。     任意の と について、 の 列目を とすると である。    行列の積 は二つの線形写像 と の合成写像を表す行列である。   線形写像の合成写像  任意の と と について    より、  よって より、 が成り立つ。一方で より、任意の について が成り立つ。  ここで二つの写像 は線型写像である(一つ目は行列を掛ける写像なので線型写像、二つ目は線型写像の合成なので線型写像)。 よって標準ベクトルの行き先のみによって写像は定まる。 標準ベクトルの行き先が等しいので、 である。      行列積の結合法則   行列積の結合法則  任意の と , , について       行列積の結合法則が成り立つため、括弧を省略して と書いても曖昧さがない。 また、正方行列 のべき乗を と定義する。    行列積の分配法則   行列積の分配法則   任意の と , について、  また、任意の と について、          行列積の交換法則は成り立たない  一方で交換法則 は成り立つとは限らない。 まず両辺の型が一致するために、 と がともに 行列である必要がある。  そのような場合でも、例えば のような反例が存在する。  行列積の交換法則が成り立たないため、一般に である。   "
},
{
  "id": "subsec-matrix-mul-2",
  "level": "2",
  "url": "sec-matrix-mul.html#subsec-matrix-mul-2",
  "type": "定義",
  "number": "2.8.1",
  "title": "行列の積.",
  "body": " 行列の積   行列 と 行列 の積を と定義する。 の列数と の行数が等しくないとき、行列積 は定義されない。   "
},
{
  "id": "prop-linear-comp",
  "level": "2",
  "url": "sec-matrix-mul.html#prop-linear-comp",
  "type": "命題",
  "number": "2.8.2",
  "title": "",
  "body": " 写像 , が線形写像であると仮定する。このとき、合成写像 は線型写像である。   任意の と について   任意の について    "
},
{
  "id": "fact-mat",
  "level": "2",
  "url": "sec-matrix-mul.html#fact-mat",
  "type": "事実",
  "number": "2.8.3",
  "title": "",
  "body": "   任意の と について、 の 列目を とすると である。   "
},
{
  "id": "subsec-matrix-mul-prop-5",
  "level": "2",
  "url": "sec-matrix-mul.html#subsec-matrix-mul-prop-5",
  "type": "定理",
  "number": "2.8.4",
  "title": "線形写像の合成写像.",
  "body": " 線形写像の合成写像  任意の と と について    より、  よって より、 が成り立つ。一方で より、任意の について が成り立つ。  ここで二つの写像 は線型写像である(一つ目は行列を掛ける写像なので線型写像、二つ目は線型写像の合成なので線型写像)。 よって標準ベクトルの行き先のみによって写像は定まる。 標準ベクトルの行き先が等しいので、 である。   "
},
{
  "id": "subsec-matrix-mul-assos-2",
  "level": "2",
  "url": "sec-matrix-mul.html#subsec-matrix-mul-assos-2",
  "type": "定理",
  "number": "2.8.5",
  "title": "行列積の結合法則.",
  "body": " 行列積の結合法則  任意の と , , について      "
},
{
  "id": "subsec-matrix-mul-dist-2",
  "level": "2",
  "url": "sec-matrix-mul.html#subsec-matrix-mul-dist-2",
  "type": "命題",
  "number": "2.8.6",
  "title": "行列積の分配法則.",
  "body": " 行列積の分配法則   任意の と , について、  また、任意の と について、       "
},
{
  "id": "sec-fib",
  "level": "1",
  "url": "sec-fib.html",
  "type": "Section",
  "number": "3.1",
  "title": "フィボナッチ数列",
  "body": " フィボナッチ数列  フィボナッチ数列 は以下の漸化式で定義される。 フィボナッチ数列の最初の数項は である。 は定義に従って 回足し算すれば計算できるが、行列を使うと(整数のかけ算も使うものの)もっと効率的に が計算できる。  任意の について が成り立つことから、 が成り立つ。  よって、 の一列目は に等しい。 二列目は のとき、 である。よって について、 が成り立つ。  正方行列 について、 は という漸化式に基づいて計算することができる。このアルゴリズムは の計算のために高々 回の行列積の計算を含む。  例えば とおくと、 よって と分かる。  "
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
