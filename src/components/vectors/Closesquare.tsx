import * as React from "react"
import { SVGProps } from "react"
const Closesquare = ({
  width = 24,
  height = 25,
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
      d="m9.71 15.1 5.66-5.66m0 5.66L9.71 9.44m-.17 12.83h6c5 0 7-2 7-7v-6c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z"
    />
  </svg>
)
export default Closesquare
