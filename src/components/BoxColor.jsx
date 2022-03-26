const BoxColor = (props) => {
  const { r, g, b } = props;
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  let hexRed = r.toString(16);
  hexRed = hexRed.length === 1 ? '0' + hexRed : hexRed;

  let hexGreen = g.toString(16);
  hexGreen = hexGreen.length === 1 ? '0' + hexGreen : hexGreen;

  let hexBlue = b.toString(16);
  hexBlue = hexBlue.length === 1 ? '0' + hexBlue : hexBlue;

  return (
    <div style={divStyle}>
      <h1>
        {' '}
        rgb( {r}
        {g}
        {b})
      </h1>
      <h2>
        #{hexRed}
        {hexGreen}
        {hexBlue}
      </h2>
    </div>
  );
};

export default BoxColor;
