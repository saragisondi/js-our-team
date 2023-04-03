
/*******************CONTAINER*******************************/
const container = document.querySelector('.container');

/********************IMG******************************/
// //1.
// const img1 = document.createElement("img");
// img1.src= "img/angela-caroll-chief-editor.jpg";
// let src1 = document.querySelector('.img-1');
// src1.append(img1);

// //2.
// const img2 = document.createElement("img");
// img2.src= "img/angela-lopez-social-media-manager.jpg";
// let src2 = document.querySelector('.img-2')
// src2.append(img2);

// //3.
// const img3 = document.createElement("img");
// img3.src= "img/barbara-ramos-graphic-designer.jpg";
// let src3 = document.querySelector('.img-3');
// src3.append(img3);

// //4.
// const img4 = document.createElement("img");
// img4.src= "img/scott-estrada-developer.jpg";
// let src4 = document.querySelector('.img-4');
// src4.append(img4);

// //5.
// const img5 = document.createElement("img");
// img5.src= "img/walter-gordon-office-manager.jpg";
// let src5 = document.querySelector('.img-5');
// src5.append(img5);

// //6.
// const img6 = document.createElement("img");
// img6.src= "img/wayne-barnett-founder-ceo.jpg";
// let src6 = document.querySelector('.img-6');
// src6.append(img6);


// container.append(img1,img2,img3,img4,img5,img6);

// console.log(container)
// console.log( img1,img2,img3,img4,img5,img6)

/**************ARRAY***********************************/
const team = [
  //1.
  {
  nome: 'Angela Caroll',
  ruolo: 'chief editor',
  foto: `img/angela-caroll-chief-editor.jpg`
  },
  
  //2.
  {
    nome: 'Angela Lopez',
    ruolo: 'social media manager',
    foto: `img/angela-lopez-social-media-manager.jpg`
    },

  //3.  
  {
    nome: 'Barbara Ramos',
    ruolo: 'graphic designer',
    foto: `img/barbara-ramos-graphic-designer.jpg`
    },

  //4.  
  {
    nome: 'Scott estrada',
    ruolo: 'web developer',
    foto: `img/scott-estrada-developer.jpg`
    },

  //5.  
  {
    nome: 'Walter Gordon',
    ruolo: 'Office manager',
    foto: `img/walter-gordon-office-manager.jpg`
    },

  //6.  
  {
    nome: 'Wayne barnett',
    ruolo: 'founder ceo',
    foto: `img/wayne-barnett-founder-ceo.jpg`
    }

]