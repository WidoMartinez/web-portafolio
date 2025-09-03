import React from "react";
import { Check } from "lucide-react";

const ProcessSection = () => {
	const processSteps = [
		{
			id: 1,
			number: "1.",
			title: "AUDITORÍA Y DIAGNÓSTICO INICIAL",
			description:
				"Realizamos una auditoría profunda de tu cuenta de Google Ads (si existe) y analizamos a tu competencia. Definimos tus KPIs (Indicadores Clave de Rendimiento) y establecemos objetivos claros y medibles para tus campañas.",
			color: "green",
			bgColor: "bg-accent-green/20",
			textColor: "text-accent-green",
			borderColor: "border-accent-green/30",
		},
		{
			id: 2,
			number: "2.",
			title: "ESTRATEGIA Y CONFIGURACIÓN DE CAMPAÑAS",
			description:
				"Diseñamos una estrategia a medida, seleccionando las redes y tipos de campaña más rentables (Búsqueda, Shopping, Performance Max). Realizamos una investigación de palabras clave y estructuramos las campañas para maximizar la relevancia y el nivel de calidad.",
			color: "purple",
			bgColor: "bg-accent-purple/20",
			textColor: "text-accent-purple",
			borderColor: "border-accent-purple/30",
		},
		{
			id: 3,
			number: "3.",
			title: "LANZAMIENTO Y MONITOREO CONTINUO",
			description:
				"Lanzamos las campañas y monitoreamos de cerca el rendimiento diario. Nos aseguramos de que el seguimiento de conversiones funcione a la perfección para recopilar datos precisos desde el primer día.",
			color: "blue",
			bgColor: "bg-accent-blue/20",
			textColor: "text-accent-blue",
			borderColor: "border-accent-blue/30",
		},
		{
			id: 4,
			number: "4.",
			title: "OPTIMIZACIÓN Y ESCALADO",
			description:
				"Basándonos en los datos, optimizamos las pujas, los anuncios y las segmentaciones para aumentar el ROAS. Te entregamos informes transparentes y trabajamos para escalar de manera rentable las campañas que generan los mejores resultados.",
			color: "yellow",
			bgColor: "bg-accent-yellow/20",
			textColor: "text-accent-yellow",
			borderColor: "border-accent-yellow/30",
		},
	];

	return (
		<section className="dark-section py-20">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Encabezado de la sección */}
				<div className="text-center mb-16">
					<h3 className="section-subtitle text-accent-orange mb-4">
						CÓMO TRABAJO
					</h3>
					<h2 className="section-title text-white max-w-4xl mx-auto">
						MI MÉTODO PARA CAMPAÑAS EXITOSAS
					</h2>
				</div>

				{/* Pasos del proceso */}
				<div className="max-w-5xl mx-auto space-y-6">
					{processSteps.map((step) => (
						<div
							key={step.id}
							className="process-card dark-card flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12"
						>
							{/* Número del paso */}
							<div className="flex-shrink-0">
								<div className="process-number text-accent-orange">
									{step.number}
								</div>
							</div>

							{/* Contenido */}
							<div className="flex-grow">
								<h3 className="card-title mb-4 leading-tight text-white">
									{step.title}
								</h3>
								<p className="text-lg leading-relaxed text-gray-300">
									{step.description}
								</p>
							</div>

							{/* Icono de verificación */}
							<div className="flex-shrink-0">
								<div className="w-16 h-16 bg-accent-purple rounded-full flex items-center justify-center">
									<Check className="w-8 h-8 text-white" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProcessSection;
