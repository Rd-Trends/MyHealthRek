import * as React from "react"
import { SVGProps } from "react"
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
      d="M12.54 8.27v5m8.75.25c0 4.83-3.92 8.75-8.75 8.75s-8.75-3.92-8.75-8.75 3.92-8.75 8.75-8.75 8.75 3.92 8.75 8.75Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.54 2.27h6"
    />
  </svg>
)
export default SvgComponent
