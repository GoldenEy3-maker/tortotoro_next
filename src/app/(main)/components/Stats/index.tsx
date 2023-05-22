import sectionStyles from "@/components/Section/section.module.scss"
import { setStaticClass } from "@/utils/helpers"
import styles from "./stats.module.scss"

function Stats() {
  return (
    <section className={sectionStyles.section}>
      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <div className="stats-item__wrapper">
            <header className={styles.statsItemHeader}>
              <p>Месячный доход</p>
              <div className={styles.statsItemHeaderProgress}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path d="M444 864V426L243 627l-51-51 288-288 288 288-51 51-201-201v438h-72Z"/>
                  </svg>
                </span>
                <p>10.0%</p>
              </div>
            </header>
            <span className={styles.statsItem__value}>200 000 &#8381;</span>
            <footer className={styles.statsItemFooter}>Май</footer>
          </div>
        </li>
        <li className={styles.statsItem}>
          <div className="stats-item__wrapper">
            <header className={styles.statsItemHeader}>
              <p>Сегоднящний доход</p>
              <div className={styles.statsItemHeaderProgress}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path d="M444 864V426L243 627l-51-51 288-288 288 288-51 51-201-201v438h-72Z"/>
                  </svg>
                </span>
                <p>10.0%</p>
              </div>
            </header>
            <span className={styles.statsItem__value}>20 000 &#8381;</span>
            <footer className={styles.statsItemFooter}>Пн. Май 15</footer>
          </div>
        </li>
        <li className={styles.statsItem}>
          <div className="stats-item__wrapper">
            <header className={styles.statsItemHeader}>
              <p>Рейтинг заведения</p>
              <div
                className={setStaticClass(
                  styles.statsItemHeaderProgress,
                  styles._danger
                )}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path d="M480 864 192 576l51-51 201 201V288h72v438l201-201 51 51-288 288Z"/>
                  </svg>
                </span>
                <p>2.0%</p>
              </div>
            </header>
            <span className={styles.statsItem__value}>4.4</span>
            <footer className={styles.statsItemFooter}>Май 15</footer>
          </div>
        </li>
        <li className={styles.statsItem}>
          <div className="stats-item__wrapper">
            <header className={styles.statsItemHeader}>
              <p>Количество заказов/день</p>
              <div className={styles.statsItemHeaderProgress}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                  >
                    <path d="M444 864V426L243 627l-51-51 288-288 288 288-51 51-201-201v438h-72Z"/>
                  </svg>
                </span>
                <p>10.0%</p>
              </div>
            </header>
            <span className={styles.statsItem__value}>100</span>
            <footer className={styles.statsItemFooter}>Пн. Май 15</footer>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Stats
