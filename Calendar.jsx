import React, { useState } from 'react';
import { udalosti } from '../data';

const mesice = [
  'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen',
  'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'
];

const MonthlyEvents = () => {
  const today = new Date();
  const [aktualniMesic, setAktualniMesic] = useState(today.getMonth());
  const [aktualniRok, setAktualniRok] = useState(today.getFullYear());

  const zmenitMesic = (smer) => {
    let novyMesic = aktualniMesic + smer;
    let novyRok = aktualniRok;

    if (novyMesic < 0) {
      novyMesic = 11;
      novyRok -= 1;
    } else if (novyMesic > 11) {
      novyMesic = 0;
      novyRok += 1;
    }

    setAktualniMesic(novyMesic);
    setAktualniRok(novyRok);
  };

  const filtrovatUdalosti = () => {
    return udalosti.filter(udalost => {
      const datum = new Date(udalost.datum);
      return datum.getMonth() === aktualniMesic && datum.getFullYear() === aktualniRok;
    });
  };

  const udalostiVMesici = filtrovatUdalosti();

  return (
    <section className="text-center h-[calc(100vh-188px)]">
      <h3 className='font-rubik-distressed text-[#3A9931] text-7xl xl:text-8xl uppercase text-center my-20'>Kalendář</h3>

      <div className='border-2 border-[#202020] w-[88%] lg:w-[50%] mx-auto rounded-3xl font-inter py-8'>
        <div className="flex justify-center font-bold gap-6 my-10">
        <button onClick={() => zmenitMesic(-1)} className='text-3xl'>&larr;</button>
        <h2 className="text-4xl font-bold text-[#3A9931]">
          {mesice[aktualniMesic]} {aktualniRok}
        </h2>
        <button onClick={() => zmenitMesic(1)} className='text-3xl'>&rarr;</button>
      </div>

      {udalostiVMesici.length ? (
        <ul className="">
          {udalostiVMesici.map(({ id, nazev, datum, popis }) => (
            <li key={id} className="border-[1px] border-[#A86B3A] w-[60%] mx-auto my-6 rounded-xl text-left px-6 py-4 space-y-2">
              <h3 className="text-2xl font-bold text-[#3a9931]">{nazev}</h3>
              <p className="text-[#A86B3A]">{new Date(datum).toLocaleDateString('cs-CZ')}</p>
              <p className="">{popis}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Žádné události pro tento měsíc.</p>
      )}
      </div>

    </section>
  );
};

export default MonthlyEvents;