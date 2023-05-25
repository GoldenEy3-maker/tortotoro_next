import { RouterPaths } from "@/ts/enums"
import Image from "next/image"
import Link from "next/link"
import Button from "../Button"
import Logo from "../Logo"
import styles from "./sidebar.module.scss"

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link
        href={RouterPaths.HomePage}
        title="Вернуться на главную"
        className="sidebar-logo"
      >
        <Logo />
      </Link>
      <nav className={styles.sidebarNav}>
        <ul className={styles.sidebarNavList}>
          <li className={styles.sidbearNavItem}>
            <Button
              href={RouterPaths.HomePage}
              className={styles.sidebarNavLink}
              title="Dashboard"
              onSurface={true}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                >
                  <path d="M80 936v-80h800v80H80Zm40-120V536h120v280H120Zm200 0V336h120v480H320Zm200 0V456h120v360H520Zm200 0V216h120v600H720Z" />
                </svg>
              </span>

              <p>Dashboard</p>
            </Button>
          </li>
          <li>
            <Button
              href={RouterPaths.WorkersPage}
              className={styles.sidebarNavLink}
              onSurface={true}
              title="Работники"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                >
                  <path d="M40 896V784q0-34 17.5-62.5T104 678q62-31 126-46.5T360 616q66 0 130 15.5T616 678q29 15 46.5 43.5T680 784v112H40Zm720 0V776q0-44-24.5-84.5T666 622q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360 576q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544 264q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120 816h480v-32q0-11-5.5-20T580 750q-54-27-109-40.5T360 696q-56 0-111 13.5T140 750q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440 416q0-33-23.5-56.5T360 336q-33 0-56.5 23.5T280 416q0 33 23.5 56.5T360 496Zm0 320Zm0-400Z" />
                </svg>
              </span>
              <p>Работники</p>
            </Button>
          </li>
          <li>
            <Button
              href={RouterPaths.ShiftsPage}
              className={styles.sidebarNavLink}
              onSurface={true}
              title="Смены"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                >
                  <path d="M680 736q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720 616q0-17-11.5-28.5T680 576q-17 0-28.5 11.5T640 616q0 17 11.5 28.5T680 656Zm-240 360V900q0-21 10-39.5t28-29.5q32-19 67.5-31.5T618 781l62 75 62-75q37 6 72 18.5t67 31.5q18 11 28.5 29.5T920 900v116H440Zm79-80h123l-54-66q-18 5-35 13t-34 17v36Zm199 0h122v-36q-16-10-33-17.5T772 870l-54 66Zm-76 0Zm76 0Zm-518 0q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v200q-16-20-35-38t-45-24V296H200v560h166q-3 11-4.5 22t-1.5 22v36H200Zm80-480h280q26-20 57-30t63-10v-40H280v80Zm0 160h200q0-21 4.5-41t12.5-39H280v80Zm0 160h138q11-9 23.5-16t25.5-13v-51H280v80Zm-80 80V296v137-17 440Zm480-240Z" />
                </svg>
              </span>
              <p>Смены</p>
            </Button>
          </li>
          <li>
            <Button
              href={RouterPaths.OrdersPage}
              className={styles.sidebarNavLink}
              onSurface={true}
              title="Заказы"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                >
                  <path d="M240 976q-33 0-56.5-23.5T160 896V416q0-33 23.5-56.5T240 336h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800 416v480q0 33-23.5 56.5T720 976H240Zm0-80h480V416h-80v80q0 17-11.5 28.5T600 536q-17 0-28.5-11.5T560 496v-80H400v80q0 17-11.5 28.5T360 536q-17 0-28.5-11.5T320 496v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480 256q-33 0-56.5 23.5T400 336ZM240 896V416v480Z" />
                </svg>
              </span>
              <p>Заказы</p>
            </Button>
          </li>
          <li>
            <Button
              href={RouterPaths.MenuPage}
              className={styles.sidebarNavLink}
              title="Меню"
              onSurface={true}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                >
                  <path d="m175 936-56-56 410-410q-18-42-5-95t57-95q53-53 118-62t106 32q41 41 32 106t-62 118q-42 44-95 57t-95-5l-50 50 304 304-56 56-304-302-304 302Zm118-342L173 474q-54-54-54-129t54-129l248 250-128 128Z" />
                </svg>
              </span>
              <p>Меню</p>
            </Button>
          </li>
        </ul>
      </nav>
      <div className={styles.sidebarProfile}>
        <div className={styles["sidebarProfile__avatar"]}>
          <Image src="/profile.png" alt="Ваша фотография" fill sizes="100vw" />
        </div>
        <p className={styles["sidebarProfile__name"]}>Gavano</p>
        <Button
          title="Выйти"
          className={styles["sidebarProfile__btn"]}
          variant="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 96 960 960"
            width="24"
          >
            <path d="M200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585 434l55-58 200 200-200 200Z" />
          </svg>
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar
