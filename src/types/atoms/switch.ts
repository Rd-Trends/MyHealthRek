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
  onChange: (checked: boolean) => void;
  name: string;
  value: string;
  defaultChecked?: boolean;
  [x: string]: any;
};
