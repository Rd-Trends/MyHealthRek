import * as React from "react";
import { SVGProps } from "react";
const Airplane = ({
  width = 25,
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
      // stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="m9.545 21.858 2.308-1.986c.347-.304.927-.31 1.28-.015l2.352 1.934c.543.264 1.2-.014 1.393-.596l.425-1.335c.107-.321-.009-.79-.251-1.027l-2.296-2.254a1.112 1.112 0 0 1-.308-.707l-.032-2.85c-.005-.42.303-.623.694-.468l4.934 2.065c.774.321 1.4-.096 1.39-.936l-.015-1.29c-.008-.67-.516-1.434-1.14-1.687l-5.616-2.347a.554.554 0 0 1-.305-.456l-.034-3c-.01-.94-.713-2.042-1.558-2.463a1.059 1.059 0 0 0-.95.011c-.835.44-1.513 1.567-1.502 2.507l.034 3a.554.554 0 0 1-.295.463l-5.552 2.473c-.617.257-1.108 1.033-1.1 1.703l.014 1.29c.01.84.644 1.243 1.41.904l4.886-2.175c.378-.175.7.032.705.452l.032 2.85c.003.23-.124.55-.282.713l-2.244 2.305c-.237.243-.342.704-.228 1.033l.455 1.325c.186.578.85.85 1.396.564Z"
    />
  </svg>
);
export default Airplane;
