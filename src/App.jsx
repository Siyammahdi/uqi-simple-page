import JobCard from "./Components/JobCard/JobCard";
import TopTexts from "./Components/TopTexts/TopTexts";
import WideCard from "./Components/WideCard/WideCard";

function App() {

  return <div className="m-6">
    <TopTexts></TopTexts>
    <WideCard></WideCard>
    <div className="lg:w-1/4 lg:absolute left-2/3 top-56">
      <JobCard></JobCard>
    </div>
  </div>;
}

export default App;
