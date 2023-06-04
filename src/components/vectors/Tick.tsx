import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.3em"
    height="2.4em"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      d="M20.293 7 9 18.293 4.207 13.5l.703-.703 3.383 3.375a1 1 0 0 0 1.414-.001l9.883-9.874.703.703Z"
    />
  </svg>
)
export default SvgComponent
