const requestedVariant = new URLSearchParams(window.location.search).get("variant");
const variantKey = requestedVariant === "a" || /variant-a\.html$/i.test(window.location.pathname) ? "a" : "b";

const gallery = [
  ["assets/trend-butterfly-layer.png", "顔周りバタフライレイヤー", true],
  ["assets/29b7008388aa70a4.jpg", "ブリーチなし透明感カラー", false],
  ["assets/df1c439b65d6d53e.jpg", "切りっぱなしボブ", false],
  ["assets/trend-mens-nuance.png", "メンズニュアンスパーマ", true],
  ["assets/34a7c75cad4fba22.jpg", "半個室の落ち着いた空間", false],
  ["assets/c957834dc4d0cb17.jpg", "モノトーンの店内", false],
  ["assets/trend-hairset.png", "ライブ・推し活ヘアセット", true],
  ["assets/105cc1ff3ac1c3f3.jpg", "柔らかいレイヤースタイル", false],
];

const features = [
  {
    category: "顔周りの似合わせカットが得意なサロン",
    image: "assets/trend-butterfly-layer.png",
    title: "伸ばしかけでも雰囲気が変わる。顔周りレイヤー",
    body: "結んだときの顔周りまで見て切るから、巻かない日も手抜きに見えません。",
    coupon: "【顔周りも相談】カット＋カラー＋Milbon 3stepTR",
    price: "¥7,150",
  },
  {
    category: "一人ひとりに似合うヘアを提案してくれるサロン",
    image: "assets/105cc1ff3ac1c3f3.jpg",
    title: "やりたい髪型が決まっていなくても大丈夫です",
    body: "苦手な仕上がりと朝に使える時間から、今の自分に無理のない髪型を探します。",
    coupon: "【迷った方へ】カウンセリングからメニューをご案内",
    price: "¥0",
  },
  {
    category: "デザインカラーが得意なサロン",
    image: "assets/c3b2c48f50485312.jpg",
    title: "レイヤーの動きまできれいに見える、やわらかなカラー",
    body: "赤みは消したい。でも暗くはしたくない。そんな細かな希望も履歴を見ながら整えます。",
    coupon: "【顔周りも相談】カット＋イルミナorアディクシーカラー",
    price: "¥8,800",
  },
  {
    category: "縮毛矯正・ストレートが得意なサロン",
    image: "assets/225014a8cdeae038.jpg",
    title: "髪質改善か縮毛矯正か。迷ったまま来てください",
    body: "手触りをよくしたいのか、癖を伸ばしたいのか。髪を見て必要な施術から決めます。",
    coupon: "【髪質改善】カウンセリングから必要な施術をご案内",
    price: "¥0",
  },
  {
    category: "メンズカジュアルが得意なサロン",
    image: "assets/trend-mens-nuance.png",
    title: "初パーマは、学校や仕事で浮かない強さから",
    body: "ワックスをつけるだけで毛流れが出るように。強さも前髪も生活に合わせます。",
    coupon: "【京都駅メンズ】カット＋ニュアンスパーマ",
    price: "現行パーマ価格",
  },
  {
    category: "うるツヤになれる厳選トリートメントが自慢",
    image: "assets/07ce4235f3cf1cb1.jpg",
    title: "毛先が引っかかる。色もすぐ抜ける。そんな髪に",
    body: "名前や値段ではなく、今の傷み方に合うトリートメントを一緒に選びます。",
    coupon: "【手触りケア】カット＋カラー＋Milbon 3stepTR",
    price: "¥7,150",
  },
  {
    category: "カット＋カラーで8,000円以下のクーポンがあるサロン",
    image: "assets/b40b309898f690c0.jpg",
    title: "きれいを無理なく続けられる、通いやすい価格",
    body: "一度だけ豪華にするより、気になった頃にまた来られる価格を大切にしています。",
    coupon: "【通いやすい価格】カット＋カラー＋3stepTR",
    price: "¥7,150",
  },
];

const styles = [
  ["assets/trend-butterfly-layer.png", "京都駅バタフライレイヤー顔周りカット20代30代", "長さを変えすぎず、顔周りに動きが欲しい方へ。巻かなくても軽く見えるレイヤーです。", "カット＋カラー", true],
  ["assets/29b7008388aa70a4.jpg", "オリーブグレージュロング髪質改善20代30代京都駅", "赤みを抑え、暗めでも柔らかく見えるロング。艶と色落ちまで考えて調合します。", "カット＋カラー", false],
  ["assets/df1c439b65d6d53e.jpg", "切りっぱなしボブミルクティーベージュ20代京都駅", "ライン感は残しながら、重く見えないベージュで柔らかなボブへ仕上げます。", "カット＋カラー", false],
  ["assets/ed72ef9616058c63.jpg", "丸みショートボブ前髪あり小顔カット30代京都駅", "短くしたいけれど扱いが不安な方へ。乾かすだけで形になる丸みショートです。", "カット＋TR", false],
  ["assets/5266cbbac1164a23.jpg", "暗髪ハッシュカット顔周りウルフレイヤー京都駅", "伸ばしかけでも変化が出る軽めウルフ。暗髪でも顔周りに抜け感をつくります。", "カット＋カラー", false],
  ["assets/8af6de4d6958a9ae.jpg", "くびれレイヤー顔周りカットオリーブベージュ京都駅", "顔周りと毛先に動きをつけ、赤みを抑えた色で柔らかな印象へ整えます。", "カット＋カラー", false],
  ["assets/8d98c545ba1e4629.jpg", "切りっぱなしボブ暖色カシスレッド艶髪20代京都駅", "艶が見えやすいボブと深みレッド。色味をしっかり楽しみたい方におすすめです。", "カット＋カラー", false],
  ["assets/164881b16b146bcd.jpg", "京都駅メンズカット毛流れナチュラルショート", "学校や仕事にもなじむ清潔感ショート。ワックスをつけるだけで形になります。", "メンズカット", false],
  ["assets/trend-mens-nuance.png", "京都駅メンズパーマラウンドマッシュフェザーパーマ", "初めてのパーマにも。強すぎない毛流れで、毎朝のセットを簡単にします。", "メンズカット＋パーマ", true],
  ["assets/trend-hairset.png", "京都駅ライブヘアセット推し活ハーフツイン", "移動中も崩れにくく、正面・横・後ろのどこから見てもかわいい仕上がりへ。", "ヘアセット", true],
  ["assets/225014a8cdeae038.jpg", "艶髪ロングピンクブラウン髪質改善20代30代京都駅", "光に当たると柔らかく見える艶カラー。暖色を自然に楽しみたい方へ。", "カラー＋TR", false],
  ["assets/47c53471ac6e4189.jpg", "韓国風ロングレイヤー顔周りカット暗髪京都駅", "暗髪でも重く見せず、顔周りと毛先に動きを出すロングレイヤーです。", "カット＋カラー", false],
];

const blogs = [
  ["assets/trend-butterfly-layer.png", "バタフライレイヤーの似合わせ方【京都駅】", "長さ別の見え方と、顔型・前髪に合わせるポイントをご紹介します。", true],
  ["assets/105cc1ff3ac1c3f3.jpg", "巻かない顔周りレイヤー【京都駅】", "毎朝巻けない方にも扱いやすい、入れすぎないレイヤーの考え方。", false],
  ["assets/29b7008388aa70a4.jpg", "ブリーチなしベージュ【京都駅】", "現在の髪色からできる明るさと、カラー剤の選び方を解説します。", false],
  ["assets/8af6de4d6958a9ae.jpg", "オリーブカラーの色持ち【京都駅】", "赤みを抑えた色の変化と、自宅で長持ちさせるケア方法をご紹介。", false],
  ["assets/trend-mens-nuance.png", "初めてのメンズパーマ【京都駅】", "必要な長さ、強さ、朝のセット時間まで来店前に知りたいことを整理。", true],
  ["assets/164881b16b146bcd.jpg", "朝が楽なラウンドマッシュ【京都駅】", "学校や職場で浮かず、毎朝短時間で整う毛流れの作り方。", false],
  ["assets/trend-mens-nuance.png", "メンズパーマ3種類を比較【京都駅】", "シャドウ・フェザー・ニュアンスの動きと印象の違いを解説。", true],
  ["assets/trend-hairset.png", "ライブ前ヘアセット【京都駅】", "所要時間や持参物、移動中も崩れにくくするポイントをご紹介。", true],
  ["assets/trend-hairset.png", "結婚式ヘアセットの選び方【京都駅】", "服装や会場に合う編み下ろしとタイトシニヨンの違いをご紹介。", true],
  ["assets/225014a8cdeae038.jpg", "カラー後のホームケア【京都駅】", "きれいな色と手触りを次回来店まで続ける方法をまとめました。", false],
];

const blogBodies = [
  "バタフライレイヤーは、顔周りから胸元へつながる大きな動きが特徴です。長さを変えすぎず雰囲気を変えたい方や、巻いたときに華やかさが欲しい方におすすめ。大切なのは、流行の形をそのまま入れるのではなく、顔型・前髪・結ぶ頻度に合わせて幅と高さを調整することです。i hair&eye【アイ】様では、普段のセット方法まで確認して扱いやすい顔周りをご提案します。ご予約はカットまたはカット＋カラーのクーポンからどうぞ。",
  "レイヤーは巻かなければ形にならない、と思っていませんか。入れる位置と量を調整すれば、乾かしただけでも毛先が重ならず、顔周りに軽さが出ます。毎朝巻く時間がない方には、表面へ入れすぎず、顔周りと毛先を中心に動きをつくるのがおすすめ。髪質や結ぶ頻度も確認し、仕事の日は自然に、休日は巻いて変化を楽しめる形へ整えます。いつも同じ髪型になる方も、まずはご相談ください。",
  "ブリーチなしでも、現在の明るさとカラー履歴によっては柔らかなベージュを楽しめます。赤みが強い方、暗染め履歴がある方、明るくできる範囲が決まっている方では、選ぶ薬剤と仕上がりが異なります。カウンセリングでは希望写真だけでなく、色落ち後に避けたい色も確認。肌色と普段の服装になじむ明るさへ調整します。顔周りレイヤーと組み合わせると、髪全体がより軽く見えるのもポイントです。",
  "オリーブ系カラーは、赤みを抑えて髪を柔らかく見せたい方におすすめです。濃く入れれば落ち着いた印象に、ベージュを多めに混ぜれば肌なじみのよい仕上がりになります。色持ちをよくするには、施術当日の高温シャワーを避け、洗浄力の強すぎないシャンプーを使うことが大切。髪の履歴を確認し、染めた直後だけでなく、色落ちまできれいに見える配合をご提案します。",
  "初めてのメンズパーマで大切なのは、パーマ名よりも『朝どうセットしたいか』を決めることです。自然な毛流れが欲しい、前髪を上げたい、ワックスだけで動きを出したいなど、目的によって必要な長さと強さが変わります。学校や仕事で強く見せられない場合は、ニュアンスパーマから始めるのもおすすめ。骨格と髪質を確認し、清潔感を残しながら毎朝扱いやすい形へ整えます。",
  "ラウンドマッシュは、丸みのあるシルエットと自然な毛流れで、学生から社会人まで取り入れやすいスタイルです。重く見せないためには、前髪・耳周り・襟足のバランスが重要。直毛で動きが出にくい方は、弱めのニュアンスパーマを組み合わせると朝のセットが簡単になります。校則や職場の雰囲気、普段使うスタイリング剤まで確認して、無理なく続けられる形をご提案します。",
  "シャドウパーマは立体感、フェザーパーマは後ろへ流れる軽さ、ニュアンスパーマは自然な毛流れをつくりやすいのが特徴です。同じメンズパーマでも、必要な長さや見える強さは異なります。写真だけで選ぶのではなく、髪質・骨格・仕事や学校で可能な範囲から決めるのがおすすめ。初めての方には、毎朝再現できる強さを基準にご提案し、乾かし方とスタイリング方法までお伝えします。",
  "ライブや推し活前のヘアセットは、会場までの移動時間と当日の服装を先に確認すると失敗しにくくなります。ハーフツインやリボンアレンジは、正面だけでなく横・後ろから見たバランスも大切です。使用したい飾りがある場合はご持参ください。大きさや重さを見て固定方法を調整します。京都駅から移動する時間も考え、崩れにくさと写真に残るかわいさを両立した仕上がりへ。",
  "結婚式のお呼ばれヘアは、服装・会場・移動時間に合わせて選びます。柔らかく華やかな編み下ろし、すっきり上品なタイトシニヨンなど、同じ長さでも印象は大きく変わります。首元のデザインやアクセサリーも確認し、全身で見たときにバランスのよい形へ。雨や長時間の移動がある場合は固定方法も調整します。予約時に髪の長さと希望時間をお知らせいただくとご案内がスムーズです。",
  "カラー後の色と手触りを長く楽しむには、洗い方・乾かし方・次回来店の時期が大切です。濡れたままの時間を短くし、根元から乾かして最後に冷風を当てると、表面が整いやすくなります。アイロンは必要以上に高温にせず、毛先へ何度も通さないようにしましょう。乾燥や広がりが気になる方には、髪質と履歴に合うホームケアをご案内します。次回カラーの目安も仕上がりに合わせてお伝えします。",
];

let commonSearchWords = "京都駅/レイヤーカット/顔周りカット/メンズパーマ/髪質改善/バタフライレイヤー/フェザーパーマ/シャドウパーマ";

const styleSearchWords = [
  "京都駅/レイヤーカット/顔周りカット/バタフライレイヤー/ミディアムレイヤー",
  "京都駅/ロングヘア/オリーブグレージュ/ブリーチなしカラー",
  "京都駅/切りっぱなしボブ/ミルクティーベージュ/ボブ",
  "京都駅/ショートボブ/丸みショート/シースルーバング",
  "京都駅/ハッシュカット/ウルフカット/暗髪",
  "京都駅/レイヤーカット/くびれレイヤー/オリーブベージュ",
  "京都駅/切りっぱなしボブ/カシスレッド/暖色カラー",
  "京都駅/メンズカット/メンズショート/ナチュラルショート",
  "京都駅/メンズパーマ/ニュアンスパーマ/ラウンドマッシュ/フェザーパーマ",
  "京都駅/京都駅ヘアセット/ライブヘアセット/推し活ヘア/ハーフツイン",
  "京都駅/ロングヘア/ピンクブラウン/艶髪",
  "京都駅/韓国風レイヤー/ロングレイヤー/ダークグレージュ",
];

const blogSearchWords = [
  "京都駅/レイヤーカット/顔周りカット/バタフライレイヤー",
  "京都駅/レイヤーカット/顔周りカット/ミディアムレイヤー",
  "京都駅/ブリーチなしカラー/ヘーゼルベージュ/イルミナカラー",
  "京都駅/オリーブグレージュ/オリーブベージュ/カラーケア",
  "京都駅/メンズパーマ/ニュアンスパーマ/フェザーパーマ",
  "京都駅/メンズカット/ラウンドマッシュ/メンズショート",
  "京都駅/メンズパーマ/シャドウパーマ/フェザーパーマ/ニュアンスパーマ",
  "京都駅/京都駅ヘアセット/ライブヘアセット/推し活ヘア/ハーフツイン",
  "京都駅/結婚式ヘアセット/編み下ろし/タイトシニヨン",
  "京都駅/髪質改善/カラーケア/ホームケア/艶髪",
];

const commitmentPages = [
  {
    title: "初めてご来店されるお客様へ｜悩みから選べるi hair&eye",
    lead: "初めての美容室でうまく希望を伝えられるか不安な方へ。顔型・髪質・普段のセット時間まで確認し、女性の顔周りレイヤー、男性のメンズパーマ、癖や広がりの髪質改善から、今の悩みに合う方法をご提案します。",
    steps: [
      ["初めてでも希望を伝えやすいカウンセリング", "希望写真だけでなく、今困っていること、避けたい仕上がり、朝に使える時間まで伺います。うまく言葉にできなくても大丈夫。長さ・明るさ・必要な施術を一緒に整理し、納得してから施術を始めます。"],
      ["誰向けかが分かる3つの予約入口", "女性は顔周りレイヤー、男性は毛流れをつくるメンズパーマ、癖や広がりには髪質改善。得意な技術を並べるだけでなく、どんな悩みをどう変えられるかを基準にメニューをご案内します。"],
      ["顔型と結ぶ頻度まで考える似合わせカット", "顔型・生え癖・毛量に加え、髪を結ぶ頻度や前髪の扱い方まで確認します。おろした日も結んだ日も顔周りが決まり、乾かすだけでも形になりやすい長さとシルエットへ整えます。"],
      ["長さを変えすぎず印象を変えるレイヤー", "伸ばしかけや、いつも同じ髪型になる方へ。顔周りと毛先へ必要な分だけレイヤーを入れ、ストレートでは自然に、巻いた日はしっかり動く、変化を楽しめるスタイルに仕上げます。"],
      ["髪の履歴から決めるカラーとダメージケア", "現在の明るさ、暗染めやブリーチの履歴、色落ち後に避けたい色まで確認します。希望色だけで薬剤を決めず、髪の体力と次回の施術も考え、無理なく続けられるカラーをご提案します。"],
      ["髪質改善と縮毛矯正を悩みで選び分け", "艶や手触りを整えたいのか、強い癖やうねりを伸ばしたいのかで必要な施術は異なります。髪の状態を確認し、髪質改善・ストレート・縮毛矯正から目的に合う方法をご説明します。"],
      ["髪の状態に合わせて選ぶトリートメント", "乾燥・カラー履歴・広がり・手触りを確認し、Milbon・TOKIO・Aujuaなどから必要なケアを選定します。高いメニューを勧めるのではなく、今の髪に必要なものを分かりやすくご案内します。"],
      ["初めてのメンズパーマも強さから相談", "ニュアンス・フェザー・シャドウなど、名前だけでは選びにくいメンズパーマ。学校や仕事で可能な範囲、必要な長さ、朝のセット方法を確認し、清潔感と扱いやすさが続く強さへ調整します。"],
      ["学生から社会人まで続けやすい価格", "きれいな髪を一度で終わらせず、無理なく続けていただくために。カット・カラー・ケアを定期的に利用しやすい価格でご用意し、必要な追加料金も施術前に確認します。"],
      ["半個室で落ち着いて過ごせるサロン時間", "中庭のある落ち着いた店内と半個室をご用意しています。美容室で緊張しやすい方も、周囲を気にしすぎず相談できる空間へ。技術だけでなく、また来たいと思える接客と過ごしやすさを大切にします。"],
    ],
  },
  {
    title: "顔周りレイヤー・メンズパーマ・髪質改善スタイルガイド",
    lead: "流行の名前を並べるだけでなく、どんな人に似合い、どんな悩みを解決できるかをご紹介します。写真・スタイル・ブログ・クーポンを同じテーマでつなぎ、見つけた髪型を迷わず予約できるページを目指しました。",
    steps: [
      ["顔周りレイヤー｜結んでもおろしても小顔印象", "前髪・サイドバング・もみあげを顔型に合わせ、結んだ日も顔周りが残るように設計します。長さを大きく変えなくても印象を変えたい方、いつも同じ髪型になる方におすすめです。"],
      ["バタフライレイヤー｜巻いた日の華やかな動き", "顔周りから胸元へつながる大きな動きが特徴。前髪や顔型に合わせて高さを調整し、流行をそのまま当てはめず似合う形へ整えます。巻かない日の扱いやすさも考えて入れる量を決めます。"],
      ["くびれレイヤー｜ミディアムの伸ばしかけに", "肩に当たってまとまりにくい時期も、顔周りと毛先に動きをつくることで軽やかな印象へ。伸ばしながら変化が欲しい方、外ハネと内巻きの両方を楽しみたい方におすすめです。"],
      ["切りっぱなしボブ｜ラインと扱いやすさを両立", "重さを残す位置と毛量を調整し、広がりにくく毎朝整えやすいボブへ。首元や顔型に合わせて長さを決めるため、初めて短くする方にも似合うバランスをご提案します。"],
      ["髪質改善｜癖・広がり・手触りから選ぶ", "髪質改善は一つの施術名ではありません。艶を出したい、広がりを抑えたい、強い癖を伸ばしたいなど目的を整理し、トリートメント・ストレート・縮毛矯正から必要な方法を選びます。"],
      ["ニュアンスパーマ｜初めてでも自然な毛流れ", "強くかけすぎず、前髪やトップへ自然な動きをつくります。直毛でセットが難しい方、朝のセットを短くしたい方、学校や仕事になじむメンズパーマを探している方におすすめです。"],
      ["フェザーパーマ｜軽さのある後ろ向きの毛流れ", "羽のように後ろへ流れる軽い動きが特徴です。センターパートや長めの前髪と相性がよく、清潔感を残しながら今っぽさが欲しい方へ。骨格に合わせて広がる位置を調整します。"],
      ["シャドウパーマ｜立体感と色気のあるメンズヘア", "トップから前髪に陰影が出る動きをつくり、セットしたときに立体感が続くスタイルへ。強さやボリュームは仕事・学校で可能な範囲に合わせ、毎朝再現できる形へ調整します。"],
      ["髪型とつながるブログ・スタイル・クーポン", "スタイルで見つけた髪型をブログで詳しく知り、同じテーマのクーポンから予約できる構成にします。ページごとに違うことを言わず、誰向けか・悩み・仕上がりを一貫させます。"],
      ["口コミで具体的な変化を第三者の言葉に", "仕上がりだけでなく、相談しやすさ、朝の扱いやすさ、周囲からの反応を口コミで伺います。写真と文章にお客様の実感が重なることで、初めての方にも自分向けのサロンだと伝わります。"],
    ],
  },
];

function weightedUnits(value) {
  return [...String(value || "")].reduce((sum, char) => {
    const code = char.codePointAt(0);
    if (char === "\n" || char === "\r") return sum;
    return sum + ((code >= 0x20 && code <= 0x7e) || (code >= 0xff61 && code <= 0xff9f) ? 0.5 : 1);
  }, 0);
}

function fitUnits(value, max) {
  let result = "";
  let used = 0;
  for (const char of String(value || "")) {
    const next = weightedUnits(char);
    if (used + next > max) break;
    result += char;
    used += next;
  }
  return result.trim();
}

function mergeSearchWords(...groups) {
  return [...new Set(groups.flatMap(group => group.split("/")).filter(Boolean))].join("/");
}

const topCopy = variantKey === "a" ? {
  label: "A案｜低リスク改修",
  name: "_i hair&eye【アイ】京都駅/カラー/イルミナ/髪質改善",
  catch: "〈京都駅徒歩5分〉作り込みすぎない抜け感とトレンド。通いやすい価格で、似合う髪へ",
  message: "今の雰囲気は好き。でも少しだけ変えたい。そんなときも気軽にご相談ください。髪質や顔型、好きな服、朝の過ごし方まで聞きながら、頑張りすぎなくても形になるスタイルを一緒に探します。透明感カラー、ショート、髪質改善、メンズまで幅広く担当。半個室でゆっくり過ごせて、価格も無理なく通える設定です。",
} : {
  label: "B案｜コンセプト改修",
  name: "_i hair&eye【アイ】京都駅/レイヤーカット/メンズパーマ/髪質改善",
  catch: "京都駅徒歩5分。顔周りが決まるレイヤーと、朝が楽になるメンズパーマ",
  message: "サロン帰りはいいのに、自分でやるとうまくいかない。女性は、結んでも顔周りが残るレイヤー。男性は、ワックスだけで毛流れが出るパーマ。癖や広がりには、髪を見て必要な髪質改善を選びます。流行をそのまま当てはめず、学校や仕事の日にも無理なく扱える髪へ。次の朝も困らない仕上がりを大切にします。",
};

if (variantKey === "a") {
  commonSearchWords = "京都駅/カラー/イルミナカラー/髪質改善/メンズカット/メンズパーマ/ショートボブ/レイヤーカット";
  features.splice(0, features.length,
    { category: "デザインカラーが得意なサロン", image: "assets/29b7008388aa70a4.jpg", title: "ブリーチなしでも、やわらかく見える透明感カラー", body: "赤みや色落ちの好みまで聞き、肌と服になじむ色を一緒に探します。", coupon: "カット＋イルミナorアディクシーカラー", price: "¥8,800" },
    { category: "ショートヘアのカットが得意なサロン", image: "assets/ed72ef9616058c63.jpg", title: "横から見てもきれい。朝に手がかからないショート", body: "襟足の浮きや広がりまで見て、乾かすだけで形になる長さへ整えます。", coupon: "似合わせカット＋Milbon 3stepTR", price: "¥4,950" },
    { category: "うるツヤになれる厳選トリートメントが自慢", image: "assets/07ce4235f3cf1cb1.jpg", title: "カラーも楽しみたい。でも毛先の傷みは増やしたくない", body: "乾燥や履歴を見て、今の髪に必要なケアだけを選びます。", coupon: "カット＋カラー＋Milbon 3stepTR", price: "¥7,150" },
    { category: "一人ひとりに似合うヘアを提案してくれるサロン", image: "assets/105cc1ff3ac1c3f3.jpg", title: "写真がなくても大丈夫。好きと苦手から髪型を探します", body: "言葉にしにくい希望も、普段の服やセット時間を聞きながら形にします。", coupon: "カウンセリングからメニューをご案内", price: "¥0" },
    { category: "メンズカジュアルが得意なサロン", image: "assets/trend-mens-nuance.png", title: "清潔感は残して、いつもより少し雰囲気のある髪へ", body: "学校や仕事に合わせ、カットだけでもパーマでも扱いやすく仕上げます。", coupon: "メンズカット＋クイックスパor眉カット", price: "¥4,950" },
    { category: "くつろげる上質空間が自慢のサロン", image: "assets/34a7c75cad4fba22.jpg", title: "美容室で緊張しやすい方にも。半個室の落ち着いた空間", body: "周りを気にしすぎず、髪の悩みをゆっくり話せる時間をつくります。", coupon: "髪質改善カウンセリング", price: "¥0" },
    { category: "カット＋カラーで8,000円以下のクーポンがあるサロン", image: "assets/b40b309898f690c0.jpg", title: "気になった頃にまた来られる。続けやすい価格", body: "学生から社会人まで、きれいな状態を無理なく保てるメニューをご用意。", coupon: "カット＋カラー＋Milbon 3stepTR", price: "¥7,150" }
  );

  commitmentPages[0] = {
    title: "作り込みすぎないのに、きれいに見える髪を大切にしています",
    lead: "_iが目指すのは、サロンでだけ決まる髪ではありません。今の雰囲気を生かしながら、透明感カラー、ショート、メンズ、髪質改善まで、毎日の中で無理なく楽しめるスタイルをつくります。",
    steps: [
      ["うまく希望を言えなくても大丈夫です", "写真がなくても、今気になることや苦手な仕上がりからお聞きします。『少し変えたい』くらいの気持ちでも、似合う長さや色を一緒に探します。"],
      ["作り込みすぎない、自然な抜け感", "きれいに巻かない日も、髪を結ぶ日も、どこか雰囲気が残るように。頑張りすぎなくても扱える形を考えてカットします。"],
      ["髪と肌がやわらかく見えるカラー", "赤みを抑えたい、暗くても重く見せたくない。今の髪の履歴を見ながら、ブリーチなしでできる色も丁寧にお伝えします。"],
      ["短くするのが不安な方のショート", "襟足が浮く、横が膨らむ、朝に直せるか心配。切る前にその不安を聞き、乾かしたときの形まで考えて長さを決めます。"],
      ["傷み方に合わせて選ぶ髪質ケア", "毛先の引っかかり、広がり、カラーの色落ち。同じ悩みに見えても必要なケアは違うため、髪を触ってから選びます。"],
      ["癖を伸ばすか、手触りを整えるか", "髪質改善と縮毛矯正の違いが分からなくても大丈夫です。叶えたい状態と履歴から、必要な施術と料金を先にお話しします。"],
      ["学生にも社会人にも似合うメンズヘア", "清潔感はほしい。でも普通すぎるのは物足りない。学校や仕事でできる範囲に合わせ、カットとパーマの強さを決めます。"],
      ["経験豊富なスタッフが担当します", "流行だけを追わず、髪質や顔型に合うかまで見てご提案します。担当選びに迷う場合は、スタイル写真からお選びください。"],
      ["きれいを続けやすい価格", "一度きれいにして終わりではなく、気になった頃にまた来られることも大切。必要以上にメニューを増やさずご案内します。"],
      ["半個室で、少し肩の力を抜ける時間に", "美容室で緊張しやすい方も、周囲を気にせず過ごせる空間です。髪のことも、それ以外のことも、話したい分だけで大丈夫です。"],
    ],
  };
}

document.querySelector("#pattern-label").textContent = topCopy.label;
document.querySelector("#pattern-summary-title").textContent = topCopy.label;
document.querySelector("#pattern-summary-copy").textContent = variantKey === "a"
  ? "現行のナチュラル＋トレンド、価格、幅広い技術を残し、伝わり方だけ整える案です。"
  : "顔周りレイヤー・メンズパーマ・髪質改善を、毎朝扱いやすい髪という予約理由でつなぐ案です。";
document.querySelector("#pattern-a-link").classList.toggle("active", variantKey === "a");
document.querySelector("#pattern-b-link").classList.toggle("active", variantKey === "b");
document.querySelector("#salon-name").textContent = topCopy.name;
document.querySelector("#top-catch").textContent = fitUnits(topCopy.catch, 50);
document.querySelector("#top-message").textContent = fitUnits(topCopy.message, 150);
document.querySelector("#footer-name").textContent = topCopy.name;
document.querySelector("#access-copy").textContent = variantKey === "a"
  ? "京都駅徒歩5分｜カラー／イルミナ／髪質改善"
  : "京都駅徒歩5分｜レイヤーカット／メンズパーマ／髪質改善";
document.querySelector("#salon-strengths").textContent = variantKey === "a"
  ? "ナチュラル／透明感カラー／ショート／髪質改善／メンズカジュアル"
  : "ナチュラル／顔周りレイヤー／メンズパーマ／髪質改善";

const topGallery = document.querySelector("#top-gallery");
topGallery.innerHTML = gallery.map(([src, caption, ai]) => `
  <figure class="gallery-item">
    <img src="${src}" alt="${caption}">
    <figcaption class="gallery-caption">${caption}${ai ? '<span class="ai-badge">追加撮影イメージ</span>' : ''}</figcaption>
  </figure>`).join("");

const featureList = document.querySelector("#feature-list");
featureList.innerHTML = features.map((f, index) => {
  const title = fitUnits(f.title, 50);
  const body = fitUnits(`${f.body}/${commonSearchWords}`, 100);
  return `<article class="feature-card">
    <img src="${f.image}" alt="${title}">
    <div class="feature-copy" id="feature-copy-${index}">
      <span class="feature-category">${f.category}</span>
      <h3>${title}</h3>
      <p>${body}</p>
    </div>
    <aside class="feature-side">
      <small>この特集からつなぐクーポン</small>
      <strong>${f.coupon}</strong>
      <span class="feature-price">${f.price}</span>
      <button class="copy-button" data-copy-value="${escapeAttribute(`${f.category}\n${title}\n${body}\n${f.coupon} ${f.price}`)}" type="button">コピー</button>
    </aside>
  </article>`;
}).join("");

let currentCommitmentPage = 0;

function commitmentStepCopy(title, body, index) {
  const combinedBody = fitUnits(`${body}/${commonSearchWords}`, 200);
  return `STEP${index + 1} ${fitUnits(title, 50)}\n${combinedBody}`;
}

function renderCommitments(pageIndex) {
  currentCommitmentPage = pageIndex;
  const page = commitmentPages[pageIndex];
  document.querySelector("#commitment-title").textContent = fitUnits(page.title, 50);
  document.querySelector("#commitment-lead").textContent = fitUnits(page.lead, 150);
  document.querySelector("#commitment-list").innerHTML = page.steps.map(([title, body], index) => {
    const combinedBody = fitUnits(`${body}/${commonSearchWords}`, 200);
    return `<article class="commitment-card">
      <span class="commitment-step">STEP${index + 1}</span>
      <div><h3>${fitUnits(title, 50)}</h3><p>${combinedBody}</p></div>
      <button class="copy-button" data-copy-value="${escapeAttribute(commitmentStepCopy(title, body, index))}" type="button">コピー</button>
    </article>`;
  }).join("");
  document.querySelector("#commitment-copy").dataset.copyValue = [
    fitUnits(page.title, 50),
    fitUnits(page.lead, 150),
    ...page.steps.map(([title, body], index) => commitmentStepCopy(title, body, index)),
  ].join("\n\n");
}

document.querySelectorAll(".commitment-tab").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".commitment-tab").forEach(tab => tab.classList.remove("active"));
  button.classList.add("active");
  renderCommitments(Number(button.dataset.commitmentPage));
}));

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function cleanCouponTitle(title) {
  return title
    .replace(/[【〖《『][^】〗》』]*[】〗》』]/g, "")
    .replace(/^(?:新規限定|再来限定|お得に|大人気|人気|限定|特価|に♪|♪|\s)+/g, "")
    .replace(/[☆◇♪＊]+/g, "")
    .replace(/[￥¥][\d,]+(?:→[￥¥][\d,]+)?/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function couponIntent(coupon) {
  const source = `${coupon.title} ${coupon.description}`;
  if (/学割|U24/i.test(source)) return "【学割U24】";
  if (/birthday|誕生日/i.test(source)) return "【誕生日限定】";
  if (/相談|悩んだら|迷った/.test(source)) return "【髪質改善相談】";
  if (/Men|men's|メンズ/i.test(source)) return "【京都駅メンズ】";
  if (/ヘアセット|セット/.test(source) && !/セット面/.test(source)) return "【京都駅ヘアセット】";
  if (/髪質改善ストレート|縮毛矯正|ストレート/.test(source)) return "【髪質改善】";
  if (/ブリーチ|インナー|ハイライト|グラデーション/.test(source)) return "【デザインカラー】";
  if (/イルミナ|アディクシー|カラー/.test(source) && /カット/.test(source)) return variantKey === "a" ? "【透明感カラー】" : "【顔周りも相談】";
  if (/イルミナ|アディクシー|カラー/.test(source)) return "【京都駅カラー】";
  if (/パーマ/.test(source)) return "【朝が楽なパーマ】";
  if (/ヘッドスパ|スパ/.test(source)) return "【頭皮リセット】";
  if (/Aujua|TOKIO|トリートメント|髪質改善/.test(source)) return "【髪質ケア】";
  if (/カット/.test(source)) return "【似合わせカット】";
  return "【京都駅】";
}

function benefitLead(coupon) {
  const source = `${coupon.title} ${coupon.description}`;
  const pick = options => options[[...source].reduce((sum, char) => sum + char.codePointAt(0), 0) % options.length];
  if (/Men|men's|メンズ/i.test(source)) return pick(["ワックスだけで形になる、朝が楽なメンズヘアへ。", "校則や仕事になじむ強さで、清潔感のある髪へ。", "横の膨らみと前髪まで整え、家でも扱いやすく。"]);
  if (/ヘアセット|セット/.test(source) && !/セット面/.test(source)) return pick(["移動中も崩れにくく、写真に残る後ろ姿まできれいに。", "服と予定を聞き、盛りすぎない華やかさに仕上げます。", "使いたい飾りも持参OK。固定方法まで調整します。"]);
  if (/髪質改善ストレート|縮毛矯正|ストレート/.test(source)) return pick(["広がりを抑えたいのか、癖を伸ばしたいのかから相談。", "不自然に硬く見せず、朝に乾かしやすい髪を目指します。", "履歴を見て、今の髪に無理のない施術を決めます。"]);
  if (/ブリーチ|インナー|ハイライト|グラデーション/.test(source)) return pick(["今の履歴でどこまでできるか、施術前にはっきりお伝え。", "色落ちまで楽しめるよう、明るさとブリーチ回数を相談。", "やりたい色と傷ませたくない気持ち、どちらも伺います。"]);
  if (/カラー/.test(source)) return pick(["赤みは消したい。でも暗くしたくない。細かな希望も歓迎。", "肌と服になじみ、色落ちしても嫌になりにくいカラーへ。", "いつもの色に少し変化を。顔周りまで一緒に相談できます。"]);
  if (/パーマ/.test(source)) return pick(["巻くのが苦手でも、乾かして整えやすい動きをつくります。", "初パーマも、強すぎず自分で戻せるかけ方から。", "朝に使える時間を聞き、無理なく続く強さに調整します。"]);
  if (/ヘッドスパ|スパ/.test(source)) return pick(["短い時間でも、頭皮と目元がすっきりするひと休みに。", "ベタつきや乾燥を見ながら、力加減もお好みに合わせます。", "カットのついでに、頭皮まで軽く整えたい方へ。"]);
  if (/トリートメント|Aujua|TOKIO|髪質改善/.test(source)) return pick(["毛先の引っかかりに、今の傷み方に合うケアを。", "高いものではなく、今の髪に必要なものを選びます。", "カラー後の手触りを、次回来店まできれいに保ちたい方へ。"]);
  if (/カット/.test(source)) return pick(["結んだ日まで考えて、顔周りと毛先を切ります。", "乾かしただけでも形になり、朝に困りにくい髪へ。", "短くする不安も、避けたい形から先にお聞きします。"]);
  return "まだ決まっていなくても大丈夫。髪を見て一緒に選びます。";
}

function couponCondition(coupon) {
  const index = coupon.conditions.indexOf("その他条件：");
  return fitUnits(index >= 0 ? coupon.conditions[index + 1] : "併用不可", 20);
}

function normalizedScope(prefix) {
  const joined = prefix.join(" ");
  if (/新\s*規/.test(joined)) return "新規";
  if (/再\s*来/.test(joined)) return "再来";
  return "全員";
}

function couponTags(prefix) {
  return prefix.filter(x => !/^[新規全員再来]$/.test(x)).join(" / ").replace(/新 規|全 員|再 来/g, "");
}

function couponFilterType(coupon) {
  const source = `${coupon.prefix.join(" ")} ${coupon.title}`;
  return {
    new: /新\s*規/.test(source),
    repeat: /再\s*来/.test(source),
    mens: /Men|men's|メンズ/i.test(source),
    color: /カラー|ブリーチ|ハイライト|インナー/.test(source),
    care: /髪質改善|縮毛|ストレート|トリートメント|Aujua|TOKIO/.test(source),
  };
}

let currentFilter = "all";
let currentPage = 1;
const pageSize = 25;

function improvedCoupon(coupon) {
  const title = fitUnits(`${couponIntent(coupon)}${cleanCouponTitle(coupon.title)}`, 36);
  const description = fitUnits(`${benefitLead(coupon)}/${commonSearchWords}`, 90);
  return { ...coupon, improvedTitle: title, improvedDescription: description, improvedCondition: couponCondition(coupon) };
}

function filteredCoupons() {
  const all = window.COUPONS.map(improvedCoupon);
  if (currentFilter === "all") return all;
  return all.filter(c => couponFilterType(c)[currentFilter]);
}

function renderCoupons() {
  const coupons = filteredCoupons();
  const pages = Math.max(1, Math.ceil(coupons.length / pageSize));
  currentPage = Math.min(currentPage, pages);
  const shown = coupons.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  document.querySelector("#coupon-count").textContent = coupons.length;
  document.querySelector("#coupon-list").innerHTML = shown.map(c => {
    const copyText = `${c.improvedTitle}\n${c.price}\n${c.improvedDescription}\n来店日条件：指定なし\nその他条件：${c.improvedCondition}`;
    return `<article class="coupon-card">
      <div class="coupon-scope">${normalizedScope(c.prefix)}</div>
      <div class="coupon-main">
        <div class="coupon-tags">${couponTags(c.prefix)}</div>
        <h3>${c.improvedTitle}</h3>
        <p>${c.improvedDescription}</p>
        <p class="coupon-condition">その他条件：${c.improvedCondition}</p>
      </div>
      <div class="coupon-action">
        <div class="coupon-price">${c.price}</div>
        <button class="reserve-small" type="button">空席確認・予約</button>
        <button class="copy-button" data-copy-value="${escapeAttribute(copyText)}" type="button">コピー</button>
      </div>
    </article>`;
  }).join("");
  document.querySelector("#coupon-pagination").innerHTML = Array.from({ length: pages }, (_, i) => `<button class="page-button ${i + 1 === currentPage ? "active" : ""}" data-page="${i + 1}" type="button">${i + 1}</button>`).join("");
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
  button.classList.add("active");
  currentFilter = button.dataset.filter;
  currentPage = 1;
  renderCoupons();
}));

document.querySelector("#coupon-pagination").addEventListener("click", event => {
  const button = event.target.closest("[data-page]");
  if (!button) return;
  currentPage = Number(button.dataset.page);
  renderCoupons();
  document.querySelector("#coupons").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#style-grid").innerHTML = styles.map(([src, title, body, menu, ai], index) => {
  const fittedTitle = fitUnits(title, 30);
  const fittedComment = fitUnits(`${body}/${mergeSearchWords(commonSearchWords, styleSearchWords[index])}`, 120);
  const fittedMenu = fitUnits(menu, 70);
  return `
  <article class="style-card">
    <img src="${src}" alt="${fittedTitle}">
    <button class="copy-button" data-copy-value="${escapeAttribute(`${fittedTitle}\n${fittedComment}\nおすすめメニュー：${fittedMenu}`)}" type="button">コピー</button>
    <h3>${fittedTitle}${ai ? '<span class="ai-badge">追加撮影イメージ</span>' : ''}</h3>
    <p>${fittedComment}</p>
    <p><strong>おすすめ：</strong>${fittedMenu}</p>
  </article>`;
}).join("");

document.querySelector("#blog-list").innerHTML = blogs.map(([src, title, excerpt, ai], index) => {
  const fittedTitle = fitUnits(title, 25);
  const fullBody = `${blogBodies[index]}\n\n${mergeSearchWords(commonSearchWords, blogSearchWords[index])}`;
  return `
  <article class="blog-card">
    <img src="${src}" alt="${fittedTitle}">
    <div>
      <time>2026.08.${String(18 - Math.floor(index / 2)).padStart(2, "0")}</time>
      <h3>${fittedTitle}${ai ? '<span class="ai-badge">追加撮影イメージ</span>' : ''}</h3>
      <p>${excerpt}</p>
      <p class="search-words">${mergeSearchWords(commonSearchWords, blogSearchWords[index])}</p>
    </div>
    <button class="copy-button" data-copy-value="${escapeAttribute(`${fittedTitle}\n\n${fullBody}`)}" type="button">全文コピー</button>
  </article>`;
}).join("");

function buildFullPageCopy() {
  const salonCopy = [
    "【店名】",
    topCopy.name,
    "",
    "【TOP紹介】",
    document.querySelector(".copy-line > div")?.innerText || "",
    "",
    "【TOP写真キャプション】",
    ...gallery.map(([, caption]) => caption),
    "",
    "【おすすめ特集7枠】",
    ...features.map((f, index) => `${index + 1}. ${f.category}\n${fitUnits(f.title, 50)}\n${fitUnits(`${f.body}/${commonSearchWords}`, 100)}\n接続クーポン：${f.coupon} ${f.price}`),
    "",
    "【こだわり2ページ・各10STEP】",
    ...commitmentPages.flatMap((page, pageIndex) => [
      `こだわり${pageIndex + 1}：${fitUnits(page.title, 50)}\n${fitUnits(page.lead, 150)}`,
      ...page.steps.map(([title, body], index) => commitmentStepCopy(title, body, index)),
    ]),
    "",
    "【クーポン96件】",
    ...window.COUPONS.map((coupon, index) => {
      const c = improvedCoupon(coupon);
      return `${index + 1}. ${c.improvedTitle}\n${c.price}\n${c.improvedDescription}\n来店日条件：指定なし\nその他条件：${c.improvedCondition}`;
    }),
    "",
    "【スタイル12件】",
    ...styles.map(([, title, body, menu], index) => `${index + 1}. ${fitUnits(title, 30)}\n${fitUnits(`${body}/${mergeSearchWords(commonSearchWords, styleSearchWords[index])}`, 120)}\nおすすめメニュー：${fitUnits(menu, 70)}`),
    "",
    "【ブログ10件】",
    ...blogs.map(([, title], index) => `${index + 1}. ${fitUnits(title, 25)}\n${blogBodies[index]}\n${mergeSearchWords(commonSearchWords, blogSearchWords[index])}`),
    "",
    "【サロン情報】",
    document.querySelector(".salon-data")?.innerText || "",
    "",
    "【口コミ改善方針】",
    document.querySelector(".review-summary")?.innerText || "",
  ];
  return salonCopy.join("\n\n");
}

function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(value);
  const area = document.createElement("textarea");
  area.value = value;
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
  return Promise.resolve();
}

document.addEventListener("click", event => {
  const button = event.target.closest(".copy-button, [data-copy-page]");
  if (!button) return;
  const target = button.dataset.copyTarget ? document.querySelector(button.dataset.copyTarget)?.innerText : "";
  const value = button.hasAttribute("data-copy-page") ? buildFullPageCopy() : (button.dataset.copyValue || target);
  copyText(value).then(() => {
    const toast = document.querySelector("#toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1400);
  });
});

renderCommitments(0);
renderCoupons();
