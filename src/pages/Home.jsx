import { Link } from "react-router-dom";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <main id="start">
        <Section className="bg-zinc-900/30 text-zinc-100 h-[80vh]">
          <header
            className="flex justify-between items-center 
          bg-transparent h-20 "
          >
            <span>logo</span>
            <nav className="flex gap-4 items-center">
              <Link to="/hungerMap" className="text-sm">
                MAPA
              </Link>
              <select
                name="idioma"
                id="idioma"
                className="cursor-pointer p-2 rounded-md bg-transparent text-sm"
              >
                <option value="idioma">PT</option>
              </select>
            </nav>
          </header>

          <main className="flex flex-col gap-10 py-[20%]">
            <span className="font-medium text-5xl max-sm:text-4xl">
              FOME NA ÁFRICA
            </span>
            <span className="w-full max-w-lg text-base">
              A África é o continente que mais sofre com a escassez de
              alimentos. Segundo dados da FAO(Organização para a Alimentação e
              Agricultura a ONU- Organização das Nações Unidas), a fome atinge
              ao menos 236 milhões de pessoas.
            </span>
            <Link
              className="text-center  max-w-[8rem] text-sm
          py-3 border-2 border-zinc-100  rounded-lg
          hover:bg-zinc-100 hover:text-zinc-950 transition-colors
          "
            >
              VER MAPA
            </Link>
          </main>
        </Section>
      </main>

      <Section>
        <div className="flex justify-between items-center h-[80vh]">
          <img
            src="https://images.unsplash.com/photo-1543180930-261980d4868a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1356&q=80"
            alt=""
            className="h-full"
          />
          <span className="w-full max-w-lg text-base">
            A África é o continente que mais sofre com a escassez de alimentos.
            Segundo dados da FAO(Organização para a Alimentação e Agricultura a
            ONU- Organização das Nações Unidas), a fome atinge ao menos 236
            milhões de pessoas.
          </span>
        </div>
      </Section>
    </>
  );
}
