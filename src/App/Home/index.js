import { PageDiv } from "../../shared/PageDiv";
import { TitleH1 } from "../../shared/Title";
import Maps from "./Maps";

function HomeIndex() {
  return (
    <PageDiv>
      <TitleH1>Select a map</TitleH1>
      <Maps />
    </PageDiv>
  );
}

export default HomeIndex;
