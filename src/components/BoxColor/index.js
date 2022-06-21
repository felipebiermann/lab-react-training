export function BoxColor(props) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    >
      <div>{`rgb(${props.r},${props.g},${props.b})`}</div>
    </div>
  );
}
