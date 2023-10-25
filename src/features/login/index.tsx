"use client";
import React, { useEffect, useState } from "react";
import LoginStyles from "./styles";
import { InputAdornment } from "@mui/material";
import EyeIcon from "@/__assets/icons/Eye";
import { useMutation } from "react-query";
import { queryClient } from "@/apis/__helpers/request";
import { useLogin } from "@/apis/login/login";
import { notifyError, notifySuccess, notifyWarning } from "@/components/snackbar";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/authStore";

const Login = () => {
  const router = useRouter();

  const { isLoggedIn, checkAuth } = useAuth();

  useEffect(() => {
    console.log("rerouting");
    if (!isLoggedIn) {
      router.push("/");
      
    } else {
      checkAuth( )
    }
  }, [isLoggedIn, checkAuth]);

  const [email, setEmail] = useState<any>("omar.alaziz@gmail.com");
  const [password, setPassword] = useState<any>(null);
  const [emailError, setEmailError] = useState<any>(null);
  const [passwordError, setPasswordError] = useState<any>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    handleButtonDisabled();
  }, [email, password, emailError, passwordError]);

  const handleButtonDisabled = () => {
    if (!emailError && !passwordError && email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const { mutate: userLogin } = useMutation(useLogin, {
    onSuccess: (data: any) => {
      notifySuccess("2FA Initiated");

      // if (data.accessToken && data.refreshToken && data.user) {
      //   localStorage.setItem("x-access-token", data.accessToken);
      //   localStorage.setItem("x-refresh-token", data.refreshToken);
      //   localStorage.setItem("rac-user", JSON.stringify(data.user));
      //   router.push("/");
      // }
      // if (data) {
      //   passwordAlert(data);
      // }
      if (data?.qrCodeURL) {
        localStorage.setItem("qr", data.qrCodeURL);
        localStorage.setItem("userId", data.userId);
        router.push(`/verify`);
      }
    },
    onError: (error: any) => {
      setIsLoading(false);
      // console.log("Login Errorrrr...", error);
      notifyError(error.response.message);
    },
    onSettled: () => {
      setIsLoading(false);
      queryClient.invalidateQueries("login");
    },
  });

  const passwordAlert = (data: any) => {
    const passwordMaxAgeForUser = addDays(data?.user?.updatedAt, data?.user?.role === "USER" ? 80 : 45);

    const date1: any = passwordMaxAgeForUser;
    const date2: any = new Date();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = date1 - date2;

    // Convert milliseconds to days and round down
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    if (differenceInDays <= 14) {
      return notifyWarning(`Password will expires in ${differenceInDays} days`);
    }
  };

  const addDays = (date: any, days: any) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  };

  const handleShowPassword = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  const handleInputChange = (event) => {
    const { type, value } = event.target;

    if (type === "email") {
      setEmail(value);
    } else if (type === "password" || type === "text") {
      setPassword(value);
    }

    handleValidations(event);
  };

  const handleValidations = (event) => {
    const { type, value } = event.target;

    if (type === "email") {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!emailRegex.test(value)) {
        setEmailError("Invalid email address.");
      } else {
        setEmailError(null);
      }
    } else if (type === "password" || type === "text") {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{10,}$/;

      if (!passwordRegex.test(value)) {
        setPasswordError("Invalid password.");
      } else {
        setPasswordError(null);
      }
    }
    handleButtonDisabled();
  };

  const handleLoginSubmit = async () => {
    setIsLoading(true);

    const userData = {
      email: email,
      password: password,
    };

    userLogin(userData);
    setIsLoading(false);
  };

  const {
    ButtonGroup,
    Content,
    CustomButton,
    CustomLink,
    CustomTextField,
    Dot,
    ErrorText,
    FormContainer,
    FormField,
    FormLabel,
    Header,
    Heading,
    LeftContainer,
    Logo,
    Poster,
    RightContainer,
    RootContainer,
    Shadow,
    Slogan,
    Text,
  } = LoginStyles;

  return (
    <RootContainer>
      <LeftContainer>
        <Logo
          src="/login-logo.png"
          alt="logo"
          sx={{
            display: "block",
            "@media (max-width:500px)": {
              display: "none",
            },
          }}
        />
        <Content>
          <Heading>
            <Header>
              <Text>Welcome</Text>
              <Dot />
            </Header>
            {/* <Slogan>
              You are one Step away from Login
            </Slogan> */}
          </Heading>
          <FormContainer>
            <FormField>
              <FormLabel>Email Address</FormLabel>
              <CustomTextField
                variant="standard"
                placeholder="Email Address"
                type="email"
                autoComplete="off"
                onChange={handleInputChange}
                // onBlur={handleValidations}
              />
              {emailError && <ErrorText>{emailError}</ErrorText>}
            </FormField>
            <FormField>
              <FormLabel>Password</FormLabel>
              <CustomTextField
                variant="standard"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EyeIcon hanldeClick={handleShowPassword} />
                    </InputAdornment>
                  ),
                }}
                onChange={handleInputChange}
                // onBlur={handleValidations}
              />
              {/* {passwordError && <ErrorText>{passwordError}</ErrorText>} */}
            </FormField>
            <ButtonGroup>
              <CustomButton disabled={false} onClick={handleLoginSubmit}>
                {isLoading ? "Loading..." : "Login"}
              </CustomButton>
              <CustomLink>Forgot your Password?</CustomLink>
            </ButtonGroup>
          </FormContainer>
        </Content>
      </LeftContainer>
      <RightContainer>
        <Logo
          src="/login-logo.png"
          alt="logo"
          sx={{
            display: "none",
            "@media (max-width:500px)": {
              display: "block",
            },
          }}
        />
        <Shadow />
        <Poster src="/login-poster.png" alt="poster" />
      </RightContainer>
    </RootContainer>
  );
};

export { Login };
