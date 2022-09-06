interface props {
  h1 : string;
  h2 : string;
}
export const HeroMain = ({h1,h2}:props) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <h1 className="font-bold text-3xl mb-1">{h1}</h1>
      <h2>{h2}</h2>
    </div>
  );
};
