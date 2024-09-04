import './Cadastro.css';
import Estrela from '../assets/Estrela.png.png';
import HomemCadastro from '../assets/HomemCadastro.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';

export default function Cadastro() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { firstName, email, password, confirmPassword } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            toast.success('Usuário registrado com sucesso!');
            navigate('/login');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('As senhas não coincidem');
        } else {
            const userData = {
                firstName,
                email,
                password,
            };

            dispatch(register(userData))
                .unwrap()
                .then(() => {
                    toast.success('Usuário registrado com sucesso!');
                })
                .catch(() => {
                    toast.error('Erro ao registrar usuário. Tente novamente.');
                });
        }
    };

    const HomemCadastroImg = {
        position: 'relative',
        top: '5rem',
        height: '30rem',
    };

    return (
        <div className="containerCadastro">
            <div className="pageTitleCadastro">
                <h2>Cadastro</h2>
                <img src={Estrela} alt="Estrela" />
            </div>
            <div className="form-containerCadastro">
                <img src={HomemCadastro} style={HomemCadastroImg} alt="Homem Cadastro" />
                <div className="infoCadastro">
                    <h2>Vamos iniciar uma</h2>
                    <h2 style={{ color: '#003366', fontWeight: 'bold' }}>
                        experiência.
                    </h2>
                </div>
                <form className="form" onSubmit={onSubmit}>
                    <label htmlFor="firstName">Nome</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={onChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={onChange}
                    />

                    <label htmlFor="password">Senha</label>
                    <div className="password-container">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <label htmlFor="confirmPassword">Confirme sua senha</label>
                    <div className="password-container">
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={onChange}
                        />
                    </div>

                    <div className="btn-containerCadastro">
                        <button type="submit" className="btn">
                            Cadastrar-se
                        </button>
                        <p>
                            Já possui conta?{' '}
                            <Link
                                to="/login"
                                style={{
                                    color: '#003366',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}>
                                Entrar
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
            <h2
                style={{
                    color: '#003366',
                    fontWeight: 'bold',
                    position: 'relative',
                    top: '1.5rem',
                }}>
                alocai
            </h2>
        </div>
    );
}
