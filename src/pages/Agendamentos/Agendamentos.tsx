import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Agendamentos = () => {
  const [nome, setNome] = useState('');
  const [servico, setServico] = useState('');
  const [data, setData] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula o envio dos dados
    console.log({ nome, servico, data });
    navigate('/confirmacao', { state: { nome, servico, data } });
  };

  return (
    <div>
      <h2>Agendar Serviço</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <select
          value={servico}
          onChange={(e) => setServico(e.target.value)}
          required
        >
          <option value="">Escolha um serviço</option>
          <option value="Corte de Cabelo">Corte de Cabelo</option>
          <option value="Manicure">Manicure</option>
          <option value="Maquiagem">Maquiagem</option>
        </select>
        <input
          type="datetime-local"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
};

export default Agendamentos;