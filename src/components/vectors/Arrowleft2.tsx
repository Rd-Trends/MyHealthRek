import * as React from "react";
import { SVGProps } from "react";
const Arrowleft2 = ({
  width = 24,
  height = 23,
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
      strokeWidth={1}
      d="M15 19.92 8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
    />
  </svg>
);
export default Arrowleft2;
