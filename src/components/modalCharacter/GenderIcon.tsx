import React from "react";
import { EGender } from "../../models/models";
import femail from "./genderIcons/female.png";
import male from "./genderIcons/male.png";
import neutrois from "./genderIcons/female.png";
import unknown from "./genderIcons/unknown.png";

interface IGenderIconProps {
  gender: EGender;
}

export function GenderIcon({ gender }: IGenderIconProps) {
  const renderGenderIcon = () => {
    switch (gender) {
      case EGender.Female:
        return <img width={42} height={42} src={femail} alt="Female" />;

      case EGender.Male:
        return <img width={42} height={42} src={male} alt="Male" />;

      case EGender.Genderless:
        return <img width={42} height={42} src={neutrois} alt="Genderless" />;

      default:
        return <img width={32} height={42} src={unknown} alt="unknown" />;
    }
  };
  return renderGenderIcon();
}
