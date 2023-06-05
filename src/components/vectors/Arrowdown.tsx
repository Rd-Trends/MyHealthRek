import * as React from "react";
import { SVGProps } from "react";
const Arrowdown = ({
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
      strokeWidth={1.5}
      d="M18.07 13.829 12 19.646l-6.07-5.817M12 3.354v16.129"
    />
  </svg>
);
export default Arrowdown;
