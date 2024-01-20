const GeneralData = () => {
  const data = [
    {
      id: 1,
      title: "98k eJournals",
      desc: "Access a vast collection of EJournals covering a myriad of topics.",
    },
    {
      id: 2,
      title: "500+ eBooks",
      desc: "Access a vast collection of EJournals covering a myriad of topics.",
    },
    {
      id: 3,
      title: "400+Videos",
      desc: "Access a vast collection of EJournals covering a myriad of topics.",
    },
    {
      id: 4,
      title: "9000+ Other",
      desc: "Access a vast collection of EJournals covering a myriad of topics.",
    },
  ];
  const HTML = data.map((item) => {
    return (
      <div key={item.id} className='card gap-1 sm:gap-2 flex flex-col'>
        <h2 className='text-semilarge text-navbar-text-color font-feature-setting font-dm-sans font-bold'>
          {item.title}
        </h2>
        <p className='text-navbar-text-color font-feature-setting font-dm-sans text-medium font-medium leading-normal tracking-[-1px] '>
          {item.desc}
        </p>
      </div>
    );
  });
  return HTML;
};

export default GeneralData;
