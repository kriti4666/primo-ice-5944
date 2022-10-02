import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Highlight,
    Input,
    Spacer,
    Text
  } from "@chakra-ui/react";
  import { useState } from "react";
  import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  } from "firebase/auth";
  import { auth } from "../Firebase";
  import { useNavigate } from "react-router-dom";
  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navig = useNavigate();
    const [move, setMove] = useState(false);
  
    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          navig("/");
        })
        .catch((err) => console.error(err));
      // setMove(true);
    };
  
    const handleRegister = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          navig("/");
        })
        .catch((err) => console.error(err));
      // setMove(false);
    };
    return (
      <Box>
        <br /> <br />
        <Container
          p={10}
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        >
          <FormControl>
            <Text fontWeight="700" fontSize="30px">
              {!move ? "Log-In Form" : "Sign-Up Form"}
            </Text>
  
            <FormLabel>E-Mail</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
  
            <Divider />
  
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
  
            <Spacer />
            <Divider />
            <br />
            {!move ? (
              <Box>
                <Button onClick={handleSignIn} colorScheme="teal" variant="solid">
                  Log-in
                </Button>
                <Flex
                  query="SIGN UP"
                  styles={{
                    px: "1",
                    py: "1",
                    color: "blue",
                    textDecoration: "underline"
                  }}
                >
                  Don’t have an account?
                  <Text onClick={() => setMove(true)}>SIGN UP</Text>
                </Flex>
              </Box>
            ) : (
              <Box>
                {" "}
                <Button
                  onClick={handleRegister}
                  colorScheme="teal"
                  variant="solid"
                >
                  Register
                </Button>
                <Flex
                  query="SIGN UP"
                  styles={{
                    px: "1",
                    py: "1",
                    color: "blue",
                    textDecoration: "underline"
                  }}
                >
                  Already have an account?
                  <Text
                    onClick={() => {
                      setMove(false);
                      // navig("/login");
                    }}
                  >
                    Log-In
                  </Text>
                </Flex>
              </Box>
            )}
  
            <br />
          </FormControl>
        </Container>
      </Box>
    );
  }
  