import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
  const { startLogin } = useAuthStore();

  const [values, handleInputChange, reset, setEsta] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Click en el submit');

    startLogin({ email: values.email, password: values.password });
  };

  return (
    <div className="view_login_main_container">
      <div className="view_login_container_title">
        <h1 className="view_login_title">Login Screeen</h1>
      </div>
      <div className="view_login_container">
        <form className="view_login_form" onSubmit={handleSubmit}>
          <div className="view_login_input_email">
            <span>Correo Electronico</span>
            <input
              type="text"
              autoComplete="ÑÖcompletes"
              name="email"
              onChange={handleInputChange}
              value={email}
            />
          </div>
          <div className="view_login_input_password">
            <span>Contaseña</span>
            <input
              type="password"
              name="password"
              autoComplete="ÑÖcompletes"
              onChange={handleInputChange}
              value={password}
            />
          </div>
          <div className="view_login_input_submit">
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
};
