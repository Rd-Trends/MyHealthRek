import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.3em"
    height="2.3em"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m15.715 20.375 4.953-5.076-16.999.192M8.555 4.435 3.602 9.511 20.6 9.32"
    />
  </svg>
)
export default SvgComponent
