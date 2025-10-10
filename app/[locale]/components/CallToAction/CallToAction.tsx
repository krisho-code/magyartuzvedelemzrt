import React from "react";
import { getI18n } from "@/locales/server";
import CallToActionButton from "./CallToActionButton";

interface CallToActionProps {
  title?: string;
  text?: string;
  cta1?: string;
  cta2?: string;
}

const CallToAction: React.FC<CallToActionProps> = async ({
  title,
  text,
  cta1,
  cta2,
}) => {
  const t = await getI18n();

  const displayTitle = title || t("callToAction.defaultTitle");
  const displayText = text || t("callToAction.defaultDescription");
  const displayCta1 = cta1 || t("callToAction.defaultCta1");
  const displayCta2 = cta2 || t("callToAction.defaultCta2");

  return (
    <section className="call-to-action-section flex items-center justify-center py-16 bg-red-50">
      <div className="container grid gap-8 lg:grid-cols-[1fr_auto] px-8">
        <div className="col flex flex-col gap-4">
          <h3 className="text-h3">{displayTitle}</h3>
          <p className="text-medium-normal">{displayText}</p>
        </div>
        <div className="col flex flex-col gap-4">
          <CallToActionButton text={displayCta1} link="/szolgaltatasok" />
          <CallToActionButton
            buttonType="secondary"
            text={displayCta2}
            link="/kapcsolat"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
