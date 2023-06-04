export enum SwitchSize {
  Small = "small",
  Large = "large",
}

export enum SwitchVariant {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

export type SwitchProps = {
  size?: SwitchSize;
  variant?: SwitchVariant;
  name: string;
  value: string;
  onChange: (checked: boolean) => void;
  defaultChecked?: boolean;
  [x: string]: any;
};
