import React from 'react';
import './InfiniteScroll.css';
import flags from '../../assets/Flags/flags';

const InfiniteScroll = () => {
  return (
    <div>
      <div className="wrapper flex gap-5">
        {flags.map((flag, index) => (
          <div
            key={index}
            className={`item item${index + 1} min-w-32 h-16 relative`}
          >
            <img
              className="w-full h-full object-cover absolute"
              src={flag.img}
              alt={flag.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;