import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";
import Equipamentos from ".././components/elements/Equipamentos";
import Beneficio from ".././components/elements/Beneficios";
import ItemBlog from ".././components/elements/ItemBlog";
import { Button } from "@/components/ui/button";

import lorrayne from ".././assets/Lorrayne.jpg";
import lorrayneX from ".././assets/LorrayneX.jpg";
import leandro from ".././assets/Leandro.jpeg";
import Lavieen from ".././assets/Lavieen2.jpeg";
import Elyon from ".././assets/Elyon.webp";
import SopranoIce from ".././assets/SopranoIce.jpeg";
import Ultraformer from ".././assets/Ultraformer.jpeg";
import Acrus from ".././assets/Acrus.jpeg";
import Banner from ".././assets/BannerWhatsapp.png";
import testeBanner1 from ".././assets/Nature.png";
import testeBanner2 from ".././assets/Nature (1).png";
import testeBanner3 from ".././assets/Nature (2).png";

import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TfiAlarmClock } from "react-icons/tfi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiMedal } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function App() {
  return (
    <>
      <Header />
      <div
        id="home"
        className="md:relative mmd:w-full mmd:!justify-center bg-white h-screen flex mmd:flex-col justify-end pt-28 mmd:pt-2 items-start cursor-default"
      >
        <div className="md:absolute shadow-2xl left-28 mmd:left-0 mt-20 mmd:mt-0 z-50 bg-zinc-50 flex flex-col p-5 items-start justify-center mmd:w-[90%] w-[40%] rounded-2xl">
            <p className=" text-3xl font-semibold mb-0">Seja bem vindo!</p>
            <p className="pb-4 text-blue text-4xl font-semibold mt-0">
              Somos a <span className="font-bold">GERAIS LASER</span>
            </p>
            <hr className="border-[3px] border-black w-16"></hr>
            <p className="py-4 w-[70%] mmd:w-[90%] text-2xl ">
              Potencialize sua clínica com equipamentos estéticos de alta
              performance e com os melhores preços do mercado.
            </p>
            <div className="flex mmd:flex-col gap-4">
              <a
                href="https://wa.me/5531992235864?text=Ol%C3%A1%21+Vim+pelo+site+da+Gerais+Laser+e+quero+mais+informa%C3%A7%C3%B5es."
                target="_blank"
              >
                <Button variant="default" className="flex gap-2">
                  Entre em contato{" "}
                  <FaWhatsapp className="cursor-pointer w-6 h-6" />
                </Button>
              </a>
              <a href="/#sobre">
                <Button variant="outline" className="flex gap-2">
                  Sobre nós{" "}
                  <IoIosArrowDown className="cursor-pointer w-6 h-6" />
                </Button>
              </a>
            </div>
        </div>
        <div className="w-[60%] mmd:w-full md:mr-10 shadow-2xl rounded-2xl right-0 md:absolute flex justify-start items-center">
          <img
            src={lorrayne}
            className="flex justify-center items-center  rounded-2xl"
            alt="Gerais Laser"
          />
        </div>
      </div>

      <div
        id="sobre"
        className=" bg-white  flex justify-center pt-32 items-start cursor-default"
      >
        <div className="max-w-[90%] flex gap-8">
          <div className="w-full z-50 flex justify-start items-center ">
            <div className="w-[100%] shadow-2xl rounded-2xl bg-zinc-50 p-5 grid-cols-12 grid">
              <div className="col-span-7">
                <p className="font-bold text-4xl mt-0">GERAIS LASER</p>
                <p className="pb-4 font-medium text-3xl mt-0">
                  Nossa identidade e compromisso
                </p>
                <p className="text-2xl mt-0">
                  Bem-vindo à GERAIS LASER, sua parceira confiável em soluções
                  avançadas de locação de equipamentos médicos e estéticos de
                  ponta. Desde 2019 estamos comprometidos em proporcionar
                  resultados excepcionais e uma experiência incomparável aos
                  nossos clientes.
                </p>
              </div>
              <div className="col-span-1 w-[3px] flex justify-end rounded-full h-full bg-black"></div>
              <div className="col-span-4 flex flex-col items-start justify-between">
                <div className="flex gap-2 font-semibold text-2xl items-center">
                  <CiMedal className="w-16 h-16" /> Garantia de qualidade
                </div>
                <div className="flex gap-2 font-semibold text-2xl items-center">
                  <TfiAlarmClock className="w-14 h-14" /> Pontualidade
                </div>
                <div className="flex gap-2 font-semibold text-2xl items-center">
                  <IoShieldCheckmarkOutline className="w-14 h-14" />{" "}
                  Credibilidade
                </div>
                <div className="flex gap-2 font-semibold text-2xl items-center">
                  <MdOutlineSupportAgent className="w-14 h-14" /> Suporte
                  individualizado
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center rounded-2xl">
            <div className="w-[100%] shadow-2xl bg-gray-50 rounded-2xl ">
              <img
                src={leandro}
                className="flex justify-center items-center rounded-2xl p-5"
                alt="Gerais Laser"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="equipamentos"
        className="pt-28 w-full flex flex-col items-center justify-center"
      >
        <div className="w-full flex justify-center">
          <div className="w-[90%] flex justify-start">
            <p className="font-bold w-fit text-3xl mb-10 uppercase ">
              Catálogo de equipamentos
            </p>
          </div>
        </div>
        <div className="w-[90%] mb-16 gap-6 justify-center grid grid-cols-12">
          <Equipamentos
            img={Lavieen}
            title="Lavieen"
            subTitle="Laser de Thulium"
            desc="Excelência e inovação em rejuvenescimento cutâneo, proporcionando resultados naturais e uma pele visivelmente mais jovem"
            href="/lavieen"
          />
          <Equipamentos
            title="Soprano Ice"
            subTitle="Depilação a laser de diodo"
            desc="A solução definitiva em depilação a laser, garantindo conforto máximo com eficácia superior para todos os tipos de pele."
            img={SopranoIce}
            href="/lavieen"
          />
          <Equipamentos
            title="Ultraformer 3"
            subTitle="Ultrasom micro e macro focado"
            desc="O Ultraformer III é a última palavra para tratamento da flacidez,
             contorno corporal e ancoragem muscular no mundo."
            img={Ultraformer}
            href="/lavieen"
          />
          <Equipamentos
            title="Acrus"
            subTitle="Depilação a laser de diodo"
            desc=" Inovação em depilação a laser, oferecendo uma experiência praticamente indolor com resultados duradouros para todos os tipos de pele."
            img={Acrus}
            href="/lavieen"
          />
          <Equipamentos
            title="Endolaser Elyon"
            subTitle=" Laser subdérmico"
            desc="O Endolaser Elyon redefine os padrões em tratamentos a laser, oferecendo precisão inigualável em rejuvenescimento e remodelação corporal."
            img={Elyon}
            href="/lavieen"
          />
          <Equipamentos
            title="Inkie"
            subTitle="Remoção de tatuagem"
            desc="Revolucione sua prática de remoção de tatuagens com tecnologia de ponta, garantindo eficácia e segurança em cada sessão."
            img={Acrus}
            href="/lavieen"
          />
          <Equipamentos
            title="Artix"
            subTitle="Criolipóse"
            desc="Esculpir o corpo nunca foi tão eficaz, com a tecnologia de congelamento de gordura que redefine contornos e melhora a silhueta."
            img={Ultraformer}
            href="/lavieen"
          />
          <Equipamentos
            title="Lyra"
            subTitle="Luz Intensa Pulsada"
            desc="Transforme a pele com tecnologia avançada, tratando eficazmente manchas, rugas e lesões vasculares para uma aparência rejuvenescida."
            img={Acrus}
            href="/lavieen"
          />
          <Equipamentos
            title="LightSheer ET"
            subTitle="Depilação a laser"
            desc="Excelência e precisão em depilação a laser, proporcionando resultados duradouros e confortáveis para todos os tipos de pele."
            img={Ultraformer}
            href="/lavieen"
          />
          <Equipamentos
            title="Solon"
            subTitle="Luz Intensa Pulsada"
            desc="A solução completa para rejuvenescimento e correção da pele, utilizando tecnologia de luz pulsada para resultados visíveis e seguros."
            img={Acrus}
            href="/lavieen"
          />
        </div>
      </div>

      <div
        id="fidelidade"
        className="mb-12 pt-32 relative bg-white h-screen flex justify-end  items-start cursor-default"
      >
        <div className="absolute shadow-2xl left-28 mmd:left-10 mt-28 z-50 bg-zinc-50 flex flex-col p-5 items-start justify-center mmd:!w-[80%] mlg:w-[60%] w-[40%] rounded-2xl">
          <p className=" text-3xl font-bold mb-0">
            Plano fidelidade | Gerais Laser
          </p>
          <p className="py-4 w-[80%] text-2xl ">
            Maximize seus benefícios com o plano fidelidade da Gerais Laser:
            descontos exclusivos em equipamentos, promoções em serviços online e
            mais vantagens. Torne-se um membro hoje!
          </p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/5531992235864?text=Ol%C3%A1%21+Vim+pelo+site+da+Gerais+Laser+e+quero+mais+informa%C3%A7%C3%B5es+sobre+o+plano+fidelidade."
              target="_blank"
            >
              <Button variant="default" className="flex gap-2">
                Virar membro <FaWhatsapp className="cursor-pointer w-6 h-6" />
              </Button>
            </a>
            <a href="/#informações">
              <Button variant="outline" className="flex gap-2">
                Mais informações
                <IoIosArrowDown className="cursor-pointer w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>
        <div className="w-[50%] mr-28 shadow-2xl mlg:w-[70%] rounded-2xl mmd:!w-full right-0 absolute flex justify-start items-center">
          <img
            src={lorrayneX}
            className="flex justify-center items-center  rounded-2xl"
            alt="Gerais Laser"
            width={1080}
            height={1080}
          />
        </div>
      </div>
      <div id="informações" className="w-full flex justify-center pt-36">
        <div className="flex items-start flex-col w-[90%] gap-10 ">
          <Beneficio
            left={true}
            title="Desconto de 20% em todos os equipamentos"
            desc="Como parte do nosso plano fidelidade, oferecemos um desconto especial de 20% em todos os equipamentos estéticos, válido para clientes que alugam no mínimo uma data por mês."
          />
          <Beneficio
            left={false}
            title="Convênio com clinica medica"
            desc="Oferecemos convênio com clínica médica de várias especialidades, com descontos exclusivos para consultas. Valorizamos a sua saúde e estamos comprometidos em fornecer benefícios exclusivos para os seus clientes."
          />
          <Beneficio
            left={true}
            title="Criação de websites individuais"
            desc="Nosso plano fidelidade oferece a criação de websites individuais com desconto exclusivo. Seja para clínicas ou portfólios pessoais, valorizamos sua singularidade e estamos comprometidos em fornecer soluções personalizadas."
          />
          <Beneficio
            left={false}
            title="Atendimento personalizado e exclusivo"
            desc="Nosso plano fidelidade inclui atendimento personalizado e suporte técnico para dúvidas sobre as máquinas. Valorizamos sua fidelidade e estamos aqui para oferecer um serviço exclusivo."
          />
          <Beneficio
            left={true}
            title="Espaço de utilização"
            desc="Oferecemos um desconto na locação de espaços exclusivos para cursos, treinamentos e atendimentos. Estamos comprometidos em fornecer um ambiente adequado e exclusivo para suas atividades."
          />
          <Beneficio
            left={false}
            title="Cursos e mentorias"
            desc="Nosso plano fidelidade inclui descontos em cursos e mentorias com profissionais especializados. Valorizamos sua busca por conhecimento e estamos comprometidos em oferecer benefícios exclusivos."
          />
          <Beneficio
            left={true}
            title="Criação de criativos "
            desc="Oferecemos descontos na criação de conteúdos criativos para posts e stories do Instagram, catálogos de preços e muito mais. Valorizamos a sua presença online e estamos aqui para fornecer soluções exclusivas e personalizadas."
          />
          <Beneficio
            left={false}
            title="Acesso a materiais de divulgação"
            desc="Nosso plano fidelidade oferece acesso a materiais exclusivos de divulgação. Valorizamos sua visibilidade e estamos comprometidos em fornecer recursos exclusivos para promover o seu negócio."
          />
          <Beneficio
            left={true}
            title="Consultoria em marketing digital"
            desc="Nosso plano fidelidade oferece consultoria em marketing digital. Valorizamos sua presença online e estamos comprometidos em fornecer orientação especializada para impulsionar o seu negócio."
          />
          <Beneficio
            left={false}
            title="Parcelamento no crédito"
            desc="Facilite suas compras com nosso parcelamento no crédito. Aproveite a conveniência de dividir o pagamento e tenha mais flexibilidade para adquirir o que você precisa."
          />
        </div>
      </div>

      <div
        id="blog"
        className="mb-10 w-full items-center pt-28 flex flex-col cursor-default"
      >
        <div className="w-[80%]">
          <p className="text-3xl rounded-2xl font-bold w-fit justify-start">
            Blog Gerais Laser
          </p>
        </div>
        <div className="w-[80%] flex justify-start pt-10 flex-wrap gap-14 ">
          <ItemBlog
            img={testeBanner1}
            type="Equipamento"
            title="Benefícios do Lavien"
            desc="10 mitos e verdades a respeito do laser Lavieen"
            name="Larissa Trivial"
            data="2024."
            profile={lorrayneX}
            href="/BlogLavieen"
          />
          <ItemBlog
            img={testeBanner2}
            type="Equipamento"
            title="Benefícios do Lavien"
            desc="10 mitos e verdades a respeito do laser Lavieen"
            name="Lorrayne Souza"
            data="2024."
            profile={lorrayne}
            href="/BlogLavieen"
          />
          <ItemBlog
            img={testeBanner3}
            type="Equipamento"
            title="Benefícios do Lavien"
            desc="10 mitos e verdades a respeito do laser Lavieen"
            name="Juan Costa"
            data="2024."
            profile={leandro}
            href="/BlogLavieen"
          />
        </div>
      </div>

      <div
        id="contato"
        className="mb-10 flex justify-center items-start cursor-default pt-10"
      >
        <div className="max-w-[70%] flex gap-8">
          <div className="w-[100%] shadow-2xl rounded-2xl bg-zinc-50 p-5 flex flex-col">
            <div className="col-span-7">
              <p className="font-bold text-4xl mt-0">CONTATO</p>
              <p className="text-2xl py-4">
                Tem alguma dúvida ou precisa de mais informações sobre nossos
                serviços? Estamos aqui para ajudar! Entre em contato conosco
                agora mesmo pelo WhatsApp ou Instagram para uma experiência
                personalizada e respostas rápidas. Estamos ansiosos para
                atendê-lo e ajudá-lo a alcançar seus objetivos estéticos com a
                qualidade Gerais Laser!
              </p>
            </div>
            <div className="flex mmd:flex-col items-center gap-8 pt-4">
              <div className="flex flex-col gap-4 ">
                <Button variant="default" className="flex gap-2">
                  Nosso WhatsApp{" "}
                  <FaWhatsapp className="cursor-pointer w-6 h-6" />
                </Button>
                <Button variant="default" className="flex gap-2">
                  Nosso Instagram{" "}
                  <FaInstagram className="cursor-pointer w-6 h-6" />
                </Button>
              </div>
              <div className="h-full w-1 bg-black"></div>
              <div className="flex flex-col gap-4  h-full justify-around">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="w-6 h-6" />
                  <p className="text-xl font-semibold">(31) 99223-5864</p>
                </div>
                <div className="flex items-center gap-2">
                  <IoMail className="w-7 h-7" />{" "}
                  <p className="text-xl font-semibold">
                    contato@geraislaser.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
