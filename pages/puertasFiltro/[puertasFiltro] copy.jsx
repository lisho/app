import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import traerListaFiltrada from "../../helpers/traerListaFiltrada";

const puertasFiltro = () => {
  const [puertas, setPuertas] = useState({});
 

  const router = useRouter();
  const {puertasFiltro} = router.query;
  console.log(`puertasFiltro`, puertasFiltro)
/*   useEffect(() => {
     console.log(`puertas`, puertas)
     console.log(`query`, query)
  }, [puertas])

  useEffect(() => {
     const lista = traerListaFiltrada(
      process.env.NEXT_PUBLIC_URL_API + "puertas/filtradas/",
      query
    );
    lista.then((resultado) => setPuertas(resultado) console.log(`resultado`, resultado)); 
  }, []); */

  return <div>Enter</div>;
};

export default puertasFiltro;
