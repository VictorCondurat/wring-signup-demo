import Layout from "./components/Layout";
import { LangProvider } from "./context/LangContext";
import "./index.css";
import "./styles/Layout.css";

export default function App() {
    return (
        <LangProvider>
            <section className="hero">
                <Layout />
            </section>
        </LangProvider>
    );
}
