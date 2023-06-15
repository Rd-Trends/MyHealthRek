"use client";

import { Button, Switch, Checkbox, RadioGroup } from "@/components/atoms";
import {
  ButtonGenre,
  CheckboxSize,
  CheckboxVariant,
  RadioItemVariant,
  SwitchSize,
  SwitchVariant,
} from "@/types";

import React from "react";
const HomeContainer = () => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}>
      <Checkbox label="hello" value="rice" variant={CheckboxVariant.Primary} />
      <RadioGroup
        variant={RadioItemVariant.Tertiary}
        options={[
          { label: "label", value: "value" },
          { label: "label1", value: "value1" },
          { label: "label2", value: "value2" },
        ]}
      />
    </div>
  );
};

export default HomeContainer;
