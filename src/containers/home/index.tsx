"use client";

import { Button, Switch, CheckBox } from "@/components/atoms";
import { LeftArrowIcon } from "@/components/vectors";
import {
  ButtonGenre,
  ButtonSize,
  ButtonVariant,
  SwitchSize,
  SwitchVariant,
  Checkboxdisabled,
  checkboxType,
} from "@/types";

import React from "react";

const HomeContainer = () => {
  return (
    <div style={{ backgroundColor: "rebeccapurple" }}>
      <CheckBox></CheckBox>
      {/* <Button
        genre={ButtonGenre.Icon}
        size={ButtonSize.Small}
        variant={ButtonVariant.Primary}
        onClick={() => console.log("hello")}
      >
        <LeftArrowIcon />
      </Button> */}
      {/*
      <Switch
        size={SwitchSize.Large}
        variant={SwitchVariant.Secondary}
        name="switch"
        value="switch"
        onChange={(data) => console.log(data)}
      /> */}
    </div>
  );
};

export default HomeContainer;
