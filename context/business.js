import { BUSINESS_SEARCH_FIELDS, PAGE_LIMIT } from "@/constant";
import React, { createContext, useState } from "react";

const initialQueries = BUSINESS_SEARCH_FIELDS.reduce((prev, curr) => {
  return { ...prev, [curr.name]: "" };
}, {});

const Context = createContext();

export default function BusinessProvider({ children }) {
  const [business, setBusiness] = useState({
    data: [],
    queries: initialQueries,
    totalData: 0,
    currentPage: 1,
    pageLimit: PAGE_LIMIT,
  });

  return (
    <Context.Provider value={[business, setBusiness]}>
      {children}
    </Context.Provider>
  );
}

export function useBusinessContext() {
  return useContext(Context);
}
