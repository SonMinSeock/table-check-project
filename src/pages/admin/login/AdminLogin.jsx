import { useForm } from "react-hook-form";
import { collection, onSnapshot, query } from "firebase/firestore";
import { fireStore } from "../../../database/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../../recoil/user/user";
import { Button, Form, H1, Header, Input } from "../../../styles/pages/admin/login/AdminLogin.style";

function AdminLogin() {
  const { register, handleSubmit } = useForm();

  const [user, setUser] = useRecoilState(userAtom);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, [user, navigate]);

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
          if (user.isAdmin) {
            return navigate("/admin");
          } else {
            return alert("관리자 아닙니다!");
          }
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
