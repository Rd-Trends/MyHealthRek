import * as React from "react"
import { SVGProps } from "react"
const Truck = ({
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
      d="M15.54 2.27v10c0 1.1-.9 2-2 2h-11v-8c0-2.21 1.79-4 4-4h9Z"
    />
    <path
      opacity={opacity}
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.54 14.27v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2h-1c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2v-7h1.84c.72 0 1.38.39 1.74 1.01l1.71 2.99h-1.29c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3Z"
    />
    <path
      opacity={opacity}
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.54 22.27a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-10v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l1.71 3Z"
    />
  </svg>
)
export default Truck
