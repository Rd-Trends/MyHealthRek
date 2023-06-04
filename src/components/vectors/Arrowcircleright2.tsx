import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.4em"
    height="2.4em"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.04 12.27h6m-2.5 10c5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.524 0-10 4.477-10 10s4.476 10 10 10Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="m13.04 15.27 3-3-3-3"
    />
  </svg>
);
export default SvgComponent;