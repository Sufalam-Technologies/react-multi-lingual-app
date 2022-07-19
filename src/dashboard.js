import { useContext } from "react";
import { IntlProvider } from "react-intl";
import App from "./App";
import LangContext from "./langContext";
import locales from "./locales";

function Dashboard(params) {
  const langContext = useContext(LangContext);
  let locale = langContext.currentLanguage;
  const messages = locales[`${locale}`];
  return (
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  );
}

export default Dashboard;
