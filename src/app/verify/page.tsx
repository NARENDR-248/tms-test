"use client";
import tmsRequest from "@/apis/__helpers/request";
import theme from "@/utils/theme";
import { Box, Button, Stack, TextField, Typography, styled } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { parse } from "path";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";

const Verify = () => {
  const [qr, setQR] = useState<string | null>();
  const [userId, setUserId] = useState<string | null>();
  useEffect(() => {
    setQR(localStorage.getItem("qr"));
    setUserId(localStorage.getItem("userId"));
  }, []);

  const [sixDigitPin, setsixDigitPin] = useState<string[]>(["", "", "", ""]);

  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const CustomTextField = styled(TextField)(({ theme }) => ({
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "10px",

    "& .MuiInput-underline:hover:before": {
      border: "none !important",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
      textAlign: "center",
      fontSize: "40px",
      fontWeight: "bold",
      width: "100px",
      height: "100px",
      // opacity: 0.3,
    },
  }));

  const verifyMutation = useMutation(async ({ pin, userId }: { pin: string; userId: string }) => {
    return await tmsRequest.post("/auth/verify", { pin, userId });
  });

  const router = useRouter();

  return (
    <Box
      component={"form"}
      onSubmit={(e) => {
        e.preventDefault();

        if (!sixDigitPin || sixDigitPin.length !== 6) return;
        if (sixDigitPin.some((digit) => digit === "")) return;
        if (sixDigitPin.some((digit) => digit.match(/[0-9]/) === null)) return; // only allow numbers
        if (!userId) return;

        verifyMutation.mutate(
          { pin: sixDigitPin.join(""), userId: userId },
          {
            onSuccess: ({ data }) => {
              console.log(data, "dataaa");
              if (data?.accessToken && data?.refreshToken && data?.user) {
                localStorage.setItem("x-access-token", data.accessToken);
                localStorage.setItem("x-refresh-token", data.refreshToken);
                localStorage.setItem("rac-user", JSON.stringify(data.user));
                localStorage.removeItem("qr");
                localStorage.removeItem("userId");
                router.replace("/");
              }
            },
            onError: (err) => {
              console.log(err);
            },
          },
        );
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        background: theme.palette.primary.main,
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3">2FA</Typography>
      <Typography variant="body1">Please scan the QR with MS Authenticator and enter the 6 digit PIN</Typography>

      {typeof qr === "string" && (
        <>
          <img
            style={{
              borderRadius: "10px",
            }}
            width={"500px"}
            height={"500px"}
            src={qr}
          />
          {/* build a nice looking form for a four digit pin */}

          <Stack direction="row" spacing={2}>
            {Array.from({ length: 6 }, (_, index) => index).map((_, i) => (
              <input
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                  fontWeight: "bold",
                  width: "60px",
                  height: "60px",
                }}
                key={i}
                type="string"
                ref={(el) => (inputRefs.current[i] = el)}
                onChange={(e) => {
                  if (e.target.value.length > 1) return;
                  if (e.target.value.length === 1) {
                    if (e.target.value.match(/[0-9]/) === null) return; // only allow numbers
                  }

                  setsixDigitPin((prev) => {
                    const newArr = [...prev];
                    newArr[i] = e.target.value;
                    return newArr;
                  });
                  // focus next input if available
                  if (i < 5 && e.target.value.length === 1) {
                    inputRefs.current[i + 1]?.focus();
                  }
                }}
                value={sixDigitPin[i]}
              />
            ))}
          </Stack>
          <Button type="submit">Verify</Button>
        </>
      )}
    </Box>
  );
};

export default Verify;
