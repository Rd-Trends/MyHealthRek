import { CheckboxProps } from "@radix-ui/react-checkbox";

export enum CheckboxVariant {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

export enum CheckboxSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export type CheckboxProp = CheckboxProps & {
  label?: string;
  disabled?: boolean;
  variant?: CheckboxVariant;
  [key: string]: any;
};
