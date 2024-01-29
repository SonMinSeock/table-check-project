import { Section } from "./Guide.style";
import { IoIosArrowForward } from "react-icons/io";

function Guide() {
  return (
    <>
      <Section>
        <p>서비스 이용이 처음이라면!</p>
        <a href="#">가이드 보기 {<IoIosArrowForward size={20} />}</a>
      </Section>
    </>
  );
}

export default Guide;
