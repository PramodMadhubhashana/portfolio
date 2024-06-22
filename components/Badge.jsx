'use client';
import CountUp from "react-countup";

const Badge = ({
  containerStyle,
  icon,
  endCountNumber,
  endCountText,
  badgeText
}) => {
  return (
    <div className={`badge ${containerStyle}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNumber} delay={1} duration={4} />
          {endCountText}
        </div>
        <div  className="max-w-[70px] leading-none text-[15px] font-medium, text-black dark:text-white">
          {badgeText}
        </div>
      </div>
    </div>
  )
}

export default Badge