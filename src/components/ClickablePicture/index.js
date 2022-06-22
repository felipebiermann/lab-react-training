export function ClickablePicture(props) {
  //   console.log(props);
  return (
    <>
      <div>
        <img src={props.src} onClick={props.onClickFunction} alt="image" />
      </div>
    </>
  );
}
