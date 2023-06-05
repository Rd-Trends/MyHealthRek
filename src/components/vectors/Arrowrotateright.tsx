import * as React from "react"
import { SVGProps } from "react"
const Arrowrotateright = ({
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
      d="M15.293 5.183a10.02 10.02 0 0 0-2.894-.398 8.668 8.668 0 0 0-8.572 8.768c.055 4.8 3.978 8.636 8.768 8.581a8.668 8.668 0 0 0 8.571-8.767 8.67 8.67 0 0 0-1.514-4.803m-6.043-6.442 2.927 3.287-3.342 2.498"
    />
  </svg>
)
export default Arrowrotateright