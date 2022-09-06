import Link from "next/link";
import { Button } from "../../components/atoms/Button";
import { InputText } from "../../components/moleculas/inputText";
import { Aside } from "../../components/organism/aside";
import { HeroMain } from "../../components/organism/main";
import { TamplateCont, TamplateContainer, TamplateMain } from "../../components/template";


export const Register = () => {
  return (
    <TamplateContainer>
      <TamplateCont>
        <Aside />
        <TamplateMain>
          <HeroMain h1="Crie sua Conta" h2=""></HeroMain>
          <form className="flex flex-col w-full px-6 gap-4 max-w-md">
          <InputText label="Nome Completo" type="name" placeholder="Nome Completo" />
          <InputText label="Data de Nascimento" type="date" placeholder="Telefone" />
            <InputText label="Email" type ="email" placeholder="Email" />
            <InputText label="Senha" type="password" placeholder="Senha" />
            <Button>Cadastro</Button>
          </form>
          <Link href="/">Já possuo uma Conta</Link>
        </TamplateMain>
      </TamplateCont>
    </TamplateContainer>
  );
};
