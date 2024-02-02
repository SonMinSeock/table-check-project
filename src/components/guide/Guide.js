import { Link } from "react-router-dom";
import { Section } from "./Guide.style";
import { IoIosArrowForward } from "react-icons/io";

function Guide() {
  return (
    <>
      <Section>
        <p>서비스 이용이 처음이라면!</p>
        <Link to="https://toothsome-raft-e05.notion.site/f8d7c49e99254b0d83f79c1167634020?pvs=4" target="_blank">
          가이드 보기 {<IoIosArrowForward size={20} />}
        </Link>
      </Section>
    </>
  );
}

export default Guide;
