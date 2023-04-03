/*******************CONTAINER*******************************/
const container = document.querySelector('.container');

/********************LIST******************************/
const list = document.querySelector('ul');

/**************ARRAY***********************************/
const team = [
  //1.
  {
  nome: 'Angela Caroll',
  ruolo: 'Chief Editor',
  foto: `img/angela-caroll-chief-editor.jpg`
  },
  
  //2.
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: `img/angela-lopez-social-media-manager.jpg`
    },

  //3.  
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: `img/barbara-ramos-graphic-designer.jpg`
    },

  //4.  
  {
    nome: 'Scott estrada',
    ruolo: 'Web Developer',
    foto: `img/scott-estrada-developer.jpg`
    },

  //5.  
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: `img/walter-gordon-office-manager.jpg`
    },

  //6.  
  {
    nome: 'Wayne barnett',
    ruolo: 'Founder Ceo',
    foto: `img/wayne-barnett-founder-ceo.jpg`
    }

]

for (let i = 0; i < team.length; i++) {
  const members = team[i];
  console.log(members.nome, members.ruolo, members.foto);

  }
  

  for (let member of team){
    const li = document.createElement('li');
    list.append(li);

    const name = document.createElement('h1');
    li.append(name);
    name.innerHTML = member.nome;

    const role = document.createElement('h2')
    li.append(role);
    role.innerHTML = member.ruolo

    const img = document.createElement('img');
    li.append(img);
    img.src = member.foto;
    img.innerHTML =  "<img src ='" + member.foto + " ' >"

  }
  console.log(team.member)