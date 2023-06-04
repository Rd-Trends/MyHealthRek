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
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <path
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M8.54 2.27v3m8-3v3M4.04 9.36h17m-1.43 11.02-2.12-2.11m2.1.02-2.12 2.12m1.07 2.86a4 4 0 1 0-.001-8 4 4 0 0 0 0 8Z"
      />
      <path
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M21.54 8.77v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8.54c-3.5 0-5-2-5-5v-8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
      />
      <path strokeWidth={2} d="M12.535 13.97h.01m-3.711 0h.01m-.01 3h.01" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.54.27h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
