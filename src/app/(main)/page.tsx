import sectionStyles from "@/components/Section/section.module.scss"
import Sales from "./components/Sales"
import Stats from "./components/Stats"
import Methods from "@/app/(main)/components/Methods"
import Workers from "@/app/(main)/components/Workers"
import Positions from "@/app/(main)/components/Positions"

export default function Home() {
  return (
    <main className="home page-content__wrapper">
      <Stats/>
      <div className={sectionStyles.sectionGroup}>
        <Sales/>
        <Methods/>
      </div>
      <div className={sectionStyles.sectionGroup}>
        <Workers/>
        <Positions/>
      </div>
    </main>
  )
}
