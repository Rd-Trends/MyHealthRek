"use client";

import { RadioProps, RadioVaraint } from "@/types";
import * as RadioGroup from "@radix-ui/react-radio-group";
import style from "./radioButton.module.scss";

const RadioButton = ({
  variant = RadioVaraint.active,
  name,
  value,
  onChange,
  defaultChecked = false,
  ...restProps
}: RadioProps) => {
  return (
    <>
      <RadioGroup.Root className={style.radioGroup}>
        <RadioGroup.Item
          className={style.radioItme}
          data-variant={RadioVaraint.active}
          value={value}
          checked={defaultChecked}
          {...restProps}
        >
          <RadioGroup.Indicator className={style.radioIndicator} />
        </RadioGroup.Item>

        <RadioGroup.Item
          data-variant={RadioVaraint.active}
          value={value}
          checked={defaultChecked}
          {...restProps}
          className={style.radioItme}
        >
          <RadioGroup.Indicator className={style.radioIndicator} />
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>
  );
};

export default RadioButton;

// {
//   //
//   <RadioGroup.Root
//   className={style.RadioGroupRoot}
//   defaultValue="default"
//   aria-label="View density"
// >
//   <div style={{ display: "flex", alignItems: "center" }}>
//     <RadioGroup.Item
//       className={style.RadioGroupItem}
//       value="default"
//       id="r1"
//     >
//       <RadioGroup.Indicator className={style.RadioGroupIndicator} />
//     </RadioGroup.Item>
//     <label className="Label" htmlFor="r1">
//       Default
//     </label>
//   </div>
//   <div style={{ display: "flex", alignItems: "center" }}>
//     <RadioGroup.Item
//       className={style.RadioGroupItem}
//       value="comfortable"
//       id="r2"
//     >
//       <RadioGroup.Indicator className={style.RadioGroupIndicator} />
//     </RadioGroup.Item>
//     <label className="Label" htmlFor="r2">
//       Comfortable
//     </label>
//   </div>
//   <div style={{ display: "flex", alignItems: "center" }}>
//     <RadioGroup.Item
//       className={style.RadioGroupItem}
//       value="compact"
//       id="r3"
//     >
//       <RadioGroup.Indicator className={style.RadioGroupIndicator} />
//     </RadioGroup.Item>
//     <label className="Label" htmlFor="r3">
//       Compact
//     </label>
//   </div>
// </RadioGroup.Root>
//   //
// }
