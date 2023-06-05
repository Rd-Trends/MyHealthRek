"use client";

import { Button, Switch, CheckBox } from "@/components/atoms";
import { LeftArrowIcon } from "@/components/vectors";
import {
  ButtonGenre,
  ButtonSize,
  ButtonVariant,
  SwitchSize,
  SwitchVariant,
  CheckboxVariant,
  disabledCheck,
} from "@/types";

import React from "react";
const HomeContainer = () => {
  return (
    <div style={{ backgroundColor: "rebeccapurple" }}>
      <CheckBox
        checked={CheckboxVariant.Checked}
        disabled={disabledCheck.Abled}
        onChange={(data) => data}
      ></CheckBox>
    </div>
  );
};

export default HomeContainer;
