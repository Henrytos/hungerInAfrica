import { Link } from "react-router-dom";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <main id="start">
        <Section className="bg-zinc-900/50 text-zinc-100 h-[80vh]">
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

          <main className="flex flex-col  gap-10 py-[20%]">
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
          hover:bg-zinc-100 hover:text-zinc-900 transition-colors
          "
            >
              VER MAPA
            </Link>
          </main>
        </Section>
      </main>

      <Section className="bg-[#485342] text-zinc-50">
        <div className="flex gap-10 items-center h-[60vh] max-lg:flex-col max-lg:py-4 max-lg:h-[100vh]">
          <img
            src="https://images.unsplash.com/photo-1543180930-261980d4868a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1356&q=80"
            alt=""
            className="h-full w-[50%] object-cover max-lg:w-auto"
          />
          <div className="w-full max-w-sm text-base flex flex-col  gap-4">
            <span className="text-4xl font-semibold">CAUSAS:</span>
            <span>
              Na África, a falta de comida resulta de vários fatores como o
              processo colonial, a concentração de poder, as condições
              climáticas, a corrupção das autoridades, a baixa produtividade
              agrícola, o aumento populacional, entre outros.
            </span>
            <span>
              Durante a colonização, os países que ocuparam a África retiraram
              do território riquezas materiais e matérias-primas que poderiam
              servir para o desenvolvimento da região. Além disso, escravizou
              seus povos, retirando a população jovem que tinha condições de
              trabalhar.
            </span>
            <a
              href="#otherCauses"
              className="text-center  max-w-[8rem] text-sm
          py-3 border-2 border-zinc-100  rounded-lg
          hover:bg-zinc-100 hover:text-[#485342] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
        </div>
      </Section>
      <Section className="bg-[#c7cec9] text-[#485342] flex flex-col gap-8 py-8">
        <span
          className="text-4xl font-semibold block text-center "
          id="otherCauses"
        >
          OUTRAS CAUSAS
        </span>
        <main className="grid grid-cols-3 gap-x-4 gap-y-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex flex-col  gap-4">
            <img
              src="https://www.coladaweb.com/wp-content/uploads/2018/02/20180227-colonizacao-africa.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover"
            />
            <span className="text-center text-2xl ">Processo Colonial</span>
            <a
              href="#otherCauses"
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
          <div className="flex flex-col  gap-4">
            <img
              src="https://www.coladaweb.com/wp-content/uploads/2018/02/20180227-colonizacao-africa.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover"
            />
            <span className="text-center text-2xl ">
              A Concetração De Poder
            </span>
            <a
              href="#otherCauses"
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
          <div className="flex flex-col  gap-4">
            <img
              src="https://www.coladaweb.com/wp-content/uploads/2018/02/20180227-colonizacao-africa.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover"
            />
            <span className="text-center text-2xl ">
              As Condições Climáticas
            </span>
            <a
              href="#otherCauses"
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
          <div className="flex flex-col  gap-4">
            <img
              src="https://www.coladaweb.com/wp-content/uploads/2018/02/20180227-colonizacao-africa.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover"
            />
            <span className="text-center text-2xl ">
              A Corrupção Das
              <br />
              Autoridades
            </span>
            <a
              href="#otherCauses"
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
          <div className="flex flex-col  gap-4">
            <img
              src="https://www.coladaweb.com/wp-content/uploads/2018/02/20180227-colonizacao-africa.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover"
            />
            <span className="text-center text-2xl ">
              A Baixa Produtividade <br /> Agrícola
            </span>
            <a
              href="#otherCauses"
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
          <div className="flex flex-col  gap-4">
            <img
              src="https://www.coladaweb.com/wp-content/uploads/2018/02/20180227-colonizacao-africa.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover"
            />
            <span className="text-center text-2xl ">
              O Aumento <br /> Populacional
            </span>

            <a
              href="#otherCauses"
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
        </main>
      </Section>
    </>
  );
}
