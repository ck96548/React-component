import "./App.css";
import ButtonCascade from "./dropdown/ButtonCascade";
import NestedDropdown from "./dropdown/NestedDropdown";

function App() {
  const menuItems = [
    {
      label: "Item 1",
      children: [{ label: "Subitem 1.1" }, { label: "Subitem 1.2" }],
    },
    {
      label: "Item 2",
      children: [
        {
          label: "Subitem 2.1",
          children: [{ label: "Subitem 2.1.1" }, { label: "Subitem 2.1.2" }],
        },
      ],
    },
    {
      label: "Item 3",
      children: [
        {
          label: "Subitem 3.1",
          children: [{ label: "Subsub 3.1.1" }, { label: "Subsub 3.1.2" }],
        },
        { label: "Subitem 3.2" },
      ],
    },
    { label: "Item 4" },
  ];

  const handleSelect = (label) => {
    console.log("Selected Item:", label);
  };
  return (
    <>
      <NestedDropdown
        items={menuItems}
        title="Open Menu"
        onSelect={handleSelect} // Yeh logging enable karta hai
      />

      {/* <div>
      <h1>Cascading Nested Buttons</h1>
      <ButtonCascade item={rootItem} />
    </div> */}
    </>
  );
}

export default App;
