import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo y Descripción */}
					<div className="md:col-span-2">
						<div className="flex items-center space-x-2 mb-4">
							<div className="w-10 h-10 bg-accent-green rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-xl">A</span>
							</div>
							<span className="text-white font-bold text-xl">
								Wido Martínez
							</span>
						</div>
						<p className="text-gray-400 leading-relaxed max-w-md">
							Especialista en campañas de Google Ads para profesionales y
							comercio electrónico. Ayudamos a nuestros clientes a conseguir
							resultados medibles.
						</p>
					</div>

					{/* Enlaces Rápidos */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#home"
									className="text-gray-400 hover:text-accent-green transition-colors duration-300"
								>
									Inicio
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="text-gray-400 hover:text-accent-green transition-colors duration-300"
								>
									Servicios
								</a>
							</li>
							<li>
								<a
									href="#projects"
									className="text-gray-400 hover:text-accent-green transition-colors duration-300"
								>
									Proyectos
								</a>
							</li>
							<li>
								<a
									href="#testimonials"
									className="text-gray-400 hover:text-accent-green transition-colors duration-300"
								>
									Testimonios
								</a>
							</li>
						</ul>
					</div>

					{/* Información de Contacto */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Contacto</h3>
						<ul className="space-y-2">
							<li className="text-gray-400">contacto@anunciads.cl</li>
							<li className="text-gray-400">+56 9 393 639 16</li>
							<li className="text-gray-400">
								Padre Las Casas, Araucanía, Chile
							</li>
						</ul>
					</div>
				</div>

				{/* Barra Inferior */}
				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm">
						© 2024 anunciads. Todos los derechos reservados.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a
							href="#"
							className="text-gray-400 hover:text-accent-green transition-colors duration-300 text-sm"
						>
							Política de Privacidad
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-accent-green transition-colors duration-300 text-sm"
						>
							Términos de Servicio
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
