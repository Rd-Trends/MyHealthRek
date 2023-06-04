import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.2em"
    height="2.4em"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m8.29 2.45.035 3m7.965-3.09.034 3M3.871 9.591l17-.192m.492-.596.097 8.5c.034 3-1.444 5.016-4.944 5.056l-7.999.09c-3.5.04-5.022-1.943-5.056-4.943l-.096-8.5C3.33 6.008 4.808 3.99 8.308 3.952l8-.09c3.499-.04 5.021 1.942 5.055 4.942Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.12 14.063h.008m.025 3h.01m-3.744-2.958h.01m.024 3h.01M8.72 14.147h.01m.024 3h.01"
    />
  </svg>
)
export default SvgComponent
