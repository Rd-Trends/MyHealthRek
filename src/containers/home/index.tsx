"use client";

import { Button, Switch } from "@/components/atoms";
import { LeftArrowIcon } from "@/components/vectors";
import {
  ButtonGenre,
  ButtonSize,
  ButtonVariant,
  SwitchSize,
  SwitchVariant,
} from "@/types";

import React from "react";

const HomeContainer = () => {
  return (
    <div style={{ backgroundColor: "rebeccapurple" }}>
      <Button
        genre={ButtonGenre.Icon}
        size={ButtonSize.Medium}
        variant={ButtonVariant.Primary}
        onClick={() => console.log("hello")}
      >
        <LeftArrowIcon />
      </Button>
      <Switch
        size={SwitchSize.Large}
        variant={SwitchVariant.Secondary}
        name="switch"
        value="switch"
        onChange={(data) => console.log(data)}
      />
    </div>
  );
};

export default HomeContainer;
