export enum CheckboxVariant {
  Checked = "checked",
  Unchecked = "unchecked",
}

export enum disabledCheck {
  Disabled = "disabled",
  Abled = "abled",
}

export type checkboxProp = {
  disabled?: disabledCheck;
  checked: CheckboxVariant;
  onChange: (checked: boolean) => void;
};
