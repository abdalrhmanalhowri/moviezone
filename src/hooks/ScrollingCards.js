import { useRef, useState } from "react";

const ScrollingCards = ({ SizeScrolling }) => {
  const CardWidth = SizeScrolling;
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  const handleScroll = (scrollAmout) => {
    const newScrollPosition = scrollPosition + scrollAmout;
    if (newScrollPosition < 0) {
      setScrollPosition(0);
    } else if (newScrollPosition > 2400) {
      setScrollPosition(2400);
    } else {
      setScrollPosition(newScrollPosition);
    }
    containerRef.current.scrollLeft = newScrollPosition;
  };
  return { containerRef, handleScroll, CardWidth };
};

export default ScrollingCards;
