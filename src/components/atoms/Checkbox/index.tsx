"use client";
import React from "react";
import styles from "./checkbox.module.scss";
import * as Checkbox from "@radix-ui/react-checkbox";
// testing icons this should be changed when all icon  are availabe
import { LeftArrowIcon } from "@/components/vectors";
import { checkboxProp, CheckboxVariant, disabledCheck } from "@/types";
const CheckBox = ({
  checked = CheckboxVariant.Unchecked,
  disabled = disabledCheck.Disabled,
  onChange,
}: checkboxProp) => {
  return (
    <Checkbox.Root
      className={styles.checkboxRoot}
      data-disabled={disabled}
      onCheckedChange={onChange}
    >
      <Checkbox.Indicator />
      {checked === CheckboxVariant.Checked && (
        <LeftArrowIcon className={styles.checkboxIndicator} />
      )}
    </Checkbox.Root>
  );
};
export default CheckBox;
