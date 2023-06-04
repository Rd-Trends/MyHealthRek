import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.4em"
    height="2.3em"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M21.97 17.566c0 .345-.08.7-.25 1.045-.17.345-.39.67-.68.977-.49.518-1.03.892-1.64 1.131-.6.24-1.25.364-1.95.364-1.02 0-2.11-.23-3.26-.7-1.15-.469-2.3-1.101-3.44-1.897a28.464 28.464 0 0 1-3.28-2.683 27.577 27.577 0 0 1-2.79-3.134c-.82-1.092-1.48-2.185-1.96-3.268C2.24 8.31 2 7.264 2 6.268c0-.652.12-1.275.36-1.85a4.41 4.41 0 0 1 1.15-1.6c.64-.604 1.34-.901 2.08-.901.28 0 .56.057.81.172.26.115.49.288.67.537L9.39 5.76c.18.24.31.46.4.67.09.202.14.403.14.585 0 .23-.07.46-.21.68-.13.22-.32.45-.56.68l-.76.758a.502.502 0 0 0-.16.383c0 .077.01.144.03.22.03.077.06.135.08.192.18.317.49.729.93 1.227.45.498.93 1.006 1.45 1.514.54.508 1.06.978 1.59 1.409.52.422.95.71 1.29.882.05.019.11.048.18.076.08.03.16.039.25.039.17 0 .3-.058.41-.163l.76-.719c.25-.24.49-.422.72-.537.23-.134.46-.2.71-.2.19 0 .39.037.61.124.22.086.45.21.7.373l3.31 2.253c.26.172.44.373.55.613.1.24.16.479.16.747Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.5 5.75h5M18 8.146V3.354"
    />
  </svg>
)
export default SvgComponent