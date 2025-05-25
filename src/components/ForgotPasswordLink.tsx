
import {useLang} from "../context/LangContext";
export default function ForgotPasswordLink() {
    const {lang, setLang} = useLang();
    const t ={
        forgotPassword: lang === "en" ? "Forgot password?" : "Passwort vergessen?",
    }
    return (
        <a href="https://wring.co/contact-us" target="_blank" style={{ color: "#8969af" }}>
            {t.forgotPassword}
        </a>
    );
}
