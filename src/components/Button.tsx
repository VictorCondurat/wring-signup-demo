import "../styles/Button.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

export default function Button(
    props: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }
) {
    return <button className="btn" {...props} />;
}
