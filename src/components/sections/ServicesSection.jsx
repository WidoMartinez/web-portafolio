import React from "react";
import {
	ArrowUpRight,
	Target,
	ShoppingCart,
	Briefcase,
	BarChart3,
	RefreshCw,
	DollarSign,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import SlideUp from "../animations/SlideUp";

const iconMap = {
	Target,
	ShoppingCart,
	Briefcase,
	BarChart3,
	RefreshCw,
	DollarSign,
};

const services = [
	{
		id: 1,
		title: "Campañas en Red de Búsqueda",
		description:
			"Atrae clientes que buscan activamente tus servicios o productos. Posicionamos tus anuncios en los primeros lugares de Google.",
		color: "orange",
		bgColor: "bg-accent-orange",
		textColor: "text-white",
		icon: "Target",
	},
	{
		id: 2,
		title: "Google Shopping para E-commerce",
		description:
			"Mostramos tus productos directamente en los resultados de búsqueda. Ideal para tiendas en Shopify y WooCommerce.",
		color: "purple",
		bgColor: "bg-accent-purple",
		textColor: "text-white",
		icon: "ShoppingCart",
	},
	{
		id: 3,
		title: "Campañas para Profesionales",
		description:
			"Generamos leads de alta calidad para abogados, doctores, consultores y otros profesionales independientes.",
		color: "red",
		bgColor: "bg-accent-red",
		textColor: "text-white",
		icon: "Briefcase",
	},
	{
		id: 4,
		title: "Remarketing Estratégico",
		description:
			"Volvemos a conectar con visitantes que no compraron, recordándoles tu propuesta de valor para cerrar la venta.",
		color: "yellow",
		bgColor: "bg-accent-yellow",
		textColor: "text-white",
		icon: "RefreshCw",
	},
	{
		id: 5,
		title: "Optimización de Tasa de Conversión (CRO)",
		description:
			"Analizamos y mejoramos tu landing page y sitio web para maximizar el retorno de cada peso invertido en publicidad.",
		color: "teal",
		bgColor: "bg-accent-teal",
		textColor: "text-white",
		icon: "DollarSign",
	},
	{
		id: 6,
		title: "Analítica y Reportes Claros",
		description:
			"Te entregamos informes comprensibles que muestran el rendimiento real de tus campañas y el retorno de la inversión.",
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
							SERVICIOS DE GOOGLE ADS ENFOCADOS EN TU CRECIMIENTO
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
