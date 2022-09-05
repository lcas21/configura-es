import { InputText } from "../../components/moleculas/inputText"

export const Login = () => {
  return (
    <div className='w-sreen h-screen bg-gray-50 flex justify-center'>
      <div className='w-full h-full max-w-screen-xl grid grid-cols-2'>
        <aside className="flex justify-center items-center"><img src="faspm.svg" alt="" /></aside>
        <main className=" flex flex-col justify-center items-center gap-16 px-6">
            <h1 className='font-bold text-3xl'>Controle seus gastos</h1>
            <form className='flex flex-col w-full px-6 gap-2'>
                <InputText label='email' type='email'/>
                <InputText label='senha' type='password'/>
                <button className=' bg-blue-200'>Login</button>
                
            </form>
            <a href="/registro">Criar Conta</a>
        </main>
      </div>
    </div>
  );
};
