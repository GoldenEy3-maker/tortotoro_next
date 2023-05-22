import styles from "./header.module.scss"

function Header() {

  return (
    <header className={styles.header}>
      <h1 className="page-title">
        Доброе утро, <span className="rich-text">Govano</span>
      </h1>
    </header>
  )
}

export default Header
