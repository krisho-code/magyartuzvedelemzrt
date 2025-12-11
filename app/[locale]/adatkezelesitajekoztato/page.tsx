import { getScopedI18n } from "@/locales/server";

const Adatkezelesitajekoztato = async () => {
  const t = (await getScopedI18n("adatkezelesitajekoztato")) as any;

  return (
    <main className="pt-24">
      <div className="container mx-auto py-16 px-8">
        <h1 className="text-h2 color-primary-text pb-4">{t("title")}</h1>

        {/* Section 1 */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">{t("section1.heading")}</h2>
          <p className="pb-2">{t("section1.intro")}</p>
          <p className="pb-2">
            <strong>{t("section1.dataControllerLabel")}</strong>
          </p>
          <p className="pb-2">
            <strong>{t("section1.companyNameLabel")}</strong>{" "}
            {t("section1.companyNameValue")}
          </p>
          <p className="pb-2">
            <strong>{t("section1.addressLabel")}</strong>{" "}
            {t("section1.addressValue")}
          </p>
          <p className="pb-2">
            <strong>{t("section1.emailLabel")}</strong>{" "}
            {t("section1.emailValue")}
          </p>
          <p className="pb-2">
            <strong>{t("section1.phoneLabel")}</strong>{" "}
            {t("section1.phoneValue")}
          </p>
          <p className="pb-4">{t("section1.website")}</p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">{t("section2.heading")}</h2>
          <p className="pb-2">{t("section2.intro")}</p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">{t("section2.purpose1")}</li>
            <li className="pb-1">{t("section2.purpose2")}</li>
            <li className="pb-1">{t("section2.purpose3")}</li>
            <li className="pb-1">{t("section2.purpose4")}</li>
            <li className="pb-1">{t("section2.purpose5")}</li>
          </ul>
          <p>{t("section2.marketing")}</p>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">{t("section3.heading")}</h2>
          <p className="pb-2">{t("section3.intro")}</p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              <strong>{t("section3.dataType1Label")}</strong>{" "}
              {t("section3.dataType1Value")}
            </li>
            <li className="pb-1">
              <strong>{t("section3.dataType2Label")}</strong>{" "}
              {t("section3.dataType2Value")}
            </li>
            <li className="pb-1">
              <strong>{t("section3.dataType3Label")}</strong>{" "}
              {t("section3.dataType3Value")}
            </li>
          </ul>
          <p className="font-bold mb-2">{t("section3.storageTitle")}</p>
          <p>{t("section3.storage")}</p>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">{t("section4.heading")}</h2>
          <p className="pb-2">{t("section4.intro")}</p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              <strong>{t("section4.legalBasisLabel")}</strong>{" "}
              {t("section4.legalBasisValue")}
            </li>
          </ul>
          <p>{t("section4.consent")}</p>
        </div>

        {/* Section 5 */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">{t("section5.heading")}</h2>
          <p className="pb-2">{t("section5.intro")}</p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              <strong>{t("section5.hostingProvider")}</strong>{" "}
              {t("section5.hostingProviderValue")}
            </li>
            <li className="pb-1">
              <strong>{t("section5.emailProviders")}</strong>{" "}
              {t("section5.emailProvidersValue")}
            </li>
          </ul>
          <p className="pb-4">
            <strong>{t("section5.important")}</strong>{" "}
            {t("section5.importantValue")}
          </p>
          <p>{t("section5.transfer")}</p>
        </div>

        {/* Section 6 */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">{t("section6.heading")}</h2>
          <p className="pb-2">{t("section6.intro")}</p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              <strong>{t("section6.https")}</strong> {t("section6.httpsValue")}
            </li>
            <li className="pb-1">
              <strong>{t("section6.serverSecurity")}</strong>{" "}
              {t("section6.serverSecurityValue")}
            </li>
            <li className="pb-1">
              <strong>{t("section6.accessControl")}</strong>{" "}
              {t("section6.accessControlValue")}
            </li>
            <li className="pb-1">
              <strong>{t("section6.regularReview")}</strong>{" "}
              {t("section6.regularReviewValue")}
            </li>
          </ul>
          <p>{t("section6.disclaimer")}</p>
        </div>

        {/* Section 7 */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">{t("section7.heading")}</h2>
          <p className="pb-2">{t("section7.intro")}</p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">
              <strong>{t("section7.accessRight")}</strong>{" "}
              {t("section7.accessRightValue")}
            </li>
            <li className="pb-1">
              <strong>{t("section7.rectificationRight")}</strong>{" "}
              {t("section7.rectificationRightValue")}
            </li>
            <li className="pb-1">
              <strong>{t("section7.deletionRight")}</strong>{" "}
              {t("section7.deletionRightValue")}
            </li>
            <li className="pb-1">
              <strong>{t("section7.restrictionRight")}</strong>{" "}
              {t("section7.restrictionRightValue")}
            </li>
            <li className="pb-1">
              <strong>{t("section7.objectionRight")}</strong>{" "}
              {t("section7.objectionRightValue")}
            </li>
            <li className="pb-1">
              <strong>{t("section7.portabilityRight")}</strong>{" "}
              {t("section7.portabilityRightValue")}
            </li>
          </ul>
          <p className="pb-4">{t("section7.requestInfo")}</p>
        </div>

        {/* Section 8 */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">{t("section8.heading")}</h2>
          <p className="pb-2">
            <strong>{t("section8.essentialCookies")}</strong>{" "}
            {t("section8.essentialCookiesValue")}
          </p>
          <p className="pb-2">
            <strong>{t("section8.thirdPartyAnalytics")}</strong>{" "}
            {t("section8.thirdPartyAnalyticsValue")}
          </p>
          <p className="pb-4">{t("section8.cookieManagement")}</p>
        </div>

        {/* Section 9 */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">{t("section9.heading")}</h2>
          <p className="pb-2">{t("section9.intro")}</p>
          <ul className="pb-4 list-disc list-inside">
            <li className="pb-1">{t("section9.retention1")}</li>
            <li className="pb-1">{t("section9.retention2")}</li>
            <li className="pb-1">{t("section9.retention3")}</li>
          </ul>
          <p>{t("section9.retentionPeriod")}</p>
        </div>

        {/* Section 10 */}
        <div className="flex flex-col pb-8">
          <h2 className="pb-2 font-bold text-lg">{t("section10.heading")}</h2>
          <p className="pb-2">{t("section10.intro")}</p>
          <p className="pb-2">
            <strong>{t("section10.emailLabel")}</strong>{" "}
            {t("section10.emailValue")}
          </p>
          <p className="pb-4">
            <strong>{t("section10.postalLabel")}</strong>{" "}
            {t("section10.postalValue")}
          </p>
          <p className="pb-4">{t("section10.complaint")}</p>
        </div>

        {/* Section 11 */}
        <div className="flex flex-col pb-4">
          <h2 className="pb-2 font-bold text-lg">{t("section11.heading")}</h2>
          <p className="pb-2">{t("section11.intro")}</p>
          <p className="pb-2">{t("section11.notification")}</p>
          <p>{t("section11.lastUpdated")}</p>
        </div>
      </div>
    </main>
  );
};

export default Adatkezelesitajekoztato;
