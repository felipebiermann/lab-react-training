export function Dice(props) {
  return (
    <>
      <img
        width={'120px'}
        src={props.src}
        onClick={props.theFunction}
        alt="dice"
      />
    </>
  );
}
