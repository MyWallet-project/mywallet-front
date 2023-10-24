import styled from "styled-components"

export default function TransactionsPage() {
  return (
    <TransactionsContainer>
      <h1>Nova Transação</h1>
      <form>
        <input placeholder="Valor" type="text"/>
        <input placeholder="Descrição" type="text" />
        <button>Salvar Transação</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    align-self: center;
    justify-self: flex-start;
    top: 150px;
    position: absolute;
  }
`
