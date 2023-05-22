"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Logo from "@/components/Logo"
import formStyles from "@/styles/components/form.module.scss"
import { RouterPaths } from "@/ts/enums"
import { ValueOf } from "@/ts/utils"
import { setStaticClass } from "@/utils/helpers"
import { ChangeEvent, useState } from "react"
import styles from "./auth.module.scss"

const AuthInputs = {
  Login: "login",
  Password: "password",
} as const
type AuthInputs = ValueOf<typeof AuthInputs>

function AuthPage() {
  const [inputsState, setInputsState] = useState<Record<AuthInputs, string>>({
    login: "",
    password: "",
  })

  function handleInputsState(event: ChangeEvent<HTMLInputElement>) {
    setInputsState((prev) => ({
      ...prev,
      [event.target.name as AuthInputs]: event.target.value,
    }))
  }

  return (
    <main className={setStaticClass(styles.auth, "_container")}>
      <div className={styles["auth__wrapper"]}>
        <Logo onlyLogo={true} />
        <h1 className="page-title">Авторизация</h1>
        <form action={RouterPaths.HomePage} className={formStyles.form}>
          <div className={formStyles.formInputs}>
            <Input
              type="text"
              label="Логин"
              leadingIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                >
                  <path d="M480 576q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160 896V784q0-34 17.5-62.5T224 678q62-31 126-46.5T480 616q66 0 130 15.5T736 678q29 15 46.5 43.5T800 784v112H160Zm80-80h480v-32q0-11-5.5-20T700 750q-54-27-109-40.5T480 696q-56 0-111 13.5T260 750q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560 416q0-33-23.5-56.5T480 336q-33 0-56.5 23.5T400 416q0 33 23.5 56.5T480 496Zm0-80Zm0 400Z" />
                </svg>
              }
              name={AuthInputs.Login}
              id={AuthInputs.Login}
              value={inputsState.login}
              onChange={handleInputsState}
            />
            <Input
              type="password"
              label="Пароль"
              leadingIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                >
                  <path d="M240 976q-33 0-56.5-23.5T160 896V496q0-33 23.5-56.5T240 416h40v-80q0-83 58.5-141.5T480 136q83 0 141.5 58.5T680 336v80h40q33 0 56.5 23.5T800 496v400q0 33-23.5 56.5T720 976H240Zm0-80h480V496H240v400Zm240-120q33 0 56.5-23.5T560 696q0-33-23.5-56.5T480 616q-33 0-56.5 23.5T400 696q0 33 23.5 56.5T480 776ZM360 416h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240 896V496v400Z" />
                </svg>
              }
              name={AuthInputs.Password}
              id={AuthInputs.Password}
              value={inputsState.password}
              onChange={handleInputsState}
            />
          </div>
          <div className={formStyles.formActions}>
            <Button variant="elevated" title="Войти">
              Войти
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AuthPage
