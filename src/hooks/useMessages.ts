import { useEffect, useState } from "react";

type Message = string | null;

export function useMessages(): [
  message: Message,
  setMessage: React.Dispatch<React.SetStateAction<Message>>,
  subMessage: string
] {
  const [message, setMessage] = useState<Message>(null);
  const [subMessage, setSubMessage] = useState("");

  function countDownToDo(work: () => void, numSeconds: number) {
    if (numSeconds <= 0 || !Number.isSafeInteger(numSeconds)) {
      throw new Error("numSeconds must be a positive integer");
    }
    (function recurse(s: number) {
      if (s === 0) {
        setSubMessage("");
        work();
      } else {
        setSubMessage(`(close in ${s})`);
        setTimeout(() => {
          recurse(s - 1);
        }, 1_000);
      }
    })(numSeconds);
  }

  useEffect(() => {
    if (message !== null) {
      countDownToDo(() => setMessage(null), 3);
    }
  }, [message]);

  return [message, setMessage, subMessage];
}