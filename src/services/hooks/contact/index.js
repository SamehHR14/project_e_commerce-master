import { useLoadingContext } from "context/LoadingContext";
import { useHandlerErrors } from "..";
import { useState } from "react";

export const useSendEmail = () => {
  const { setLoading } = useLoadingContext();
  const { onSuccess, onError } = useHandlerErrors();
  const [result, setSendEmail] = useState([]);

  const SendEmail = async (body) => {
    try {
      setLoading((old) => old + 1);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/contact`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});

      if (!response.ok) {
        throw new Error("Erreur serveur");
      }

      const data = await response.json();
      setSendEmail(data);
      onSuccess("Message envoyé avec succès !");
    } catch (error) {
      onError(typeof error === 'string' ? error : 'Opération échouée');
    } finally {
      setLoading((old) => old - 1);
    }
  };

  return {
    SendEmail,
    result,
  };
};
