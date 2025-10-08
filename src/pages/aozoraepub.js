import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AozoraEpub3Page = () => (
  <Layout>
    <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100 leading-relaxed">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">
        改造版 AozoraEpub3
      </h1>

      {/* 概要 */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">改造版の説明</h2>
        <p>
          <a href="http://ebpaj.jp/counsel/guide" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            電書協EPUB3制作ガイド
          </a>
          のEPUBに近づけることを目的としたフォーク版です。
          また、
          <a href="https://kadokawa-epub.bookwalker.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            KADOKAWA-EPUB制作仕様
          </a>
          も参考にしています。
        </p>
        <p>
          AozoraEpub3を電子出版目的で使用する際に、
          EPUBバリデーションを通過し、主要なEPUBビュワーで正しく表示されるよう修正しています。
        </p>
        <p>
          Read this in other languages:
          <a
            href="https://github.com/kyukyunyorituryo/AozoraEpub3/blob/master/README.en.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline ml-2"
          >
            English
          </a>
        </p>
      </section>

      {/* ダウンロード */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">ダウンロード</h2>
        <p>
          最新版は
          <a
            href="https://github.com/kyukyunyorituryo/AozoraEpub3/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            リリースページ
          </a>
          からダウンロードしてください。
        </p>
      </section>

      {/* 支援 */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">支援のお願い</h2>
        <p>
          個人開発のため、継続的な改善にご支援いただけると嬉しいです。
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://github.com/sponsors/kyukyunyorituryo" className="text-blue-500 underline">GitHub Sponsors</a>
          </li>
          <li>
            <a href="https://www.amazon.co.jp/gp/registry/wishlist/PP7F9RZJ1B0Y/ref=nav_wishlist_lists_1" className="text-blue-500 underline">
              欲しい物リスト
            </a>
          </li>
          <li>
            <a href="https://kyukyunyorituryo.github.io/kindle_sale/" className="text-blue-500 underline">
              Kindle商品サイト
            </a>（アフィリエイト対応）
          </li>
        </ul>
      </section>

      {/* 説明 */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">説明</h2>
        <p>
          青空文庫の注記入りテキストファイルをEPUB3ファイルに変換するツールです。
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>青空文庫txtのテキスト＋画像ファイル（またはzip）をEPUB3に変換</li>
          <li>Web小説のHTMLを取得して青空文庫txt形式で保存後にEPUB3変換</li>
          <li>画像zip / rar からEPUB3変換</li>
        </ul>
      </section>

      {/* 利用上の注意 */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">利用上の注意</h2>
        <p>利用は自己責任でお願いします。</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>一部未対応の注記があります。</li>
          <li>注記仕様外の構文によって章単位で表示されない場合があります。</li>
          <li>4バイト文字は一部端末で表示されません。</li>
        </ul>
      </section>

      {/* 変換時の注意 */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">変換時の注意</h2>
        <p>
          ログに表示される警告（未対応の注記や外字など）を確認し、テキストを修正してください。
        </p>
        <p>
          外字注記内で外字注記を使うとエラーになります（対応予定なし）。
        </p>
      </section>

      {/* 動作環境 */}
      <section className="mb-12 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">動作環境</h2>
        <p>
          <a href="https://adoptium.net/temurin/releases/" className="text-blue-500 underline">
            OpenJDK / Adoptium Temurin
          </a>
          の Java 21 以降を推奨します。
        </p>
        <p>Windows の場合：</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>OS: Windows</li>
          <li>Architecture: x64</li>
          <li>Package Type: JRE</li>
          <li>Version: 21</li>
        </ul>
        <p className="text-red-500">
          ※ Linux 版 kindlegen は配布終了のため、mobi 形式への変換は不可です。
        </p>
      </section>

      {/* 使い方 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">使い方</h2>
        <h3 className="text-xl font-bold mt-4">インストール</h3>
        <p>
          AozoraEpub3-*.zip を任意のフォルダに解凍してください。
        </p>

        <h3 className="text-xl font-bold mt-4">起動</h3>
        <p>
          AozoraEpub3.jar をダブルクリックで実行します。<br />
          またはコマンドラインで：
        </p>
        <pre className="bg-gray-800 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
          java -jar AozoraEpub3.jar
        </pre>

        <p>
          例：
          <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
            "C:\Program Files\Eclipse Adoptium\jre-21.0.1.12-hotspot\bin\java.exe" -jar AozoraEpub3.jar
          </code>
        </p>

        <h3 className="text-xl font-bold mt-4">変換</h3>
        <p>
          起動後、青空文庫テキストファイル（txtまたはzip）をウィンドウにドラッグ＆ドロップすると
          EPUBファイルが生成されます。
        </p>
      </section>
      
      {/* Wiki & 動画 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">Wikiページ</h2>
        <p>
          簡単な使い方は
          <a href="https://github.com/kyukyunyorituryo/AozoraEpub3/wiki/" className="text-indigo-500 underline">
            Wiki
          </a>
          に掲載しています。
        </p>
        <div className="flex justify-center">
          <a href="https://www.youtube.com/watch?v=qxcDw5nWd10" target="_blank" rel="noopener noreferrer">
            <img
              src="http://img.youtube.com/vi/qxcDw5nWd10/0.jpg"
              alt="ウェブ小説のEPUB変換"
              className="rounded-lg shadow-md hover:opacity-90 transition"
            />
          </a>
        </div>
      </section>

      {/* インストール動画 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">インストール</h2>
        <div className="flex justify-center">
          <a href="https://www.youtube.com/watch?v=SHeUvLXaycc" target="_blank" rel="noopener noreferrer">
            <img
              src="http://img.youtube.com/vi/SHeUvLXaycc/0.jpg"
              alt="AozoraEpub3のインストール"
              className="rounded-lg shadow-md hover:opacity-90 transition"
            />
          </a>
        </div>
        <p>
          Javaが必要です。<a href="https://adoptium.net/temurin/releases/" className="text-indigo-500 underline">
          Adoptium</a>から最新版をインストールしてください。
        </p>
      </section>

      {/* スクリーンショット */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">AozoraEpub3の使い方</h2>
        <img
          src="https://user-images.githubusercontent.com/18051339/133931512-a1561757-f583-4a7b-9615-78f2899e46b7.png"
          alt="起動画面"
          className="rounded-lg shadow-md mx-auto"
        />
        <p>
          青空文庫のテキストZIPをドラッグ＆ドロップしてEPUBまたはMOBI形式に変換します。
        </p>
      </section>

      {/* 本文書き方 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">本文テキストの書き方</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>タイトル → 改行 → 著者名 → 空行2行</li>
          <li>章・節は「中見出し」注記で指定</li>
          <li>ふりがなは「｜吾輩《わがはい》」形式</li>
          <li>挿絵は「［＃ねこ（吾輩は猫である.jpg、横400×縦640）入る］」形式</li>
        </ul>
      </section>
    </article>
  </Layout>
)

export const Head = () => (
  <Seo
    title="改造版 AozoraEpub3"
    description="青空文庫の注記付きテキストをEPUB3に変換するツール。電書協EPUB3制作ガイドに準拠し、EPUB審査通過を目指す改造版。"
  />
)

export default AozoraEpub3Page
