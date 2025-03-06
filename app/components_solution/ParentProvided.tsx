import Parent from "./Parent";
import CountProvider from "./provider";

export default function ParentProvided() {
  return (
    <CountProvider>
      <Parent />
    </CountProvider>
  );
}