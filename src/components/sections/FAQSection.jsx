import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
	const [openFAQ, setOpenFAQ] = useState(null);

	const faqs = [
		{
			id: 1,
			question: "¿Qué servicios de marketing ofreces?",
			answer:
				"Me especializo en SEO, marketing de contenidos, marketing en redes sociales, email marketing, desarrollo de estrategias de marketing y analítica e informes. Cada servicio se adapta a las necesidades específicas de tu negocio.",
			color: "green",
			bgColor: "bg-accent-green",
			textColor: "text-white",
		},
		{
			id: 2,
			question: "¿Cómo mides el éxito de una campaña?",
			answer:
				"Mido el éxito a través de métricas basadas en datos, incluyendo el ROI, las tasas de conversión, el crecimiento del tráfico, las tasas de engagement y los KPIs personalizados alineados con los objetivos de tu negocio.",
			color: "blue",
			bgColor: "bg-accent-blue",
			textColor: "text-white",
		},
		{
			id: 3,
			question: "¿Cómo podemos empezar a trabajar juntos?",
			answer:
				"Simplemente contáctame para una consulta gratuita donde discutiremos tus objetivos comerciales, desafíos actuales y cómo puedo ayudarte a crear una estrategia de marketing a medida para tu éxito.",
			color: "yellow",
			bgColor: "bg-accent-yellow",
			textColor: "text-black",
		},
		{
			id: 4,
			question: "¿Proporcionas soporte y optimización continuos?",
			answer:
				"¡Absolutamente! Proporciono monitoreo continuo de la campaña, optimizaciones regulares, informes detallados de rendimiento y ajustes estratégicos para asegurar que tus esfuerzos de marketing ofrezcan los máximos resultados.",
			color: "purple",
			bgColor: "bg-accent-purple",
			textColor: "text-white",
		},
	];

	const toggleFAQ = (id) => {
		setOpenFAQ(openFAQ === id ? null : id);
	};

	return (
		<section className="dark-section-alt py-20">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Columna izquierda - Información de la sección */}
					<div>
						<h3 className="section-subtitle text-accent-purple mb-4">FAQ</h3>
						<h2 className="section-title text-white mb-6">
							TUS PREGUNTAS RESUELTAS
						</h2>
						<p className="text-gray-300 text-lg leading-relaxed">
							Todo lo que necesitas saber sobre mis servicios. Tenemos
							respuestas a tus preguntas sobre los servicios y el enfoque de
							Alex Martinez.
						</p>
					</div>

					{/* Columna derecha - Ítems de FAQ */}
					<div className="space-y-4">
						{faqs.map((faq) => (
							<div
								key={faq.id}
								className="border border-gray-600 rounded-2xl overflow-hidden"
							>
								{/* Encabezado de la pregunta */}
								<button
									onClick={() => toggleFAQ(faq.id)}
									className={`w-full p-6 text-left flex items-center justify-between transition-colors duration-300 ${
										openFAQ === faq.id
											? faq.bgColor
											: "dark-card hover:bg-gray-700"
									}`}
								>
									<span
										className={`font-semibold text-lg ${
											openFAQ === faq.id ? faq.textColor : "text-white"
										}`}
									>
										{faq.question}
									</span>
									<div
										className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
											openFAQ === faq.id
												? "bg-white/20 text-white transform rotate-180"
												: "bg-gray-600 text-gray-300"
										}`}
									>
										{openFAQ === faq.id ? (
											<Minus className="w-5 h-5" />
										) : (
											<Plus className="w-5 h-5" />
										)}
									</div>
								</button>

								{/* Contenido de la respuesta */}
								<div
									className={`overflow-hidden transition-all duration-300 ${
										openFAQ === faq.id
											? "max-h-96 opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="p-6 pt-0 bg-gray-800">
										<p className="text-gray-300 leading-relaxed">
											{faq.answer}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
