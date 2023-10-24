import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import axios from "axios";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  function handleform(e){
    e.preventDefault();
    setForm({...form, [e.target.name]: e.target.value})
  }

  function submitForm(e){
    e.preventDefault();

    if(form.password !== form.confirmPassword){
      alert("As senhas não coincidem.");
      setForm({ ...form, confirmPassword: "" });
      return;
    };
    delete form.confirmPassword;
    axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/sign-up`, form)
      .then(res => navigate('/'))
      .catch(err => alert(err.response.data));
  }

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
