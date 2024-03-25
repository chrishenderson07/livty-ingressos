import Image from 'next/image'

const Home = () => {
	return (
		<header className="h-screen bg-imagem">
			<nav className="bg-red-400 container mx-auto"></nav>
			<main className="flex">
				<div className=" flex flex-col justify-center items-start gap-6 w-1/3 ">
					<h3 className="p-4 text-lg uppercase bg-[rgba(255,255,255,0.08)] ">
						#VEMPRALIVTY
					</h3>
					<h1 className="text-5xl font-bold leading-[100%]">
						A plataforma perfeita para o seu evento!
					</h1>
					<p className="text-lg">
						Gestão de eventos facilitada e otimizada pra você produtor, poder
						focar seu tempo no que realmente precisa.
					</p>
					<div>
						<button>Fale com um de nossos rerprrersentantes</button>
						<button>Conheça nosso site de ingrressos</button>
					</div>
				</div>
				<div className="">
					<Image
						src={require('../../public/image/model1.webp')}
						alt="Modelo Livty Ingressos"
					/>
				</div>
			</main>
		</header>
	)
}

export default Home
