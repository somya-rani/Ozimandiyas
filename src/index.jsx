// index.jsx
import App from './App';
import Login from './Login';

render(<App />, document.getElementById('root'));

const App = () => {
  const handleClick = async () => {
    // Dynamically import JavaScript module
    const { default: myModule } = await import("./login.js");
    myModule();

    // Dynamically import HTML module
    const { default: myHtml } = await import("./login.html");
    const div = document.createElement("div");
    div.innerHTML = myHtml;
    document.body.appendChild(div);
  };

  return (
    <div>
      <h1>Preact Compilation Example</h1>
      <button onClick={handleClick}>Load Modules</button>
    </div>
  );
};

render(<App />, document.body);

export { Login };
