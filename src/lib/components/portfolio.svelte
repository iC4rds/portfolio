<script>
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Moderne E-Commerce Lösung mit Svelte, Bun und ElysiaJS",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Svelte", "Bun", "MongoDB", "GraphQL"],
      link: "https://github.com/iC4rds/dotfiles"
    },
    {
      id: 2,
      title: "Gym App",
      description: "App zum Tracken von Workouts und Exercises mit React Native und Firebase",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React-Native", "Firebase", "Tailwind"],
      link: "https://github.com/iC4rds/gym-app"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Responsive Portfolio-Website mit modernem Design in Svelte",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Svelte", "Tailwind", "Vercel"],
      link: "https://github.com/iC4rds/portfolio"
    }
  ];
</script>

<section id="portfolio" class="py-20 bg-catbase">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-cattext mb-4">Mein Portfolio</h2>
      <div class="w-24 h-1 bg-catblue mx-auto mb-6"></div>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <div class="bg-catsurface rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
          <div class="relative overflow-hidden">
            <img 
              src={project.image || "/placeholder.svg"} 
              alt={project.title}
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-catblue bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
              <a 
                href={project.link}
                class="text-catsurface font-semibold px-6 py-3 border-2 border-catsurface rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-catsurface hover:text-cattext"
              >
                Projekt ansehen
              </a>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-cattext mb-3">{project.title}</h3>
            <p class="text-cattext mb-4 leading-relaxed">{project.description}</p>
            
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag}
                <span class="px-3 py-1 bg-catblue text-catsurface text-sm rounded-full font-medium">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <button class="bg-catblue hover:bg-catsurface text-catsurface hover:text-catblue px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        Alle Projekte ansehen
      </button>
    </div>
  </div>
</section>
