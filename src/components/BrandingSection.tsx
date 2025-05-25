import "../styles/BrandingSection.css";
import { useLang } from "../context/LangContext";
import { useContext } from "react";

export default function BrandingSection() {
    const { lang, setLang } = useLang();
    ;

    return (
        <section className="branding">
            <img sizes="(max-width: 300px) 100vw, (max-width: 300px) 35vw, (max-width: 300px) 24vw, 15vw"
                 srcSet="https://cdn.prod.website-files.com/66fc20085082bf0ba5d91733/678a2861fee614bbef4103cf_678a184c743655085f124f28_wring-logotype-horizontal-for_dark_BG_HiRes-p-500.png 500w, https://cdn.prod.website-files.com/66fc20085082bf0ba5d91733/678a2861fee614bbef4103cf_678a184c743655085f124f28_wring-logotype-horizontal-for_dark_BG_HiRes-p-800.png 800w, https://cdn.prod.website-files.com/66fc20085082bf0ba5d91733/678a2861fee614bbef4103cf_678a184c743655085f124f28_wring-logotype-horizontal-for_dark_BG_HiRes-p-1080.png 1080w, https://cdn.prod.website-files.com/66fc20085082bf0ba5d91733/678a2861fee614bbef4103cf_678a184c743655085f124f28_wring-logotype-horizontal-for_dark_BG_HiRes-p-1600.png 1600w, https://cdn.prod.website-files.com/66fc20085082bf0ba5d91733/678a2861fee614bbef4103cf_678a184c743655085f124f28_wring-logotype-horizontal-for_dark_BG_HiRes-p-2000.png 2000w, https://cdn.prod.website-files.com/66fc20085082bf0ba5d91733/678a2861fee614bbef4103cf_678a184c743655085f124f28_wring-logotype-horizontal-for_dark_BG_HiRes-p-2600.png 2600w, https://cdn.prod.website-files.com/66fc20085082bf0ba5d91733/678a2861fee614bbef4103cf_678a184c743655085f124f28_wring-logotype-horizontal-for_dark_BG_HiRes-p-3200.webp 3200w, https://cdn.prod.website-files.com/66fc20085082bf0ba5d91733/678a2861fee614bbef4103cf_678a184c743655085f124f28_wring-logotype-horizontal-for_dark_BG_HiRes.webp 7651w"
                 alt=""
                 src="https://cdn.prod.website-files.com/66fc20085082bf0ba5d91733/678a2861fee614bbef4103cf_678a184c743655085f124f28_wring-logotype-horizontal-for_dark_BG_HiRes.webp"
                 loading="lazy" className="navbar_logo"/>
            <h1 className="branding__title">
                {lang === "en" ? "Cloud Savings, Simplified." : "Cloud-Ersparnisse leicht gemacht."}
            </h1>
            <p className="branding__subtitle">
                {lang === "en"
                    ? "Join the group-buying community that reduces your AWS bill up to 40 %."
                    : "Treten Sie der Einkaufsgemeinschaft bei, die Ihre AWS-Rechnung um bis zu 40 % senkt."}
            </p>

            <a className="branding__cta" href="https://wring.co/why-wring" target="_blank">
                {lang === "en" ? "Why WRING?" : "Warum WRING?"}
            </a>

            <select
                aria-label="language"
                className="branding__lang"
                value={lang}
                onChange={(e) => setLang(e.target.value as any)}
            >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </select>
        </section>
    );
}
