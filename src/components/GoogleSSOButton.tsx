import { FcGoogle } from "react-icons/fc";
import "../styles/Button.css";

export default function GoogleSSOButton() {
    const click = () => alert("Google SSO coming soon – demo button 😊");
    return (
        <button className="btn btn--gray" onClick={click} type="button">
            <FcGoogle size={18} style={{ marginRight: 8 }} />
            Google
        </button>
    );
}
