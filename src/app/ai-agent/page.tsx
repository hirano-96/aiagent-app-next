"use client";
import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Paper,
  Grid,
  Divider,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const MODEL = "llama3-groq-70b-8192-tool-use-preview";

// カスタムテーマの作成
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // プライマリカラー
    },
    secondary: {
      main: "#dc004e", // セカンダリカラー
    },
    background: {
      paper: "#FBF9F3", // 背景カラー
    },
  },
});

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [response1, setResponse1] = useState(
    "ここにレスポンス1が表示されます。ああああああああ。いい。ううううううううううううう。おおおおおおおおおおおおお。"
  );
  const [response2, setResponse2] =
    useState("ここにレスポンス2が表示されます。");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // 入力値に基づいてレスポンスを更新するロジックを追加できます。
    setResponse1(`入力された値: ${inputValue}`);
    setResponse2("レスポンス2は固定です。");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{ height: "97vh", display: "flex", flexDirection: "column" }}
      >
        <Paper
          // elevation={3}
          sx={{
            padding: "1rem",
            flex: "1",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <TextField
              fullWidth
              variant="outlined"
              label="テキストを入力"
              value={inputValue}
              onChange={handleInputChange}
              sx={{ flexGrow: 1 }}
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="send"
                    >
                      <SendIcon />
                    </IconButton>
                  ),
                },
              }}
            />
          </Box>
          <Divider sx={{ my: 2 }} />

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mb: 2,
              flex: "1",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Card
              sx={{
                width: "50%",
                height: "100%",
                mx: 1,
                borderColor: "#000000",
              }}
            >
              <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography>{response1}</Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                width: "50%",
                height: "100%",
                mx: 1,
              }}
            >
              <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography>{response2}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
