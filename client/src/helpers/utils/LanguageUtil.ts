const I18n: any = require("react-i18nify").I18n;

export default class LanguageUtil {
    static configure(): void {
        const locale: string = localStorage.getItem("locale") || "en";

        const app: any = require("configs/lang/" + locale + "/app.json");

        I18n.setTranslations({
            en: {
                app: app
            }
        });

        I18n.setLocale(locale);
    }
}
