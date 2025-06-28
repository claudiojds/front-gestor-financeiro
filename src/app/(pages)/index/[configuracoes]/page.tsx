'use client';

import CreateUser from "@/app/components/Login/CreateUser";
import LoginUser from "@/app/components/Login/LoginUser";

export default function Configuracoes() {
 

   return (
    <div>
      <h1>Configurações</h1>
      {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam voluptatibus adipisci magni enim recusandae ullam dolores, maiores alias nulla eveniet doloribus ipsam quia excepturi possimus iusto fugit consectetur, ex, id fugiat a. Dolore tenetur suscipit eaque dignissimos minima facere magnam fugiat in, quae temporibus unde aut dolor fugit, itaque voluptas earum sed dicta mollitia! Temporibus unde possimus soluta quisquam qui, optio deserunt vel. Dolorum dolore est iste sed minima? Doloremque tenetur facilis sequi magni officiis sed quos alias enim eaque molestias, repellat voluptas eos, consectetur dolor non architecto distinctio dignissimos qui hic illo tempora a ex! Autem, molestias velit!</p> */}
      <br />
      <h2>logar</h2>
      <LoginUser/>

      <br /><br />
      <h2>Criar usuário</h2>
      <CreateUser/>      
    </div>
  );
}