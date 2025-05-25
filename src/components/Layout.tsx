import "../styles/Layout.css";
import BrandingSection from "./BrandingSection";
import AuthForm from "./AuthForm";

export default function Layout() {
    return (
         <div className="screen">
            <div className="layout">
                <BrandingSection />
                <AuthForm />
            </div>
              </div>
    );
}
