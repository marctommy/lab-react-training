const Random = (props) => {
  const { min, max } = props;

  let randomNumber = Math.floor(Math.random() * max) + 1;
  return (
    <h1>
      Random value between {min} and {max} = {randomNumber}
    </h1>
  );
};

export default Random;
