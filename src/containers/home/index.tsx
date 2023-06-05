"use client";

import { Switch, Button, RadioButton } from "@/components/atoms";
import {
  Arrowcircleleft2,
  
  Notification,
  Power,
  Star,
  Truck,
  Unlock,
} from "@/components/vectors";
import {
  ButtonGenre,
  ButtonSize,
  ButtonVariant,
  SwitchSize,
  SwitchVariant,
  RadioVaraint,
} from "@/types";

import React from "react";

const HomeContainer = () => {
  return (
    <>
      <div style={{ backgroundColor: "rebeccapurple" }}>
        <Button
          genre={ButtonGenre.Icon}
          size={ButtonSize.Medium}
          variant={ButtonVariant.Primary}
          onClick={() => console.log("hello")}
        >
          <Truck />

        </Button>
        <Arrowcircleleft2 />

        <Switch
          size={SwitchSize.Large}
          variant={SwitchVariant.Secondary}
          name="switch"
          value="switch"
          onChange={(data) => console.log(data)}
        />
        <RadioButton
          variant={RadioVaraint.active}
          name="radio"
          value="radio"
          onChange={(data) => console.log(data)}
        />
      </div>

      <div></div>
    </>
  );
};

export default HomeContainer;
