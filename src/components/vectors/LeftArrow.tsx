import * as React from "react";
import { SVGProps } from "react";
const LeftArrowIcon = ({
  width = 19,
  height = 13,
  fill = "currentColor",
  opacity = 1,
  ...attribs
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    {...attribs}
  >
    <path
      opacity={opacity}
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.07 1 1 6.5 7.07 12M18 6.5H1.17"
    />
  </svg>
);
export default LeftArrowIcon;
