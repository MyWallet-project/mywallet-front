import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useQuickIn } from "../hooks/useQuickIn";
import useForm from "../hooks/useForm";
import { useSignIn } from "../services/auth";

export default function SignInPage() {
  const {form, handleform} = useForm({ email: "", password: "" });

  useQuickIn();
  const signIn = useSignIn();

  function submitForm(e){
    e.preventDefault();
    signIn(form);
  }

  return (
    <SingInContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input placeholder="E-mail"
          type="email" 
          required 
          name="email" 
          value={form.email}
          onChange={handleform}
        />
        <input 
          placeholder="Senha" 
          minLength={6}
          type="password" 
          autoComplete="new-password" 
          required 
          name="password" 
          value={form.password}          
          onChange={handleform}
        />
        <button type="submit">
          Entrar
        </button>
      </form>

      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
    </SingInContainer>
  );
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
