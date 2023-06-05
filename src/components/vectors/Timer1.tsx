import * as React from "react"
import { SVGProps } from "react"
const Timer = ({
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
      strokeWidth={1.5}
      d="M12.54 8.27v5m8.75.25c0 4.83-3.92 8.75-8.75 8.75s-8.75-3.92-8.75-8.75 3.92-8.75 8.75-8.75 8.75 3.92 8.75 8.75Z"
    />
    <path
    opacity={opacity}
    stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.54 2.27h6"
    />
  </svg>
)
export default Timer
