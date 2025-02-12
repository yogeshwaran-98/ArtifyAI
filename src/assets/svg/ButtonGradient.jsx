const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        {/* Left Border Gradient */}
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#89F9E8">
            <animate
              attributeName="stop-color"
              values="#89F9E8; #FACB7B; #89F9E8"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#FACB7B">
            <animate
              attributeName="stop-color"
              values="#FACB7B; #89F9E8; #FACB7B"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        {/* Top Border Gradient */}
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#D87CEE">
            <animate
              attributeName="stop-color"
              values="#D87CEE; #FACB7B; #D87CEE"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#FACB7B">
            <animate
              attributeName="stop-color"
              values="#FACB7B; #D87CEE; #FACB7B"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        {/* Bottom Border Gradient */}
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#9099FC">
            <animate
              attributeName="stop-color"
              values="#9099FC; #89F9E8; #9099FC"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#89F9E8">
            <animate
              attributeName="stop-color"
              values="#89F9E8; #9099FC; #89F9E8"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        {/* Right Border Gradient */}
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#9099FC">
            <animate
              attributeName="stop-color"
              values="#9099FC; #D87CEE; #9099FC"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#D87CEE">
            <animate
              attributeName="stop-color"
              values="#D87CEE; #9099FC; #D87CEE"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
