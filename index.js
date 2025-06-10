const users = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    description: "Focused on creating responsive and accessible web interfaces.",
    status: "online",
    isFollowing : false
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Smith",
    role: "UI/UX Designer",
    skills: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
    description: "Designs intuitive user experiences with a focus on clean aesthetics.",
    status: "offline",
    isFollowing : false
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "Michael Johnson",
    role: "Backend Engineer",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    description: "Builds robust backend systems with scalability in mind.",
    status: "online",
    isFollowing : false
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Sara Ahmed",
    role: "Product Manager",
    skills: ["Agile", "Scrum", "Roadmapping", "Team Leadership"],
    description: "Drives product vision and execution with cross-functional teams.",
    status: "online",
    isFollowing : false
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Carlos Martinez",
    role: "Mobile App Developer",
    skills: ["React Native", "Kotlin", "Swift", "Firebase"],
    description: "Develops cross-platform mobile applications for Android and iOS.",
    status: "offline",
    isFollowing : false
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Linda Wong",
    role: "Marketing Specialist",
    skills: ["SEO", "Content Marketing", "Analytics", "Email Campaigns"],
    description: "Creates and optimizes marketing strategies for brand growth.",
    status: "online",
    isFollowing : false
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "David Kim",
    role: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    description: "Automates deployment pipelines and manages cloud infrastructure.",
    status: "online",
    isFollowing : false
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    name: "Aisha Yusuf",
    role: "Data Scientist",
    skills: ["Python", "Pandas", "Machine Learning", "SQL"],
    description: "Extracts insights from data to drive business decisions.",
    status: "offline",
    isFollowing : false
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Tom Lee",
    role: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript","React", "Node.js", "GraphQL", "Next.js"],
    description: "End-to-end web application development with modern technologies.",
    status: "online",
    isFollowing : false
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Emily Turner",
    role: "QA Engineer",
    skills: ["Selenium", "Cypress", "Test Automation", "Jest"],
    description: "Ensures software quality through automated and manual testing.",
    status: "offline",
    isFollowing : false
  }
];

let view = document.querySelector('#view-1')
let theme = document.querySelector('header #theme')
let lightIcon =  '<i class="ri-sun-line"></i>'
let darkIcon =  '<i class="ri-moon-line"></i>'

let isDark = false;
theme.innerHTML = darkIcon; // default to dark mode icon

let darkMode =theme.addEventListener('click', () => {
  isDark = !isDark; // toggle boolean

  document.body.classList.toggle('dark' , isDark); // apply or remove dark class
  
 
  theme.innerHTML = isDark ? lightIcon : darkIcon; // toggle icon

  theme.style.color = isDark ? '#fff' : '#000';
})



function cardInfo(){
  let clutter = '';

  users.forEach((elem,idx)=>{

    //skils
    let skillsHtml = '';
    //show only first 3 skills
    const visibalSkill = elem.skills.slice(0,3); 
    const remainig = elem.skills.length - visibalSkill.length;

    //showing that skills
    visibalSkill.forEach((skill)=>{
      skillsHtml += `<div class="skill">${skill}</div>`
    })

    //checking condition is reaming is grater than 0
    if(remainig > 0){
      skillsHtml += `<div class="skill">${'+' + remainig}</div>`
    }

    
    clutter += ` <div class="user">
                  <div class="status" style = 'background-color : ${elem.status === 'online' ? '#059669' :'#dc2626'}'>
                      <h4>${elem.status}</h>
                  </div>
                  <div class="info">
                      <div class="avatar">
                          <img src="${elem.avatar}" alt="">
                      </div>

                      <div class="name">
                          <h3>${elem.name}</h3>
                      </div>

                      <div class="role">
                          <h5>${elem.role}</h5>
                      </div>

                      <div class="skills">
                          ${skillsHtml}
                      </div>

                      <div class="dec">
                          <p>${elem.description}</p>
                      </div>
                        
                      <div class="line"></div>
                  </div>
              
                  <button id= ${idx} style = 'background-color:${elem.isFollowing ? "#4caf50" : '' }
                  color : ${elem.isFollowing ? '#fff' : ''}'
                  >
                      ${elem.isFollowing ? 'Following' : 'Follow'}
                  </button>
            </div>`
    
  })



  view.innerHTML = clutter
}

cardInfo();

view.addEventListener('click', (dets)=>{
  if (dets.target.tagName === 'BUTTON') {
    const index = dets.target.id;
    users[index].isFollowing = !users[index].isFollowing;
    cardInfo(); 
  }
})



