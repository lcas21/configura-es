import Link from "next/link";
import { Button } from "../../components/atoms/Button";
import { InputText } from "../../components/moleculas/inputText";
import { Aside } from "../../components/organism/aside";
import { HeroMain } from "../../components/organism/main";
import {
  TamplateCont,
  TamplateContainer,
  TamplateMain,
} from "../../components/template";

export const Login = () => {
  return (
    <TamplateContainer>
      <TamplateCont>
        <Aside />
        <TamplateMain>
          <HeroMain
            h1="FASPM"
            h2="Fundo de Assistencia social da Polícia Militar do Pará"
          />
          <form className="flex flex-col w-full px-6 gap-4 max-w-md">
            <InputText label="Email" type="email" placeholder="Email" />
            <InputText label="Senha" type="password" placeholder="Senha" />
            <Button> Login</Button>
          </form>
          <Link href="/register">Criar Conta</Link>
        </TamplateMain>
      </TamplateCont>
    </TamplateContainer>
  );
};
