import React from "react";
import * as RUIRadioGroup from "@radix-ui/react-radio-group";
import { RadioGroupProps, RadioItemSize, RadioItemVariant } from "@/types";
import styles from "./radioGroup.module.scss";

const RadioGroup = ({
  options,
  size = RadioItemSize.Medium,
  variant = RadioItemVariant.Primary,
}: RadioGroupProps) => {
  return (
    <RUIRadioGroup.Root className={styles.radioGroup}>
      {options.map((option, index) => (
        <label
          data-size={size}
          data-variant={variant}
          className={styles.radioItemWrapper}>
          <RUIRadioGroup.Item
            className={styles.radioItem}
            value={option.value}
            key={option.label + index}>
            <RUIRadioGroup.Indicator className={styles.radioItemIndicator} />
          </RUIRadioGroup.Item>
          <span className={styles.radioItemLabel}>{option.label}</span>
        </label>
      ))}
    </RUIRadioGroup.Root>
  );
};

export default RadioGroup;
