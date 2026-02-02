import styled from "styled-components"

const StyledSvg = styled.svg`
  & path,
  & rect {
    stroke: url(#rainbow-gradient);
  }

  & circle {
    fill: url(#rainbow-gradient);
  }
`

const RainbowBotIcon = () => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ff0000" }}>
          <animate
            attributeName="stop-color"
            values="#ff0000;#ff7f00;#ffff00;#00ff00;#0000ff;#4b0082;#9400d3;#ff0000"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" style={{ stopColor: "#00ff00" }}>
          <animate
            attributeName="stop-color"
            values="#00ff00;#0000ff;#4b0082;#9400d3;#ff0000;#ff7f00;#ffff00;#00ff00"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" style={{ stopColor: "#0000ff" }}>
          <animate
            attributeName="stop-color"
            values="#0000ff;#4b0082;#9400d3;#ff0000;#ff7f00;#ffff00;#00ff00;#0000ff"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </defs>
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
  </StyledSvg>
)

export default RainbowBotIcon
