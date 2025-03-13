import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

export const HeroSubHeader = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <TypeAnimation
      sequence={[
        t("HeroSubHeader_squence"),
        2000,
        t("HeroSubHeader_squence2"),
        2000,
      ]}
      wrapper="h2"
      speed={50}
      repeat={Infinity}
      className="text-xl md:text-2xl text-bmw-gray-600 dark:text-bmw-gray-300 mb-6"
    />
  );
};
