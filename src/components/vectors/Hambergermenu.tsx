import * as React from "react"
import { SVGProps } from "react"
const Hambergermenu =({
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
      strokeWidth={1.5}
      d="M3 7h18M3 12h18M3 17h18"
    />
  </svg>
)
export default Hambergermenu
