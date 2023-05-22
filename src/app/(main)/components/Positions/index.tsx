import * as Section from "@/components/Section"
import styles from "./positions.module.scss"
import Image from "next/image"

function Positions() {
  return (
    <Section.Root className={styles.positions}>
      <Section.Header>
        <Section.Title>Рейтинг позици</Section.Title>
      </Section.Header>
      <Section.Content>
        <ul className={styles.positionsList}>
          <li className={styles.positionsItem}>
            <div className={styles.positionsItem__image}>
              <Image src="/position-1.png" alt="Позиция" fill/>
            </div>
            <span className={styles.positionsItem__title}>Тонкацу</span>
            <span className={styles.positionsItem__value}>70.20%</span>
          </li>
          <li className={styles.positionsItem}>
            <div className={styles.positionsItem__image}>
              <Image src="/position-1.png" alt="Позиция" fill/>
            </div>
            <span className={styles.positionsItem__title}>Говяжий омлет с курицей Говяжий омлет с курицей</span>
            <span className={styles.positionsItem__value}>20.30%</span>
          </li>
          <li className={styles.positionsItem}>
            <div className={styles.positionsItem__image}>
              <Image src="/position-1.png" alt="Позиция" fill/>
            </div>
            <span className={styles.positionsItem__title}>Тонкацу</span>
            <span className={styles.positionsItem__value}>10.40%</span>
          </li>


        </ul>
      </Section.Content>
    </Section.Root>
  )
}

export default Positions