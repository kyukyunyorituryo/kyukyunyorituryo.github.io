import * as React from "react"
import Projects from "../components/Projects";
import KindleList from "../components/KindleList";
import Seo from "../components/seo"
import Layout from "../components/layout"

const projects = [
  {
    title: "FixedEpub3JS",
    link: "https://kyukyunyorituryo.github.io/FixedEpub3JS/",
    bg: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)",
    desc: "漫画のEPUB3作成サイト。kobo、bookwalker、Kindle、iBooks向けの漫画のEPUB作成サイト。画像を追加していくだけで漫画のEPUBが作れる。"
  },
  {
    title: "改造版AozoraEpub3",
    link: "https://github.com/kyukyunyorituryo/AozoraEpub3/wiki",
    bg: "linear-gradient(to right, #662D8C 0%, #ED1E79 100%)",
    desc: "青空文庫をEPUBに変換して、kobo、kindleなどのEPUBリーダー向けに変換するソフトウェア。作成したEPUBは販売も可能で、電子出版ツールとして利用できる。WEB小説からEPUBに変換もできる。"
  },
  {
    title: "青空文庫用ツール",
    link: "https://github.com/kyukyunyorituryo/aozoratool",
    bg: "linear-gradient(to right, #009245 0%, #FCEE21 100%)",
    desc: "Meryの青空文庫用構文ファイルやスニペットツール用ファイル。"
  },

]
const sites = [
  {
    title: "なろうコンバーター",
    link: "https://kyukyunyorituryo.github.io/narouconv/",
    bg: "linear-gradient(to right, #009245 0%, #FCEE21 100%)",
    desc: "小説家になろう、カクヨム、Pixiv、青空文庫、でんでんコンバーターの相互変換ツール。"
  },
  {
    title: "kindleセールチェック",
    link: "https://kyukyunyorituryo.github.io/kindle_sale/",
    bg: "linear-gradient(to right, #D585FF 0%, #00FFEE 100%)",
    desc: "Kindleセール品を一覧で表示するサイト。アマゾンの対抗セールなど、見つかりにくいセールも探せる。"
  },
  {
    title: "kindle新刊チェック",
    link: "https://kyukyunyorituryo.github.io/new_epub/",
    bg: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)",
    desc: "Kindle本を発売日や種類ごとに探せるサイト。"
  },
  {
    title: "新刊チェック",
    link: "https://kyukyunyorituryo.github.io/new_pub/",
    bg: "linear-gradient(to right, #662D8C 0%, #ED1E79 100%)",
    desc: "紙の本を発売日や種類ごとに探せるサイト。"
  },{
    title: "青空文庫 EPUB mobi置き場",
    link: "https://kyukyunyorituryo.github.io/bookshelf/",
    bg: "linear-gradient(to right, #D585FF 0%, #00FFEE 100%)",
    desc: "青空文庫やその他自作EPUBを電子書籍端末で読みやすく置いている。"
  },
  {
    title: "DOCX青空文庫変換",
    link: "https://kyukyunyorituryo.github.io/docx2aozora/",
    bg: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)",
    desc: "WordなどのDOCXファイルを青空文庫形式に変換する。ルビには未対応。"
  },
  {
    title: "電書ニュース",
    link: "https://kyukyunyorituryo.github.io/i/",
    bg: "linear-gradient(to right, #662D8C 0%, #ED1E79 100%)",
    desc: "電子書籍に関する情報やセールなどをブログ形式で配信。"
  },
  {
    title: "青空文庫エディター",
    link: "https://kyukyunyorituryo.github.io/AozoraEditor/",
    bg: "linear-gradient(to right, #662D8C 0%, #ED1E79 100%)",
    desc: "青空文庫形式をWYSIWYGで作成するWebエディター。"
  }]
const kindles = [
  {
    Image: "https://m.media-amazon.com/images/I/41mN5dybr5L._SL500_.jpg",
    Title: "安く作るオーディオ環境構築法",
    PageURL: "https://www.amazon.co.jp/dp/B0FQK3RMPX?tag=99hatena-22&linkCode=ogi&th=1&psc=1",
  },
  {
    Image: "https://m.media-amazon.com/images/I/5153d+Y9+fL._SL500_.jpg",
    Title: "ＥＰＵＢ縦書組版",
    PageURL: "https://www.amazon.co.jp/dp/B00GN7G6WK?tag=99hatena-22&linkCode=ogi&th=1&psc=1",
  },
  {
    Image: "https://m.media-amazon.com/images/I/61lmOUqAsTL._SL500_.jpg",
    Title: "漫画のEPUBの作り方: 専用ツールでかんたん制作 漫画の電子書籍作成",
    PageURL: "https://www.amazon.co.jp/dp/B07BT9QNH3?tag=99hatena-22&linkCode=ogi&th=1&psc=1",
  },
];
export const Head = () => <Seo title="制作物の紹介ページ" />


const IndexPage = () => (
  <Layout>
    {/* Hero / About */}
    <section
      id="about"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white px-6"
    >
      <h1 className="text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg animate-fade-in">
        制作物の紹介ページ
      </h1>
      <p className="text-lg md:text-xl max-w-2xl leading-relaxed opacity-90">
        GitHubで公開しているソフトウェアや、サイトの紹介やKindle出版など。
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-10">
        <a
          href="https://github.com/kyukyunyorituryo"
          className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
        >
          GitHub
        </a>
        <a
          href="https://www.amazon.co.jp/-/e/B07Q2TZFCN"
          className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
        >
          Kindleで出した本
        </a>
        <a
          href="https://play.google.com/store/apps/dev?id=6831425871855964718"
          className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
        >
          アンドロイドアプリ
        </a>
      </div>
    </section>

    {/* コンテンツ */}
    <h1 className="text-center text-5xl font-bold mt-12 mb-16">
      急急如律令の作品紹介
    </h1>

    <KindleList title="最近出したKindle 書籍" kindles={kindles} />
    <Projects title="ソフトウェア制作物一覧" projects={projects} />
    <Projects title="サイト制作物一覧" projects={sites} />

    {/* Contact */}
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-center"
    >
      <h2 className="text-4xl font-extrabold mb-8">Contact</h2>
      <p className="text-lg mb-10 opacity-90">
        blogやSNSなどから連絡が取れます。
      </p>
      <div className="flex justify-center flex-wrap gap-8 text-blue-600 dark:text-blue-400 text-lg font-semibold">
        <a
          href="https://99nyorituryo.hatenablog.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Blog
        </a>
        <a
          href="https://twitter.com/99nyorituryo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://www.youtube.com/@epub-ch"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          YouTube
        </a>
        <a
          href="https://github.com/kyukyunyorituryo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  </Layout>
)

export default IndexPage