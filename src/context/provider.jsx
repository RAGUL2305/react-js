import ComponentA from "./componentA";
import ComponentB from "./componentB";
import ComponentC from "./componentC";
import ComponentD from "./componentD";

const Provider = () => {
  return (
    <ComponentA>
      <ComponentA />
      <ComponentB />
      <ComponentC/>
      <ComponentD />
    </ComponentA>
  );
};

export default Provider
