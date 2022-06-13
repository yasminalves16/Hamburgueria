const Header = ({ fotoLogo, setInput, showProducts }) => {

  return (
    <header>
      <img src={fotoLogo} alt="Logo Burguer Kenzie" />
      <form>
        <input
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(event) => setInput(event.target.value)}
        />
        <button type="button" onClick={() => showProducts()}>
            Pesquisar
        </button>
      </form>
    </header>
  )

}

export default Header