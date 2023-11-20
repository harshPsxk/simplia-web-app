import React, { useState } from 'react';

function ReadMore({ initialContent, expandedContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="text-customGrey/75 font-semibold mt-2">
        {isExpanded ? expandedContent : initialContent}
      </div>
      <button
        onClick={toggleReadMore}
        className="bg-customBlueReadMore rounded-lg text-white px-4 py-2 mt-2"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default ReadMore;
