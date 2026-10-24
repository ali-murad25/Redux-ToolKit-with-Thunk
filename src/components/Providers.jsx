
"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import AuthListener from "@/components/AuthListener";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <AuthListener />
      {children}
    </Provider>
  );
}
