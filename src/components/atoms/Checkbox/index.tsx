"use client";
import React, { useState } from "react";
import styles from "./checkbox.module.scss";
import * as Checkbox from "@radix-ui/react-checkbox";
// testing icons this should be changed when all icon  are availabe
import { LeftArrowIcon } from "@/components/vectors";
import { checkboxType, Checkboxdisabled } from "@/types";

const CheckBox = () => {
  const [variant, setVariant] = useState<checkboxType>({
    disabled: true,
    checked: true,
  });

  return (
    <Checkbox.Root
      className={styles.checkboxRoot}
      onClick={() => {
        setVariant({ ...variant, checked: !variant.checked });
      }}
    >
      <Checkbox.Indicator data-disabled={Checkboxdisabled.Disabled} />
      {variant.checked === true && (
        <LeftArrowIcon className={styles.checkboxIndicator} />
      )}
    </Checkbox.Root>
  );
};
export default CheckBox;
