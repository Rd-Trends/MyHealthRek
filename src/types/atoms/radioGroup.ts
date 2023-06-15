import { RadioProps } from "@radix-ui/react-radio-group";
import { Options } from "../shared";

export enum RadioItemVariant {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

export enum RadioItemSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export type RadioGroupProps = RadioProps & {
  options: Options;
  size?: RadioItemSize;
  variant?: RadioItemVariant;
};
