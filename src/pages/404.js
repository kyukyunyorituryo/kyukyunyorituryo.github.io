import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1>404 ページが見つかりません</h1>
      <p>申し訳ありません。お探しのページは削除されたか、URLが間違っている可能性があります。</p>
      <p>トップページに戻るか、メニューから目的のページをお探しください。</p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.8rem 1.5rem",
          backgroundColor: "#1976d2",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        トップページへ戻る
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404 ページが見つかりません" />

export default NotFoundPage
