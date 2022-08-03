import React from "react";
import { extratoLista } from '../../info';

import { Box, Botao } from '../../Components/UI';
import Items from "../Items";



const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(item => (
        <Items 
          key={item.id}
          type={item.type}
          from={item.from}
          value={item.value}
          date={item.date}
        />
      ))}
      <Botao>Ver mais</Botao>
    </Box>
  )
}

export default Extrato;
