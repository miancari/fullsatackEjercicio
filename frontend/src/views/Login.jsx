import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = () => {
        const API_URL = import.meta.env.VITE_API_URL
        fetch(`${API_URL}/api/v1/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(response => response.json())
            .then(json => {
                if(json.token) {
                    window.sessionStorage.setItem('token', json.token);
                    alert('inicio correcto')
                    navigate("/contacts");
                } else {
                    alert('Datos incorrectos');
                }
                
            })
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return <div className="container text-center">
        <main className="form-signin w-100 m-auto">

        <h1 className="h3 my-3 fw-normal">Bienvenid@ a tu libreta de direcciones</h1>

        <form className="my-5 p-5" onSubmit={handleSubmit}>
            <h3 className="h3 mb-3 fw-normal">Inicia Sesión</h3>
            <div className="form-floating">
                <input value={email} type="email" className="form-control"
                onChange={handleEmail}
                id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input value={password} type="password" className="form-control" 
                onChange={handlePassword} 
                id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-primary w-100 py-2" 
             >Sign in</button>
            <p className="mt-5 mb-3 text-body-secondary">© Malinali - 2023</p>
        </form>
    </main>
    </div>
};