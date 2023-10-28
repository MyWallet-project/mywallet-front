import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useQuickIn } from "../hooks/useQuickIn";
import useForm from "../hooks/useForm";
import { useSignUp } from "../services/auth";

export default function SignUpPage() {
  //Utilizando o useState criamos váriaveis que podem ser alteradas de acordo com a nossa vontade
  const {form, handleform} = useForm({ name: "", email: "", password: "", confirmPassword: "" });

  useQuickIn();
  const signUp = useSignUp();


  // Função para enviar informações inseridas pelo usuário nos inputs, para o back-end
  function submitForm(e){
    e.preventDefault();

    // Verificamos se a senha e a confimação de senha são iguais
    if(form.password !== form.confirmPassword){
      return alert("As senhas não coincidem.");
    };
    delete form.confirmPassword;

    // Função chamada para enviar as informações do form com os dados do usuário para o back-end
    signUp(form);
  }

  //HTML criado utilizando o react e styled components
  return (
    <SingUpContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input placeholder="Nome" 
          type="text" 
          required 
          name="name" 
          value={form.name} 
          onChange={handleform}
        />
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
        <input 
          placeholder="Confirme a senha" 
          minLength={6}
          type="password" 
          autoComplete="new-password" 
          required 
          name="confirmPassword" 
          value={form.confirmPassword}
          onChange={handleform}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
