export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Bike wheel icon */}
      <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="2" />
      <circle cx="20" cy="20" r="4" fill="white" />
      <line x1="20" y1="4" x2="20" y2="20" stroke="white" strokeWidth="1.5" />
      <line x1="20" y1="20" x2="33" y2="28" stroke="white" strokeWidth="1.5" />
      <line x1="20" y1="20" x2="7" y2="28" stroke="white" strokeWidth="1.5" />
      <line x1="20" y1="20" x2="33" y2="12" stroke="white" strokeWidth="1.5" />
      <line x1="20" y1="20" x2="7" y2="12" stroke="white" strokeWidth="1.5" />

      {/* TBK text */}
      <text
        x="46"
        y="27"
        fill="white"
        fontFamily="monospace"
        fontSize="18"
        fontWeight="700"
        letterSpacing="2"
      >
        TBK
      </text>

      {/* taiga_bike_komi subtext */}
      <text
        x="46"
        y="37"
        fill="white"
        fillOpacity="0.45"
        fontFamily="monospace"
        fontSize="7"
        letterSpacing="1"
      >
        TAIGA · BIKE · KOMI
      </text>
    </svg>
  );
};
