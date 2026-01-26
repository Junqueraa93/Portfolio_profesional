import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram,
  Menu, 
  X,
  ExternalLink,
  Database,
  Video,
  Figma,
  FileCode,
  Terminal,
  GitBranch
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './components/ui/dialog';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'HTML', icon: FileCode, category: 'Frontend' },
    { name: 'CSS', icon: Palette, category: 'Frontend' },
    { name: 'JavaScript', icon: Code2, category: 'Frontend' },
    { name: 'React', icon: Code2, category: 'Frontend' },
    { name: 'SQL', icon: Database, category: 'Backend' },
    { name: 'TypeScript', icon: Code2, category: 'Frontend', level: 'Conocimientos' },
    { name: 'Bash', icon: Terminal, category: 'Tools' },
    { name: 'Git', icon: GitBranch, category: 'Tools' },
    { name: 'GitHub', icon: Github, category: 'Tools' },
  ];

  const tools = [
    { name: 'Figma', icon: Figma, description: 'Diseño UX/UI' },
    { name: 'Canva', icon: Palette, description: 'Diseño gráfico' },
    { name: 'CapCut', icon: Video, description: 'Edición de video' },
  ];

  const projects = [
    {
      title: 'Logistix',
      description: 'Sistema integral de gestión de almacenes para control de inventario, albaranes y seguimiento de envíos.',
      tech: ['Angular', 'Node.js', 'HTML', 'CSS', 'SQL'],
      image: 'https://images.unsplash.com/photo-1627915589334-14a3c3e3a741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjM3MjU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: 'Software empresarial desarrollado en equipo para la gestión integral de grandes almacenes. El sistema permite controlar productos entrantes de múltiples empresas, organizar el inventario completo, gestionar albaranes y realizar correcciones que se sincronizan automáticamente con las empresas proveedoras.',
      features: [
        'Control total de productos entrantes de múltiples empresas',
        'Gestión y organización completa del inventario',
        'Sistema de recepción y validación de albaranes',
        'Corrección de errores con sincronización automática',
        'Gestión avanzada de envíos con actualización en tiempo real',
        'Seguimiento de estados: recibido, preparado, cancelado, enviado',
        'Sincronización bidireccional con base de datos del almacén'
      ],
      challenges: 'El mayor desafío fue desarrollar un sistema robusto capaz de manejar múltiples flujos de datos simultáneos de diferentes empresas, garantizando la integridad de la información y la sincronización en tiempo real entre el inventario, los albaranes y los envíos.',
      results: 'Sistema implementado con éxito que optimizó la gestión logística, reduciendo errores de inventario en un 70% y mejorando significativamente los tiempos de procesamiento de albaranes y envíos.'
    },
    {
      title: 'InkConnect',
      description: 'Aplicación móvil para conectar clientes con tatuadores. Proyecto completo de diseño UX/UI.',
      tech: ['Figma', 'UX Research', 'UI Design'],
      image: 'https://images.unsplash.com/photo-1663430218780-889edbb73e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzYzNzI1NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: 'Proyecto desarrollado como parte del curso de Diseño UX de Google. Diseño completo de una aplicación móvil que conecta clientes con tatuadores, realizando todo el proceso desde cero: investigación, definición de usuarios, arquitectura de información y diseño de interfaz.',
      features: [
        'Investigación exhaustiva de usuarios y mercado',
        'Creación de buyer personas basadas en datos reales',
        'Wireframes de baja y alta fidelidad',
        'Sistema de diseño completo con componentes reutilizables',
        'Prototipo interactivo navegable en Figma',
        'Flujos de usuario optimizados para conversión',
        'Tests de usabilidad y iteraciones de diseño'
      ],
      challenges: 'Como proyecto individual, el reto principal fue abarcar todas las fases del diseño UX/UI: desde la investigación inicial y la definición de necesidades reales, hasta la creación de un diseño final que equilibrara las necesidades tanto de clientes como de tatuadores.',
      results: 'Proyecto certificado por Google con excelentes resultados en pruebas de usabilidad. El diseño logró simplificar el proceso de búsqueda y contratación de tatuadores, demostrando un flujo intuitivo y atractivo visualmente.'
    },
    {
      title: 'Portfolio Personal',
      description: 'Portfolio interactivo desarrollado con React y Tailwind CSS para mostrar proyectos y habilidades.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: '/fotos_portfolio/portfolio.jpg',
      fullDescription: 'Portfolio personal moderno desarrollado como Single Page Application (SPA) con React y TypeScript. El sitio incluye secciones interactivas, modales con información detallada de proyectos, formulario de contacto con integración de EmailJS y animaciones suaves con Motion.',
      features: [
        'Diseño moderno con gradientes y efectos de neón',
        'Sección hero con animaciones atractivas',
        'Sistema de modales para detalles de proyectos',
        'Formulario de contacto funcional con EmailJS',
        'Componentes reutilizables y código escalable',
        'Diseño totalmente responsivo',
        'Animaciones fluidas con Motion'
      ],
      challenges: 'Crear un diseño que refleje tanto mis habilidades técnicas como desarrollador web, como mi sensibilidad para el diseño UX/UI, manteniendo un equilibrio entre estética y funcionalidad.',
      results: 'Portfolio completo que demuestra dominio de tecnologías modernas de frontend, capacidad de diseño y atención al detalle en la experiencia de usuario.'
    },
    {
      title: 'Renovación Web Despacho de Abogados',
      description: 'Modernización de sitio web con área de clientes para acceso a facturas, nóminas y gestiones. (En desarrollo)',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: 'https://zugasti-project-junquera.netlify.app/',
      image: '/fotos_portfolio/despacho zugasti abogados.webp',
      fullDescription: 'Proyecto de remodelación completa del sitio web de un despacho de abogados. El objetivo es modernizar la imagen digital del despacho e implementar un área privada donde los clientes puedan acceder de forma segura a sus documentos, facturas y nóminas.',
      features: [
        'Rediseño completo con enfoque moderno y profesional',
        'Área de clientes con autenticación segura',
        'Sistema de gestión documental (facturas, nóminas)',
        'Panel de seguimiento de gestiones y casos',
        'Diseño responsivo optimizado para móviles',
        'Mejoras en accesibilidad y SEO',
        'Integración con sistemas internos del despacho'
      ],
      challenges: 'Equilibrar un diseño moderno y atractivo con la seriedad y profesionalidad que requiere un despacho de abogados, además de implementar un sistema seguro de gestión documental que cumpla con la normativa de protección de datos.',
      results: 'Proyecto actualmente en desarrollo. Se espera lanzar una plataforma que mejore significativamente la comunicación con los clientes y la imagen digital del despacho.'
    },
    {
      title: 'Curso de Javascript Udemy',
      description: 'Colección de proyectos desarrollados durante el aprendizaje de JavaScript, desde conceptos básicos hasta aplicaciones avanzadas.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      links: [
        { name: 'Carrito de compra', url: 'https://carritocomprajunquera.netlify.app/' },
        // { name: 'Proyecto 2', url: 'TU_ENLACE_NETLIFY_PROYECTO_2' },
        // { name: 'Proyecto 3', url: 'TU_ENLACE_NETLIFY_PROYECTO_3' }
      ],
      image: '/fotos_portfolio/javascript.jpg',
      fullDescription: 'Serie de proyectos prácticos desarrollados como parte del aprendizaje de JavaScript. Cada proyecto aborda diferentes conceptos y técnicas, desde manipulación del DOM y eventos, hasta llamadas asíncronas a APIs y gestión de datos.',
      features: [
        'Proyectos progresivos de menor a mayor complejidad',
        'Aplicación práctica de conceptos de JavaScript',
        'Manipulación del DOM y eventos',
        'Trabajo con APIs y peticiones asíncronas',
        'Implementación de lógica de negocio',
        'Diseño responsivo y UI atractiva',
        'Código limpio y comentado'
      ],
      challenges: 'Aprender y aplicar conceptos nuevos de JavaScript de manera práctica, enfrentando desafíos reales de programación y depuración. Cada proyecto representa un paso más en el dominio del lenguaje.',
      results: 'Colección de proyectos funcionales que demuestran el progreso y la evolución en el aprendizaje de JavaScript, desde aplicaciones simples hasta proyectos más complejos con múltiples funcionalidades.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-800 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('hero')}
            >
              <Code2 className="h-8 w-8 text-cyan-400" />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'about', 'skills', 'projects', 'contact'][idx])}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="px-4 py-4 space-y-3">
              {['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'about', 'skills', 'projects', 'contact'][idx])}
                  className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                <span className="text-slate-100 block mb-2">Hola, soy</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block mb-4">
                 Jaime Junquera
                </span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 block relative"
                  style={{
                    textShadow: '0 0 40px rgba(34, 211, 238, 0.3), 0 0 80px rgba(59, 130, 246, 0.2)'
                  }}
                >
                  Desarrollador Web y Diseñador de UX/UI
                </motion.span>
              </h1>
            </motion.div>
            <p className="text-slate-400 mb-8 max-w-lg">
              Programador apasionado por crear experiencias web modernas y funcionales. 
              Combino código y diseño para crear productos digitales excepcionales.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Contáctame
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all"
              >
                Ver Proyectos
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <ImageWithFallback
                src="/fotos_portfolio/perfil.png"
                alt="Jaime Junquera"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-slate-100 mb-4">Sobre Mí</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-slate-100">A qué me dedico</h3>
              <p className="text-slate-400">
                Soy un desarrollador web apasionado por crear soluciones digitales innovadoras y funcionales. 
                Me especializo en el desarrollo frontend, creando interfaces de usuario intuitivas y atractivas 
                que ofrecen experiencias excepcionales.
              </p>
              <p className="text-slate-400">
                Combino mis habilidades de programación con conocimientos en diseño UX/UI para crear 
                productos digitales completos, desde la conceptualización hasta la implementación. 
                También tengo experiencia en edición de video y diseño gráfico, lo que me permite 
                abordar proyectos de manera integral.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <Code2 className="h-8 w-8 text-cyan-400 mb-2" />
                  <h4 className="text-slate-100 mb-1">Desarrollo</h4>
                  <p className="text-slate-400">Frontend & Backend</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <Palette className="h-8 w-8 text-cyan-400 mb-2" />
                  <h4 className="text-slate-100 mb-1">Diseño</h4>
                  <p className="text-slate-400">UX/UI Design</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-slate-100 mb-4">Habilidades</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="mb-16">
            <h3 className="text-slate-100 mb-8 text-center">Lenguajes y Tecnologías</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all duration-300 text-center group"
                >
                  <skill.icon className="h-10 w-10 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-slate-100 mb-1">{skill.name}</h4>
                  {skill.level && (
                    <span className="text-slate-500">{skill.level}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-slate-100 mb-8 text-center">Herramientas de Diseño</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 hover:from-slate-700/60 hover:to-slate-700/40 transition-all duration-300"
                >
                  <tool.icon className="h-12 w-12 text-cyan-400 mb-4" />
                  <h4 className="text-slate-100 mb-2">{tool.name}</h4>
                  <p className="text-slate-400">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-slate-100 mb-4">Proyectos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Algunos de los trabajos que he realizado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(index)}
                className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <Briefcase className="h-10 w-10 text-cyan-400" />
                  <ExternalLink className="h-5 w-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-[1400px] min-w-[850px] max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
              {selectedProject !== null && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-slate-100 text-2xl mb-4">
                      {projects[selectedProject].title}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      Detalles completos del proyecto {projects[selectedProject].title}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Project Image */}
                    <div className="rounded-xl overflow-hidden border border-slate-700 max-w-xl mx-auto">
                      <ImageWithFallback
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-slate-100 mb-3">Tecnologías utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-lg border border-cyan-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Full Description */}
                    <div>
                      <h4 className="text-slate-100 mb-3">Descripción</h4>
                      <p className="text-slate-400 leading-relaxed">
                        {projects[selectedProject].fullDescription}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-slate-100 mb-3">Características principales</h4>
                      <ul className="space-y-2">
                        {projects[selectedProject].features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-400">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h4 className="text-slate-100 mb-3">Desafíos</h4>
                      <p className="text-slate-400 leading-relaxed">
                        {projects[selectedProject].challenges}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-slate-100 mb-3">Resultados</h4>
                      <p className="text-slate-400 leading-relaxed">
                        {projects[selectedProject].results}
                      </p>
                    </div>

                    {/* Project Link or Links */}
                    {(projects[selectedProject] as any).link && (
                      <div>
                        <a
                          href={(projects[selectedProject] as any).link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                        >
                          <ExternalLink className="h-5 w-5" />
                          Ver proyecto
                        </a>
                      </div>
                    )}

                    {(projects[selectedProject] as any).links && (
                      <div>
                        <h4 className="text-slate-100 mb-3">Proyectos</h4>
                        <div className="flex flex-wrap gap-3">
                          {(projects[selectedProject] as any).links.map((link: any, idx: number) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-cyan-400/30 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all"
                            >
                              <ExternalLink className="h-4 w-4" />
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-slate-100 mb-4">Contacto</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-400 mb-12">
              ¿Tienes un proyecto en mente? ¡Conectemos!
            </p>

            {/* Contact Icons */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <motion.a
                href="mailto:junquera.web@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-3 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all duration-300 group min-w-[140px]"
              >
                <div className="bg-cyan-400/10 p-4 rounded-full group-hover:bg-cyan-400/20 transition-all">
                  <Mail className="h-8 w-8 text-cyan-400" />
                </div>
                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">Email</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/jaime-junquera-valverde-61392426b"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-3 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all duration-300 group min-w-[140px]"
              >
                <div className="bg-cyan-400/10 p-4 rounded-full group-hover:bg-cyan-400/20 transition-all">
                  <Linkedin className="h-8 w-8 text-cyan-400" />
                </div>
                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/Junqueraa93"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-3 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all duration-300 group min-w-[140px]"
              >
                <div className="bg-cyan-400/10 p-4 rounded-full group-hover:bg-cyan-400/20 transition-all">
                  <Github className="h-8 w-8 text-cyan-400" />
                </div>
                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/junqueraa/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-3 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all duration-300 group min-w-[140px]"
              >
                <div className="bg-cyan-400/10 p-4 rounded-full group-hover:bg-cyan-400/20 transition-all">
                  <Instagram className="h-8 w-8 text-cyan-400" />
                </div>
                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">Instagram</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2026 Jaime Junquera. Hecho con <span className="text-cyan-400">♥</span> y código.
          </p>
        </div>
      </footer>
    </div>
  );
}