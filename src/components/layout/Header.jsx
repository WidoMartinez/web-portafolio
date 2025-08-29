import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-primary-dark/95 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<div className="flex items-center space-x-2">
						<div className="w-10 h-10 bg-accent-green rounded-lg flex items-center justify-center">
							<span className="text-white logo-text text-xl">A</span>
						</div>
						<span className="text-white logo-text text-xl">anunciads</span>
					</div>

					{/* Navegación de escritorio */}
					<nav className="hidden md:flex items-center space-x-8">
						<button
							onClick={() => scrollToSection("home")}
							className="text-white hover:text-accent-green transition-colors duration-300"
						>
							Inicio
						</button>
						<button
							onClick={() => scrollToSection("services")}
							className="text-white hover:text-accent-green transition-colors duration-300"
						>
							Servicios
						</button>
						<button
							onClick={() => scrollToSection("projects")}
							className="text-white hover:text-accent-green transition-colors duration-300"
						>
							Proyectos
						</button>
						<button
							onClick={() => scrollToSection("testimonials")}
							className="text-white hover:text-accent-green transition-colors duration-300"
						>
							Testimonios
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="text-white hover:text-accent-green transition-colors duration-300"
						>
							Contacto
						</button>
					</nav>

					{/* Botón de CTA */}
					<button
						onClick={() => scrollToSection("contact")}
						className="hidden md:block btn-primary"
					>
						PONTE EN CONTACTO →
					</button>

					{/* Botón de menú móvil */}
					<button
						className="md:hidden text-white"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Menú móvil */}
				{isMenuOpen && (
					<div className="md:hidden bg-primary-dark/95 backdrop-blur-md border-t border-white/10">
						<nav className="flex flex-col space-y-4 p-4">
							<button
								onClick={() => scrollToSection("home")}
								className="text-white hover:text-accent-green transition-colors duration-300 text-left"
							>
								Inicio
							</button>
							<button
								onClick={() => scrollToSection("services")}
								className="text-white hover:text-accent-green transition-colors duration-300 text-left"
							>
								Servicios
							</button>
							<button
								onClick={() => scrollToSection("projects")}
								className="text-white hover:text-accent-green transition-colors duration-300 text-left"
							>
								Proyectos
							</button>
							<button
								onClick={() => scrollToSection("testimonials")}
								className="text-white hover:text-accent-green transition-colors duration-300 text-left"
							>
								Testimonios
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="text-white hover:text-accent-green transition-colors duration-300 text-left"
							>
								Contacto
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="btn-primary w-full mt-4"
							>
								PONTE EN CONTACTO →
							</button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
