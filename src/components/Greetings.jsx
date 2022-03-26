const Greetings = (props) => {
  const { lang, children } = props;

  let greeting = '';

  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'es':
      greeting = 'Buenas Dias';
      break;
    case 'fr':
      greeting = 'Salut';
      break;
    default:
      greeting = 'Hello';
  }

  return (
    <h1>
      {greeting} {children}
    </h1>
  );
};

export default Greetings;
