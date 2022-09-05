import Link from "next/link";
import { Button } from "../../components/atoms/Button";
import { InputText } from "../../components/moleculas/inputText";

export const Login = () => {
  return (
    <div className="w-sreen h-screen bg-gray-50 flex justify-center">
      <div className="w-full h-full max-w-screen-xl grid grid-cols-2">
        <aside className="flex justify-center items-center">
          <img src="faspm.svg" alt="" />
        </aside>
        <main className=" flex flex-col justify-center items-center gap-16 px-6">
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-bold text-3xl">FASPM</h1>
            <h2>Fundo de Assistencia social da Polícia Militar do Pará</h2>
          </div>

          <form className="flex flex-col w-full px-6 gap-4">
            <InputText label="Email" type="email" />
            <InputText label="Senha" type="password" />
            <Button> Login</Button>
          </form>
          <Link href='/register'>Criar Conta</Link>
        </main>
      </div>
    </div>
  );
};
