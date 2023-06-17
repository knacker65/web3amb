import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">

      <Stack spacing={2} direction="row">
        <Button variant="text">Teaxt test</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      </div>
    </>
  );
}
