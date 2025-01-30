$(document).ready(function(){
   $("#navbar").load("navbar.html");
   $("#footer").load("footer.html");

});

// Scroll to Top Button functionality
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
      let initiatives = [
            {
                date: '2025-01-08',
                title: 'Service of the people ,this is our duty ! ',
                category: 'Service of People',
                description: 'Vsited Sagpada , Mori village , Kaman Naigao and interacted with citizens. Learned about the problems and pending demands that arise daily life.Thia time the citizen recived positive response.<br>Likewise BJP leader Shri. Vsited Raju Mhatre house.!',
                image: '../img/s9.jpg',
            },
            {
                date: '2025-01-09',
                title: 'Inauguration of Vasai New Bridge',
                category: 'Infrastructure',
                description: 'Reviewed the work after inspecting the road repair works going on Mumbai -Ahmedabad National Highway 48. At this time,interacted with the concerned official and made necessary instruction.',
                image: '../img/road2.jpg',
            },
            {
                date: '2025-01-12',
                title: 'Attended the BJP Maha Vijayi Pradesh Conference',
                category: 'Conference Of BJP',
                description: 'More then 15 thousand party workers attended this mega convention . At this time , Union Home Minister Hom. Mr. Amitji Shah ji, Chief Minister,Mr.Devendra Fadnavis Saheb and State President Hon. Mr. Chandrashekharji Bavankule , Executive State President Hon. Mr. Got valuable guidance from Ravindra Chavan jiand other dignitaries.',
                image: '../img/new3.jpg',
            },
            {
                date: '2025-01-09',
                title: 'BJP Vasai-Virar District organized an honor ceremony and a grand party inductio',
                category: 'Infrastructure',
                description: 'BJP organized a grand felicitation ceremony in the Vasai-Virar district, where several social workers and MLAs were welcomed. The ceremony also included a grand party induction, which boosted the enthusiasm of BJP workers. The event highlighted the party work and the significance of its leadership. Positive discussions were held regarding further development and changes in the partys field of action. This event proved to be inspiring for the workers in Vasai-Virar.',
                image: '../img/s8.jpg',
            },
            {
                date: '2025-01-08',
                title: 'Inauguration of New Plastic injection modling project Company in Poman',
                category: 'Development of Industries',
                description: 'This plastic injection modling project equipped wit h state-of-the-art technology was inaugurated by me. The project will be crucial for high-quality plastic products and promote the development of local industries',
                image: '../img/s10.jpg',
            }
        ];

        document.addEventListener('DOMContentLoaded', () => {
            feather.replace();
            renderTimeline();
        });

        function renderTimeline() {
            const container = document.getElementById('timelineContainer');
            container.innerHTML = '';

            initiatives.sort((a, b) => new Date(b.date) - new Date(a.date));

            initiatives.forEach((event, index) => {
                const isLeft = index % 2 === 0;
                const card = document.createElement('div');
                card.className = `relative mb-16 ${isLeft ? 'ml-auto' : 'mr-auto'} w-[90%] md:w-[45%] timeline-card opacity-0`;

                const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                card.innerHTML = `
                    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div class="relative">
                            <img src="${event.image}" alt="${event.title}" class="w-full h-64 object-cover">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div class="p-6 text-white">
                                    <h2 class="text-2xl font-bold mb-2">${event.title}</h2>
                                    <div class="flex items-center gap-2">
                                        <i data-feather="calendar" class="w-4 h-4"></i>
                                        <span>${formattedDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-6">
                            <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                                ${event.category}
                            </span>
                            <p class="text-gray-600 mt-4">${event.description}</p>
                        </div>
                    </div>
                `;

                container.appendChild(card);
                setTimeout(() => {
                    card.classList.add('animate-fade-in');
                }, index * 200);
            });
            feather.replace();
        }

        function filterByYear(year) {
            const filtered = year === 'all' 
                ? initiatives 
                : initiatives.filter(e => new Date(e.date).getFullYear().toString() === year);
            renderTimeline(filtered);
        }