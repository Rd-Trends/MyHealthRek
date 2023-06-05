import * as React from "react"
import { SVGProps } from "react"
const AddCircle = ({
  width = 25,
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
      d="m8.136 12.18 8-.09m-3.955 4.045-.09-8m.158 14c5.5-.063 9.949-4.614 9.886-10.113-.062-5.5-4.613-9.949-10.112-9.886-5.5.062-9.949 4.612-9.886 10.112.062 5.5 4.612 9.949 10.112 9.886Z"
    />
  </svg>
)
export default AddCircle
