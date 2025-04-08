import { Link } from "react-router-dom";
import { Section } from "../../styles/components/guide/Guide.style";
import { IoIosArrowForward } from "react-icons/io";

function Guide() {
  return (
    <>
      <Section>
        <p>서비스 이용이 처음이라면!</p>
        <Link to="https://imaginefly.notion.site/imaginefly/b890c551d4fb49d8b2e6cf978830488b" target="_blank">
          가이드 보기 {<IoIosArrowForward size={20} />}
        </Link>
      </Section>
    </>
  );
}

export default Guide;
