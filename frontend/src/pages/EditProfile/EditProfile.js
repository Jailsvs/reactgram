import './EditProfile.css';

const EditProfile = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div id="edit-profile">
      <h2>Edite seus dados</h2>
      <p className="subtitle">Adicione uma imagem de perfil e conte-nos mais sobre vc...</p>
      {/*preview img*/}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome"/>
        <input type="email" placeholder="E-mail" disabled/>
        <label>
          <span>Imagem do perfil:</span>
          <input type="file"/>
        </label>
        <label>
          <span>Bio:</span>
          <input type="text" placeholder="Descrição do perfil"/>
        </label>
        <label>
          <span>Deseja alterar sua senha?</span>
          <input type="password" placeholder="Digite sua nova senha"/>
        </label>
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  )
}

export default EditProfile