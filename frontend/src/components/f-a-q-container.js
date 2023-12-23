import { useMemo } from "react";

const FAQContainer1 = ({ propTop, propLeft }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute w-[1243px] h-[79px] text-left text-2xl text-pitchdeck-slide-background font-ligconsolata"
      style={groupDivStyle}
    >
      <div className="absolute top-[24px] left-[calc(50%_-_522px)] text-center leading-[150%] inline-block w-[1044px]">
        Navigate Through Frequently Asked Questions to Enhance Your
        Understanding of Shadowfall Chronicles
      </div>
      <div className="absolute top-[32px] left-[0px] w-[44px] h-[47px]">
        <div className="absolute top-[0px] left-[0px] box-border w-[44px] h-[47px] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
        <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[44px] h-[47px] border-b-[1px] border-solid border-pitchdeck-slide-background border-l-[1px]" />
      </div>
      <div className="absolute top-[0px] left-[1199px] w-[44px] h-[47px]">
        <div className="absolute top-[0px] left-[0px] box-border w-[44px] h-[47px] border-t-[1px] border-solid border-pitchdeck-slide-background border-r-[1px]" />
        <div className="absolute top-[0px] left-[0px] [filter:blur(8px)] box-border w-[44px] h-[47px] border-t-[1px] border-solid border-pitchdeck-slide-background border-r-[1px]" />
      </div>
    </div>
  );
};

export default FAQContainer1;
