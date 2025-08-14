import "./MyFirstComponent.css";

export default function MyFirstComponent() {
  const x = 10;
  const person = {
    name: "nagham",
    age: 21,
    email: "abohatabnagham@gmail.com",
  };
  const elmStyle = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "20px",
    padding: "10px",
  }; /*h4 -> checks if the persons name is nagham then the class name would be name
      but if not the class name would be name2 and takes its style */
  return (
    <div>
      <h1 style={elmStyle}>{x} Hello, World!</h1>
      <h2 style={elmStyle}>Hi!</h2>
      <button onClick={SayHello}>Click me</button>
      <h1 className={"name"}>my name is : {person.name}</h1>
      <h2>my age is : {person.age}</h2>
      <h3>my email is : {person.email}</h3>

      <h4 className={person.name == "nagham" ? "name " : "name2"}>
        check name
      </h4>
    </div>
  );
}
function SayHello() {
  return alert("bye");
}
/* finished video number 10 -- 13/6/2025 */