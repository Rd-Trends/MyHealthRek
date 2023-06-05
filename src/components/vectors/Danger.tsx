import * as React from "react"
import { SVGProps } from "react"
const Danger = ({
  width = 26,
  height = 26,
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
      d="M12.078 9v5m0 7.41h-6.06c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.838 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51h-6.06v-.01Z"
    />
    <path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.072 17h.01"
    />
  </svg>
)
export default Danger
