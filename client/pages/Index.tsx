import { useState, useEffect } from "react";
import { ChevronDown, Leaf, Building2, Users, Scale, MapPin, ArrowRight, FileCheck } from "lucide-react";

interface Authority {
  id: string;
  name: string;
  level: "ministry" | "system" | "authority";
  shortDescription: string;
  territory: string;
  mainFunctions: string[];
  importance: string;
  legalBasis: string[];
  icon: React.ReactNode;
  colorBg: string;
  colorBorder: string;
  colorText: string;
  examples?: { name: string; image: string }[];
}

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [activeAuthorityIndex, setActiveAuthorityIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const authorities: Authority[] = [
    {
      id: "ministry",
      name: "Ministerio de Ambiente y Desarrollo Sostenible",
      level: "ministry",
      shortDescription: "Ente rector de la gestión ambiental en Colombia",
      territory: "Nivel Nacional",
      mainFunctions: [
        "Formular la política ambiental nacional",
        "Regular uso sostenible de recursos naturales",
        "Coordinar el Sistema Nacional Ambiental (SINA)",
        "Establecer normas de protección ambiental",
        "Representar a Colombia en asuntos ambientales internacionales",
      ],
      importance:
        "Lidera la gestión ambiental del país y establece directrices para protección de ecosistemas, biodiversidad y desarrollo sostenible.",
      legalBasis: [
        "Ley 99 de 1993",
        "Decreto 3570 de 2011",
        "Constitución Política de Colombia (Art. 79, 80)"
      ],
      icon: <Building2 className="w-12 h-12" />,
      colorBg: "bg-emerald-50",
      colorBorder: "border-emerald-300",
      colorText: "text-emerald-700",
    },
    {
      id: "car",
      name: "Corporaciones Autónomas Regionales",
      level: "authority",
      shortDescription: "Máxima autoridad ambiental en su región",
      territory: "Jurisdicción Regional",
      mainFunctions: [
        "Ejecutar políticas ambientales nacionales en regiones",
        "Administrar recursos naturales renovables regionales",
        "Otorgar licencias y permisos ambientales",
        "Realizar seguimiento y control ambiental",
        "Promover educación ambiental",
        "Ejecutar proyectos de conservación y restauración",
      ],
      importance:
        "Aplican directamente la política ambiental en regiones, desarrollando acciones de conservación de bosques, protección de cuencas hidrográficas y control de contaminación.",
      legalBasis: [
        "Ley 99 de 1993 (Art. 23-41)",
        "Constitución Política (Art. 79, 80)",
        "Función Pública"
      ],
      icon: <MapPin className="w-12 h-12" />,
      colorBg: "bg-green-50",
      colorBorder: "border-green-300",
      colorText: "text-green-700",
      examples: [
        { name: "CVC - Valle del Cauca", image: "/images/cvc_logo.png" },
        { name: "CAR - Cundinamarca", image: "/images/car_cundinamarca_logo.jpg" },
        { name: "CARDER - Risaralda", image: "/images/carder_logo.jpg" },
        { name: "Corpoamazonia", image: "/images/corpoamazonia_logo.jpg" },
      ],
    },
    {
      id: "urban",
      name: "Grandes Centros Urbanos",
      level: "authority",
      shortDescription: "Autoridades ambientales urbanas",
      territory: "Ciudades con +1M habitantes",
      mainFunctions: [
        "Ejercer funciones de autoridad ambiental urbana",
        "Otorgar licencias y permisos ambientales",
        "Controlar vertimientos y emisiones contaminantes",
        "Supervisar disposición de residuos sólidos",
        "Aplicar medidas de corrección ambiental",
        "Ejecutar programas de saneamiento",
      ],
      importance:
        "Gestionan los desafíos ambientales únicos de las ciudades como contaminación del aire, residuos y contaminación hídrica.",
      legalBasis: [
        "Ley 99 de 1993 (Art. 66)",
        "Constitución Política de Colombia",
        "Decretos municipales específicos"
      ],
      icon: <Building2 className="w-12 h-12" />,
      colorBg: "bg-teal-50",
      colorBorder: "border-teal-300",
      colorText: "text-teal-700",
      examples: [
        { name: "Bogotá - SDA", image: "/images/sda_logo.jpeg" },
        { name: "Medellín - AMVA", image: "/images/amva_logo.jpg" },
        { name: "Cali - DAGMA", image: "/images/dagma_logo.jpg" },
        { name: "Barranquilla", image: "/images/barranquillaverde_logo.jpg" },
      ],
    },
    {
      id: "special",
      name: "Distritos Especiales",
      level: "authority",
      shortDescription: "Territorios con régimen especial",
      territory: "Distritos Costeros e Históricos",
      mainFunctions: [
        "Ejercer autoridad ambiental urbana especializada",
        "Proteger ecosistemas costeros estratégicos",
        "Desarrollar programas de educación ambiental",
        "Otorgar permisos y autorizaciones ambientales",
        "Coordinar acciones de conservación",
        "Vigilancia de vertimientos y emisiones",
      ],
      importance:
        "Administran territorios con ecosistemas de gran valor ecológico como bahías costeras, ciénagas, manglares y zonas marinas.",
      legalBasis: [
        "Ley 99 de 1993",
        "Ley 768 de 2002",
        "Constitución Política (Art. 286, 322, 328, 356)"
      ],
      icon: <Leaf className="w-12 h-12" />,
      colorBg: "bg-blue-50",
      colorBorder: "border-blue-300",
      colorText: "text-blue-700",
      examples: [
        { name: "Cartagena - EPA", image: "/images/epa_logo.png" },
        { name: "Santa Marta - DADSA", image: "/images/dadsa_logo.jpeg" },
        { name: "Barranquilla Verde", image: "/images/barranquillaverde_logo(1).jpg" },
      ],
    },
    {
      id: "parks",
      name: "Unidad Administrativa Especial de Parques Nacionales",
      level: "authority",
      shortDescription: "Administra el Sistema de Parques Nacionales",
      territory: "Áreas Protegidas Nacionales",
      mainFunctions: [
        "Administrar Parques Nacionales Naturales",
        "Reglamentar uso de áreas protegidas",
        "Proponer políticas de conservación",
        "Coordinar Sistema Nacional de Áreas Protegidas (SINAP)",
        "Realizar estudios para creación de nuevas áreas",
        "Proteger ecosistemas estratégicos",
      ],
      importance:
        "Protege los ecosistemas más importantes del país y conserva una gran parte significativa de la biodiversidad colombiana.",
      legalBasis: [
        "Ley 99 de 1993",
        "Decreto 3572 de 2011",
        "Constitución Política de Colombia"
      ],
      icon: <Leaf className="w-12 h-12" />,
      colorBg: "bg-lime-50",
      colorBorder: "border-lime-300",
      colorText: "text-lime-700",
      examples: [
        { name: "Parque Tayrona", image: "/images/Cabo-San-Juan-Colombia.jpg" },
        { name: "Parque Los Nevados", image: "/images/Nevado-del-Tolima.jpeg" },
        { name: "Parque Chiribiquete", image: "/images/Parque-Chibiriquete.jpg" },
      ],
    },
    {
      id: "indigenous",
      name: "Autoridades Ambientales Indígenas",
      level: "authority",
      shortDescription: "Gobiernos propios de pueblos indígenas",
      territory: "Territorios Indígenas",
      mainFunctions: [
        "Conservación y protección de ecosistemas territoriales",
        "Promoción de uso sostenible de recursos",
        "Protección de fuentes hídricas y bosques",
        "Conservación de conocimientos ancestrales",
        "Participación en consulta previa",
        "Colaboración con autoridades ambientales",
      ],
      importance:
        "Los territorios indígenas albergan parte significativa de la biodiversidad colombiana. Sus conocimientos ancestrales son fundamentales para conservación y lucha contra la deforestación.",
      legalBasis: [
        "Constitución Política (Art. 7, 246, 286, 330)",
        "Ley 99 de 1993",
        "Convenio 169 OIT (Ley 21 de 1991)"
      ],
      icon: <Users className="w-12 h-12" />,
      colorBg: "bg-yellow-50",
      colorBorder: "border-yellow-300",
      colorText: "text-yellow-700",
      examples: [
        { name: "Pueblos Amazónicos", image: "/images/comunidad-indigena.jpg" },
        { name: "Sierra Nevada Santa Marta", image: "/images/Sierra_Nevada_de_Santa_Marta.jpg" },
        { name: "Comunidades Orinoquía", image: "/images/comunidades-orinoquias.jpg" },
      ],
    },
    {
      id: "anla",
      name: "Autoridad Nacional de Licencias Ambientales",
      level: "authority",
      shortDescription: "Evalúa proyectos de impacto ambiental significativo",
      territory: "Competencia Nacional (Grandes Proyectos)",
      mainFunctions: [
        "Evaluar y otorgar licencias ambientales nacionales",
        "Analizar estudios de impacto ambiental",
        "Realizar seguimiento a proyectos autorizados",
        "Imponer medidas preventivas y sanciones",
        "Adelantar procesos sancionatorios",
        "Garantizar espacios de participación ciudadana",
      ],
      importance:
        "Desempeña papel fundamental en SINA evaluando grandes proyectos estratégicos (minería, petróleo, hidroeléctricas, infraestructura) para equilibrar desarrollo económico con protección ambiental.",
      legalBasis: [
        "Decreto-Ley 3573 de 2011",
        "Ley 99 de 1993",
        "Decreto 1076 de 2015"
      ],
      icon: <FileCheck className="w-12 h-12" />,
      colorBg: "bg-cyan-50",
      colorBorder: "border-cyan-300",
      colorText: "text-cyan-700",
      examples: [
        { name: "Proyectos Mineros", image: "/images/proyectos-mineros.jpg" },
        { name: "Proyectos Petroleros", image: "/images/proyectos-petroleo.jpg" },
        { name: "Centrales Hidroeléctricas", image: "/images/hidroelectrica-sogamoso.jpg" },
        { name: "Grandes Infraestructuras", image: "/images/proyectos-civiles.jpeg" },
      ],
    },
  ];

  const regionAuthorities = authorities.filter((a) => a.level === "authority");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white text-slate-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-emerald-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              SINA Colombia
            </span>
          </div>
          <div className="text-sm text-emerald-700 font-medium">Sistema Nacional Ambiental</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div
            className="mb-8 inline-block"
            style={{
              opacity: Math.max(1 - scrollY / 400, 0),
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Constitución Política de 1991 - Ley 99 de 1993
              </span>
            </div>
          </div>

          <h1 className="text-7xl sm:text-8xl font-bold mb-8 leading-tight text-emerald-900">
            <span className="block">Autoridades</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Ambientales de Colombia
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubre cómo funciona el Sistema Nacional Ambiental (SINA) y el
            trabajo integrado de múltiples entidades para proteger el ambiente
            colombiano.
          </p>

          <div className="flex items-center justify-center gap-1 text-emerald-700 font-medium text-sm">
            <span>Desplázate para explorar</span>
            <ChevronDown
              className="w-5 h-5 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        </div>
      </section>

      {/* Infographic Section */}
      <section className = "py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-emerald-900">  
            Infografías Sistema Nacional Ambiental – SINA
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center shadow-lg">
            <div className="rounded-2x1 overflow-hidden border-2 border-emerald-300">
              <img
                src="/images/esquema-sina.jpg"
                alt="Esquema del Sistema Nacional Ambiental"
                className="w-full h-auto"
              />

              <div className="p-6 bg-gradient-to-t from-emerald-50 to-white">
                <h3 className="text-slate-700">
                  Esquema del Sistema Nacional Ambiental
                </h3>
              </div>
            </div>

            <div className="rounded-2x1 overflow-hidden border-2 border-emerald-300">
              <img
                src="/images/estructura-sina.png"
                alt="Estructura del Sistema Nacional Ambiental"
                className="w-full h-auto"
              />

              <div className="p-6 bg-gradient-to-t from-emerald-50 to-white">
                <h3 className="text-slate-700">
                  Estructura del Sistema Nacional Ambiental
                </h3>
              </div>
            </div> 
          </div>  

        </div> 
      </section>

      {/* Video Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-emerald-900">
            Conoce Más Sobre el SINA
          </h2>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GkZlYDxp_WE"
              title="Video explicativo del SINA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>  
        </div>
      </section>

      {/* How SINA Works Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 mb-8">
              <Scale className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Estructura del Sistema</span>
            </div>
            <h2 className="text-6xl font-bold mb-8 text-emerald-900">
              ¿Cómo funciona el
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Sistema Nacional Ambiental?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              El SINA es una estructura integrada que coordina el trabajo de
              múltiples autoridades ambientales en diferentes niveles
              territoriales, todas con el objetivo común de proteger el ambiente
              y promover el desarrollo sostenible.
            </p>
          </div>

          {/* Hierarchy Visualization */}
          <div className="grid gap-12">
            {/* Level 1: Ministry */}
            <div
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: "0s" }}
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-emerald-100 to-green-100 border-2 border-emerald-400 rounded-2xl p-12 hover:border-emerald-600 transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-emerald-600 to-green-700 text-white rounded-xl flex-shrink-0">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-emerald-900">
                        Ministerio de Ambiente y Desarrollo Sostenible
                      </h3>
                      <p className="text-slate-700 text-lg">
                        Ente rector que formula la política ambiental nacional y
                        coordina el Sistema Nacional Ambiental
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <div className="w-1 h-16 bg-gradient-to-b from-emerald-400 to-green-300" />
                </div>
              </div>
            </div>

            {/* Level 2: SINA */}
            <div
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-400 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-700 text-white rounded-lg">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    Sistema Nacional Ambiental (SINA)
                  </h3>
                </div>
                <p className="text-slate-700 mb-8">
                  Marco integrador que articula acciones de autoridades en todos
                  los niveles territoriales
                </p>
                <div className="flex justify-center">
                  <ChevronDown className="w-6 h-6 text-blue-600 animate-bounce" />
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-emerald-300" />
              </div>
            </div>

            {/* Level 3: Regional and Sectoral Authorities */}
            <div
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-emerald-900">
                Autoridades Regionales y Sectoriales
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Corporaciones\nAutónomas\nRegionales",
                    icon: MapPin,
                    color: "from-green-600 to-teal-700",
                  },
                  {
                    name: "Grandes\nCentros\nUrbanos",
                    icon: Building2,
                    color: "from-blue-600 to-cyan-700",
                  },
                  {
                    name: "Distritos\nEspeciales",
                    icon: Leaf,
                    color: "from-teal-600 to-blue-700",
                  },
                  {
                    name: "Parques\nNacionales",
                    icon: Leaf,
                    color: "from-green-600 to-emerald-700",
                  },
                  {
                    name: "Autoridades\nIndígenas",
                    icon: Users,
                    color: "from-yellow-600 to-amber-700",
                  },
                  {
                    name: "ANLA\n(Licencias\nAmbientales)",
                    icon: FileCheck,
                    color: "from-cyan-600 to-blue-700",
                  },
                ].map((auth, idx) => {
                  const Icon = auth.icon;
                  return (
                    <div
                      key={idx}
                      className={`bg-gradient-to-br ${auth.color} p-0.5 rounded-xl hover:scale-105 transition-transform duration-300`}
                      style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
                    >
                      <div className="bg-white rounded-lg p-6 h-full flex flex-col items-center justify-center text-center border border-slate-100">
                        <Icon className="w-8 h-8 mb-3 text-slate-700" />
                        <p className="text-sm font-semibold whitespace-pre-line text-slate-800">
                          {auth.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Common Goal */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-emerald-100 to-green-100 border-2 border-emerald-400 rounded-2xl p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                  <h4 className="text-2xl font-bold text-emerald-900">Objetivo Común</h4>
                </div>
                <p className="text-slate-700 text-lg max-w-2xl">
                  Proteger el ambiente, conservar los recursos naturales
                  renovables y garantizar el desarrollo sostenible de Colombia,
                  cada una en su territorio o ámbito de competencia específico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-300 mb-8">
              <Building2 className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                Autoridades Detalladas
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-4 text-emerald-900">
              Explora cada
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                autoridad ambiental
              </span>
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${activeAuthorityIndex * 100}%)`,
                }}
              >
                {regionAuthorities.map((auth) => (
                  <div
                    key={auth.id}
                    className="w-full flex-shrink-0 p-8 sm:p-12"
                  >
                    <div
                      className={`${auth.colorBg} border-2 ${auth.colorBorder} rounded-3xl p-8 sm:p-12 h-full`}
                    >
                      <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Left Side */}
                        <div className="space-y-8">
                          <div>
                            <div className="flex items-start gap-4 mb-6">
                              <div
                                className={`p-4 rounded-xl flex-shrink-0 bg-emerald-100 ${auth.colorText}`}
                              >
                                {auth.icon}
                              </div>
                              <div>
                                <h3 className={`text-3xl sm:text-4xl font-bold mb-2 ${auth.colorText}`}>
                                  {auth.name}
                                </h3>
                                <p className="text-slate-600 text-sm font-medium">
                                  {auth.territory}
                                </p>
                              </div>
                            </div>
                            <p className="text-slate-700 text-lg leading-relaxed">
                              {auth.shortDescription}
                            </p>
                          </div>

                          <div>
                            <h4 className={`text-lg font-bold mb-4 ${auth.colorText}`}>
                              Funciones Principales
                            </h4>
                            <ul className="space-y-3">
                              {auth.mainFunctions.map((fn, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-3 text-slate-700"
                                >
                                  <span className={`${auth.colorText} font-bold flex-shrink-0`}>
                                    ✓
                                  </span>
                                  <span>{fn}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Side */}
                        <div className="space-y-8">
                          <div className="bg-white/60 border-2 border-slate-200 rounded-2xl p-6">
                            <h4 className={`text-lg font-bold mb-4 ${auth.colorText}`}>
                              Por qué es importante
                            </h4>
                            <p className="text-slate-700 leading-relaxed">
                              {auth.importance}
                            </p>
                          </div>

                          <div>
                            <h4 className={`text-lg font-bold mb-4 ${auth.colorText}`}>
                              Base Legal
                            </h4>
                            <ul className="space-y-2">
                              {auth.legalBasis.map((legal, idx) => (
                                <li key={idx} className="text-slate-700 text-sm flex gap-2">
                                  <span className="text-emerald-600 font-bold">→</span>
                                  {legal}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {auth.examples && (
                            <div>
                              <h4 className={`text-lg font-bold mb-4 ${auth.colorText}`}>
                                Ejemplos
                              </h4>
                              <div className="grid grid-cols-2 gap-3">
                                {auth.examples.map((ex, idx) => (
                                  <div
                                    key={idx}
                                    className="rounded-lg overflow-hidden border-2 border-slate-200 hover:border-emerald-400 transition-colors"
                                  >
                                    <img
                                      src={ex.image}
                                      alt={ex.name}
                                      className="w-full h-32 object-cover"
                                    />
                                    <div className="p-2 bg-white">
                                      <p className="text-xs font-semibold text-slate-700 line-clamp-2">
                                        {ex.name}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() =>
                  setActiveAuthorityIndex(
                    (prev) =>
                      (prev - 1 + regionAuthorities.length) %
                      regionAuthorities.length
                  )
                }
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-600 transition-all text-sm font-medium"
              >
                <ChevronDown className="w-4 h-4 rotate-90 group-hover:-translate-x-1 transition-transform" />
                Anterior
              </button>

              <div className="flex gap-2">
                {regionAuthorities.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveAuthorityIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeAuthorityIndex
                        ? "w-8 bg-gradient-to-r from-emerald-600 to-green-600"
                        : "w-2 bg-slate-400 hover:bg-slate-500"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveAuthorityIndex(
                    (prev) => (prev + 1) % regionAuthorities.length
                  )
                }
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-600 transition-all text-sm font-medium"
              >
                Siguiente
                <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="text-center mt-8 text-slate-600 text-sm font-medium">
              {activeAuthorityIndex + 1} de {regionAuthorities.length}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-emerald-900">
              Un Sistema Integrado para
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Proteger Colombia
              </span>
            </h2>
            <p className="text-lg text-slate-700">
              Todas estas autoridades trabajan en conjunto, coordinadas por el
              Ministerio de Ambiente a través del SINA, cada una ejerciendo sus
              competencias en su territorio específico con el objetivo común de
              garantizar la protección ambiental y el desarrollo sostenible.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 border-2 border-emerald-400 rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-emerald-900">
                  <Scale className="w-5 h-5 text-emerald-700" />
                  Coordinación
                </h4>
                <p className="text-slate-700 text-sm">
                  Articulación integrada de múltiples entidades en diferentes
                  niveles territoriales
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 border-2 border-green-400 rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-green-900">
                  <Leaf className="w-5 h-5 text-green-700" />
                  Protección
                </h4>
                <p className="text-slate-700 text-sm">
                  Cuidado de ecosistemas, biodiversidad, recursos naturales y
                  desarrollo sostenible
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-400 rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-blue-900">
                  <Users className="w-5 h-5 text-blue-700" />
                  Participación
                </h4>
                <p className="text-slate-700 text-sm">
                  Inclusión de comunidades, pueblos indígenas y actores locales
                  en la gestión ambiental
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-emerald-300 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-emerald-700 text-sm mb-4 font-medium">
              <Scale className="w-4 h-4" />
              Base Legal del SINA
            </div>
            <p className="text-slate-700 text-sm">
              Constitución Política de Colombia (1991) • Ley 99 de 1993 • Decreto
              3570 de 2011 • Decreto 3572 de 2011 • Decreto-Ley 3573 de 2011 •
              Ley 768 de 2002 • Decreto 1076 de 2015
            </p>
          </div>
          <div className="border-t-2 border-emerald-300 pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-600 text-sm">
            <div className="font-medium">© 2024 Sistema Nacional Ambiental (SINA) - Ministerio de Ambiente</div>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-emerald-600 transition-colors font-medium">
                Ministerio de Ambiente
              </a>
              <a href="#" className="hover:text-emerald-600 transition-colors font-medium">
                ANLA
              </a>
              <a href="#" className="hover:text-emerald-600 transition-colors font-medium">
                Parques Nacionales
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .fade-in {
          animation-name: fadeInUp;
        }

        .slide-in-from-bottom-4 {
          --tw-slide-in-from: 1rem;
        }

        .duration-700 {
          animation-duration: 0.7s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
