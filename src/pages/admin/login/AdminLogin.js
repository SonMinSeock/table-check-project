import { useForm } from "react-hook-form";
import { collection, onSnapshot, query, doc } from "firebase/firestore";
import { fireStore } from "../../../database/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../../recoil/user/user";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-4);
`;

const H1 = styled.h1`
  font-size: var(--font-size-6);
  font-weight: bold;
`;

const Form = styled.form`
  width: 70%;
  margin: var(--space-4) auto;
  & section {
    display: flex;
    flex-direction: column;
  }
  background-color: #eeeff1;
  padding: 1.5rem;
  border-radius: var(--border-radius-1);
`;

const Input = styled.input`
  padding: var(--space-2);
  border: none;
  border-radius: var(--border-radius-2);
  margin-bottom: 0.5rem;
  color: black;
  background-color: white;
`;

const Button = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: var(--space-2);
  border-radius: var(--border-radius-2);
  cursor: pointer;
  margin-top: 0.5rem;
`;

function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useRecoilState(userAtom);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, []);

  const onValid = (data) => {
    const q = query(collection(fireStore, "users"));
    let users;

    onSnapshot(q, (snapshot) => {
      users = snapshot.docs.map((doc) => ({
        ...doc.data(),
        userId: doc.id,
      }));

      for (const user of users) {
        if (user.email === data.email && user.username === data.username) {
          setUser(user);
          return navigate("/admin");
        }
      }
      alert("등록되지 않은 계정이거나 또는 사용자 이름 잘못 입력했습니다.");
    });
  };

  return (
    <>
      <Header>
        <H1>오마타세 관리자 로그인</H1>
      </Header>
      <main>
        <Form onSubmit={handleSubmit(onValid)}>
          <section>
            <Input type="text" {...register("username", { required: true })} id="username" placeholder="관리자 이름" />
          </section>
          <section>
            <Input type="email" {...register("email", { required: true })} id="email" placeholder="계정" />
          </section>
          <section>
            <Button>로그인</Button>
          </section>
        </Form>
      </main>
    </>
  );
}

export default AdminLogin;
