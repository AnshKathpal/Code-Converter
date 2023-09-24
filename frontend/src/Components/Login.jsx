import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Make sure to import this hook

export const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isAuthenticated) {
      navigate('/converter');
    } else {
      loginWithRedirect();
    }
  };

  return (
    <>
      <Button onClick={handleLogin}>
        {isAuthenticated ? 'Go to Converter' : 'Login with Github'}
      </Button>
    </>
  );
};
