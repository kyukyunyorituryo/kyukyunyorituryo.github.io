// src/pages/index.js
import React from "react"
import Layout from "../components/layout"

const Named = () => (
  <Layout>
  <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 p-6 md:p-12">
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8 border border-slate-200">
      <header className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">青空文庫用ツール</h1>
        <p className="text-slate-600 text-base">
          Meryの青空文庫用の構文ファイル、スニペットツール用のファイル。
        </p>
        <a
          href="https://github.com/kyukyunyorituryo/aozoratool/raw/main/aozoraEditor.zip"
          className="inline-block mt-3 px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          aozoraEditor.zip をダウンロード
        </a>
      </header>

      <section className="border-t border-slate-200 pt-6">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">青空文庫用整形補助</h2>
        <p className="text-slate-700 mb-3">
          青空文庫のタグつけを支援するマクロです。
        </p>
        <a
          href="https://www.haijin-boys.com/wiki/%E9%9D%92%E7%A9%BA%E6%96%87%E5%BA%AB%E7%94%A8%E6%95%B4%E5%BD%A2%E8%A3%9C%E5%8A%A9"
          className="text-indigo-500 hover:text-indigo-700 underline decoration-dotted transition"
        >
          https://www.haijin-boys.com/wiki/青空文庫用整形補助
        </a>
      </section>

      <section className="border-t border-slate-200 pt-6">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">説明ページ</h2>
        <p className="text-slate-700 mb-3">
          Meryの青空文庫用整形補助マクロを使ってみる
        </p>
        <a
          href="https://99nyorituryo.hatenablog.com/entry/2013/10/28/231520"
          className="text-indigo-500 hover:text-indigo-700 underline decoration-dotted transition"
        >
          説明を見る（Hatena Blog）
        </a>
      </section>

      <section className="border-t border-slate-200 pt-6">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">構文ファイル</h2>
        <p className="text-slate-700 mb-3">
          青空文庫シンタックスハイライトの構文ファイル
        </p>
        <a
          href="https://www.haijin-boys.com/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:aozoramsy.zip"
          className="text-indigo-500 hover:text-indigo-700 underline decoration-dotted transition"
        >
          https://www.haijin-boys.com/wiki/ファイル:aozoramsy.zip
        </a>
      </section>
    </div>
  </div>
</Layout>
)

export default Named
