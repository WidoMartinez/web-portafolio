import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@assets/project-1.png";
import project2 from "@assets/project-2.png";
import project3 from "@assets/project-3.png";
import project4 from "@assets/project-4.png";
import project5 from "@assets/project-5.webp";

const ProjectsSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const projectsPerView = 3;

	const projects = [
		{
			id: 1,
			title: "Campaña de SEO para E-commerce",
			description:
				"Aumenté el tráfico orgánico en un 300% para una marca de moda sostenible.",
			image: project1,
			category: "SEO",
			color: "green",
			bgColor: "bg-green-50",
			borderColor: "border-green-200",
		},
		{
			id: 2,
			title: "Estrategia de Contenidos para SaaS",
			description:
				"Desarrollé una estrategia integral de marketing de contenidos para una empresa de software B2B.",
			image: project2,
			category: "Marketing de Contenidos",
			color: "purple",
			bgColor: "bg-purple-50",
			borderColor: "border-purple-200",
		},
		{
			id: 3,
			title: "Redes Sociales para Restaurante",
			description:
				"Construí una comunidad comprometida y aumenté las reservas en un 250% para un restaurante local.",
			image: project3,
			category: "Redes Sociales",
			color: "orange",
			bgColor: "bg-orange-50",
			borderColor: "border-orange-200",
		},
		{
			id: 4,
			title: "Campañas de Email para Fitness",
			description:
				"Creé secuencias de correo electrónico automatizadas que generaron $50K en ingresos.",
			image: project4,
			category: "Email Marketing",
			color: "blue",
			bgColor: "bg-blue-50",
			borderColor: "border-blue-200",
		},
		{
			id: 5,
			title: "Lanzamiento de Startup Tecnológica",
			description:
				"Estrategia de marketing de principio a fin para un exitoso lanzamiento de producto y adquisición de usuarios.",
			image: project5,
			category: "Estrategia",
			color: "teal",
			bgColor: "bg-teal-50",
			borderColor: "border-teal-200",
		},
	];

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + projectsPerView >= projects.length ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0
				? Math.max(0, projects.length - projectsPerView)
				: prevIndex - 1
		);
	};

	const visibleProjects = projects.slice(
		currentIndex,
		currentIndex + projectsPerView
	);

	// Rellenar espacios restantes si es necesario
	while (visibleProjects.length < projectsPerView && projects.length > 0) {
		visibleProjects.push(projects[visibleProjects.length % projects.length]);
	}

	return (
		<section id="projects" className="dark-section-alt py-20">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Encabezado de la sección */}
				<div className="flex justify-between items-center mb-16">
					<div>
						<h3 className="section-subtitle text-accent-orange mb-4">
							MI PORTAFOLIO
						</h3>
						<h2 className="section-title text-white">PROYECTOS DESTACADOS</h2>
					</div>

					{/* Flechas de navegación */}
					<div className="hidden md:flex space-x-4">
						<button
							onClick={prevSlide}
							className="w-12 h-12 bg-accent-purple/20 hover:bg-accent-purple/30 rounded-lg flex items-center justify-center transition-colors duration-300"
						>
							<ChevronLeft className="w-6 h-6 text-accent-purple" />
						</button>
						<button
							onClick={nextSlide}
							className="w-12 h-12 bg-accent-orange/20 hover:bg-accent-orange/30 rounded-lg flex items-center justify-center transition-colors duration-300"
						>
							<ChevronRight className="w-6 h-6 text-accent-orange" />
						</button>
					</div>
				</div>

				{/* Cuadrícula de proyectos */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{visibleProjects.map((project, index) => (
						<div
							key={`${project.id}-${index}`}
							className={`group cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col h-full`}
						>
							{/* Imagen del proyecto */}
							<div className="aspect-[4/3] bg-gray-700 rounded-t-2xl overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
									loading="lazy"
								/>
							</div>

							{/* Información del proyecto */}
							<div className="dark-card rounded-b-2xl p-6 flex-1 flex flex-col">
								<h3 className="text-xl font-bold text-white mb-2">
									{project.title}
								</h3>
								<p className="text-gray-300 text-sm mb-3 flex-1">
									{project.description}
								</p>
								<span
									className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
										project.color === "green"
											? "bg-accent-green/20 text-accent-green"
											: project.color === "purple"
											? "bg-accent-purple/20 text-accent-purple"
											: project.color === "orange"
											? "bg-accent-orange/20 text-accent-orange"
											: project.color === "blue"
											? "bg-accent-blue/20 text-accent-blue"
											: "bg-accent-teal/20 text-accent-teal"
									}`}
								>
									{project.category}
								</span>
							</div>
						</div>
					))}
				</div>

				{/* Navegación móvil */}
				<div className="flex md:hidden justify-center space-x-4 mt-8">
					<button
						onClick={prevSlide}
						className="w-12 h-12 bg-accent-purple/20 hover:bg-accent-purple/30 rounded-lg flex items-center justify-center transition-colors duration-300"
					>
						<ChevronLeft className="w-6 h-6 text-accent-purple" />
					</button>
					<button
						onClick={nextSlide}
						className="w-12 h-12 bg-accent-orange/20 hover:bg-accent-orange/30 rounded-lg flex items-center justify-center transition-colors duration-300"
					>
						<ChevronRight className="w-6 h-6 text-accent-orange" />
					</button>
				</div>

				{/* Indicador de puntos */}
				<div className="flex justify-center space-x-2 mt-8">
					{Array.from({
						length: Math.ceil(projects.length / projectsPerView),
					}).map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index * projectsPerView)}
							className={`w-3 h-3 rounded-full transition-colors duration-300 ${
								Math.floor(currentIndex / projectsPerView) === index
									? "bg-accent-purple"
									: "bg-gray-600"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
