import { getScopedI18n } from "@/locales/server";

const Impresszum = async () => {
  const t = (await getScopedI18n("impresszum")) as any;

  return (
    <main className="pt-24">
      <div className="container mx-auto py-16 px-8">
        <h1 className="text-h2 color-primary-text pb-4">{t("title")}</h1>

        {/* Company Data */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-4 font-bold text-xl">{t("companyData.heading")}</h2>

          <p className="font-bold py-1">
            {t("companyData.companyName")}{" "}
            <span className="font-normal">
              {t("companyData.companyNameValue")}
            </span>
          </p>
          <p className="font-bold py-1">
            {t("companyData.headquarters")}{" "}
            <span className="font-normal">
              {t("companyData.headquartersValue")}
            </span>
          </p>
          <p className="font-bold py-1">
            {t("companyData.postalAddress")}{" "}
            <span className="font-normal">
              {t("companyData.postalAddressValue")}
            </span>
          </p>
          <p className="font-bold py-1">
            {t("companyData.taxNumber")}{" "}
            <span className="font-normal">
              {t("companyData.taxNumberValue")}
            </span>
          </p>
          <p className="font-bold py-1">
            {t("companyData.companyRegistration")}{" "}
            <span className="font-normal">
              {t("companyData.companyRegistrationValue")}
            </span>
          </p>
          <p className="font-bold py-1">
            {t("companyData.phone")}{" "}
            <span className="font-normal">{t("companyData.phoneValue")}</span>
          </p>
          <p className="font-bold py-1">
            {t("companyData.email")}{" "}
            <span className="font-normal">{t("companyData.emailValue")}</span>
          </p>
        </div>

        {/* Hosting Provider Data */}
        <div className="flex flex-col">
          <h2 className="pb-4 font-bold text-xl">
            {t("hostingProvider.heading")}
          </h2>
          <p className="font-bold py-1">
            {t("hostingProvider.companyName")}{" "}
            <span className="font-normal">
              {t("hostingProvider.companyNameValue")}
            </span>
          </p>
          <p className="font-bold py-1">
            {t("hostingProvider.address")}{" "}
            <span className="font-normal">
              {t("hostingProvider.addressValue")}
            </span>
          </p>
          <p className="font-bold py-1">
            {t("hostingProvider.contact")}{" "}
            <span className="font-normal">
              {t("hostingProvider.contactValue")}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Impresszum;
