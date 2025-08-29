import React from "react";
import { Check } from "lucide-react";

const ProcessSection = () => {
	const processSteps = [
		{
			id: 1,
			number: "1.",
			title: "DESCUBRIMIENTO Y CONSULTORÍA",
			description:
				"Empiezo por entender los objetivos de tu negocio, tu público objetivo y los desafíos actuales para crear una estrategia de marketing a medida.",
			color: "green",
			bgColor: "bg-accent-green/20",
			textColor: "text-accent-green",
			borderColor: "border-accent-green/30",
		},
		{
			id: 2,
			number: "2.",
			title: "DESARROLLO DE ESTRATEGIA",
			description:
				"Basado en la investigación y el análisis, desarrollo un plan de marketing completo con objetivos claros, plazos y resultados medibles.",
			color: "purple",
			bgColor: "bg-accent-purple/20",
			textColor: "text-accent-purple",
			borderColor: "border-accent-purple/30",
		},
		{
			id: 3,
			number: "3.",
			title: "IMPLEMENTACIÓN Y EJECUCIÓN",
			description:
				"Ejecuto las campañas de marketing a través de los canales elegidos, manteniendo una comunicación constante y proporcionando actualizaciones regulares.",
			color: "blue",
			bgColor: "bg-accent-blue/20",
			textColor: "text-accent-blue",
			borderColor: "border-accent-blue/30",
		},
		{
			id: 4,
			number: "4.",
			title: "OPTIMIZACIÓN E INFORMES",
			description:
				"Monitoreo continuamente el rendimiento, optimizo las campañas para obtener mejores resultados y proporciono informes detallados sobre el progreso y el ROI.",
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
						MI MÉTODO DE TRABAJO
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
