import { useAuth0 } from "@auth0/auth0-react";
import { Button,Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Make sure to import this hook

export const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isAuthenticated) {
      navigate("/converter");
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor : "#183D3D",
        gap : "30%",
        flexDirection : "column"
      }}
    >
        <Text
        fontFamily={"'Press Start 2P', cursive;"}
        color="white"
        fontSize={"5xl"}
      >
        Code Converter
      </Text>
      <Button onClick={handleLogin}>
        {isAuthenticated ? "Go to Converter" : "Login with Github"}
      </Button>
    </div>
  );
};
