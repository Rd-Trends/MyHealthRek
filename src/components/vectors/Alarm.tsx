const Alarm = ({
    width = 25,
    height = 30,
    fill = "none",
    opacity = 1,
    ...attribs
  }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    {...attribs}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M2 22h20M12 2v1M4 4l1 1m15-1-1 1m-7 1a9 9 0 0 0-9 9v7h18v-7a9 9 0 0 0-9-9Z"
    />
  </svg>
)
export default Alarm
