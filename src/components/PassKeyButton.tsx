import { FiKey } from "react-icons/fi";
import "../styles/Button.css";

export default function PassKeyButton() {
    const click = async () => {
        if (!("credentials" in navigator)) {
            alert("Passkeys not supported in this browser.");
            return;
        }
        alert("WebAuthn flow placeholder.");
    };

    return (
        <button className="btn btn--gray" onClick={click} type="button">
            <FiKey size={16} style={{ marginRight: 8 }} />
            Passkey
        </button>
    );
}
