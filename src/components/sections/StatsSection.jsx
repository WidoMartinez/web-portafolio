import React from "react";
import { ArrowUpRight } from "lucide-react";
import CountUp from "../animations/CountUp";
import FadeIn from "../animations/FadeIn";

const StatsSection = () => {
	const stats = [
		{
			id: 1,
			number: "5+",
			title: "AÑOS DE EXPERIENCIA EN MARKETING",
			subtitle: "AYUDANDO A LAS EMPRESAS A CRECER DIGITALMENTE",
			color: "white",
			bgColor: "bg-primary-dark",
			textColor: "text-white",
		},
		{
			id: 2,
			number: "50+",
			title: "Proyectos Exitosos Entregados",
			color: "green",
			bgColor: "bg-accent-green",
			textColor: "text-white",
		},
		{
			id: 3,
			number: "95%",
			title: "Tasa de Satisfacción del Cliente",
			color: "yellow",
			bgColor: "bg-accent-yellow",
			textColor: "text-black",
		},
	];

	const whyChooseStats = [
		{
			id: 1,
			number: "24/7",
			title: "Soporte y Comunicación Dedicados",
			color: "purple",
			bgColor: "bg-accent-purple",
			textColor: "text-white",
		},
		{
			id: 2,
			number: "150%",
			title: "Mejora Promedio del ROI para Clientes",
			color: "red",
			bgColor: "bg-accent-red",
			textColor: "text-white",
		},
	];

	const scrollToContact = () => {
		const element = document.getElementById("contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="bg-primary-dark relative overflow-hidden">
			<div className="container mx-auto px-4 lg:px-8 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Contenido izquierdo */}
					<FadeIn delay={200}>
						<div className="text-white">
							{/* Etiquetas */}
							<div className="flex flex-wrap gap-3 mb-8">
								<span className="bg-accent-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
									Crecimiento Empresarial
								</span>
								<span className="bg-accent-red text-white px-4 py-2 rounded-full text-sm font-semibold">
									Éxito
								</span>
								<span className="bg-accent-yellow text-black px-4 py-2 rounded-full text-sm font-semibold">
									Métricas de Rendimiento
								</span>
							</div>

							<h2 className="section-title mb-6 leading-tight">
								<span className="block">
									<CountUp end="5" className="text-6xl" />X ROI EN PUBLICIDAD
								</span>
								<span className="block">LOGRADO CONSISTENTEMENTE</span>
								<span className="block text-gray-400 text-3xl md:text-4xl">
									PARA NUESTROS CLIENTES.
								</span>
							</h2>

							<button onClick={scrollToContact} className="btn-primary mb-8">
								PONTE EN CONTACTO →
							</button>
						</div>
					</FadeIn>

					{/* Contenido derecho - Tarjetas de estadísticas */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Tarjeta de 350+ */}
						<FadeIn delay={400}>
							<div className="metric-card bg-accent-green text-white relative">
								<div className="flex justify-between items-start mb-4">
									<div>
										<div className="text-4xl md:text-5xl font-bold mb-2">
											<CountUp end="350" />+
										</div>
										<div className="text-sm opacity-90">
											Campañas Exitosas
											<br />
											Lanzadas en Diversos Sectores
										</div>
									</div>
									<ArrowUpRight className="w-8 h-8 opacity-70" />
								</div>
								{/* Triángulo decorativo */}
								<div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-white/20"></div>
							</div>
						</FadeIn>

						{/* Tarjeta de 67% */}
						<FadeIn delay={600}>
							<div className="metric-card bg-accent-yellow text-white relative">
								<div className="flex justify-between items-start mb-4">
									<div>
										<div className="text-4xl md:text-5xl font-bold mb-2">
											<CountUp end="67" />%
										</div>
										<div className="text-sm opacity-80">
											Crecimiento en Tasas de Conversión
											<br />
											en Promedio
										</div>
									</div>
									<ArrowUpRight className="w-8 h-8 opacity-70" />
								</div>
								{/* Triángulo decorativo */}
								<div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-white/20"></div>
							</div>
						</FadeIn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatsSection;
