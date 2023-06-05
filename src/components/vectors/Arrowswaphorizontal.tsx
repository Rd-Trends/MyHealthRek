import * as React from "react";
import { SVGProps } from "react";
const Arrowswaphorizontal = ({
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
      d="m15.715 20.375 4.953-5.076-16.999.192M8.555 4.435 3.602 9.511 20.6 9.32"
    />
  </svg>
);
export default Arrowswaphorizontal;
