import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import product4 from './images/product4.png';

const imageData = [
  {
    title: 'Salon',
    price: 100.00,
    src: product1,
    details: 'Multiple high-quality pieces, with styles transitioning from classic to contemporary. An exclusive selection of lampshades, vases, murals, pillows, paintings, and many gifts to compose great projects. In order selection, a mix of basic style, stricter customization, and more compact dimensions to compose sophisticated and exclusive environments.',
    propos_de_ces_article: `
    À propos de cet article:
    <ul>
        <li>ENSEMBLE SALON DE JARDIN COMPLET: Cet ensemble salon de jardin est composé d'un canapé 2 places, de deux fauteuils et d'une table basse assortie, idéal pour les jardins, terrasses, balcons, etc.</li>
        <li>GRAND CONFORT: Salon de jardin extérieur 4 personnes doté de 3 coussins rembourrés mousse de 12 cm d'épaisseur grand confort. Coussins zippés déhoussables et lavables pour un nettoyage et entretien faciles.</li>
        <li>MATÉRIAUX DE QUALITÉ: Ensemble canapé et fauteuils fabriqué en tissu polyester et en acier avec un revêtement en poudre, pour une meilleure résistance face aux rigueurs du climat : rayons UV, humidité, chaleur, etc.</li>
        <li>PLATEAU TABLE VERRE TREMPÉ: La table d'extérieur est fabriquée avec un plateau à motifs noirs en verre trempé de 5 mm pour ajouter une touche d'élégance à votre patio ou au bord de la piscine.</li>
        <li>MONTAGE FACILE, RAPIDE: Notice d'assemblage illustrée fournie; dim. fauteuil : 58L x 58l x 66H cm, dim. canapé : 116L x 58l x 66H cm, dim. table : 80L x 42l x 38H cm.</li>
    </ul>
`,    plus: {
      couleur: 'grey',
      marque: 'Outsunny',
      taille: '116 x 58 x 66 cm',
      profondeur: '58 centimètres',
      dimensions: '116 x 58 x 66 centimètres'
    }
  },
  {
    title: 'Light Bag',
    price: 45.00,
    src: product2,
    details: 'Multiple high-quality pieces, with styles transitioning from classic to contemporary. An exclusive selection of lampshades, vases, murals, pillows, paintings, and many gifts to compose great projects.',
    propos_de_ces_article: 'À propos de cet article: ENSEMBLE SALON DE JARDIN COMPLET: Cet ensemble salon de jardin est composé d\'un canapé 2 places, de deux fauteuils et d\'une table basse assortie, idéal pour les jardins, terrasses, balcons, etc. GRAND CONFORT: Salon de jardin extérieur 4 personnes doté de 3 coussins rembourrés mousse de 12 cm d\'épaisseur grand confort. Coussins zippés déhoussables et lavables pour un nettoyage et entretien faciles. MATÉRIAUX DE QUALITÉ: Ensemble canapé et fauteuils fabriqué en tissu polyester et en acier avec un revêtement en poudre, pour une meilleure résistance face aux rigueurs du climat : rayons UV, humidité, chaleur, etc. PLATEAU TABLE VERRE TREMPÉ: La table d\'extérieur est fabriquée avec un plateau à motifs noirs en verre trempé de 5 mm pour ajouter une touche d\'élégance à votre patio ou au bord de la piscine. Un grand espace vous permettra d\'accueillir de la vaisselle et plus encore, facile à nettoyer après le dîner. MONTAGE FACILE, RAPIDE: Notice d\'assemblage illustrée fournie; - dim. fauteuil : 58L x 58l x 66H cm, dim. canapé : 116L x 58l x 66H cm, dim. table : 80L x 42l x 38H cm.',
    plus: {
      couleur: 'white',
      marque: 'BrandName',
      taille: '40 x 20 x 15 cm',
      profondeur: '15 centimètres',
      dimensions: '40 x 20 x 15 cm'
    }
  },
  {
    title: 'White Bag',
    price: 100.00,
    src: product3,
    details: 'Multiple high-quality pieces, with styles transitioning from classic to contemporary. An exclusive selection of lampshades, vases, murals, pillows, paintings, and many gifts to compose great projects.',
    propos_de_ces_article: 'À propos de cet article: ENSEMBLE SALON DE JARDIN COMPLET: Cet ensemble salon de jardin est composé d\'un canapé 2 places, de deux fauteuils et d\'une table basse assortie, idéal pour les jardins, terrasses, balcons, etc. GRAND CONFORT: Salon de jardin extérieur 4 personnes doté de 3 coussins rembourrés mousse de 12 cm d\'épaisseur grand confort. Coussins zippés déhoussables et lavables pour un nettoyage et entretien faciles. MATÉRIAUX DE QUALITÉ: Ensemble canapé et fauteuils fabriqué en tissu polyester et en acier avec un revêtement en poudre, pour une meilleure résistance face aux rigueurs du climat : rayons UV, humidité, chaleur, etc. PLATEAU TABLE VERRE TREMPÉ: La table d\'extérieur est fabriquée avec un plateau à motifs noirs en verre trempé de 5 mm pour ajouter une touche d\'élégance à votre patio ou au bord de la piscine. Un grand espace vous permettra d\'accueillir de la vaisselle et plus encore, facile à nettoyer après le dîner. MONTAGE FACILE, RAPIDE: Notice d\'assemblage illustrée fournie; - dim. fauteuil : 58L x 58l x 66H cm, dim. canapé : 116L x 58l x 66H cm, dim. table : 80L x 42l x 38H cm.',
    plus: {
      couleur: 'white',
      marque: 'BrandName',
      taille: '40 x 25 x 15 cm',
      profondeur: '15 centimètres',
      dimensions: '40 x 25 x 15 cm'
    }
  },
  {
    title: 'Dark Bag',
    price: 45.00,
    src: product4,
    details: 'Multiple high-quality pieces, with styles transitioning from classic to contemporary. An exclusive selection of lampshades, vases, murals, pillows, paintings, and many gifts to compose great projects.',
    propos_de_ces_article: 'À propos de cet article: ENSEMBLE SALON , de deux fauteuils et d\'une table basse assortie, idéal pour les jardins, terrasses, balcons, etc.',
    plus: {
      couleur: 'black',
      marque: 'BrandName',
      taille: '30 x 15 x 10 cm',
      profondeur: '10 centimètres',
      dimensions: '30 x 15 x 10 cm'
    }
  }
];

export default imageData;
