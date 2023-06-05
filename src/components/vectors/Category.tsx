import * as React from "react"
import { SVGProps } from "react"
const Category = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m5.653 10.214 2-.022c2-.023 2.988-1.034 2.966-3.034l-.023-2c-.023-2-1.034-2.988-3.034-2.966l-2 .023c-2 .022-2.988 1.034-2.966 3.034l.023 2c.023 2 1.034 2.988 3.034 2.965Zm12-.136 1.999-.022c2-.023 2.988-1.034 2.966-3.034l-.023-2c-.022-2-1.034-2.988-3.034-2.966l-2 .023c-2 .023-2.988 1.034-2.965 3.034l.022 2c.023 2 1.034 2.988 3.034 2.965Zm.135 12 2-.023c2-.023 2.988-1.034 2.966-3.034l-.023-2c-.023-2-1.034-2.988-3.034-2.965l-2 .022c-2 .023-2.988 1.034-2.965 3.034l.022 2c.023 2 1.034 2.988 3.034 2.966Zm-12 .136 2-.023c2-.023 2.989-1.034 2.966-3.034l-.022-2c-.023-2-1.034-2.988-3.034-2.966l-2 .023c-2 .023-2.988 1.034-2.966 3.034l.023 2c.022 2 1.034 2.988 3.034 2.966Z"
    />
  </svg>
)
export default Category
