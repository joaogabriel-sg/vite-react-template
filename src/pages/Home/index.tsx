import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation(["common"]);

  return (
    <div className="grid h-screen place-items-center">
      <h1 className="text-6xl font-bold">{t("common:helloWorld")}</h1>
    </div>
  );
}
