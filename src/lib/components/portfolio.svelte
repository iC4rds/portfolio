<script>
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Moderne E-Commerce Lösung mit React, Node.js und Stripe Integration",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Kollaborative Projektmanagement-App mit Echtzeit-Updates",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Vue.js", "Socket.io", "PostgreSQL"],
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Responsive Portfolio-Website mit modernem Design",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Svelte", "Tailwind", "Vercel"],
      link: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interaktives Wetter-Dashboard mit Datenvisualisierung",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "D3.js", "API Integration"],
      link: "#"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Content Management System für Blogger und Content Creator",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "Prisma", "Vercel"],
      link: "#"
    },
    {
      id: 6,
      title: "Mobile App",
      description: "Cross-Platform Mobile App für iOS und Android",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#"
    }
  ];
</script>

<section id="portfolio" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meine Projekte</h2>
      <div class="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Eine Auswahl meiner neuesten Arbeiten und Projekte
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
          <!-- Project Image -->
          <div class="relative overflow-hidden">
            <img 
              src={project.image || "/placeholder.svg"} 
              alt={project.title}
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
              <a 
                href={project.link}
                class="text-white font-semibold px-6 py-3 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-blue-600"
              >
                Projekt ansehen
              </a>
            </div>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag}
                <span class="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- View More Button -->
    <div class="text-center mt-12">
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        Alle Projekte ansehen
      </button>
    </div>
  </div>
</section>
