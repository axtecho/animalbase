import data from "./animalbase.json";
import { useState } from "react";
import ToggleCell from "./ToggleCell";
function clean(arr) {
  return arr.map((animal) => {
    const [name, , desc, type] = animal.fullname.split(" ");

    return {
      name,
      desc,
      type,
      age: animal.age,
    };
  });
}
function App() {
  const animals = clean(data);
  console.log(animals);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const filtered =
    filter === ""
      ? animals
      : animals.filter((animal) => animal.type === filter);
  if (sortDirection === "asc") {
    filtered.sort((a, b) => a[sort] > b[sort]);
  } else {
    filtered.sort((a, b) => a[sort] < b[sort]);
  }
  return (
    <div className="App">
      <button onDoubleClick={() => setFilter("cat")}>Cats</button>
      <button onDoubleClick={() => setFilter("dog")}>Dogs</button>
      <button onDoubleClick={() => setFilter("")}>All</button>
      <table>
        <thead>
          <tr>
            <ToggleCell
              setSort={setSort}
              setSortDirection={setSortDirection}
              title="Name"
              sortKey="name"
            />
            <ToggleCell
              setSort={setSort}
              setSortDirection={setSortDirection}
              title="Type"
              sortKey="type"
            />{" "}
            <ToggleCell
              setSort={setSort}
              setSortDirection={setSortDirection}
              title="Description"
              sortKey="desc"
            />{" "}
            <ToggleCell
              setSort={setSort}
              setSortDirection={setSortDirection}
              title="Age"
              sortKey="age"
            />
          </tr>
        </thead>
        <tbody>
          {filtered.map((animal) => {
            return (
              <tr>
                <td>{animal.name}</td>
                <td>{animal.type}</td>
                <td>{animal.desc}</td>
                <td>{animal.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
