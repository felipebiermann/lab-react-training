import { useState } from 'react';

export function Carousel(props) {
  let myList = props.images;
  const [theImage, setTheImage] = useState(myList[0]);

  function changeImageRigth() {
    if (myList.indexOf(theImage) === myList.length - 1) {
      setTheImage(myList[0]);
    } else {
      setTheImage(myList[myList.indexOf(theImage) + 1]);
    }
  }

  function changeImageLeft() {
    if (myList.indexOf(theImage) === 0) {
      setTheImage(myList[myList.length - 1]);
    } else {
      setTheImage(myList[myList.indexOf(theImage) - 1]);
    }
  }
  return (
    <div>
      <button type="button" onClick={changeImageLeft}>
        Left
      </button>
      <img src={theImage} alt="#" />
      <button type="button" onClick={changeImageRigth}>
        Right
      </button>
    </div>
  );
}
