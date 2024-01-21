const GeneralData = () => {
  const data = [
    {
      id: 1,
      title: '98k eJournals',
      desc: 'Access a vast collection of EJournals covering a myriad of topics.',
    },
    {
      id: 2,
      title: '500+ eBooks',
      desc: 'Access a vast collection of EJournals covering a myriad of topics.',
    },
    {
      id: 3,
      title: '400+Videos',
      desc: 'Access a vast collection of EJournals covering a myriad of topics.',
    },
    {
      id: 4,
      title: '9000+ Other',
      desc: 'Access a vast collection of EJournals covering a myriad of topics.',
    },
  ]
  const HTML = data.map((item) => {
    return (
      <div key={item.id} className='card flex flex-col gap-1 sm:gap-2'>
        <h2 className='font-feature-setting font-dm-sans text-semilarge font-bold text-navbar-text-color'>
          {item.title}
        </h2>
        <p className='font-feature-setting font-dm-sans text-medium font-medium leading-normal tracking-[-1px] text-navbar-text-color '>
          {item.desc}
        </p>
      </div>
    )
  })
  return HTML
}

export default GeneralData
