function LogomarkPaths(props) {
  return (
    <svg width={181} height={36} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fillRule="nonzero" fill="none">
        <g
          fontFamily="AppleSDGothicNeo-Bold, Apple SD Gothic Neo"
          fontSize={35}
          fontWeight="bold"
        >
          <text fill="#94A3B8" transform="translate(42)">
            <tspan x={0} y={32}>
              {'S'}
            </tspan>
          </text>
          <text fill="tomato" transform="translate(42)">
            <tspan x={19.29} y={32}>
              {'i'}
            </tspan>
          </text>
          <text fill="#94A3B8" transform="translate(42)">
            <tspan x={28.371} y={32}>
              {'gmie'}
            </tspan>
          </text>
        </g>
        <text
          fill="#A3A3A3"
          fontFamily="AppleSDGothicNeo-Regular, Apple SD Gothic Neo"
          fontSize={14}
          transform="translate(42)"
        >
          <tspan x={109.906} y={30.412}>
            {'Docs'}
          </tspan>
        </text>
        <g fill="#94A3B8">
          <path d="M6.458 9.932c-2.32 0-4.208-1.835-4.208-4.09 0-2.257 1.888-4.092 4.208-4.092 2.32 0 4.208 1.835 4.208 4.091 0 2.256-1.888 4.09-4.208 4.09Zm0-6.15c-1.167 0-2.118.924-2.118 2.06 0 1.134.95 2.058 2.118 2.058s2.117-.924 2.117-2.059c0-1.135-.95-2.059-2.117-2.059Z" />
          <path d="M0 17.5C0 13.593 1.296 9.897 3.747 6.81l2.494 1.873C4.22 11.228 3.15 14.277 3.15 17.5c0 5.172 2.813 9.718 7.03 12.268A15.073 15.073 0 0 0 18 31.936c8.187 0 14.848-6.476 14.848-14.436S26.188 3.064 18 3.064c-2.718 0-5.375.719-7.685 2.08l-1.634-2.62A18.365 18.365 0 0 1 18 0C27.924 0 36 7.85 36 17.5S27.925 35 18 35 0 27.15 0 17.5Z" />
        </g>
        <g fill="#94A3B8">
          <path d="M27.164 20.01c-1.58 0-2.864-1.25-2.864-2.786 0-1.537 1.285-2.787 2.864-2.787 1.58 0 2.864 1.25 2.864 2.787 0 1.536-1.285 2.786-2.864 2.786Zm.062-3.823c-.621 0-1.126.491-1.126 1.095s.505 1.095 1.126 1.095c.62 0 1.124-.491 1.124-1.095s-.504-1.095-1.124-1.095Z" />
          <path d="M7.2 17.538c0-5.57 4.702-10.1 10.48-10.1 4.928 0 9.13 3.23 10.22 7.854l-2.1.46c-.865-3.673-4.204-6.238-8.12-6.238-4.59 0-8.325 3.6-8.325 8.024 0 4.425 3.735 8.025 8.326 8.025 3.969 0 7.404-2.72 8.169-6.466l2.114.4C27 24.215 22.677 27.64 17.68 27.64 11.9 27.639 7.2 23.108 7.2 17.538Z" />
        </g>
        <path
          d="M20.67 17.487c0 1.443-1.202 2.613-2.685 2.613S15.3 18.93 15.3 17.487s1.202-2.612 2.685-2.612 2.685 1.17 2.685 2.612"
          fill="#FF4D4D"
        />
      </g>
    </svg>
  )
}

export function Logomark(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 227 36" fill="none" {...props}>
      <LogomarkPaths />
      {/* <path d="M55.96 26.2c-1.027 0-1.973-.173-2.84-.52a6.96 6.96 0 01-2.24-1.5 6.979 6.979 0 01-1.46-2.3c-.347-.893-.52-1.867-.52-2.92 0-1.027.18-1.973.54-2.84a6.71 6.71 0 011.52-2.28 6.922 6.922 0 012.3-1.52 7.48 7.48 0 012.86-.54c.667 0 1.32.093 1.96.28a6.12 6.12 0 011.78.78 5.7 5.7 0 011.4 1.24l-1.88 2.08a6.272 6.272 0 00-1-.82 3.728 3.728 0 00-1.08-.54 3.542 3.542 0 00-1.2-.2 4.14 4.14 0 00-1.62.32 3.991 3.991 0 00-1.3.9 4.197 4.197 0 00-.9 1.38 4.755 4.755 0 00-.32 1.78c0 .667.107 1.273.32 1.82.213.533.513.993.9 1.38.387.373.847.667 1.38.88.547.2 1.147.3 1.8.3a4.345 4.345 0 002.34-.68c.347-.213.653-.46.92-.74l1.46 2.34c-.32.36-.753.687-1.3.98a7.784 7.784 0 01-1.8.7c-.667.16-1.34.24-2.02.24zm6.99-.2l5.48-14h2.68l5.46 14h-3.08l-2.82-7.54c-.08-.213-.18-.487-.3-.82a922.595 922.595 0 00-.68-2.12 13.694 13.694 0 01-.24-.86l.54-.02c-.08.307-.174.627-.28.96-.094.32-.194.653-.3 1-.108.333-.22.66-.34.98-.12.32-.234.633-.34.94L65.91 26h-2.96zm2.54-2.94l.98-2.42h6.42l1 2.42h-8.4zm19.794 3.14c-1.026 0-1.973-.173-2.84-.52a6.96 6.96 0 01-2.24-1.5 6.98 6.98 0 01-1.46-2.3c-.346-.893-.52-1.867-.52-2.92 0-1.027.18-1.973.54-2.84a6.71 6.71 0 011.52-2.28 6.923 6.923 0 012.3-1.52 7.48 7.48 0 012.86-.54c.667 0 1.32.093 1.96.28a6.118 6.118 0 011.78.78c.547.347 1.014.76 1.4 1.24l-1.88 2.08a6.272 6.272 0 00-1-.82 3.728 3.728 0 00-1.08-.54 3.542 3.542 0 00-1.2-.2 4.14 4.14 0 00-1.62.32 3.992 3.992 0 00-1.3.9 4.197 4.197 0 00-.9 1.38 4.755 4.755 0 00-.32 1.78c0 .667.107 1.273.32 1.82.214.533.514.993.9 1.38.387.373.847.667 1.38.88.547.2 1.147.3 1.8.3a4.345 4.345 0 002.34-.68 4.53 4.53 0 00.92-.74l1.46 2.34c-.32.36-.753.687-1.3.98a7.784 7.784 0 01-1.8.7c-.666.16-1.34.24-2.02.24zm17.469-.2V12h3v14h-3zm-8.82 0V12h3v14h-3zm1.2-5.62l.02-2.72h9.14v2.72h-9.16zM110.402 26V12h9.46v2.64h-6.54v8.72h6.68V26h-9.6zm1.4-5.86v-2.56h7.1v2.56h-7.1zM122.437 26l5.48-14h2.68l5.46 14h-3.08l-2.82-7.54c-.08-.213-.18-.487-.3-.82l-.34-1.06-.34-1.06a14.73 14.73 0 01-.24-.86l.54-.02c-.08.307-.173.627-.28.96a63.3 63.3 0 01-.3 1c-.106.333-.22.66-.34.98-.12.32-.233.633-.34.94l-2.82 7.48h-2.96zm2.54-2.94l.98-2.42h6.42l1 2.42h-8.4zM139.023 26V12h5.74c1.027 0 1.953.173 2.78.52.84.333 1.56.813 2.16 1.44a6.097 6.097 0 011.4 2.2c.32.853.48 1.8.48 2.84 0 1.027-.16 1.973-.48 2.84a6.438 6.438 0 01-1.38 2.22 6.394 6.394 0 01-2.16 1.44c-.84.333-1.773.5-2.8.5h-5.74zm3-2.18l-.32-.52h2.96c.6 0 1.14-.1 1.62-.3.48-.213.887-.5 1.22-.86.347-.373.607-.827.78-1.36.173-.533.26-1.127.26-1.78a5.56 5.56 0 00-.26-1.76 3.595 3.595 0 00-.78-1.36 3.323 3.323 0 00-1.22-.86 3.948 3.948 0 00-1.62-.32h-3.02l.38-.48v9.6zM158.671 26l-5.58-14h3.18l2.92 7.58c.16.413.293.78.4 1.1.12.307.22.6.3.88.093.267.18.533.26.8.08.253.16.533.24.84l-.58.02c.107-.413.213-.793.32-1.14.107-.36.227-.733.36-1.12.133-.387.3-.847.5-1.38l2.76-7.58h3.16l-5.62 14h-2.62zm8.114 0l5.48-14h2.68l5.46 14h-3.08l-2.82-7.54c-.08-.213-.18-.487-.3-.82l-.34-1.06-.34-1.06a13.293 13.293 0 01-.24-.86l.54-.02c-.08.307-.173.627-.28.96a63.3 63.3 0 01-.3 1c-.107.333-.22.66-.34.98-.12.32-.233.633-.34.94l-2.82 7.48h-2.96zm2.54-2.94l.98-2.42h6.42l1 2.42h-8.4zM183.371 26V12h2.68l7.74 10.46h-.56c-.054-.413-.1-.813-.14-1.2l-.12-1.2c-.027-.413-.054-.833-.08-1.26-.014-.44-.027-.9-.04-1.38a56.825 56.825 0 01-.02-1.6V12h2.94v14h-2.72l-7.9-10.56.76.02c.066.693.12 1.287.16 1.78a36.623 36.623 0 01.18 2.2c.026.267.04.52.04.76.013.24.02.493.02.76V26h-2.94zm23.175.2c-1.027 0-1.973-.173-2.84-.52-.853-.36-1.6-.86-2.24-1.5a6.979 6.979 0 01-1.46-2.3c-.347-.893-.52-1.867-.52-2.92 0-1.027.18-1.973.54-2.84a6.71 6.71 0 011.52-2.28 6.919 6.919 0 012.3-1.52 7.48 7.48 0 012.86-.54c.667 0 1.32.093 1.96.28a6.12 6.12 0 011.78.78 5.7 5.7 0 011.4 1.24l-1.88 2.08a6.259 6.259 0 00-1-.82 3.721 3.721 0 00-1.08-.54 3.54 3.54 0 00-1.2-.2 4.14 4.14 0 00-1.62.32 3.991 3.991 0 00-1.3.9 4.206 4.206 0 00-.9 1.38 4.76 4.76 0 00-.32 1.78c0 .667.107 1.273.32 1.82.213.533.513.993.9 1.38.387.373.847.667 1.38.88.547.2 1.147.3 1.8.3a4.35 4.35 0 002.34-.68c.347-.213.653-.46.92-.74l1.46 2.34c-.32.36-.753.687-1.3.98a7.773 7.773 0 01-1.8.7c-.667.16-1.34.24-2.02.24zm8.649-.2V12h9.46v2.64h-6.54v8.72h6.68V26h-9.6zm1.4-5.86v-2.56h7.1v2.56h-7.1z" /> */}
    </svg>
  )
}
