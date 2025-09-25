"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import banner from "../assets/banner.png";
import { Inter } from "next/font/google";
import { FaUser, FaLock } from "react-icons/fa";
import styles from "../styles/login.module.css";

const inter = Inter({ subsets: ["latin"], weight: ["500", "700"] });

export default function Login() {
  const router = useRouter();

  const handlelogin = async (e) => {
    e.preventDefault(); // evita que recargue la página
    router.push("/lugares"); // redirige a /lugares
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        {/* Lado izquierdo con imagen */}
        <div className={styles.leftSide}>
          <Image
            src={banner}
            alt="Banner"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Lado derecho con formulario */}
        <div className={styles.rightSide}>
          <h2 className={`${styles.loginTitle} ${inter.className}`}>INICIAR SESIÓN</h2>
          <form className={styles.form} onSubmit={handlelogin}>
            <div className={styles.inputWrapper}>
              <FaUser className={styles.inputIcon} />
              <input
                type="text"
                placeholder="Usuario"
                autoComplete="username"
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputWrapper}>
              <FaLock className={styles.inputIcon} />
              <input
                type="password"
                placeholder="Contraseña"
                autoComplete="current-password"
                required
                className={styles.inputField}
              />
            </div>
            <button className={styles.signInButton} type="submit">
              INGRESAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
