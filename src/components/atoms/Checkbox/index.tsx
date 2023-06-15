"use client";
import React from "react";
import styles from "./checkbox.module.scss";
import * as RUICheckbox from "@radix-ui/react-checkbox";
import { CheckboxProp, CheckboxSize, CheckboxVariant } from "@/types";
import { BiCheck } from "react-icons/bi";

const Checkbox = ({
  label,
  disabled = false,
  variant = CheckboxVariant.Primary,
  size = CheckboxSize.Medium,
  ...rest
}: CheckboxProp) => {
  return (
    <label
      data-disabled={disabled}
      data-size={size}
      data-variant={variant}
      className={styles.checkboxWrapper}>
      <RUICheckbox.Root disabled={disabled} className={styles.checkbox} {...rest}>
        <RUICheckbox.Indicator className={styles.checkIndicator}>
          <BiCheck size={16} />
        </RUICheckbox.Indicator>
      </RUICheckbox.Root>
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
};
export default Checkbox;
