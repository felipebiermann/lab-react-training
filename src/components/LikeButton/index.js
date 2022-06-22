import { useState } from 'react';

import '../LikeButton/style.css';

export function LikeButton() {
  const colorStyle = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [conterValue, setInterval] = useState(0);

  return (
    <div>
      <div className="buttom-style">
        <button
          className={colorStyle[conterValue]}
          onClick={() => setInterval((preCounter) => ++preCounter)}
        >
          {' '}
          {conterValue} Likes
        </button>
      </div>
    </div>
  );
}
