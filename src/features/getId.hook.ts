import { useState, useEffect } from "react";

export const useGetStatus = (x: boolean): string => {
  const [status, setStatus] = useState<string>("offline");

  useEffect(() => {
    if (x) {
      setStatus("online");
    } else {
      setStatus("offline");
    }
  }, [x]);

  return status;
};
