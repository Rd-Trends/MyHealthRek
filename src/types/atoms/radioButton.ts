export enum RadioVaraint {
  active = "active",
  disabled = "disabled",
}

export type RadioProps = {
  variant?: RadioVaraint;
  name: string;
  value: string;
  onChange: (checked: boolean) => void;
  defaultChecked?: boolean;
  [x: string]: any;
};
