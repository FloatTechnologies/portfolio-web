"use client";

import { lazy, Suspense } from "react";
import { LoadingProvider } from "./context/LoadingProvider";
import "./index.css";
import "./app.css";

const MainContainer = lazy(() => import("./components/MainContainer"));
const CharacterModel = lazy(() => import("./components/Character"));

export default function PortfolioRoot() {
  return (
    <LoadingProvider>
      <Suspense fallback={null}>
        <MainContainer>
          <Suspense fallback={null}>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
}
