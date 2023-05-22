import sectionStyles from "@/components/Section/section.module.scss"
import styles from "./methods.module.scss"
import { setStaticClass } from "@/utils/helpers"

function Methods() {
  return (
    <section className={setStaticClass(sectionStyles.section, styles.methods)}>
      <header className={sectionStyles.sectionHeader}>
        <h2 className={sectionStyles.sectionTitle}>Способ заказа</h2>
      </header>
      <div className={sectionStyles.sectionContent}>
        <ul className={styles.methodsList}>
          <li className={styles.methodsItem}>
            <span className={styles.methodsItem__icon}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path
                d="M80 856v-60h800v60H80Zm30-120v-17q0-155 88.5-250T420 346v-30q0-26 17-43t43-17q26 0 43 17t17 43v30q133 28 221.5 123T850 719v17H110Zm63-60h614q-14-128-102.5-200.5T479 403q-117 0-204.5 72.5T173 676Zm307 0Z"/></svg>
            </span>
            <span className={styles.methodsItem__title}>Ресторан</span>
            <span className={styles.methodsItem__value}>70.25%</span>
          </li>
          <li className={styles.methodsItem}>
            <span className={styles.methodsItem__icon}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path
                d="M260 1016q-24 0-42-18t-18-42V196q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18H260Zm0-150v90h440v-90H260Zm220.175 75q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM260 806h440V286H260v520Zm0-580h440v-30H260v30Zm0 640v90-90Zm0-640v-30 30Z"/></svg>
            </span>
            <span className={styles.methodsItem__title}>Телефон</span>
            <span className={styles.methodsItem__value}>20.45%</span>
          </li>
          <li className={styles.methodsItem}>
            <span className={styles.methodsItem__icon}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path
                d="m380 508 100-50 100 50V276H380v232ZM280 776v-80h200v80H280ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-660v600-600Zm0 600h600V276H640v329l-160-80-160 80V276H180v600Z"/></svg>
            </span>
            <span className={styles.methodsItem__title}>Доставка</span>
            <span className={styles.methodsItem__value}>10.33%</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Methods