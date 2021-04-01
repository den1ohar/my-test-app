import React from "react";
import { PageWrapper } from "./components/Layouts";
import TextEditor from "./components/TextEditor";

const App: React.FC = () => {
  return (
    <PageWrapper>
      <TextEditor />
    </PageWrapper>
  );
};

export default App;
