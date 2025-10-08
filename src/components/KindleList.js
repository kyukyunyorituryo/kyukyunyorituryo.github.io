import React from "react";

const KindleList = ({ title = "Kindle 書籍一覧", kindles }) => {
  return (
    <section id="kindles" className="py-16 px-4 max-w-6xl mx-auto">
      {/* セクションタイトル */}
      <h2 className="text-3xl font-extrabold text-center mb-10">{title}</h2>

      {/* グリッドレイアウト（スマホ1列 → タブレット2列 → PC3列） */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {kindles.map((book, index) => (
          <a
            key={index}
            href={book.PageURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${book.Title} のページへ`}
            className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 bg-white dark:bg-gray-900 w-full max-w-xs"
          >
            {/* 表紙画像部分（1:1.6 の縦長） */}
            <div className="relative aspect-[1/1.6] overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={book.Image}
                alt={book.Title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* タイトル部分 */}
            <div className="p-4 text-center">
              <h3 className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors leading-snug">
                {book.Title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default KindleList;
