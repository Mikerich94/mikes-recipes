import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
            <h1>
              <span>Mike's</span>
              <span>Recipes</span>
            </h1>
            <h2>Simple, delicious, easy.</h2>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2026</p>
      </footer>
    </div>
  )
}