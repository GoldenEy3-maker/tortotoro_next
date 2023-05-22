import sectionStyles from "@/components/Section/section.module.scss"
import Button from "@/components/Button"
import * as Table from "@/components/Table"
import Image from "next/image"
import { RouterPaths } from "@/ts/enums"

function Workers() {
  return (
    <section className={sectionStyles.section}>
      <header className={sectionStyles.sectionHeader}>
        <h2 className={sectionStyles.sectionTitle}>Работники месяца</h2>
        <Button href={RouterPaths.WorkersPage} type="button" title="Посмотреть всех" variant="elevated">Посмотреть
          всех</Button>
      </header>
      <div className={sectionStyles.sectionContent}>
        <Table.Root columns="2fr 1fr 1fr 1fr 1fr">
          <Table.Head>
            <Table.HeadCell>Имя</Table.HeadCell>
            <Table.HeadCell>Должность</Table.HeadCell>
            <Table.HeadCell>Кол. часов</Table.HeadCell>
            <Table.HeadCell>Кол. смен</Table.HeadCell>
            <Table.HeadCell>Начисления</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.RowCell>
                <div
                  style={{ width: 50, height: 50, position: "relative", backgroundColor: "#ccc", borderRadius: "50%" }}>
                  <Image src="/profile.png" alt="Фото профиля" fill/>
                </div>
                <span>Gavano</span>
              </Table.RowCell>
              <Table.RowCell>Официант</Table.RowCell>
              <Table.RowCell>35</Table.RowCell>
              <Table.RowCell>10</Table.RowCell>
              <Table.RowCell>100к руб.</Table.RowCell>
            </Table.Row>
            <Table.Row>
              <Table.RowCell>
                <div
                  style={{ width: 50, height: 50, position: "relative", backgroundColor: "#ccc", borderRadius: "50%" }}>
                  <Image src="/profile.png" alt="Фото профиля" fill/>
                </div>
                <span>Gavano</span>
              </Table.RowCell>
              <Table.RowCell>Официант</Table.RowCell>
              <Table.RowCell>35</Table.RowCell>
              <Table.RowCell>10</Table.RowCell>
              <Table.RowCell>100к руб.</Table.RowCell>
            </Table.Row>
            <Table.Row>
              <Table.RowCell>
                <div
                  style={{ width: 50, height: 50, position: "relative", backgroundColor: "#ccc", borderRadius: "50%" }}>
                  <Image src="/profile.png" alt="Фото профиля" fill/>
                </div>
                <span>Gavano</span>
              </Table.RowCell>
              <Table.RowCell>Официант</Table.RowCell>
              <Table.RowCell>35</Table.RowCell>
              <Table.RowCell>10</Table.RowCell>
              <Table.RowCell>100к руб.</Table.RowCell>
            </Table.Row>
          </Table.Body>
        </Table.Root>

      </div>
    </section>
  )
}

export default Workers