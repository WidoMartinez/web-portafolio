import React, { useState } from "react";
import { Star, Plus, Crown, Award, Loader2 } from "lucide-react";

const CTASection = () => {
	// Estados para manejar los campos del formulario y el envío
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'
	const [message, setMessage] = useState("");

	// URL del servidor backend (la obtendrás de Render.com en la Parte 2)
	const BACKEND_URL = "https://tu-servidor-de-correo.onrender.com/send"; // <-- ¡IMPORTANTE! Reemplaza esto más tarde

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("loading");
		setMessage("");

		// Validación simple
		if (!name || !phone || !email) {
			setStatus("error");
			setMessage("Por favor, completa todos los campos.");
			return;
		}

		try {
			const response = await fetch(BACKEND_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, phone, email }),
			});

			const result = await response.json();

			if (response.ok) {
				setStatus("success");
				setMessage(
					"¡Gracias por tu mensaje! Me pondré en contacto contigo pronto."
				);
				// Limpiar el formulario
				setName("");
				setPhone("");
				setEmail("");
			} else {
				throw new Error(
					result.message || "Ocurrió un error al enviar el formulario."
				);
			}
		} catch (error) {
			setStatus("error");
			setMessage(
				error.message ||
					"No se pudo conectar con el servidor. Inténtalo más tarde."
			);
		}
	};

	return (
		<section
			id="contact"
			className="bg-primary-dark py-20 relative overflow-hidden"
		>
			{/* Elementos decorativos (se mantienen) */}
			<div className="absolute inset-0 pointer-events-none">
				<Star className="absolute top-10 left-10 text-purple-400 w-8 h-8 animate-pulse" />
				<Plus className="absolute top-20 right-20 text-green-400 w-10 h-10 animate-bounce" />
				<Crown className="absolute bottom-20 left-20 text-yellow-400 w-6 h-6 animate-pulse" />
				<Award className="absolute bottom-10 right-10 text-orange-400 w-7 h-7 animate-pulse" />
			</div>

			<div className="container mx-auto px-4 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Columna izquierda - Título y descripción */}
					<div className="text-center lg:text-left">
						<h2 className="section-title text-white mb-8 leading-tight">
							<span className="block">¿LISTO PARA HACER</span>
							<span className="block text-accent-green">
								CRECER TU NEGOCIO?
							</span>
						</h2>
						<p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
							Completa el formulario y agendemos una sesión estratégica gratuita
							para analizar cómo Google Ads puede ayudarte a alcanzar tus
							objetivos.
						</p>
					</div>

					{/* Columna derecha - Formulario de contacto */}
					<div className="dark-card rounded-2xl p-8">
						<h3 className="card-title text-white mb-6">
							Comienza la conversación
						</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Campo de Nombre */}
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-300 mb-2"
								>
									Nombre Completo
								</label>
								<input
									type="text"
									id="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="w-full bg-primary-dark/50 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-accent-purple outline-none transition"
									placeholder="Tu Nombre"
									disabled={status === "loading"}
								/>
							</div>

							{/* Campo de Teléfono */}
							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-gray-300 mb-2"
								>
									Número de Teléfono
								</label>
								<input
									type="tel"
									id="phone"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									className="w-full bg-primary-dark/50 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-accent-purple outline-none transition"
									placeholder="+56 9 1234 5678"
									disabled={status === "loading"}
								/>
							</div>

							{/* Campo de Correo Electrónico */}
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-300 mb-2"
								>
									Correo Electrónico
								</label>
								<input
									type="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full bg-primary-dark/50 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-accent-purple outline-none transition"
									placeholder="tu@correo.com"
									disabled={status === "loading"}
								/>
							</div>

							{/* Botón de envío */}
							<div>
								<button
									type="submit"
									className="btn-primary w-full text-lg py-3 flex items-center justify-center"
									disabled={status === "loading"}
								>
									{status === "loading" ? (
										<Loader2 className="animate-spin" />
									) : (
										"Agendar Sesión Estratégica →"
									)}
								</button>
							</div>
						</form>

						{/* Mensajes de estado */}
						{message && (
							<div
								className={`mt-4 text-center p-3 rounded-lg ${
									status === "success"
										? "bg-green-500/20 text-green-300"
										: "bg-red-500/20 text-red-300"
								}`}
							>
								{message}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
