import * as React from "react"
import { SVGProps } from "react"
const Star = ({
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
      d="M17.66 21.725c-.53 0-1.21-.163-2.06-.642l-2.99-1.696c-.31-.172-.91-.172-1.21 0l-3 1.696c-1.77 1.007-2.81.604-3.28.278-.46-.326-1.18-1.16-.71-3.076l.71-2.942c.08-.307-.08-.834-.32-1.064l-2.48-2.377C1.08 10.714 1.18 9.698 1.35 9.2c.17-.498.71-1.38 2.43-1.658l3.19-.508c.3-.048.73-.355.86-.613L9.6 3.038c.8-1.543 1.85-1.773 2.4-1.773.55 0 1.6.23 2.4 1.773l1.76 3.373c.14.259.57.566.87.613l3.19.508c1.73.278 2.27 1.16 2.43 1.658.16.499.26 1.514-.97 2.703l-2.48 2.386c-.24.23-.39.748-.32 1.064l.71 2.942c.46 1.917-.25 2.75-.71 3.076-.25.173-.65.364-1.22.364ZM12 17.815c.49 0 .98.115 1.37.336l2.99 1.696c.87.498 1.42.498 1.63.355.21-.144.36-.652.14-1.591l-.71-2.942c-.19-.796.12-1.821.72-2.406l2.48-2.376c.49-.47.71-.93.61-1.246-.11-.317-.57-.575-1.25-.68l-3.19-.509c-.77-.124-1.61-.718-1.96-1.39L13.07 3.69c-.32-.613-.72-.977-1.07-.977-.35 0-.75.364-1.06.977L9.17 7.063c-.35.67-1.19 1.265-1.96 1.39l-3.18.507c-.68.106-1.14.364-1.25.68-.11.317.12.787.61 1.247l2.48 2.376c.6.575.91 1.61.72 2.406l-.71 2.942c-.23.948-.07 1.447.14 1.59.21.144.75.135 1.63-.354l2.99-1.696c.38-.22.87-.336 1.36-.336Z"
    />
  </svg>
)
export default Star
