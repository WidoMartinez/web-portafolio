import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
	const [openFAQ, setOpenFAQ] = useState(null);

	const faqs = [
		{
			id: 1,
			question:
				"¿Qué tipo de empresas se benefician más de sus campañas de Google Ads?",
			answer:
				"Nos especializamos en dos áreas principales: e-commerce (tiendas en Shopify, WooCommerce, etc.) que buscan maximizar sus ventas con Google Shopping, y profesionales (abogados, doctores, consultores) que necesitan generar leads de alta calidad. Si vendes productos online o tus clientes te buscan activamente en Google, podemos ayudarte.",
			color: "green",
			bgColor: "bg-accent-green",
			textColor: "text-white",
		},
		{
			id: 2,
			question:
				"¿Cómo optimizan las campañas de Google Shopping para e-commerce?",
			answer:
				"Nuestra estrategia para e-commerce se centra en la optimización del feed de productos, la estructuración de campañas para controlar pujas a nivel de producto (SKU), y la implementación de campañas de 'Shopping Inteligente' y 'Máximo Rendimiento' (Performance Max). Además, usamos el remarketing dinámico para recuperar carritos abandonados y aumentar el valor de vida del cliente (LTV).",
			color: "blue",
			bgColor: "bg-accent-blue",
			textColor: "text-white",
		},
		{
			id: 3,
			question:
				"¿En cuánto tiempo puedo esperar ver resultados con mis campañas?",
			answer:
				"Aunque los resultados pueden variar, generalmente comenzamos a ver datos significativos y primeras conversiones en las primeras 2-4 semanas. El primer mes nos enfocamos en la recopilación de datos y la optimización inicial. Los resultados más sólidos y un ROAS (Retorno de la Inversión Publicitaria) estable se suelen observar a partir del segundo y tercer mes de gestión continua.",
			color: "yellow",
			bgColor: "bg-accent-yellow",
			textColor: "text-black",
		},
		{
			id: 4,
			question: "¿Qué necesito para empezar a trabajar con ustedes?",
			answer:
				"Para comenzar, solo necesitas tener una página web o landing page funcional y un producto o servicio claro que ofrecer. Nosotros nos encargamos del resto: desde la configuración de la cuenta de Google Ads y el seguimiento de conversiones hasta la creación y optimización de las campañas. Simplemente agenda una llamada inicial para que podamos entender tu negocio y tus metas.",
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
							PREGUNTAS FRECUENTES
						</h2>
						<p className="text-gray-300 text-lg leading-relaxed">
							Aquí encontrarás respuestas a las dudas más comunes sobre cómo mis
							servicios de Google Ads pueden impulsar tu e-commerce o negocio
							profesional.
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
