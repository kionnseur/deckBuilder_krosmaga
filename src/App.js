import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Gods = {
  IOP: 'Iop',
  ECAFLIP: 'Ecaflip',
  CRA: 'Cra',
  ENIRIPSA: 'Eniripsa',
  SACRIEUR: 'Sacrieur',
  SADIDA: 'Sadida',
  SRAM: 'Sram',
  XELOR: 'Xelor',
  ENUTROF: 'Enutrof',
  FECA: 'Feca',
};
const List = {
  "listes": [
    {
      "Rare": "Krosmique",
      "name": "Heure de Gloire",
      "cost": 0,
      "tags": ["Sort","PA","AT","AR"],
      "description": "Dépense vos PA Restants pour donner à une invocation +1 AT et +1 AR par PA utilisé.",
      "god": "Iop"
    },
    {
      "Rare": "Commune",
      "name": "Jabs",
      "cost": 1,
      "tags": ["Sort","AT"],
      "description": "Confère +2 AT à une invocation.",
      "god": "Iop"
    },
    {
      "Rare": "Commune",
      "name": "Puissance",
      "cost": 1,
      "tags": ["Sort","AT","Camp"],
      "description": "Confère +1 AT aux invocations présentes dans votre camp.",
      "god": "Iop"
    },
    {
      "Rare": "Commune",
      "name": "Charge",
      "cost": 2,
      "tags": ["Sort","Charge"],
      "description": "L'invocation ciblée charge de 2 cases.",
      "god": "Iop"
    },
    {
      "Rare": "Commune",
      "name": "Ebranler",
      "cost": 2,
      "tags": ["Sort","Assomme"],
      "description": "Assomme une invocation pour 1 tour.",
      "god": "Iop"
    },
    {
      "Rare": "Peu Commune",
      "name": "Souffle",
      "cost": 2,
      "tags": ["Sort","Sous-nombre"],
      "description": "Piochez 1 carte ou 2 cartes si vous êtes en sous-nombre",
      "god": "Iop"
    },
    {
      "Rare": "Commune",
      "name": "Uppercut",
      "cost": 2,
      "tags": ["Sort","Repousse"],
      "description": "Inflige 2 dégâts et repousse de 1 case.",
      "god": "Iop"
    },
    {
      "Rare": "Peu Commune",
      "name": "Compulsion",
      "cost": 3,
      "tags": ["Sort","AT","AR"],
      "description": "Confère +2 AT et +2 AR à une invocation.",
      "god": "Iop"
    },
    {
      "Rare": "Peu Commune",
      "name": "Initiative",
      "cost": 3,
      "tags": ["Sort","Initiative"],
      "description": "Confère initiative à une invocation.",
      "god": "Iop"
    },
    {
      "Rare": "Rare",
      "name": "Bond",
      "cost": 4,
      "tags": ["Sort","Teleporte"],
      "description": "Téléporte une invocation alliée de 3 cases.",
      "god": "Iop"
    },
    {
      "Rare": "Commune",
      "name": "Colère de Iop",
      "cost": 4,
      "tags": ["Sort","AT"],
      "description": "Détruit toutes les invocations ayant 2 AT ou moins.",
      "god": "Iop"
    },
    {
      "Rare": "Peu Commune",
      "name": "Éventrail",
      "cost": 4,
      "tags": ["Sort"],
      "description": "Inflige 3 dégâts aux invocations adverses d'une ligne.",
      "god": "Iop"
    },
    {
      "Rare": "Rare",
      "name": "Intimidation",
      "cost": 4,
      "tags": ["Sort","Charge"],
      "description": "Vos invocations chargent de 2 cases.",
      "god": "Iop"
    },
    {
      "Rare": "Rare",
      "name": "Ravage",
      "cost": 5,
      "tags": ["Sort","AT","Initiative"],
      "description": "Confère +2 AT et initiative à un Iop allié.",
      "god": "Iop"
    },
    {
      "Rare": "Peu Commune",
      "name": "Virilité",
      "cost": 5,
      "tags": ["Sort","AT","AR"],
      "description": "Confère +2 AT et +1 AR à vos invocations.",
      "god": "Iop"
    },
    {
      "Rare": "Krosmique",
      "name": "Appel à la Baston",
      "cost": 6,
      "tags": ["Sort"],
      "description": "Place dans votre main les 3 premiers Iops de votre pioche.",
      "god": "Iop"
    },
    {
      "Rare": "Commune",
      "name": "Rocknocerok",
      "cost": 6,
      "tags": ["Sort"],
      "description": "Inflige 2 dégâts aux invocations adverses.",
      "god": "Iop"
    },
    {
      "Rare": "Rare",
      "name": "Cervelle de Iop",
      "cost": 7,
      "tags": ["Sort","Initiative"],
      "description": "Confère initiative à vos invocations.",
      "god": "Iop"
    },
    {
      "Rare": "Peu Commune",
      "name": "Epée Céleste",
      "cost": 7,
      "tags": ["Sort"],
      "description": "Inflige 3 dégâts sur la ligne et la rangée de la case ciblée.",
      "god": "Iop"
    },
    {
      "Rare": "Krosmique",
      "name": "Autorité",
      "cost": 8,
      "tags": ["Sort","Charge"],
      "description": "L'invocation ciblée charge jusqu'au Dofus adverse.",
      "god": "Iop"
    },
    {
      "name": "Trucage",
      "cost": 0,
      "tags": ["Sort","Pile OU Face"],
      "description": "Durant ce tour vos lancers de pièce tombent toujours sur Pile.",
      "god": "Ecaflip"
    },
    {
      "name": "Dé Pipé",
      "cost": 1,
      "tags": ["Sort"],
      "description": "Durant ce tour vos jets de dé ne peuvent être inférieur à 3.",
      "god": "Ecaflip"
    },
    {
      "name": "Echaenge",
      "cost": 1,
      "tags": ["Sort"],
      "description": "Chaque joueur pioche 1 carte chez son adversaire.",
      "god": "Ecaflip"
    },
    {
      "name": "Relance",
      "cost": 1,
      "tags": ["Sort","Pile OU Face"],
      "description": "Piochez 2 cartes OU piochez 1 carte.",
      "god": "Ecaflip"
    },
    {
      "name": "Chasseur",
      "cost": 2,
      "tags": ["Sort"],
      "description": "Piochez 1 carte. Elle coûte 0 PA si c'est une invocation, sinon défaussez-la.",
      "god": "Ecaflip"
    },
    {
      "name": "Tout ou Rien",
      "cost": 2,
      "tags": ["Sort","Charge","Pile OU Face","recule"],
      "description": "Vos invocations chargent de 2 cases OU reculent de 2 cases.",
      "god": "Ecaflip"
    },
    {
      "name": "Transchamation",
      "cost": 2,
      "tags": ["Sort"],
      "description": "Transforme vos invocations en Chachas Noirs.",
      "god": "Ecaflip"
    },
    {
      "name": "Martingale",
      "cost": 3,
      "tags": ["Sort"],
      "description": "Place voter main dans votre pioche. Piochez autant de cartes.",
      "god": "Ecaflip"
    },
    {
      "name": "Roulette Ecaflip",
      "cost": 3,
      "tags": ["Sort","1d6","AR"],
      "description": "Confère 1d6 AR à une invocation",
      "god": "Ecaflip"
    }, {
      "name": "Atout Caché",
      "cost": 4,
      "tags": ["Sort","PA"],
      "description": "Infligez 3 dégàts. Coûte 1 PA de moins à chaque lancer de dé ou de pièce alliés.",
      "god": "Ecaflip"
    }, {
      "name": "Bond du Félin",
      "cost": 4,
      "tags": ["Sort","Téléporte","1d6"],
      "description": "Téléporte une invocation alliée de 1d6 case(s).",
      "god": "Ecaflip"
    }, {
      "name": "Dé du Chacha",
      "cost": 4,
      "tags": ["Sort","1d6"],
      "description": "Ajoutez 1d6 Chacha(s) Noir(s) à votre main.",
      "god": "Ecaflip"
    }, {
      "name": "Dé du Chateux",
      "cost": 4,
      "tags": ["Sort","1d6"],
      "description": "Infligez 1d6 dégàt(s). Dévoile le Dofus adverse de la ligne sur 3 ou moins.",
      "god": "Ecaflip"
    }, {
      "name": "Dé Ecaflip",
      "cost": 4,
      "tags": ["Sort","1d6"],
      "description": "Infligez 1d6 dégàt(s). Récuperez ce sort sur 3 ou moins.",
      "god": "Ecaflip"
    }, {
      "name": "Bluff",
      "cost": 5,
      "tags": ["Sort"],
      "description": "Échange la position de 2 de vos Dofus.",
      "god": "Ecaflip"
    }, {
      "name": "Banqueroute",
      "cost": 6,
      "tags": ["Sort"],
      "description": "Toutes les invocations de la même famille que lm'invocation ciblée subissent 3 dégâts.",
      "god": "Ecaflip"
    }, {
      "name": "Bas les Pattes",
      "cost": 6,
      "tags": ["Sort"],
      "description": "Placez une invocation sur la pioche de son propriétaire.",
      "god": "Ecaflip"
    }, {
      "name": "Craps",
      "cost": 7,
      "tags": ["Sort","Pile OU Face"],
      "description": "Inflige 6 OU 3 dégâts répartis entre les Dofus adverses.",
      "god": "Ecaflip"
    }, {
      "name": "Chacha",
      "cost": 8,
      "tags": ["Sort"],
      "description": "Transforme une invocation en Chacha Noir allié.",
      "god": "Ecaflip"
    }, {
      "name": "Dé Rebondissant",
      "cost": 10,
      "tags": ["Sort","1d6","PA"],
      "description": "Inflige 1d6 dégât(s) aux invocations adverses. Coûte 1 PA de moins par Chacha allié en jeu.",
      "god": "Ecaflip"
    },
  ]
}

function App() {
  const [activeGod, setActiveGod] = useState(null);

  const handleButtonClick = (god) => {
    setActiveGod(activeGod === god ? null : god);
  };

  const cards = activeGod
    ? List.listes.filter(card => card.god === activeGod || card.god === null)
    : List.listes.filter(card => card.god === null);

  return (
    <div className="container">
      <h1 className="text-center">Krosmaga Deck Builder</h1>

      <div className="">
        {Object.values(Gods).map((god) => (
          <button
            key={god}
            onClick={() => handleButtonClick(god)}
            className={`god-button god-link btn-${god.toLowerCase()}`}
          >
            {god}
          </button>
        ))}
      </div>

      {activeGod && (
        <div className=" container">
          <h2>{activeGod}</h2>
          <div class="row">
            {cards.map((card, index) => (
              <div key={index} className={`col-12 col-sm-4 col-lg-3  card-${card.god.toLowerCase()} `}>

                <h3>{card.name}</h3>
                <p>{card.description}</p>
                <p>Cost: {card.cost}</p>
                <p>Tags: {card.tags.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
