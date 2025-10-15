"use client";

import React from "react";
import { useI18n } from "@/locales/client";

const Bottomfoot = () => {
  const t = useI18n();

  return (
    <div className="bottomfoot flex items-center justify-center h-24 md:h-12 border-t-2 border-gray-200">
      <div className="container flex flex-col items-start gap-2 md:flex-row md:items-center justify-between px-8">
        <p className="text-regular-nomral order-2 md:order-1">
          {t("footer.copyright")}
        </p>
        <ul className="links flex items-center gap-4 order-1 md:order-2">
          <li>
            <a href="#" className="text-regular-nomral underline">
              {t("footer.links.cookies")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottomfoot;
