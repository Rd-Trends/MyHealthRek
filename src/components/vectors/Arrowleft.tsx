import * as React from "react"
import { SVGProps } from "react"
const Arrowleft = ({
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
      d="M9.57 5.683 3.5 11.5l6.07 5.817M20.5 11.5H3.67"
    />
  </svg>
)
export default Arrowleft
