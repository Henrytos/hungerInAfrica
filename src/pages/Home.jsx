import { Link } from "react-router-dom";
import Section from "../components/Section";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "../components/Footer";

import {
  modalOne,
  modalTwo,
  modalThree,
  modalFour,
  modalFive,
  modalSix,
} from "./textModais";
import Bold from "../components/Bold";
import LinkFromPage from "../components/LinkFromPage";
export default function Home() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleShow2 = () => setShow2(true);

  const handleClose2 = () => setShow2(false);

  const [targetModal, setTargetModal] = useState(modalOne);

  return (
    <>
      <main id="start">
        <Section className="bg-zinc-900/50 text-zinc-100 h-[100vh]  ">
          <header
            className="flex justify-between items-center 
          bg-transparent h-20 max-sm:flex-col max-sm:justify-center"
          >
            <img
              src="/imgs/logoTipo.png"
              className="h-32 -translate-x-[10%] translate-y-4"
              alt="logo do site"
            />
            <nav className="flex gap-4 items-center">
              <Link to="/hungerMap" className="text-sm" id="linkMap">
                MAPA
              </Link>
              <span
                className="text-sm uppercase cursor-pointer"
                id="linkMap"
                onClick={() => {
                  handleShow2();
                }}
              >
                referências
              </span>
              <select
                name="idioma"
                id="idioma"
                className="cursor-pointer p-2 rounded-md bg-transparent text-sm"
              >
                <option value="idioma">PT-BR</option>
              </select>
            </nav>
          </header>

          <main className=" h-full flex flex-col  gap-10 justify-center items-center">
            <span className="font-medium text-5xl max-sm:text-4xl">
              FOME NA ÁFRICA
            </span>
            <span className="w-full max-w-3xl text-2xl">
              A África é o continente que mais sofre com a escassez de
              alimentos. Segundo dados da FAO(Organização para a Alimentação e
              Agricultura a ONU- Organização das Nações Unidas), a fome atinge
              ao menos 236 milhões de pessoas.
            </span>
            <Link
              className="text-center  w-[8rem] text-sm
          py-3 border-2 border-zinc-100  rounded-lg
          hover:bg-zinc-100 hover:text-[#485342] transition-colors
          "
              to="/hungerMap"
              id="btnStart"
            >
              VER MAPA
            </Link>
          </main>
        </Section>
      </main>

      <Section className="bg-[#485342] text-zinc-50">
        <div className="flex justify-center gap-10 items-center h-[60vh] max-lg:flex-col max-lg:py-4 max-lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1543180930-261980d4868a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1356&q=80"
            alt=""
            className="h-full w-[50%] object-cover max-lg:w-[80%] max-sm:w-[100%]"
          />
          <div className="w-full max-w-sm text-base flex flex-col  gap-4 max-lg:max-w-[80%] max-sm:max-w-full">
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
              id="btnCausas"
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
          <div className="flex flex-col  gap-4 items-center">
            <img
              src="/imgs/colonizacao-africa.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover  h-[80%] max-h-72"
            />
            <span className="text-center text-2xl ">Processo Colonial</span>
            <a
              id="btnGalery"
              onClick={() => {
                handleShow();
                setTargetModal(modalOne);
              }}
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>

          <div className="flex flex-col  gap-4 items-center">
            <img
              src="/imgs/condicoeCLimaticas.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover h-[80%] max-h-72"
            />
            <span className="text-center text-2xl ">
              As Condições Climáticas
            </span>
            <a
              id="btnGalery"
              onClick={() => {
                handleShow();
                setTargetModal(modalTwo);
              }}
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
          <div className="flex flex-col  gap-4 items-center">
            <img
              src="/imgs/cdp.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto h-72 object-cover"
            />
            <span className="text-center text-2xl ">
              A Concetração De Poder
            </span>
            <a
              id="btnGalery"
              onClick={() => {
                handleShow();
                setTargetModal(modalThree);
              }}
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
          <div className="flex flex-col  gap-4 items-center">
            <img
              src="/imgs/corrupcaoNaAfrica.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover h-72"
            />
            <span className="text-center text-2xl ">
              A Corrupção Das
              <br />
              Autoridades
            </span>
            <a
              id="btnGalery"
              onClick={() => {
                handleShow();
                setTargetModal(modalFour);
              }}
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
          <div className="flex flex-col  gap-4 items-center">
            <img
              src="/imgs/agricultura na africa.avif"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover h-72"
            />
            <span className="text-center text-2xl ">
              A Baixa Produtividade <br /> Agrícola
            </span>
            <a
              id="btnGalery"
              onClick={() => {
                handleShow();
                setTargetModal(modalFive);
              }}
              className="text-center block m-auto  min-w-[8rem] text-sm
          py-3 border-2 border-[#485342]  rounded-lg
          hover:bg-[#485342] hover:text-[#c7cec9] transition-colors
          "
            >
              VER MAIS
            </a>
          </div>
          <div className="flex flex-col  gap-4 items-center">
            <img
              src="/imgs/aumentoPolicional.jpg"
              alt="image do processo colonial"
              className="w-full max-w-xs max-sm:block max-sm:m-auto object-cover h-72"
            />
            <span className="text-center text-2xl ">
              O Aumento <br /> Populacional
            </span>

            <a
              id="btnGalery"
              onClick={() => {
                handleShow();
                setTargetModal(modalSix);
              }}
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

      <Section className="bg-[#485342] text-zinc-50">
        <div className="flex justify-center gap-10 items-center h-[60vh] max-lg:flex-col max-lg:py-4 max-lg:h-auto">
          <div className="w-full max-w-sm text-base flex flex-col  gap-4 max-lg:max-w-[80%] max-sm:max-w-full">
            <span className="text-4xl font-semibold">CAUSAS:</span>
            <span>
              Uma administração correta, incentivo à agricultura familiar e a
              universalização do alimento se tornam fatores primordiais. As
              condições atuais de distribuição de terras e governos com
              conflitos étnicos impedem esse desenvolvimento. Pois além das
              ONG’s, o Estado precisa engajar e investir nas rendas familiares,
              desfrutar da matéria-prima do continente, ou seja, petróleo e
              minérios, como são valiosos, poderiam pegar o a monetização da
              exportação e investir para reconstrução do país.
            </span>
          </div>
          <img
            src="/imgs/mulherAfricana.jpg"
            alt=""
            className="h-full w-[50%] object-cover max-lg:w-[80%] max-sm:w-[100%]"
          />
        </div>
      </Section>

      <Footer />

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="text-[#485342]">{targetModal.title}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col gap-4">
          <img
            src={targetModal.img}
            alt={targetModal.title}
            className="m-auto max-w-xs w-full object-cover h-80"
          />
          <div className="flex flex-col gap-2">
            {targetModal.text.map((text, i) => (
              <span>{text}</span>
            ))}
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="text-2xl font-semibold uppercase text-[#485342]">
              Referências Bibliográficas:
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col gap-4">
          <div>
            <Bold>MUNDO EDUCAÇÃO</Bold>. As Principais Causas da Fome na África.
            Mundo Educação. Disponível em:
            <LinkFromPage>
              https://mundoeducacao.uol.com.br/geografia/as-principais-causas-fome-na-africa.htm.
            </LinkFromPage>
            Acesso em: 19 set. 2023.
          </div>

          <div>
            <Bold>TODA MATÉRIA</Bold>. Fome na África. Toda Matéria. Disponível
            em:
            <LinkFromPage>
              https://www.todamateria.com.br/fome-na-africa/.
            </LinkFromPage>
            Acesso em: 19 set. 2023.
          </div>
          <div>
            <Bold>BRASIL ESCOLA</Bold>. Conflitos na África. Brasil Escola.
            Disponível em:
            <LinkFromPage>
              https://brasilescola.uol.com.br/geografia/conflitos-na-africa.htm.
            </LinkFromPage>
            Acesso em: 19 set. 2023.
          </div>
          <div>
            <Bold>VALOR ECONÔMICO</Bold>. África pode perder até 15% do PIB por
            mudanças climáticas, diz Banco de Desenvolvimento. Valor Econômico.
            Disponível em:
            <LinkFromPage>
              https://valor.globo.com/mundo/noticia/2022/09/13/africa-pode-perder-ate-15percent-do-pib-por-mudancas-climaticas-diz-banco-de-desenvolvimento.ghtml
            </LinkFromPage>
            Acesso em: 19 set. 2023.
          </div>
          <div>
            <Bold>TODO ESTUDO</Bold>. Fome na África. Todo Estudo. Disponível
            em:
            <LinkFromPage>
              https://www.todoestudo.com.br/geografia/fome-na-africa.
            </LinkFromPage>
            Acesso em: 19 set. 2023.
          </div>
          <div>
            <Bold>WORLD FOOD PROGRAMME (WFP)</Bold>. Hunger Map. Disponível em:
            <LinkFromPage>https://hungermap.wfp.org/.</LinkFromPage> Acesso em:
            19 set. 2023.
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
