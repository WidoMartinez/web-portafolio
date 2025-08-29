import React from "react";
import {
	ArrowUpRight,
	Search,
	FileText,
	Share2,
	Mail,
	Users,
	BarChart3,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import SlideUp from "../animations/SlideUp";

const iconMap = {
	Search,
	FileText,
	Share2,
	Mail,
	Users,
	BarChart3,
};

const services = [
	{
		id: 1,
		title: "Optimización para Motores de Búsqueda",
		description:
			"Aumentaré la visibilidad de tu sitio web y atraeré tráfico orgánico con estrategias de SEO adaptadas a tus objetivos comerciales.",
		color: "orange",
		bgColor: "bg-accent-orange",
		textColor: "text-white",
		icon: "Search",
	},
	{
		id: 2,
		title: "Marketing de Contenidos",
		description:
			"Crea contenido atractivo que enganche a tu audiencia e impulse leads cualificados a través de la narración estratégica.",
		color: "purple",
		bgColor: "bg-accent-purple",
		textColor: "text-white",
		icon: "FileText",
	},
	{
		id: 3,
		title: "Marketing en Redes Sociales",
		description:
			"Construye la presencia de tu marca e interactúa con los clientes en todas las principales plataformas de redes sociales.",
		color: "red",
		bgColor: "bg-accent-red",
		textColor: "text-white",
		icon: "Share2",
	},
	{
		id: 4,
		title: "Email Marketing",
		description:
			"Diseña y ejecuta campañas de correo electrónico que cultiven leads y conviertan a los prospectos en clientes leales.",
		color: "yellow",
		bgColor: "bg-accent-yellow",
		textColor: "text-white",
		icon: "Mail",
	},
	{
		id: 5,
		title: "Estrategia de Marketing",
		description:
			"Desarrolla estrategias de marketing integrales que se alineen con tus objetivos comerciales e impulsen el crecimiento.",
		color: "teal",
		bgColor: "bg-accent-teal",
		textColor: "text-white",
		icon: "Users",
	},
	{
		id: 6,
		title: "Analítica e Informes",
		description:
			"Sigue el rendimiento y proporciona información detallada para optimizar tus campañas de marketing y obtener un mejor ROI.",
		color: "blue",
		bgColor: "bg-primary-navy",
		textColor: "text-white",
		icon: "BarChart3",
	},
];

const ServicesSection = () => {
	return (
		<section id="services" className="dark-section py-20">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Encabezado de la sección */}
				<FadeIn>
					<div className="text-center mb-16">
						<h2 className="section-title text-white max-w-4xl mx-auto">
							SERVICIOS DISEÑADOS PARA IMPULSAR RESULTADOS REALES
						</h2>
					</div>
				</FadeIn>

				{/* Cuadrícula de servicios */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{services.map((service, index) => {
						const IconComponent = iconMap[service.icon];

						return (
							<SlideUp key={service.id} delay={index * 150}>
								<div
									className={`service-card ${service.bgColor} ${service.textColor} p-8 rounded-2xl relative overflow-hidden group cursor-pointer w-full h-80 flex flex-col`}
								>
									{/* Icono */}
									<div className="mb-6">
										<IconComponent className="w-12 h-12" />
									</div>

									{/* Contenido */}
									<h3 className="card-title mb-4 leading-tight">
										{service.title}
									</h3>
									<p
										className={`text-sm leading-relaxed mb-6 text-white/90 flex-grow`}
									>
										{service.description}
									</p>

									{/* Icono de flecha */}
									<div className="flex justify-end mt-auto">
										<div
											className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/20 text-white group-hover:scale-110 transition-transform duration-300`}
										>
											<ArrowUpRight className="w-6 h-6" />
										</div>
									</div>

									{/* Triángulo decorativo */}
									<div className="absolute bottom-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-b-[60px] border-b-white/10"></div>
								</div>
							</SlideUp>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
