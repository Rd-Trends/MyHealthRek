import * as React from "react";
import { SVGProps } from "react";
const Add = ({
  width = 22,
  height = 22,
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.348 12h12m-6 6V6"
    />
  </svg>
);
export default Add;
