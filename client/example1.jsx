const HelloWorld = () => {
  return (
      <div>
          Hello World!
          And also Jerry.
      </div>
  );
};

const init = () => {
  ReactDOM.render(<HelloWorld />, document.getElementById('app'));
};

window.onload = init;