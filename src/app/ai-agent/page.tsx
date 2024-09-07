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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      paper: "#F5F4EF", // 背景カラー
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
        maxWidth="md"
        sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
                backgroundColor: "F0EEE5",
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
