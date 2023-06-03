export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

export enum ButtonSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export enum ButtonGenre {
  Button = "button",
  Icon = "icon",
  Text = "text",
}

export type ButtonProps = {
  children: React.ReactNode;
  genre?: ButtonGenre;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  className?: string;
  [x: string]: any;
};
