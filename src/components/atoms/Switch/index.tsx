"use client";

import * as RUISwitch from "@radix-ui/react-switch";
import styles from "./switch.module.scss";
import { SwitchProps, SwitchSize, SwitchVariant } from "@/types";

const Switch = ({
  size = SwitchSize.Large,
  variant = SwitchVariant.Secondary,
  name,
  value,
  onChange,
  defaultChecked,
  ...attributes
}: SwitchProps) => (
  <RUISwitch.Root
    data-size={size}
    data-variant={variant}
    className={styles.switchRoot}
    onCheckedChange={onChange}
    defaultChecked={defaultChecked}
    name={name}
    value={value}
    {...attributes}
  >
    <RUISwitch.Thumb data-size={size} className={styles.switchThumb} />
  </RUISwitch.Root>
);

export default Switch;
