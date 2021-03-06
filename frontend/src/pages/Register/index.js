import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import MaskedInput from 'react-text-mask';

import api from '../../services/api';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css'

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [state, setUfState] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      state      
    }

    try {
      const response = await api.post('ongs', data);

      toast.success(`Seu ID de acesso: ${response.data.id}`, {autoClose: false, className: 'toast-success'});  
      navigator.clipboard.writeText(response.data.id);
      toast.success('ID copiado para a sua área de transferência ;)');  
      history.push('/');
    } catch (err) {
      console.log(err.response);
      toast.error(`Erro ao criar ONG: ${err.response.data.error}`)
    }

  }

  function clearNumberMask(number) {    
    return String(number.replace(/[^0-9]+/g,''))
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="bethehero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro. Entre na plataforma e ajude pessoas a encontrarem casos de ONGS</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já sou cadastrado           
          </Link>

        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ONG" 
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input 
            type="email"
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <MaskedInput 
            mask={
            ['(', /\d/, /\d/, ')',  /\d/, /\d/, '-', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/,/\d/,/\d/,/\d/ ]
            }
            placeholder="WhatsApp (55)xx-x xxxx-xxxx"
            value={whatsapp}
            onChange={e => setWhatsapp(clearNumberMask(e.target.value))}
          />        

          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input 
              placeholder="UF" 
              style={{width: 80}}
              value={state} 
              onChange={e => setUfState(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
