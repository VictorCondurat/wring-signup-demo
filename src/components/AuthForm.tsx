import "../styles/AuthForm.css";
import {FiMail, FiLock} from "react-icons/fi";
import {useContext, useState} from "react";
import {useLang} from "../context/LangContext";
import Button from "./Button";
import ForgotPasswordLink from "./ForgotPasswordLink";
import GoogleSSOButton from "./GoogleSSOButton";
import PassKeyButton from "./PassKeyButton";
import Loader from "./Loader";

export default function AuthForm() {
    const {lang, setLang} = useLang();

    const [loading, setLoading] = useState(false);

    const t = {
        signIn: lang === "en" ? "Sign in" : "Anmelden",
        email: lang === "en" ? "Email address" : "E-Mail-Adresse",
        pw: lang === "en" ? "Password" : "Passwort",
        remember: lang === "en" ? "Remember me" : "Merken",
        home:     lang === "en" ? "Home"               : "Startseite",
        calc:     lang === "en" ? "Savings Calculator" : "Ersparnis-Rechner",
        faq:      lang === "en" ? "FAQ"                : "FAQ",
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <section className="auth">
            <h2>{t.signIn}</h2>
            <form onSubmit={submit} noValidate>
                <label className="field">
                    <FiMail/>
                    <input type="email" placeholder={t.email} required/>
                </label>

                 <label className="field">
                   <FiLock className="icon" />
                  <input
                     type="password"
                     placeholder={t.pw}
                     required
                     style={{
                       WebkitTextSecurity: "disc",
                       MozAppearance: "textfield",
                     }}
                   />
                 </label>

                <div className="auth__row">
                    <label className="remember">
                        <input type="checkbox"/> {t.remember}
                    </label>
                    <ForgotPasswordLink/>
                </div>
                <Button type="submit" disabled={loading}>
                    {loading ? <Loader/> : t.signIn}
                </Button>
                <div className="divider"><span>or</span></div>
                <div className="alt">
                    <GoogleSSOButton/>
                    <PassKeyButton/>
                </div>
            </form>

            <footer className="auth__links">
                <a href="https://wring.co/" target="_blank">{t.home}</a>
                <a href="https://wring.co/wring-invoice" target="_blank">{t.calc}</a>
                <a href="https://wring.co/faqs" target="_blank">{t.faq}</a>
            </footer>
        </section>
    );
}
