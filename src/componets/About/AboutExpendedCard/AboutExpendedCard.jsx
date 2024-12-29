import React, { useState } from 'react';
import ExpendedCard from './widgets/ExpendedCard';

const AboutExpendedCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleHoverLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div
      className="max-width flex flex-col md:flex-row min-h-[30rem] gap-4 my-[8rem] max-[1420px]:mx-[1.5rem]"
      onMouseLeave={handleHoverLeave}
    >
      {/* First Card */}
      <ExpendedCard
        title="Our Vision"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quia debitis obcaecati doloremque ducimus odio eius. Mollitia dicta, necessitatibus, magnam tempore velit minima ipsam sit accusantium maxime molestiae vel unde!"
        isActive={hoveredCard === 1 || hoveredCard === null}
        onHover={() => handleHover(1)}
      />

      {/* Second Card */}
      <ExpendedCard
        title="Our Mission"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quia debitis obcaecati doloremque ducimus odio eius. Mollitia dicta, necessitatibus, magnam tempore velit minima ipsam sit accusantium maxime molestiae vel unde!"
        isActive={hoveredCard === 2 || hoveredCard === null}
        onHover={() => handleHover(2)}
      />
    </div>
  );
};

export default AboutExpendedCard;
