import LanguageProvider from "./newcontext";
import Greeting from "./newprovider";

export default function Output() {
  return (
    <LanguageProvider>
      <Greeting />
    </LanguageProvider>
  );
}
