import JournalBook from '../assets/images/journal.jpg'
import VideoImage from '../assets/images/video.jpg'
import layerIcon from '../assets/images/layer.jpg'

export const selectInputOptionValues = {
  selectInputOne: [
    {
      id: 1,
      value: 'Anywhere',
    },
    {
      id: 2,
      value: 'Local',
    },
    {
      id: 3,
      value: 'Foreign',
    },
  ],
  selectInputTwo: [
    {
      id: 1,
      value: 'Anywhere',
    },
    {
      id: 2,
      value: 'Local',
    },
    {
      id: 3,
      value: 'Foreign',
    },
  ],
  selectInputThree: [
    {
      id: 1,
      value: '1 Week',
    },
    {
      id: 2,
      value: '2 Week',
    },
    {
      id: 3,
      value: 'Last 7 Days',
    },
  ],
  selectInputFour: [
    {
      id: 1,
      value: 'e-Journal',
    },
    {
      id: 2,
      value: 'e-Books',
    },
    {
      id: 3,
      value: 'Videos',
    },
    {
      id: 4,
      value: 'Other Resources',
    },
  ],
}

export const AtoZcharacters = [
  { id: 1, name: '0-9', status: true },
  { id: 2, name: 'A', status: false },
  { id: 3, name: 'B', status: false },
  { id: 4, name: 'C', status: false },
  { id: 5, name: 'D', status: false },
  { id: 6, name: 'E', status: false },
  { id: 7, name: 'F', status: false },
  { id: 8, name: 'G', status: false },
  { id: 9, name: 'H', status: false },
  { id: 10, name: 'I', status: false },
  { id: 11, name: 'J', status: false },
  { id: 12, name: 'K', status: false },
  { id: 13, name: 'L', status: false },
  { id: 14, name: 'M', status: false },
  { id: 15, name: 'N', status: false },
  { id: 16, name: 'O', status: false },
  { id: 17, name: 'P', status: false },
  { id: 18, name: 'Q', status: false },
  { id: 19, name: 'R', status: false },
  { id: 20, name: 'S', status: false },
  { id: 21, name: 'T', status: false },
  { id: 22, name: 'U', status: false },
  { id: 23, name: 'V', status: false },
  { id: 24, name: 'W', status: false },
  { id: 25, name: 'X', status: false },
  { id: 26, name: 'Y', status: false },
  { id: 27, name: 'Z', status: false },
]

export const suggestedTopic = [
  {
    id: 1,
    name: 'Topic Name',
  },
  {
    id: 2,
    name: 'Topic Name',
  },
  {
    id: 3,
    name: 'Topic Name',
  },
  {
    id: 4,
    name: 'Topic Name',
  },
  {
    id: 5,
    name: 'Topic Name',
  },
  {
    id: 6,
    name: 'Topic Name',
  },
  {
    id: 7,
    name: 'Topic Name',
  },
  {
    id: 8,
    name: 'Topic Name',
  },
  {
    id: 9,
    name: 'Topic Name',
  },
]

export const PublicationData = [
  {
    id: 1,
    status: false,
    label: 'e-Journals',
    number: 55,
  },
  {
    id: 2,
    status: false,
    label: 'e-Books',
    number: 44,
  },
  {
    id: 3,
    status: true,
    label: 'Videos',
    number: 33,
  },
  {
    id: 4,
    status: false,
    label: 'Dissertations and Thesis',
    number: 22,
  },
  {
    id: 5,
    status: true,
    label: 'e-Articles',
    number: 11,
  },
  {
    id: 6,
    status: false,
    label: 'Other e-Resources',
    number: 11,
  },
]

export const PublicationDateData = [
  {
    id: 1,
    status: false,
    label: 'Last Week',
  },
  {
    id: 2,
    status: false,
    label: 'Last Month',
  },
  {
    id: 3,
    status: false,
    label: 'Last 3 Months',
  },
  {
    id: 4,
    status: false,
    label: 'Last 6 Months',
    number: 22,
  },
  {
    id: 5,
    status: false,
    label: 'Last 12 Months',
    number: 11,
  },
]

export const AccessKeyData = [
  {
    id: 1,
    status: false,
    label: 'Full Text Only',
  },
  {
    id: 2,
    status: false,
    label: 'Open Access Content',
  },
  {
    id: 3,
    status: true,
    label: 'Partial Subscribed Content',
  },
  {
    id: 4,
    status: false,
    label: 'Abstract Only',
  },
  {
    id: 5,
    status: true,
    label: 'Subscribed Content',
  },
  {
    id: 6,
    status: true,
    label: 'Indexed Journals',
  },
]

export const SubjectData = [
  {
    id: 1,
    open: false,
    title: 'Medical',
    number: 1800,
    innerContent: [
      {
        id: 1,
        status: false,
        label: 'Human Anatomy and Physiology',
      },
      {
        id: 2,
        status: false,
        label: 'Remedial Biology',
      },
      {
        id: 3,
        status: false,
        label: 'Biochemistry',
      },
      {
        id: 4,
        status: false,
        label: 'Anatomy',
      },
    ],
  },
  {
    id: 2,
    open: false,
    title: 'Dental',
    number: 555,
    innerContent: [
      {
        id: 1,
        status: false,
        label: 'AAAA',
      },
      {
        id: 2,
        status: false,
        label: 'BBBB',
      },
      {
        id: 3,
        status: false,
        label: 'CCCC',
      },
      {
        id: 4,
        status: false,
        label: 'DDDD',
      },
    ],
  },
  {
    id: 3,
    open: false,
    title: 'Nursing',
    number: 888,
    innerContent: [
      {
        id: 1,
        status: false,
        label: 'Human Anatomy and Physiology',
      },
      {
        id: 2,
        status: false,
        label: 'Remedial Biology',
      },
      {
        id: 3,
        status: false,
        label: 'Biochemistry',
      },
      {
        id: 4,
        status: false,
        label: 'Anatomy',
      },
    ],
  },
  {
    id: 4,
    open: false,
    title: 'Pharma',
    number: 555,
    innerContent: [
      {
        id: 1,
        status: false,
        label: 'Human Anatomy and Physiology',
      },
      {
        id: 2,
        status: false,
        label: 'Remedial Biology',
      },
      {
        id: 3,
        status: false,
        label: 'Biochemistry',
      },
      {
        id: 4,
        status: false,
        label: 'Anatomy',
      },
    ],
  },
]

export const IndexedIn = [
  {
    id: 1,
    status: false,
    label: 'Scopus',
    number: 55,
  },
  {
    id: 2,
    status: true,
    label: 'Scopus',
    number: 44,
  },
  {
    id: 3,
    status: true,
    label: 'Pubmed',
    number: 33,
  },
  {
    id: 4,
    status: false,
    label: 'Elviser',
    number: 22,
  },
]

export const CardData = [
  {
    id: 1,
    badgeColor: '#2A67FF',
    badgeValue: 'e-Journals',
    title: 'Journal of Prosthodontics',
    link: '/explore/e-Journals',
    point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
    point_3_1: 'Date of Publsih :',
    point_3_2: '01 April 2015',
  },
  {
    id: 2,
    badgeColor: '#C19300',
    badgeValue: 'eBook',
    title: 'Journal of Prosthodontics',
    link: '/explore/eBook',
    point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
    point_3_1: 'Date of Publsih :',
    point_3_2: '01 April 2015',
  },
  {
    id: 3,
    badgeColor: '#D12720',
    badgeValue: 'eArtical',
    title: 'Aritcal of Prosthodontics',
    link: '/explore/eArtical',
    point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
    point_3_1: 'Date of Publsih :',
    point_3_2: '01 April 2015',
  },
  {
    id: 4,
    badgeColor: '#000360',
    badgeValue: 'eArtical',
    title: 'Journal of Prosthodontics',
    link: '/explore/eArtical',
    point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
    point_3_1: 'Date of Publsih :',
    point_3_2: '01 April 2015',
  },
  {
    id: 5,
    badgeColor: '#C19300',
    badgeValue: 'eBook',
    title: 'Journal of Prosthodontics',
    link: '/explore/eBook',
    point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
    point_3_1: 'Date of Publsih :',
    point_3_2: '01 April 2015',
  },
  {
    id: 6,
    badgeColor: '#D12720',
    badgeValue: 'eArtical',
    title: 'Aritcal of Prosthodontics',
    link: '/explore/eArtical',
    point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
    point_3_1: 'Date of Publsih :',
    point_3_2: '01 April 2015',
  },
  {
    id: 7,
    badgeColor: '#000360',
    badgeValue: 'eArtical',
    title: 'Journal of Prosthodontics',
    link: '/explore/eArtical',
    point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
    point_3_1: 'Date of Publsih :',
    point_3_2: '01 April 2015',
  },
]

export const Journal = [
  // {
  //   "Id": 2,
  //   "t": "INDIAN JOURNAL OF DENTAL RESEARCH",
  //   "a": "",
  //   "i": "0970-9290",
  //   "ci": "http://www.ijdr.in/showBackIssue.asp?issn=0970-9290;year=2019;volume=30;issue=1;month=January-February",
  //   "aw": "http://www.ijdr.in/backissues.asp",
  //   "ftsd": "2005",
  //   "fted": "2020",
  //   "asd": "",
  //   "aed": "",
  //   "ars": "http://www.ijdr.in/submitarticle.asp",
  //   "f": 6,
  //   "e": "",
  //   "si": "",
  //   "p": null,
  //   "st": 4,
  //   "s": 4,
  //   "ss": 10,
  //   "pid": 108
  // },
  {
    id: 1,
    imageUrl: JournalBook,
    title: 'Journal of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 2,
    imageUrl: JournalBook,
    title: 'Journal of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 3,
    imageUrl: JournalBook,
    title: 'Journal of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 4,
    imageUrl: JournalBook,
    title: 'Journal of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 5,
    imageUrl: JournalBook,
    title: 'Journal of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 6,
    imageUrl: JournalBook,
    title: 'Journal of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 7,
    imageUrl: JournalBook,
    title: 'Journal of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
]

export const EBook = [
  {
    id: 1,
    imageUrl: JournalBook,
    title: 'Ebook on Prostodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 2,
    imageUrl: JournalBook,
    title: 'Ebook on Prostodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 3,
    imageUrl: JournalBook,
    title: 'Ebook on Prostodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 4,
    imageUrl: JournalBook,
    title: 'Ebook on Prostodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 5,
    imageUrl: JournalBook,
    title: 'Ebook on Prostodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 6,
    imageUrl: JournalBook,
    title: 'Ebook on Prostodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
  {
    id: 7,
    imageUrl: JournalBook,
    title: 'Ebook on Prostodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
    pdfLink: '',
  },
]

export const Videos = [
  {
    id: 1,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: null,
  },
  {
    id: 2,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: null,
  },
  {
    id: 3,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: null,
  },
  {
    id: 4,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: null,
  },
  {
    id: 5,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: null,
  },
  {
    id: 6,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: null,
  },
  {
    id: 7,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
  },
  {
    id: 8,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: null,
  },
  {
    id: 9,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
  },
  {
    id: 10,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: null,
  },
  {
    id: 11,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
  },
  {
    id: 12,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
  },
  {
    id: 13,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: null,
  },
  {
    id: 14,
    imageUrl: VideoImage,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    publicationYear: '2023',
  },
]

export const OtherSources = [
  {
    id: 1,
    imageUrl: layerIcon,
    title: 'Case Study on Prostodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
    viewOnTitle: 'View On Pub Site',
    viewOnLogo: null,
    viewOnLink: null,
  },
  {
    id: 2,
    imageUrl: layerIcon,
    title: 'Case Study on Prostodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
  },
  {
    id: 3,
    imageUrl: layerIcon,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
  },
  {
    id: 4,
    imageUrl: layerIcon,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
  },
  {
    id: 5,
    imageUrl: layerIcon,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
  },
  {
    id: 6,
    imageUrl: layerIcon,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
  },
  {
    id: 7,
    imageUrl: layerIcon,
    title: 'Videos of Prosthodontics',
    publishedBy: ' Taylor and Francis Ltd',
    publicationPlace: 'Pondichery',
  },
]

export const masterData = {
  SubjectList: [
    {
      PK: 1,
      Name: 'AGRICULTURE',
    },
    {
      PK: 2,
      Name: 'ARTS & COMMERCE',
    },
    {
      PK: 3,
      Name: 'COMPUTER SCIENCE',
    },
    {
      PK: 4,
      Name: 'DENTISTRY',
    },
    {
      PK: 5,
      Name: 'ENGINEERING',
    },
    {
      PK: 6,
      Name: 'Humanity & Social Science',
    },
    {
      PK: 7,
      Name: 'MANAGEMENT',
    },
    {
      PK: 9,
      Name: 'MEDICAL',
    },
    {
      PK: 10,
      Name: 'NURSING',
    },
    {
      PK: 11,
      Name: 'PHARMACY',
    },
    {
      PK: 12,
      Name: 'HOSPITALITY & TOURISM',
    },
    {
      PK: 14,
      Name: 'HEALTH',
    },
    {
      PK: 22,
      Name: 'BASIC & APLLIED SCIENCES',
    },
    {
      PK: 24,
      Name: 'VETERINARY AND ANIMAL SCIENCES',
    },
    {
      PK: 25,
      Name: 'EDUCATION',
    },
    {
      PK: 26,
      Name: 'Mass Com. & Media',
    },
    {
      PK: 27,
      Name: 'Ayush and Yoga Science',
    },
    {
      PK: 28,
      Name: 'EDUCATION',
    },
    {
      PK: 32,
      Name: 'LAW',
    },
    {
      PK: 33,
      Name: 'ARCHITECTURE',
    },
    {
      PK: 34,
      Name: 'PHYSIOTHERAPY',
    },
    {
      PK: 35,
      Name: 'FORENSIC AND LEGAL STUDIES',
    },
    {
      PK: 36,
      Name: 'HOMEOPATHY',
    },
    {
      PK: 37,
      Name: 'ALLIED HEALTH & PARAMEDICS',
    },
    {
      PK: 38,
      Name: 'MILITARY AND DEFENCE',
    },
  ],
  SubSubjectList: [
    {
      Pk: 2,
      Name: 'MEDICINE',
      SubjectPk: 9,
    },
    {
      Pk: 3,
      Name: 'Ortho & Dentomaxillofacial',
      SubjectPk: 4,
    },
    {
      Pk: 4,
      Name: 'RADIOLOGY',
      SubjectPk: 9,
    },
    {
      Pk: 5,
      Name: 'CARDIOLOGY',
      SubjectPk: 9,
    },
    {
      Pk: 6,
      Name: 'BANKING',
      SubjectPk: 7,
    },
    {
      Pk: 7,
      Name: 'ONCOLOGY',
      SubjectPk: 9,
    },
    {
      Pk: 8,
      Name: 'Political Science',
      SubjectPk: 6,
    },
    {
      Pk: 9,
      Name: 'ORAL AND MAXILLOFACIAL SURGERY',
      SubjectPk: 4,
    },
    {
      Pk: 10,
      Name: 'Dentistry & Oral Science',
      SubjectPk: 4,
    },
    {
      Pk: 11,
      Name: 'PROSTHODONTICS',
      SubjectPk: 4,
    },
    {
      Pk: 12,
      Name: 'ENTOMOLOGY',
      SubjectPk: 1,
    },
    {
      Pk: 13,
      Name: 'AGRICULTURE ECONOMICS',
      SubjectPk: 1,
    },
    {
      Pk: 14,
      Name: 'PLANT PATHOLOGY',
      SubjectPk: 1,
    },
    {
      Pk: 15,
      Name: 'MICROBIOLOGY',
      SubjectPk: 9,
    },
    {
      Pk: 16,
      Name: 'PSYCHIATRIC',
      SubjectPk: 9,
    },
    {
      Pk: 17,
      Name: 'BIOCHEMISTRY',
      SubjectPk: 9,
    },
    {
      Pk: 18,
      Name: 'PEDODONTICS',
      SubjectPk: 4,
    },
    {
      Pk: 20,
      Name: 'ORAL PATHOLOGY',
      SubjectPk: 4,
    },
    {
      Pk: 22,
      Name: 'PERIODONTOLOGY',
      SubjectPk: 4,
    },
    {
      Pk: 23,
      Name: 'PUBLIC HEALTH',
      SubjectPk: 14,
    },
    {
      Pk: 25,
      Name: 'COMMUNITY MEDICINE',
      SubjectPk: 9,
    },
    {
      Pk: 26,
      Name: 'SURGERY',
      SubjectPk: 9,
    },
    {
      Pk: 27,
      Name: 'OPHTHALMOLOGY',
      SubjectPk: 9,
    },
    {
      Pk: 29,
      Name: 'PATHOLOGY',
      SubjectPk: 9,
    },
    {
      Pk: 30,
      Name: 'ORTHOPEDICS',
      SubjectPk: 9,
    },
    {
      Pk: 32,
      Name: 'DERMATOLOGY',
      SubjectPk: 9,
    },
    {
      Pk: 34,
      Name: 'ANATOMY',
      SubjectPk: 9,
    },
    {
      Pk: 36,
      Name: 'ANESTHESIA',
      SubjectPk: 9,
    },
    {
      Pk: 37,
      Name: 'Conservative & Endodontics',
      SubjectPk: 4,
    },
    {
      Pk: 44,
      Name: 'Obstetrics & Gynecology',
      SubjectPk: 9,
    },
    {
      Pk: 45,
      Name: 'PEDIATRICS',
      SubjectPk: 9,
    },
    {
      Pk: 47,
      Name: 'Public Health Dentistry',
      SubjectPk: 4,
    },
    {
      Pk: 50,
      Name: 'ORAL MEDICINE & RADIOLOGY',
      SubjectPk: 4,
    },
    {
      Pk: 51,
      Name: 'MATERIALS SCIENCE',
      SubjectPk: 5,
    },
    {
      Pk: 53,
      Name: 'BIOMEDICAL SCIENCE',
      SubjectPk: 22,
    },
    {
      Pk: 54,
      Name: 'BIOLOGY',
      SubjectPk: 22,
    },
    {
      Pk: 55,
      Name: 'MICROBIOLOGY',
      SubjectPk: 22,
    },
    {
      Pk: 57,
      Name: 'Medical Lab Technology',
      SubjectPk: 22,
    },
    {
      Pk: 59,
      Name: 'ZOOLOGY',
      SubjectPk: 22,
    },
    {
      Pk: 60,
      Name: 'PHYSICS',
      SubjectPk: 22,
    },
    {
      Pk: 61,
      Name: 'BIOTECHNOLOGY',
      SubjectPk: 22,
    },
    {
      Pk: 62,
      Name: 'SCIENCE',
      SubjectPk: 22,
    },
    {
      Pk: 64,
      Name: 'STATISTICS',
      SubjectPk: 22,
    },
    {
      Pk: 65,
      Name: 'POLYMER SCIENCE',
      SubjectPk: 22,
    },
    {
      Pk: 68,
      Name: 'E.N.T. (Ear, Nose ,Throat)',
      SubjectPk: 9,
    },
    {
      Pk: 69,
      Name: 'PHARMACOLOGY',
      SubjectPk: 9,
    },
    {
      Pk: 73,
      Name: 'CHEMISTERY',
      SubjectPk: 22,
    },
    {
      Pk: 74,
      Name: 'PHONOSURGERY',
      SubjectPk: 9,
    },
    {
      Pk: 77,
      Name: 'FOOD TECHNOLOGY',
      SubjectPk: 1,
    },
    {
      Pk: 81,
      Name: 'FORENSIC MEDICINE',
      SubjectPk: 9,
    },
    {
      Pk: 83,
      Name: 'PHYSIOLOGY',
      SubjectPk: 9,
    },
    {
      Pk: 86,
      Name: 'MECHANICAL ENGINEERING',
      SubjectPk: 5,
    },
    {
      Pk: 87,
      Name: 'ECONOMICS AND BUSINESS MANAGEMENT',
      SubjectPk: 7,
    },
    {
      Pk: 89,
      Name: 'COMPUTATIONAL OPTIMIZATION',
      SubjectPk: 7,
    },
    {
      Pk: 90,
      Name: 'COMPUTATIONAL LINGUISTICS',
      SubjectPk: 7,
    },
    {
      Pk: 91,
      Name: 'COMPUTATIONAL SIMULATION AND MODELING',
      SubjectPk: 7,
    },
    {
      Pk: 92,
      Name: 'TELE-COMMUNICATION',
      SubjectPk: 5,
    },
    {
      Pk: 94,
      Name: 'COMPUTER SCIENCE',
      SubjectPk: 5,
    },
    {
      Pk: 95,
      Name: 'ROBOTICS',
      SubjectPk: 5,
    },
    {
      Pk: 97,
      Name: 'CIVIL ENGINNEERING',
      SubjectPk: 5,
    },
    {
      Pk: 99,
      Name: 'GENERAL ENGINEERING',
      SubjectPk: 5,
    },
    {
      Pk: 100,
      Name: 'ELECTRICAL ENGINEERING',
      SubjectPk: 5,
    },
    {
      Pk: 102,
      Name: 'CHEMICAL TECHNOLOGY',
      SubjectPk: 5,
    },
    {
      Pk: 104,
      Name: 'ENVIRONMENTAL ENGINEERING',
      SubjectPk: 5,
    },
    {
      Pk: 105,
      Name: 'HYDRAULIC ENGINEERING',
      SubjectPk: 5,
    },
    {
      Pk: 106,
      Name: 'NUCLEAR ENGINEERING',
      SubjectPk: 5,
    },
    {
      Pk: 108,
      Name: 'ALGEBRA',
      SubjectPk: 8,
    },
    {
      Pk: 109,
      Name: 'EXTENSION EDUCATION',
      SubjectPk: 1,
    },
    {
      Pk: 110,
      Name: 'SOIL SCIENCE',
      SubjectPk: 1,
    },
    {
      Pk: 111,
      Name: 'GENETICS AND PLANT BREEDING',
      SubjectPk: 1,
    },
    {
      Pk: 112,
      Name: 'PRODUCTION ENGINEERING',
      SubjectPk: 5,
    },
    {
      Pk: 114,
      Name: 'BIOMEDICAL ENGINEERING',
      SubjectPk: 5,
    },
    {
      Pk: 119,
      Name: 'ELECTRONICS ENGINEERING',
      SubjectPk: 5,
    },
    {
      Pk: 120,
      Name: 'ARTIFICIAL INTELLIGENCE',
      SubjectPk: 3,
    },
    {
      Pk: 121,
      Name: 'COMPUTER GRAPHICS',
      SubjectPk: 3,
    },
    {
      Pk: 122,
      Name: 'HUMAN-COMPUTER INTERACTION',
      SubjectPk: 3,
    },
    {
      Pk: 123,
      Name: 'INFORMATION AND KNOWLEDGE',
      SubjectPk: 3,
    },
    {
      Pk: 124,
      Name: 'NUMERICAL ANALYSIS AND SCIENTIFIC COMPUTING',
      SubjectPk: 3,
    },
    {
      Pk: 125,
      Name: 'GENERAL-COMPUTER SCIENCE',
      SubjectPk: 3,
    },
    {
      Pk: 127,
      Name: 'ENVIRONMENTAL HEALTH',
      SubjectPk: 14,
    },
    {
      Pk: 129,
      Name: 'GENERAL MANAGEMENT',
      SubjectPk: 7,
    },
    {
      Pk: 130,
      Name: 'GENERAL - MATHEMATICS',
      SubjectPk: 8,
    },
    {
      Pk: 131,
      Name: 'NUMERICALS',
      SubjectPk: 8,
    },
    {
      Pk: 132,
      Name: 'TRIANGLES',
      SubjectPk: 8,
    },
    {
      Pk: 133,
      Name: 'GEOMETRY',
      SubjectPk: 8,
    },
    {
      Pk: 134,
      Name: 'Psychiatry and Psychology',
      SubjectPk: 6,
    },
    {
      Pk: 135,
      Name: 'ATMOSPHERIC',
      SubjectPk: 18,
    },
    {
      Pk: 136,
      Name: 'GENERAL-ENVIRONMENTAL ENGINEERING',
      SubjectPk: 18,
    },
    {
      Pk: 137,
      Name: 'Public Policy & Governance',
      SubjectPk: 6,
    },
    {
      Pk: 138,
      Name: 'INDUSTRY AND INDUSTRIAL STUDIES',
      SubjectPk: 7,
    },
    {
      Pk: 139,
      Name: 'Religion and Theology',
      SubjectPk: 6,
    },
    {
      Pk: 140,
      Name: 'Rights and Institutional Governance',
      SubjectPk: 6,
    },
    {
      Pk: 141,
      Name: 'Sociology and Social Anthropology',
      SubjectPk: 6,
    },
    {
      Pk: 142,
      Name: 'Urban studies',
      SubjectPk: 6,
    },
    {
      Pk: 143,
      Name: 'INFORMATION TECHONOLOGY',
      SubjectPk: 7,
    },
    {
      Pk: 144,
      Name: 'ENVIRONEMENT MANAGEMENT',
      SubjectPk: 7,
    },
    {
      Pk: 145,
      Name: 'FINANCE AND ACCOUNTING',
      SubjectPk: 7,
    },
    {
      Pk: 146,
      Name: 'MARKETING MANAGEMENT',
      SubjectPk: 7,
    },
    {
      Pk: 147,
      Name: 'E-COMMERCE',
      SubjectPk: 7,
    },
    {
      Pk: 148,
      Name: 'SOCIAL STUDIES',
      SubjectPk: 7,
    },
    {
      Pk: 149,
      Name: 'HOSPITALITY & TOURISM MANAGEMENT',
      SubjectPk: 7,
    },
    {
      Pk: 150,
      Name: 'Rachana Sharir (Anatomy)',
      SubjectPk: 27,
    },
    {
      Pk: 151,
      Name: 'Kriya Sharir (Physiology)',
      SubjectPk: 27,
    },
    {
      Pk: 152,
      Name: 'Rasashastra and Bhaishajya Kalpana (Medicinal Chemistry and Pharmacy)',
      SubjectPk: 27,
    },
    {
      Pk: 153,
      Name: 'Stri Roga and Prasuti Tantra (Gynaecology, Obstetrics )',
      SubjectPk: 27,
    },
    {
      Pk: 154,
      Name: 'Swasthyavritta (Social and Preventative Medicine)',
      SubjectPk: 27,
    },
    {
      Pk: 155,
      Name: 'Roga Nidan & Vikriti Vigyan (Pathology)',
      SubjectPk: 27,
    },
    {
      Pk: 156,
      Name: 'Agada Tantra and Vyavaharayurveda (Toxicology, Jurisprudence and Forensic Medicine)',
      SubjectPk: 27,
    },
    {
      Pk: 157,
      Name: 'Shalya Tantra (Surgery)',
      SubjectPk: 27,
    },
    {
      Pk: 158,
      Name: 'Dravyaguna (Ayurvedic Pharmacology)',
      SubjectPk: 27,
    },
    {
      Pk: 159,
      Name: 'Kayachikitsa (General Medicine)',
      SubjectPk: 27,
    },
    {
      Pk: 160,
      Name: 'Info. & Comm. Tech. for Education - ICTE',
      SubjectPk: 28,
    },
    {
      Pk: 161,
      Name: 'Human Psychology and Behaviour',
      SubjectPk: 28,
    },
    {
      Pk: 162,
      Name: 'Education: Arts, Culture and Humanities',
      SubjectPk: 28,
    },
    {
      Pk: 163,
      Name: 'Guidance & Counselling',
      SubjectPk: 28,
    },
    {
      Pk: 164,
      Name: 'Philosophy of Education',
      SubjectPk: 28,
    },
    {
      Pk: 165,
      Name: 'Economics Education',
      SubjectPk: 28,
    },
    {
      Pk: 166,
      Name: 'Holistic Education',
      SubjectPk: 28,
    },
    {
      Pk: 167,
      Name: 'General Education',
      SubjectPk: 28,
    },
    {
      Pk: 168,
      Name: 'Biopharmaceutics & Pharmacokinetics',
      SubjectPk: 11,
    },
    {
      Pk: 169,
      Name: 'Pharmaceutics',
      SubjectPk: 11,
    },
    {
      Pk: 170,
      Name: 'Pharmacology & Toxicity',
      SubjectPk: 11,
    },
    {
      Pk: 171,
      Name: 'Pharmacognosy & Methodology',
      SubjectPk: 11,
    },
    {
      Pk: 172,
      Name: 'Pharmaceutical Chemistry',
      SubjectPk: 11,
    },
    {
      Pk: 173,
      Name: 'Clinical Pharmacy',
      SubjectPk: 11,
    },
    {
      Pk: 174,
      Name: 'Drug Discovery & Analysis',
      SubjectPk: 11,
    },
    {
      Pk: 175,
      Name: 'Pharmaceutical Dosage Forms',
      SubjectPk: 11,
    },
    {
      Pk: 176,
      Name: 'Hospital & Community Pharmacy',
      SubjectPk: 11,
    },
    {
      Pk: 177,
      Name: 'Industrial Pharmacy',
      SubjectPk: 11,
    },
    {
      Pk: 178,
      Name: 'IPR & Guidelines',
      SubjectPk: 11,
    },
    {
      Pk: 179,
      Name: 'Community Health Nursing',
      SubjectPk: 10,
    },
    {
      Pk: 180,
      Name: 'Gerontology and Geriatric Nursing',
      SubjectPk: 10,
    },
    {
      Pk: 181,
      Name: 'Midwifery & Gynaecology',
      SubjectPk: 10,
    },
    {
      Pk: 182,
      Name: 'Intensive Care Nursing',
      SubjectPk: 10,
    },
    {
      Pk: 183,
      Name: 'Medical Science Nursing',
      SubjectPk: 10,
    },
    {
      Pk: 184,
      Name: 'Medical Surgical Nursing',
      SubjectPk: 10,
    },
    {
      Pk: 185,
      Name: 'Mental Health & Psychiatric Nursing',
      SubjectPk: 10,
    },
    {
      Pk: 192,
      Name: 'TB CHEST',
      SubjectPk: 9,
    },
    {
      Pk: 194,
      Name: 'BOTANY',
      SubjectPk: 22,
    },
    {
      Pk: 195,
      Name: 'Oncology-Palliative Care Nursing',
      SubjectPk: 10,
    },
    {
      Pk: 197,
      Name: 'ANIMAL HUSBANDRY',
      SubjectPk: 1,
    },
    {
      Pk: 198,
      Name: 'HORTICULTURE',
      SubjectPk: 1,
    },
    {
      Pk: 199,
      Name: 'Building Construction',
      SubjectPk: 33,
    },
    {
      Pk: 201,
      Name: 'AGRONOMY',
      SubjectPk: 1,
    },
    {
      Pk: 205,
      Name: 'FAMILY LAW',
      SubjectPk: 32,
    },
    {
      Pk: 206,
      Name: 'CONSTITUTIONAL LAW',
      SubjectPk: 32,
    },
    {
      Pk: 207,
      Name: 'PROFESSIONAL ETHICS',
      SubjectPk: 32,
    },
    {
      Pk: 208,
      Name: 'COMPANY LAW',
      SubjectPk: 32,
    },
    {
      Pk: 209,
      Name: 'INTERNATIONAL LAW',
      SubjectPk: 32,
    },
    {
      Pk: 210,
      Name: 'RIGHT TO INFORMATION LAW',
      SubjectPk: 32,
    },
    {
      Pk: 211,
      Name: 'CYBER LAW',
      SubjectPk: 32,
    },
    {
      Pk: 212,
      Name: 'JURISPRUDENCE',
      SubjectPk: 32,
    },
    {
      Pk: 213,
      Name: 'IPC',
      SubjectPk: 32,
    },
    {
      Pk: 214,
      Name: 'LABOUR & INDUSTRIAL LAW',
      SubjectPk: 32,
    },
    {
      Pk: 215,
      Name: 'BANKING LAW',
      SubjectPk: 32,
    },
    {
      Pk: 216,
      Name: 'PROPERTY LAW',
      SubjectPk: 32,
    },
    {
      Pk: 217,
      Name: 'Soft Skills & Development Communication',
      SubjectPk: 26,
    },
    {
      Pk: 218,
      Name: 'Reporting And Editing',
      SubjectPk: 26,
    },
    {
      Pk: 219,
      Name: 'Advertising And Public Relations',
      SubjectPk: 26,
    },
    {
      Pk: 220,
      Name: 'TV Journalism & Communication',
      SubjectPk: 26,
    },
    {
      Pk: 221,
      Name: 'MEDIA LAW AND ETHICS',
      SubjectPk: 26,
    },
    {
      Pk: 222,
      Name: 'Digital Media and IT',
      SubjectPk: 26,
    },
    {
      Pk: 223,
      Name: 'Event Management',
      SubjectPk: 26,
    },
    {
      Pk: 224,
      Name: 'Sound Recording & Radio Production',
      SubjectPk: 26,
    },
    {
      Pk: 225,
      Name: 'International Relations',
      SubjectPk: 26,
    },
    {
      Pk: 226,
      Name: 'Intercultural Communication',
      SubjectPk: 26,
    },
    {
      Pk: 227,
      Name: 'Film Communication',
      SubjectPk: 26,
    },
    {
      Pk: 228,
      Name: 'Photo Journalism',
      SubjectPk: 26,
    },
    {
      Pk: 229,
      Name: 'MEDIA MANAGEMENT',
      SubjectPk: 26,
    },
    {
      Pk: 230,
      Name: 'BASIC MEDICAL SCIENCE',
      SubjectPk: 34,
    },
    {
      Pk: 231,
      Name: 'EXERCISE THERAPY',
      SubjectPk: 34,
    },
    {
      Pk: 232,
      Name: 'SPORTS SCIENCE AND MEDICINE',
      SubjectPk: 34,
    },
    {
      Pk: 233,
      Name: 'CARDIO & RESPIRATORY DISORDERS',
      SubjectPk: 34,
    },
    {
      Pk: 234,
      Name: 'GENERAL MEDICINE AND SURGERY',
      SubjectPk: 34,
    },
    {
      Pk: 235,
      Name: 'REHABILITATION SCIENCE',
      SubjectPk: 34,
    },
    {
      Pk: 236,
      Name: 'ORTHOPAEDICS',
      SubjectPk: 34,
    },
    {
      Pk: 237,
      Name: 'MUSCULOSKELETAL AND SPORTS PHYSIOTHERAPY',
      SubjectPk: 34,
    },
    {
      Pk: 238,
      Name: 'PEDIATRIC AND ADULT NEURO-REHABILITATION',
      SubjectPk: 34,
    },
    {
      Pk: 239,
      Name: 'VESTIBULAR REHABILITATION',
      SubjectPk: 34,
    },
    {
      Pk: 240,
      Name: 'PHYSIOTHERAPY & OCCUPATIONAL THERAPY',
      SubjectPk: 34,
    },
    {
      Pk: 241,
      Name: 'BRAIN MAPPING',
      SubjectPk: 35,
    },
    {
      Pk: 242,
      Name: 'CRIME SCENE',
      SubjectPk: 35,
    },
    {
      Pk: 243,
      Name: 'INVESTIGATION',
      SubjectPk: 35,
    },
    {
      Pk: 244,
      Name: 'CRIMINOLOGY',
      SubjectPk: 35,
    },
    {
      Pk: 245,
      Name: 'CYBER CRIME & LAW',
      SubjectPk: 35,
    },
    {
      Pk: 246,
      Name: 'DNA FINGERPRINT',
      SubjectPk: 35,
    },
    {
      Pk: 247,
      Name: 'EXPLOSIVES',
      SubjectPk: 35,
    },
    {
      Pk: 248,
      Name: 'FINGERPRINTING',
      SubjectPk: 35,
    },
    {
      Pk: 249,
      Name: 'FORENSIC BALLISTICS',
      SubjectPk: 35,
    },
    {
      Pk: 250,
      Name: 'FORENSIC SCIENCE',
      SubjectPk: 35,
    },
    {
      Pk: 251,
      Name: 'SECURITY MANAGEMENT',
      SubjectPk: 35,
    },
    {
      Pk: 252,
      Name: 'TOXICOLOGY',
      SubjectPk: 35,
    },
    {
      Pk: 253,
      Name: 'VICTIMOLOGY',
      SubjectPk: 35,
    },
    {
      Pk: 255,
      Name: 'Pediatric Nursing',
      SubjectPk: 10,
    },
    {
      Pk: 256,
      Name: 'Physical Medicine and Rehabilitation',
      SubjectPk: 10,
    },
    {
      Pk: 257,
      Name: 'Public Health , Nutrition and Dietetics',
      SubjectPk: 10,
    },
    {
      Pk: 258,
      Name: 'Radiology and Nuclear Medicine',
      SubjectPk: 10,
    },
    {
      Pk: 259,
      Name: 'Kaumarabhritya (Paediatrics)',
      SubjectPk: 27,
    },
    {
      Pk: 260,
      Name: 'Maulika Siddhanta (Basic Principles of Ayurveda)',
      SubjectPk: 27,
    },
    {
      Pk: 261,
      Name: 'Panchakarma',
      SubjectPk: 27,
    },
    {
      Pk: 262,
      Name: 'Naturopathy and Yoga',
      SubjectPk: 27,
    },
    {
      Pk: 263,
      Name: 'Drugs & Narcotics',
      SubjectPk: 35,
    },
    {
      Pk: 264,
      Name: 'Chemical Engineering',
      SubjectPk: 22,
    },
    {
      Pk: 265,
      Name: 'Computer Science',
      SubjectPk: 22,
    },
    {
      Pk: 266,
      Name: 'Ecology',
      SubjectPk: 22,
    },
    {
      Pk: 267,
      Name: 'Electrical & Electronics',
      SubjectPk: 22,
    },
    {
      Pk: 268,
      Name: 'Food Technology',
      SubjectPk: 22,
    },
    {
      Pk: 269,
      Name: 'Geology',
      SubjectPk: 22,
    },
    {
      Pk: 270,
      Name: 'Materials Science',
      SubjectPk: 22,
    },
    {
      Pk: 271,
      Name: 'Mathematics',
      SubjectPk: 22,
    },
    {
      Pk: 272,
      Name: 'Medicine and Allied Sciences',
      SubjectPk: 22,
    },
    {
      Pk: 273,
      Name: 'Pathology',
      SubjectPk: 22,
    },
    {
      Pk: 274,
      Name: 'Physical Science',
      SubjectPk: 22,
    },
    {
      Pk: 275,
      Name: 'Architectural Design',
      SubjectPk: 33,
    },
    {
      Pk: 276,
      Name: 'Art and Design',
      SubjectPk: 33,
    },
    {
      Pk: 277,
      Name: 'BUILT ENVIRONMENT AND SPECIAL CULTURE',
      SubjectPk: 33,
    },
    {
      Pk: 278,
      Name: 'Climatology',
      SubjectPk: 33,
    },
    {
      Pk: 279,
      Name: 'Communications and HVAC',
      SubjectPk: 33,
    },
    {
      Pk: 280,
      Name: 'Computer and Technology',
      SubjectPk: 33,
    },
    {
      Pk: 281,
      Name: 'Drawing Communication',
      SubjectPk: 33,
    },
    {
      Pk: 282,
      Name: 'Energy Systems and Fire Safety',
      SubjectPk: 33,
    },
    {
      Pk: 283,
      Name: 'History of Architecture',
      SubjectPk: 33,
    },
    {
      Pk: 284,
      Name: 'Lighting and Acoustics',
      SubjectPk: 33,
    },
    {
      Pk: 285,
      Name: 'Mathematics and English',
      SubjectPk: 33,
    },
    {
      Pk: 286,
      Name: 'Professional Practice',
      SubjectPk: 33,
    },
    {
      Pk: 287,
      Name: 'Quantities, Specifications, Estimations and Contract Management',
      SubjectPk: 33,
    },
    {
      Pk: 288,
      Name: 'Surveying and Leveling',
      SubjectPk: 33,
    },
    {
      Pk: 289,
      Name: 'Theory of Architecture',
      SubjectPk: 33,
    },
    {
      Pk: 290,
      Name: 'Theory of Structures',
      SubjectPk: 33,
    },
    {
      Pk: 291,
      Name: 'Town Planning',
      SubjectPk: 33,
    },
    {
      Pk: 292,
      Name: 'Urban Issues',
      SubjectPk: 33,
    },
    {
      Pk: 293,
      Name: 'Water Supply and Waste Disposal',
      SubjectPk: 33,
    },
    {
      Pk: 294,
      Name: 'Radio Journalism',
      SubjectPk: 26,
    },
    {
      Pk: 295,
      Name: 'Hindi Journalism',
      SubjectPk: 26,
    },
    {
      Pk: 296,
      Name: 'English Journalism',
      SubjectPk: 26,
    },
    {
      Pk: 297,
      Name: 'Basic Computer Skills',
      SubjectPk: 26,
    },
    {
      Pk: 298,
      Name: 'Design And Graphics',
      SubjectPk: 26,
    },
    {
      Pk: 299,
      Name: 'Documentary Project',
      SubjectPk: 26,
    },
    {
      Pk: 300,
      Name: 'Environmental Studies',
      SubjectPk: 26,
    },
    {
      Pk: 301,
      Name: 'Archaeology',
      SubjectPk: 6,
    },
    {
      Pk: 302,
      Name: 'Art & Humanity',
      SubjectPk: 6,
    },
    {
      Pk: 303,
      Name: 'Development Studies',
      SubjectPk: 6,
    },
    {
      Pk: 304,
      Name: 'Disater Management',
      SubjectPk: 6,
    },
    {
      Pk: 305,
      Name: 'Ecology, Environment and Sustainable Development',
      SubjectPk: 6,
    },
    {
      Pk: 306,
      Name: 'Gender studies',
      SubjectPk: 6,
    },
    {
      Pk: 307,
      Name: 'Gerontology',
      SubjectPk: 6,
    },
    {
      Pk: 308,
      Name: 'International Relations',
      SubjectPk: 6,
    },
    {
      Pk: 309,
      Name: 'Labour Studies and Social Protection',
      SubjectPk: 6,
    },
    {
      Pk: 310,
      Name: 'Literary and Social Criticism',
      SubjectPk: 6,
    },
    {
      Pk: 311,
      Name: 'Livlihood & Development Studies',
      SubjectPk: 6,
    },
    {
      Pk: 312,
      Name: 'Peace and Conflict Studies',
      SubjectPk: 6,
    },
    {
      Pk: 313,
      Name: 'Planning and Public Administration',
      SubjectPk: 6,
    },
    {
      Pk: 314,
      Name: 'Covid19',
      SubjectPk: 9,
    },
    {
      Pk: 315,
      Name: 'Anatomy',
      SubjectPk: 36,
    },
    {
      Pk: 316,
      Name: 'Bacteriology & Parasitology',
      SubjectPk: 36,
    },
    {
      Pk: 317,
      Name: 'Community Medicine',
      SubjectPk: 36,
    },
    {
      Pk: 318,
      Name: 'Forensic Medicine & Toxicology',
      SubjectPk: 36,
    },
    {
      Pk: 319,
      Name: 'Homoeopathic Pharmacy',
      SubjectPk: 36,
    },
    {
      Pk: 320,
      Name: 'Homoeopathic Philosophy & Psychology',
      SubjectPk: 36,
    },
    {
      Pk: 321,
      Name: 'Materia Medica',
      SubjectPk: 36,
    },
    {
      Pk: 322,
      Name: 'Obstetrics and Gynaecology',
      SubjectPk: 36,
    },
    {
      Pk: 323,
      Name: 'Paediatrics (PG)',
      SubjectPk: 36,
    },
    {
      Pk: 324,
      Name: 'Pathology',
      SubjectPk: 36,
    },
    {
      Pk: 325,
      Name: 'Physiology & Biochemistry',
      SubjectPk: 36,
    },
    {
      Pk: 326,
      Name: 'Surgery',
      SubjectPk: 36,
    },
    {
      Pk: 327,
      Name: 'MEDICAL EDUCATION',
      SubjectPk: 9,
    },
    {
      Pk: 328,
      Name: 'ANAESTHESIA',
      SubjectPk: 37,
    },
    {
      Pk: 329,
      Name: 'BIOCHEMISTRY',
      SubjectPk: 37,
    },
    {
      Pk: 330,
      Name: 'CARDIAC CARE',
      SubjectPk: 37,
    },
    {
      Pk: 331,
      Name: 'DENTAL',
      SubjectPk: 37,
    },
    {
      Pk: 332,
      Name: 'DIAGNOSTIC',
      SubjectPk: 37,
    },
    {
      Pk: 333,
      Name: 'DMLT - MEDICAL',
      SubjectPk: 37,
    },
    {
      Pk: 334,
      Name: 'EMERGENCY MEDICAL',
      SubjectPk: 37,
    },
    {
      Pk: 335,
      Name: 'GERIATRICS',
      SubjectPk: 37,
    },
    {
      Pk: 336,
      Name: 'HEALTHCARE TECHNOLOGY',
      SubjectPk: 37,
    },
    {
      Pk: 337,
      Name: 'HEARING & SPEECH THERAPY',
      SubjectPk: 37,
    },
    {
      Pk: 338,
      Name: 'HEMATOLOGY & BLOOD BANK',
      SubjectPk: 37,
    },
    {
      Pk: 339,
      Name: 'MEDICAL LABORATORY',
      SubjectPk: 37,
    },
    {
      Pk: 340,
      Name: 'MEDICAL RECORDS & HEALTH INFORMATION',
      SubjectPk: 37,
    },
    {
      Pk: 341,
      Name: 'NEUROLOGY',
      SubjectPk: 37,
    },
    {
      Pk: 342,
      Name: 'NURSING',
      SubjectPk: 37,
    },
    {
      Pk: 343,
      Name: 'NUTRITION',
      SubjectPk: 37,
    },
    {
      Pk: 344,
      Name: 'OPERATING THEATRE',
      SubjectPk: 37,
    },
    {
      Pk: 345,
      Name: 'OPTOMETRY',
      SubjectPk: 37,
    },
    {
      Pk: 346,
      Name: 'PEDIATRICS',
      SubjectPk: 37,
    },
    {
      Pk: 347,
      Name: 'PHARMACY',
      SubjectPk: 37,
    },
    {
      Pk: 348,
      Name: 'PHYSIOTHERAPIST',
      SubjectPk: 37,
    },
    {
      Pk: 349,
      Name: 'RADIOLOGY',
      SubjectPk: 37,
    },
    {
      Pk: 350,
      Name: 'EMERGENCY MEDICINE',
      SubjectPk: 9,
    },
    {
      Pk: 351,
      Name: 'PHYSICAL MEDICINE & REHABILITATION',
      SubjectPk: 9,
    },
    {
      Pk: 352,
      Name: 'NEUROLOGY',
      SubjectPk: 9,
    },
    {
      Pk: 353,
      Name: 'ARMED FORCES',
      SubjectPk: 38,
    },
    {
      Pk: 354,
      Name: 'COMMUNICATIONS',
      SubjectPk: 38,
    },
    {
      Pk: 355,
      Name: 'COMPUTER SECURITY',
      SubjectPk: 38,
    },
    {
      Pk: 356,
      Name: 'CRIMINOLOGY',
      SubjectPk: 38,
    },
    {
      Pk: 357,
      Name: 'FOREIGN POLICY',
      SubjectPk: 38,
    },
    {
      Pk: 358,
      Name: 'HOMELAND SECURITY AND TERRORISM',
      SubjectPk: 38,
    },
    {
      Pk: 359,
      Name: 'INFORMATION SYSTEMS',
      SubjectPk: 38,
    },
    {
      Pk: 360,
      Name: 'INTERNATIONAL RELATIONS',
      SubjectPk: 38,
    },
    {
      Pk: 361,
      Name: 'MILITARY AIRCRAFT',
      SubjectPk: 38,
    },
    {
      Pk: 362,
      Name: 'MILITARY AND DEFENSE',
      SubjectPk: 38,
    },
    {
      Pk: 363,
      Name: 'MILITARY BRANCHES',
      SubjectPk: 38,
    },
    {
      Pk: 364,
      Name: 'MILITARY CIVIL ENGINEERING',
      SubjectPk: 38,
    },
    {
      Pk: 365,
      Name: 'NATIONAL SECURITY',
      SubjectPk: 38,
    },
    {
      Pk: 366,
      Name: 'NAVIGATION',
      SubjectPk: 38,
    },
    {
      Pk: 367,
      Name: 'POLITICAL SCIENCE',
      SubjectPk: 38,
    },
    {
      Pk: 368,
      Name: 'SPACE FLIGHT',
      SubjectPk: 38,
    },
    {
      Pk: 369,
      Name: 'TELECOMMUNICATIONS',
      SubjectPk: 38,
    },
    {
      Pk: 370,
      Name: 'WAR',
      SubjectPk: 38,
    },
  ],
  TitleStatusList: [
    {
      PK: 1,
      Name: 'Open Access with full Text',
      ShortName: 'OAFT',
    },
    {
      PK: 2,
      Name: 'Paid',
      ShortName: 'PD',
    },
    {
      PK: 3,
      Name: 'Only Abstract',
      ShortName: 'AB',
    },
    {
      PK: 4,
      Name: 'Full Text',
      ShortName: 'FT',
    },
    {
      PK: 5,
      Name: 'Partially FullText Access',
      ShortName: 'PFT',
    },
  ],
  ResourceList: [],
  PublisherList: [
    {
      Id: 1,
      Name: 'ALLEN PRESS, INC',
    },
    {
      Id: 2,
      Name: 'UNIVERSITY OF VETERINARY AND PHARMACEUTICAL SCIENCES',
    },
    {
      Id: 3,
      Name: 'FACULTY OF PSYCHOLOGY, UNIVERSITY OF FINANCE AND MANAGEMENT IN WARSAW AND VIZJA PRESS&IT.',
    },
    {
      Id: 4,
      Name: 'FACULDADE DE ODONTOLOGIA DE BAURU - USP',
    },
    {
      Id: 5,
      Name: 'ORMCO',
    },
    {
      Id: 6,
      Name: 'GREEK ORTHODONTIC SOCIETY',
    },
    {
      Id: 7,
      Name: 'LINGUALNEWS',
    },
    {
      Id: 8,
      Name: 'ORTHODONTIC CYBER JOURNAL, INC',
    },
    {
      Id: 9,
      Name: 'GUIDENT.NET',
    },
    {
      Id: 10,
      Name: 'AMERICAN DENTAL ASSOCIATION',
    },
    {
      Id: 11,
      Name: 'VJO.IT',
    },
    {
      Id: 12,
      Name: 'PIRACICABA DENTAL SCHOOL',
    },
    {
      Id: 13,
      Name: "REVUE D'ORTHOPÉDIE DENTO-FACIALE",
    },
    {
      Id: 14,
      Name: 'JCO',
    },
    {
      Id: 15,
      Name: 'MODERN DENTISTRY MEDIA CC',
    },
    {
      Id: 16,
      Name: 'TEKSCAN INC.',
    },
    {
      Id: 17,
      Name: 'MANY PUBLISHING',
    },
    {
      Id: 18,
      Name: 'SPRINGER',
    },
    {
      Id: 19,
      Name: 'CR FOUNDATION',
    },
    {
      Id: 20,
      Name: 'AUSTRALIAN SOCIETY OF ORTHODONTISTS',
    },
    {
      Id: 21,
      Name: 'AMERICAN DENTAL EDUCATION ASSOCIATION',
    },
    {
      Id: 22,
      Name: 'QUINTESSENCE PUBLISHING',
    },
    {
      Id: 23,
      Name: 'INTERNATIONAL ASSOCIATION FOR PALEODONTOLOGY',
    },
    {
      Id: 24,
      Name: 'KOREAN ASSOCIATION OF ORTHODOTICS',
    },
    {
      Id: 25,
      Name: 'DENTALCOMPARE',
    },
    {
      Id: 26,
      Name: 'COMPARENETWORKS INC.',
    },
    {
      Id: 27,
      Name: 'NATURE PUBLISHING GROUP',
    },
    {
      Id: 28,
      Name: 'MONTAGE MEDIA CORPORATION',
    },
    {
      Id: 29,
      Name: 'KOREAN ACADEMY OF ORAL BIOLOGY',
    },
    {
      Id: 30,
      Name: 'AMERICAN ACADEMY OF COSMETIC DENTISTRY',
    },
    {
      Id: 31,
      Name: 'AMERICAN-EURASIAN NETWORK FOR SCIENTIFIC INFORMATION',
    },
    {
      Id: 32,
      Name: 'THE CANADIAN DENTAL HYGIENISTS ASSOCIATION',
    },
    {
      Id: 33,
      Name: 'AMERICAN DENTAL ASSISTANTS ASSOCIATION',
    },
    {
      Id: 34,
      Name: 'SILESIAN PIASTS UNIVERSITY OF MEDICINE',
    },
    {
      Id: 35,
      Name: 'ZIMMER DENTAL INC',
    },
    {
      Id: 36,
      Name: 'HCPRO, INC.',
    },
    {
      Id: 37,
      Name: 'NATIONAL INSTITUTE OF DENTAL AND CRANIOFACIAL RESEARCH',
    },
    {
      Id: 38,
      Name: 'TMT',
    },
    {
      Id: 39,
      Name: 'NATIONAL INSTITUTE OF DENTAL RESEARCH',
    },
    {
      Id: 40,
      Name: 'KOREAN ACADEMY OF PEDIATRIC DENTISTRY',
    },
    {
      Id: 41,
      Name: 'THE KOREAN ACADEMY OF CONSERVATIVE DENTISTRY',
    },
    {
      Id: 42,
      Name: 'KOREAN ACADEMY OF ORAL AND MAXILLOFACIAL RADIOLOGY',
    },
    {
      Id: 43,
      Name: 'DEPT. OF ORAL AND MAXILLOFACIAL RADIOLOGY',
    },
    {
      Id: 44,
      Name: 'CENTER FOR DEVICES AND RADIOLOGICAL HEALTH',
    },
    {
      Id: 45,
      Name: 'DENTISTRY UNITED',
    },
    {
      Id: 46,
      Name: 'ALPHA OMEGA INTERNATIONAL DENTAL FRATERNITY',
    },
    {
      Id: 47,
      Name: 'CENTERS FOR DISEASE CONTROL AND PREVENTION',
    },
    {
      Id: 48,
      Name: 'MOSHER & LINDER INC.',
    },
    {
      Id: 49,
      Name: "PEOPLE'S MEDICAL PUBLISHING HOUSE USA LTD (PMPH)",
    },
    {
      Id: 50,
      Name: 'SPECIAL CARE DENTISTRY ASSOCIATION',
    },
    {
      Id: 51,
      Name: 'MEDICAL AND PHARMACEUTICAL PUBLICATIONS (PTY) LTD',
    },
    {
      Id: 52,
      Name: 'SERBIAN MEDICAL SOCIETY',
    },
    {
      Id: 53,
      Name: 'EVISA',
    },
    {
      Id: 54,
      Name: 'DEPARTMENT OF HEALTH - UK',
    },
    {
      Id: 55,
      Name: 'THE ROYAL COLLEGE OF ANEASTHESTISTS',
    },
    {
      Id: 56,
      Name: 'DENTAL HYPOTHESES',
    },
    {
      Id: 57,
      Name: 'STOMATOLOGIE',
    },
    {
      Id: 58,
      Name: 'BALKAN STOMATOLOGICAL SOCIETY',
    },
    {
      Id: 59,
      Name: 'REVISTARGO',
    },
    {
      Id: 61,
      Name: 'MEDICAL UNIVERSITY OF BIALYSTOK',
    },
    {
      Id: 62,
      Name: 'THE AMERICAN PHYSIOLOGICAL SOCIETY',
    },
    {
      Id: 63,
      Name: 'UFRGS-FACULDADE DE ODONTOLOGIA',
    },
    {
      Id: 64,
      Name: 'SCIENCEDIRECT',
    },
    {
      Id: 65,
      Name: 'HANLEY & BELFUS',
    },
    {
      Id: 66,
      Name: 'BROOKLYN',
    },
    {
      Id: 67,
      Name: 'DENTAL PRESS EDITORA',
    },
    {
      Id: 68,
      Name: 'DENTAL MANUFACTURING CO.',
    },
    {
      Id: 69,
      Name: 'DENTAL AND ORAL RADIOGRAPHY',
    },
    {
      Id: 70,
      Name: 'UNIVERSITY OF CHICAGO PRESS',
    },
    {
      Id: 71,
      Name: 'SWENARTON CTATIONERY COMPANY',
    },
    {
      Id: 72,
      Name: 'DENTAL APPLIANCE',
    },
    {
      Id: 73,
      Name: 'ACADEMIC JOURNALS',
    },
    {
      Id: 74,
      Name: 'STAR ADVERTISER',
    },
    {
      Id: 75,
      Name: 'BC DECKER INC.',
    },
    {
      Id: 76,
      Name: 'PESQUISA BRASILEIRA EM ODONTOPEDIATRIA E CLINICA INTEGRADA JOURNAL (BRAZIL)',
    },
    {
      Id: 77,
      Name: 'AMERICAN ACADEMY OF PERIODONTOLOGY',
    },
    {
      Id: 78,
      Name: 'NATIONAL ACADEMY OF DENTISTRY',
    },
    {
      Id: 79,
      Name: 'UNIVERSITY OF PENNSYLVANIA',
    },
    {
      Id: 80,
      Name: 'ALLIED MEDIA LLC',
    },
    {
      Id: 81,
      Name: 'ELMER PRESS',
    },
    {
      Id: 82,
      Name: 'ONTARIO DENTAL ASSOCIATION',
    },
    {
      Id: 83,
      Name: 'NCBI',
    },
    {
      Id: 84,
      Name: 'MN DENTAL ASSOCIATION',
    },
    {
      Id: 85,
      Name: 'NATIONAL INSTITUTE OF INFORMATICS',
    },
    {
      Id: 86,
      Name: 'TOKYO MEDICAL AND DENTAL UNIVERSITY',
    },
    {
      Id: 87,
      Name: 'BMJ PUBLISHING GROUP LTD.',
    },
    {
      Id: 88,
      Name: 'FLUORIDE',
    },
    {
      Id: 89,
      Name: 'HIMCHAL DENTAL COLLEGE AND HOSPITAL',
    },
    {
      Id: 90,
      Name: 'HEALTH PROTECTION AGENCY',
    },
    {
      Id: 91,
      Name: 'TOKYO DENTAL COLLEGE',
    },
    {
      Id: 92,
      Name: 'AMERICAN ROENTGEN RAY SOCIETY',
    },
    {
      Id: 93,
      Name: 'M. M. UNIVERSITY, MULLANA',
    },
    {
      Id: 94,
      Name: 'MEDICINA ORAL S.L',
    },
    {
      Id: 95,
      Name: 'MALAYSIAN DENTAL ASSOCIATION',
    },
    {
      Id: 96,
      Name: 'AMERICAN VETERINARY DENTAL SOCIETY',
    },
    {
      Id: 97,
      Name: 'RADIOLOGICAL SOCIETY OF NORTH AMERICA',
    },
    {
      Id: 98,
      Name: 'VICTOR BABES UNIVERSITY OF MEDICINE AND PHARMACY',
    },
    {
      Id: 99,
      Name: 'BOMBAY CHARTERED ACCOUNTANT SOCIETY',
    },
    {
      Id: 100,
      Name: 'INDIAN JOURNAL OF STOMATOLOGY',
    },
    {
      Id: 101,
      Name: 'INSTITUTE FOR RESEARCH IN BANKING TECHNOLOGY',
    },
    {
      Id: 102,
      Name: 'JOHN WILEY & SONS',
    },
    {
      Id: 103,
      Name: 'TENNESSEE DENTAL ASSOCIATION',
    },
    {
      Id: 104,
      Name: 'JOURNAL OF THE IRIS DENTAL ASSOCIATION/THINK MEDIA',
    },
    {
      Id: 105,
      Name: "CALIFORNIA DENTAL HYGIENISTS' ASSOCIATION",
    },
    {
      Id: 106,
      Name: 'ELSEVIER',
    },
    {
      Id: 107,
      Name: 'JAYPEE BROTHERS MEDICAL PUBLISHERS PRIVATE LIMITED',
    },
    {
      Id: 108,
      Name: 'MEDKNOW PUBLICATIONS',
    },
    {
      Id: 109,
      Name: 'EKTODERMAL DISPLAZI GRUBU',
    },
    {
      Id: 110,
      Name: 'SOPS PRESS',
    },
    {
      Id: 111,
      Name: 'BRITISH INSTITUTE OF RADIOLOGY',
    },
    {
      Id: 112,
      Name: 'THE JAPANESE SOCIETY FOR DENTAL MATERIALS AND DEVICES',
    },
    {
      Id: 113,
      Name: "DENTAL HYGIENISTS' ASSOCIATION OF THE STATE OF NEW YORK",
    },
    {
      Id: 114,
      Name: 'CONTEMPORARY AESTHETICS',
    },
    {
      Id: 115,
      Name: 'COLUMBIA UNIVERSITY',
    },
    {
      Id: 116,
      Name: 'CHICAGO DENTAL SOCIETY',
    },
    {
      Id: 117,
      Name: 'MAIN STREET PUBLISHING PTY LTD..',
    },
    {
      Id: 118,
      Name: 'INTECH',
    },
    {
      Id: 119,
      Name: 'BIOMEDICAL COMMUNICATIONS GROUP, UNIVERSITY OF IBADAN',
    },
    {
      Id: 120,
      Name: 'EDENT JOURNALS',
    },
    {
      Id: 121,
      Name: 'INGENTA',
    },
    {
      Id: 122,
      Name: 'AL AMEEN MEDICAL COLLEGE',
    },
    {
      Id: 123,
      Name: 'OXFORD UNIVERSITY PRESS',
    },
    {
      Id: 124,
      Name: 'BIOFLUX',
    },
    {
      Id: 125,
      Name: 'RURAL OUTREACH PROGRAM',
    },
    {
      Id: 126,
      Name: 'AGBIOFORUM',
    },
    {
      Id: 127,
      Name: 'HUNGARIAN ASSOCIATION OF AGRICULTURAL INFORMATICS',
    },
    {
      Id: 128,
      Name: 'UNIVERSIDADE FEDERAL DE RORAIMA',
    },
    {
      Id: 129,
      Name: 'COLEGIO DE POSTGRADUADOS',
    },
    {
      Id: 130,
      Name: 'SCIENCEDOMAIN INTERNATIONAL',
    },
    {
      Id: 131,
      Name: 'CELESTA SOFTWARE PVT LTD',
    },
    {
      Id: 132,
      Name: 'UNIVERSITY OF CRAIOVA',
    },
    {
      Id: 133,
      Name: 'ENTER PUBLISHER NAME',
    },
    {
      Id: 134,
      Name: 'BAYERO UNIVERSITY',
    },
    {
      Id: 135,
      Name: 'JAPANESE SOCIETY OF BREEDING',
    },
    {
      Id: 136,
      Name: 'UNIVERSITY OF CALIFORNIA',
    },
    {
      Id: 137,
      Name: 'YALE SCHOOL OF MEDICINE',
    },
    {
      Id: 138,
      Name: 'EPRESS INC',
    },
    {
      Id: 139,
      Name: 'WORLD PSYCHIATRY ASSOCIATION',
    },
    {
      Id: 140,
      Name: 'WISCONSIN MEDICAL SOCIETY',
    },
    {
      Id: 141,
      Name: 'WHO',
    },
    {
      Id: 142,
      Name: 'INTERNET SCIENTIFIC PUBLICATIONS LLC',
    },
    {
      Id: 143,
      Name: 'WESTJEM SUBSCRIPTION',
    },
    {
      Id: 144,
      Name: 'LIBERTAS ACADEMICA LTD',
    },
    {
      Id: 145,
      Name: 'NATIONAL AUTONOMUS UNIVERSITY OF MEXICO',
    },
    {
      Id: 146,
      Name: 'THE ULSTER MEDICAL SOCIETY',
    },
    {
      Id: 147,
      Name: 'TURKISH JOURNAL OF MEDICAL SCIENCES',
    },
    {
      Id: 148,
      Name: 'TURKISH JOURNAL OF HEMATOLOGY',
    },
    {
      Id: 149,
      Name: 'TURKISH JOURNAL OF GERIATRICS',
    },
    {
      Id: 150,
      Name: 'TURKISH JOURNAL OF ENDOCRINOLOGY AND METABOLISM',
    },
    {
      Id: 151,
      Name: 'UNIVERSITY OF BENIN',
    },
    {
      Id: 152,
      Name: 'JAPANESE SOCIETY OF TROPICAL MEDICINE',
    },
    {
      Id: 153,
      Name: 'SAGE',
    },
    {
      Id: 154,
      Name: 'PABST SCIENCE PUBLISHERS',
    },
    {
      Id: 155,
      Name: 'TRANSLATIONAL ONCOLOGY',
    },
    {
      Id: 156,
      Name: 'THE AMERICAN OPHTHALMOLOGICAL SOCIETY',
    },
    {
      Id: 157,
      Name: 'TOHOKU UNIVERSITY MEDICAL PRESS',
    },
    {
      Id: 158,
      Name: 'THROMBOSIS JOURNAL',
    },
    {
      Id: 159,
      Name: 'DOVE MEDICAL PRESS LTD.',
    },
    {
      Id: 160,
      Name: 'TEXAS HEART INSTITUTE',
    },
    {
      Id: 161,
      Name: 'BIOLINE INTERNATIONAL',
    },
    {
      Id: 162,
      Name: 'TURKISH JOURNAL OF BIOCHEMISTRY',
    },
    {
      Id: 163,
      Name: 'TANAFFOS JOURNAL',
    },
    {
      Id: 164,
      Name: 'SRI SIDDHARTHA DENTAL COLLEGE',
    },
    {
      Id: 165,
      Name: 'SWISS MEDICAL ASSOCIATION',
    },
    {
      Id: 166,
      Name: 'AJOL',
    },
    {
      Id: 167,
      Name: 'AMERICAN SOCIETY FOR NUTRITION',
    },
    {
      Id: 168,
      Name: 'AMERICAN ASSOCIATION OF CRITICAL-CARE NURSES',
    },
    {
      Id: 169,
      Name: 'DENTAL COUNCIL OF INDIA',
    },
    {
      Id: 171,
      Name: 'PAN AFRICAN ASSOCIATION OF NEUROLOGICAL SCIENCES',
    },
    {
      Id: 172,
      Name: 'RESEARCH PUBLICATION IJSER',
    },
    {
      Id: 173,
      Name: 'Sibar Institute of Dental Sciences',
    },
    {
      Id: 174,
      Name: 'INSTITUTE OF PUBLIC HEALTH, IASI',
    },
    {
      Id: 175,
      Name: 'MUI Periodicals',
    },
    {
      Id: 176,
      Name: 'CALIFORNIA DENTAL ASSOCIATION',
    },
    {
      Id: 177,
      Name: 'ACTA STOMATOLOGICA CROATICA',
    },
    {
      Id: 178,
      Name: 'CANADIAN DENTAL ASSOCIATION',
    },
    {
      Id: 179,
      Name: 'MENA FOR DENTAL SERVICES',
    },
    {
      Id: 180,
      Name: 'RSBO',
    },
    {
      Id: 181,
      Name: 'SRM PUBLICATIONS PVT. LTD',
    },
    {
      Id: 182,
      Name: 'UNIVERSITY OF NIS',
    },
    {
      Id: 183,
      Name: 'STILUS OPTIMUS',
    },
    {
      Id: 184,
      Name: 'NIHON UNIVERSITY SCHOOL OF DENTISTRY',
    },
    {
      Id: 185,
      Name: 'KAIRALI SOCIETY OF ORAL & MAXILLOFACIAL PATHOLOGISTS',
    },
    {
      Id: 186,
      Name: 'EUROPEAN JOURNAL OF  DENTISTRY',
    },
    {
      Id: 187,
      Name: 'IDA - Kerla',
    },
    {
      Id: 188,
      Name: 'DENTAQUEST',
    },
    {
      Id: 189,
      Name: 'Journal of Orofacial research',
    },
    {
      Id: 190,
      Name: 'RMC Bareilly',
    },
    {
      Id: 191,
      Name: 'MEDIMEDIA INDIA PRIVATE LIMITED',
    },
    {
      Id: 192,
      Name: 'Colgate Oral ',
    },
    {
      Id: 193,
      Name: 'DENTAL TRIBUNE INTERNATIONAL PUBLISHING',
    },
    {
      Id: 194,
      Name: 'UBM MEDICA ASIA PTE LTD',
    },
    {
      Id: 195,
      Name: 'PABLO PUBLISHING PTE LTD - HEAD OFFICE',
    },
    {
      Id: 196,
      Name: 'ADVANSTAR COMMUNICATIONS INC.',
    },
    {
      Id: 197,
      Name: 'DEAR DOCTOR MAGAZINE',
    },
    {
      Id: 198,
      Name: 'BUSINESS INFORMATION GROUP',
    },
    {
      Id: 199,
      Name: 'INTERNATIONAL & AMERICAN ASSOCIATIONS FOR DENTAL RESEARCH',
    },
    {
      Id: 200,
      Name: 'International Society Of Preventive & Community Dentistry',
    },
    {
      Id: 201,
      Name: 'PENN WELL PUBLISHING CO.',
    },
    {
      Id: 202,
      Name: 'DENTISTRY TODAY',
    },
    {
      Id: 203,
      Name: 'BIOMED CENTRAL',
    },
    {
      Id: 204,
      Name: 'PRIORY LODGE EDUCATION LTD',
    },
    {
      Id: 205,
      Name: 'FDI WORLD DENTAL FEDERATION',
    },
    {
      Id: 206,
      Name: 'THE AMERICAN ACADEMY OF THE HISTORY OF DENTISTRY',
    },
    {
      Id: 207,
      Name: 'Journal of Implant and Advanced Clinical Dentistry',
    },
    {
      Id: 208,
      Name: 'IRISH DENTAL ASSOCIATION LTD.',
    },
    {
      Id: 209,
      Name: 'INTERNATIONAL JOURNAL OF CONTEMPORARY DENTISTRY',
    },
    {
      Id: 210,
      Name: 'AMERICAN STUDENT DENTAL ASSOCIATION',
    },
    {
      Id: 211,
      Name: 'CHARLES TWEED FOUNDATION',
    },
    {
      Id: 212,
      Name: 'INTERNATIONAL ASSOCIATION FOR DENTAL RESEARCH',
    },
    {
      Id: 213,
      Name: 'INDIAN DENTAL ASSOCIATION',
    },
    {
      Id: 214,
      Name: 'INDIAN ENDODONTIC SOCIETY',
    },
    {
      Id: 215,
      Name: 'FDI World Dental Press LTD',
    },
    {
      Id: 216,
      Name: 'OPERATIVE DENTISTRY',
    },
    {
      Id: 217,
      Name: 'AMERICAN DENTAL HYGIENISTS ASSOCIATION ',
    },
    {
      Id: 218,
      Name: 'LES PRESSES AGRONOMIQUES DE GEMBLOUX',
    },
    {
      Id: 219,
      Name: 'BENTHAM SCIENCE PUBLISHERS',
    },
    {
      Id: 220,
      Name: 'AMERICAN ASSOCIATION OF PHARMACEUTICAL SCIENTISTS',
    },
    {
      Id: 221,
      Name: 'AMERICAN PSYCHIATRIC PUBLISHING',
    },
    {
      Id: 222,
      Name: 'AMERICAN PSYCHIATRIC ASSOCIATION',
    },
    {
      Id: 223,
      Name: 'I.O.F.O.S.',
    },
    {
      Id: 224,
      Name: 'NATIONAL INSTITUTE FOR CLINICAL EXCELLENCE',
    },
    {
      Id: 225,
      Name: 'THE SWEDISH COUNCIL ON HEALTH TECHNOLOGY ASSESSMENT',
    },
    {
      Id: 226,
      Name: 'HEALTH DEVELOPMENT AGENCY',
    },
    {
      Id: 227,
      Name: 'POLISH BIOCHEMICAL SOCIETY AND THE COMMITTEE OF CHEMISTRY AND BIOPHYSICS',
    },
    {
      Id: 228,
      Name: 'FEDERATION OF EUROPEAN BIOCHEMICAL SOCIETIES',
    },
    {
      Id: 229,
      Name: 'ACTA ENDOCRINOLOGICA FOUNDATION',
    },
    {
      Id: 230,
      Name: 'HINDAWI PUBLISHING CORPORATION',
    },
    {
      Id: 231,
      Name: 'NIŠ UNIVERSITY FACULTY OF MEDICINE',
    },
    {
      Id: 232,
      Name: 'UNIVERSITY  OF NIŠ FACULTY  OF MEDICINE',
    },
    {
      Id: 233,
      Name: 'THE JAPAN SOCIETY OF HISTOCHEMISTRY AND CYTOCHEMISTRY',
    },
    {
      Id: 234,
      Name: 'FACULTY OF MEDICINE IN HRADEC KRÁLOVÉ',
    },
    {
      Id: 235,
      Name: 'TEHRAN UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 236,
      Name: 'UNIVERSIDADE POSITIVO',
    },
    {
      Id: 237,
      Name: 'AMERICAN ACADEMY OF PEDIATRIC DENTISTRY',
    },
    {
      Id: 238,
      Name: 'UNIVERSITY CLINICAL CENTER TUZLA',
    },
    {
      Id: 239,
      Name: 'POLISH ACADEMY OF SCIENCE',
    },
    {
      Id: 240,
      Name: 'INFORMA HEALTHCARE',
    },
    {
      Id: 241,
      Name: 'AEGIS COMMUNICATIONS',
    },
    {
      Id: 242,
      Name: 'JAPANESE SOCIETY OF PEDIATRIC DENTISTRY',
    },
    {
      Id: 243,
      Name: 'NEW YORK STATE DENTAL ASSOCIATION',
    },
    {
      Id: 245,
      Name: 'DENTAL FOUNDATION OF RIBEIRÃO PRETO, BRAZIL.',
    },
    {
      Id: 246,
      Name: 'SOCIEDADE BRASILEIRA DE PESQUISA ODONTOLÓGICA',
    },
    {
      Id: 247,
      Name: 'TURKISH EDUCATIONAL COUNCIL OF ORTHOPEDICS AND TRAUMATOLOGY',
    },
    {
      Id: 248,
      Name: 'PACINI EDITORE SPA',
    },
    {
      Id: 249,
      Name: 'ANADOLU UNIVERSITY',
    },
    {
      Id: 250,
      Name: 'CROATIAN PHARMACEUTICAL SOCIETY',
    },
    {
      Id: 251,
      Name: 'AIHW DENTAL STATISTICS AND RESEARCH UNIT',
    },
    {
      Id: 252,
      Name: 'AUSTRALIAN RESEARCH CENTRE FOR POPULATION ORAL HEALTH',
    },
    {
      Id: 253,
      Name: 'COLGATE AUSTRALIAN CLINICAL DENTAL RESEARCH CENTRE',
    },
    {
      Id: 254,
      Name: 'PIERRE FAUCHARD ACADEMY',
    },
    {
      Id: 255,
      Name: 'GUTENBERG',
    },
    {
      Id: 256,
      Name: 'YOUTUBE',
    },
    {
      Id: 257,
      Name: 'NA',
    },
    {
      Id: 258,
      Name: 'CLUJ-NAPOCA',
    },
    {
      Id: 259,
      Name: 'UNIVERSITATEA DE MEDICINA SI FARMACIE “IULIU HATIEGANU” CLUJ-NAPOCA',
    },
    {
      Id: 260,
      Name: 'TOWNIECENTRAL',
    },
    {
      Id: 261,
      Name: 'DENTAL INVESTIGATIONS SOCIETY',
    },
    {
      Id: 262,
      Name: 'JOURNAL OF ORAL & MAXILLOFACIAL RESEARCH',
    },
    {
      Id: 263,
      Name: 'THE JOURNAL OF THE INDIAN DENTAL ASSOCIATION (JIDA)',
    },
    {
      Id: 264,
      Name: 'GENERAL DENTAL COUNCIL',
    },
    {
      Id: 265,
      Name: 'INTERNATIONAL COLLEGE OF DENTIST',
    },
    {
      Id: 266,
      Name: 'DENTAL COUNCIL OF NEW ZEALAND',
    },
    {
      Id: 267,
      Name: 'THE SOCIETY OF EARTH SCIENTISTS',
    },
    {
      Id: 268,
      Name: 'NATIONAL ACADEMY OF ENGINEERING',
    },
    {
      Id: 269,
      Name: 'THE ROYAL AUSTRALASIAN COLLEGE OF DENTAL SURGEONS',
    },
    {
      Id: 270,
      Name: 'OKAYAMA UNIVERSITY MEDICAL SCHOOL',
    },
    {
      Id: 271,
      Name: 'SINGAPORE DENTAL COUNCIL',
    },
    {
      Id: 272,
      Name: 'EGU PUBLICATION',
    },
    {
      Id: 273,
      Name: 'COPERNICUS PUBLICATIONS',
    },
    {
      Id: 274,
      Name: 'UNIVERSITY OF TEXAS',
    },
    {
      Id: 275,
      Name: 'INFORMATION GATEKEEPERS',
    },
    {
      Id: 276,
      Name: 'ALLIED ACADEMIES',
    },
    {
      Id: 277,
      Name: 'PENSOFT PUBLISHERS',
    },
    {
      Id: 278,
      Name: 'JOURNAL OF ZHEJIANG UNIVERSITY-SCIENC',
    },
    {
      Id: 279,
      Name: 'DEFENSE ACUISITION UNIVERSITY',
    },
    {
      Id: 280,
      Name: 'ZEENAT QURESHI STROKE RESEARCH CENTER',
    },
    {
      Id: 281,
      Name: 'YONSEI UNIVERSITY COLLEGE OF MEDICINE',
    },
    {
      Id: 282,
      Name: 'MEDSCAPE',
    },
    {
      Id: 283,
      Name: 'UNIVERSITY OF WISCONSIN',
    },
    {
      Id: 284,
      Name: 'UNIVERSITY OF MASSACHUSETTS AT AMHERST. INTERNATIONAL DOSE-RESPONSE SOCIETY',
    },
    {
      Id: 285,
      Name: 'UNIVERSITY OF ILLINOIS',
    },
    {
      Id: 286,
      Name: 'UNIVERSITY CLINICAL, EDUCATION & RESEARCH ASSOCIATES',
    },
    {
      Id: 288,
      Name: 'THIEME',
    },
    {
      Id: 289,
      Name: 'HIND KUSHT NIVARAN SANGH',
    },
    {
      Id: 290,
      Name: 'THE WELLCOME TRUST CENTRE FOR THE HISTORY OF MEDICINE AT UCL',
    },
    {
      Id: 291,
      Name: 'THE SOCIETY FOR FREE RADICAL RESEARCH JAPAN',
    },
    {
      Id: 292,
      Name: 'THE SCIENTIFIC WORLD JOURNAL',
    },
    {
      Id: 293,
      Name: 'THE ROYAL SOCIETY',
    },
    {
      Id: 294,
      Name: 'THE ROCKEFELLER UNIVERSITY PRESS',
    },
    {
      Id: 295,
      Name: 'THE NATIONAL PEDIATRIC ASSOCIATION',
    },
    {
      Id: 296,
      Name: 'THE KOREAN SOCIETY OF VETERINARY SCIENCE',
    },
    {
      Id: 297,
      Name: 'THE KOREAN SOCIETY OF NEUROGASTROENTEROLOGY AND MOTILITY',
    },
    {
      Id: 298,
      Name: 'THE KOREAN SOCIETY OF ENVIRONMENTAL HEALTH AND TOXICOLOGY',
    },
    {
      Id: 299,
      Name: 'THE KOREAN SOCIETY OF CARDIOLOGY',
    },
    {
      Id: 300,
      Name: 'THE KOREAN OPHTHALMOLOGICAL SOCIETY.',
    },
    {
      Id: 301,
      Name: 'THE KOREAN ASSOCIATION OF IMMUNOLOGISTS',
    },
    {
      Id: 302,
      Name: 'JAPANESE SOCIETY OF TOXICOLOGIC PATHOLOGY',
    },
    {
      Id: 303,
      Name: 'THE JAPAN ACADEMY',
    },
    {
      Id: 304,
      Name: 'THE EDITORS AND CO-ACTION PUBLISHING',
    },
    {
      Id: 305,
      Name: 'TERMEDIA PUBLISHING',
    },
    {
      Id: 306,
      Name: 'CHINESE MEDICAL ASSOCIATION',
    },
    {
      Id: 307,
      Name: 'CHANG GUNG UNIVERSITY',
    },
    {
      Id: 308,
      Name: 'SOCIETY OF LAPAROENDOSCOPIC SURGEONS',
    },
    {
      Id: 309,
      Name: 'BRAZILIAN SOCIETY OF GENETICS',
    },
    {
      Id: 310,
      Name: 'SLOVAK ACADEMY OF SCIENCES',
    },
    {
      Id: 311,
      Name: 'SIMS INSTITUTE PRESS LTD.',
    },
    {
      Id: 312,
      Name: 'ROYAL SOCIETY OF MEDICINE PRESS',
    },
    {
      Id: 313,
      Name: 'UNIVERSITY MEDICAL CENTER HAMBURG',
    },
    {
      Id: 314,
      Name: 'EMH SWISS MEDICAL PUBLISHERS LTD.',
    },
    {
      Id: 315,
      Name: 'MINISTRY OF HEALTH, BRUNEI DARUSSALAM',
    },
    {
      Id: 316,
      Name: 'JMN MEDICAL EDUCATION LTD',
    },
    {
      Id: 317,
      Name: 'BRITISH COLUMBIA MEDICAL ASSOCIATION',
    },
    {
      Id: 318,
      Name: 'BRAZILIAN JOURNAL OF MEDICAL AND BIOLOGICAL RESEARCH',
    },
    {
      Id: 319,
      Name: 'ASSOCIATION OF BASIC MEDICAL SCIENCES OF FEDERATION OF BOSNIA AND HERZEGOVINA.',
    },
    {
      Id: 320,
      Name: 'KERMAN UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 321,
      Name: 'PUBLIC LIBRARY OF SCIENCE',
    },
    {
      Id: 322,
      Name: 'NATIONAL CENTRE FOR CHRONIC DISEASE PREVENTION AND HEALTH PROMOTION',
    },
    {
      Id: 323,
      Name: 'BIOMEDICAL RESEARCH PRESS',
    },
    {
      Id: 324,
      Name: 'HEALTH AND MEDICAL PUBLISHING GROUP',
    },
    {
      Id: 325,
      Name: 'MAKERERE UNIVERSITY MEDICAL SCHOOL',
    },
    {
      Id: 326,
      Name: 'CANADIAN RESEARCH & DEVELOPMENT CENTER OF SCIENCES AND CULTURES',
    },
    {
      Id: 327,
      Name: 'TABRIZ UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 328,
      Name: 'E-CENTURY PUBLISHING CORPORATION',
    },
    {
      Id: 329,
      Name: 'KING EDWARD MEDICAL UNIVERSITY',
    },
    {
      Id: 330,
      Name: 'SRIMA PUBLISHING HOUSE',
    },
    {
      Id: 331,
      Name: 'ATHENS MEDICAL SOCIETY',
    },
    {
      Id: 332,
      Name: 'INSTITUTE FOR MEDICAL RESEARCH AND OCCUPATIONAL HEALTH',
    },
    {
      Id: 333,
      Name: 'ASIAN JOURNAL OF MEDICAL SCIENCES',
    },
    {
      Id: 334,
      Name: 'OMIC GROUP',
    },
    {
      Id: 335,
      Name: 'ACCUTECH ORTHODONTIC LAB, INC.',
    },
    {
      Id: 336,
      Name: 'NATIONAL COALITION FOR HELATH PROFESSIONAL EDUCATION IN GENETICS',
    },
    {
      Id: 337,
      Name: 'THE AUSTRALASIAN MEDICAL JOURNAL PTY LTD.',
    },
    {
      Id: 338,
      Name: 'UNIVERSIDAD NACIONAL DE COLOMBIA',
    },
    {
      Id: 339,
      Name: 'AVICENNA RESEARCH INSTITUTE',
    },
    {
      Id: 340,
      Name: 'MASHHAD UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 341,
      Name: 'PARS INTERNATIONAL CORP.',
    },
    {
      Id: 342,
      Name: 'NATIONAL INSTITUTES OF HEALTH',
    },
    {
      Id: 344,
      Name: 'LOMA UNIVERSITY',
    },
    {
      Id: 345,
      Name: 'VERSITA',
    },
    {
      Id: 346,
      Name: 'BALKAN MEDICAL JOURNAL',
    },
    {
      Id: 347,
      Name: 'DHAKA MEDICAL COLLEGE',
    },
    {
      Id: 348,
      Name: 'IBN SINA TRUST',
    },
    {
      Id: 349,
      Name: 'BAYLOR UNIVERSITY MEDICAL CENTER',
    },
    {
      Id: 350,
      Name: 'NATIONAL CENTER FOR EDUCATION IN MATERNAL AND CHILD HEALTH',
    },
    {
      Id: 351,
      Name: 'UNIVERSITY OF MALAYA',
    },
    {
      Id: 352,
      Name: 'NATIONAL MATERNAL AND CHILD ORAL HEALTH RESOURCE CENTRE',
    },
    {
      Id: 353,
      Name: 'KARGER',
    },
    {
      Id: 354,
      Name: 'RUT PRINTER AND PUBLISHER',
    },
    {
      Id: 355,
      Name: 'ZAGREB UNIVERSITY SCHOOL OF MEDICINE',
    },
    {
      Id: 356,
      Name: 'TANZANIA MEDICAL STUDENTS’ ASSOCIATION',
    },
    {
      Id: 357,
      Name: 'THE DANISH MEDICAL ASSOCIATION',
    },
    {
      Id: 358,
      Name: 'DICLE UNIVERSITY MEDICAL SCHOOL',
    },
    {
      Id: 359,
      Name: 'OAPEN FOUNDATION',
    },
    {
      Id: 361,
      Name: 'DUZCE ÜNIVERSITY',
    },
    {
      Id: 362,
      Name: 'EGYPTIAN MEDICAL ASSOCIATION',
    },
    {
      Id: 363,
      Name: 'SCIENTIFIC RESEARCH PUBLISHING',
    },
    {
      Id: 364,
      Name: 'AMERICAN CLEFT PALATE-CRANIOFACIAL ASSOCIATION',
    },
    {
      Id: 365,
      Name: 'AMERICAN EPILEPSY SOCIETY',
    },
    {
      Id: 366,
      Name: 'AVES YAYINCILIK',
    },
    {
      Id: 367,
      Name: 'ASIAN BIOETHICS ASSOCIATION',
    },
    {
      Id: 368,
      Name: 'ATATURK UNIVERSITY SCHOOL OF MEDICINE',
    },
    {
      Id: 369,
      Name: 'INTERNATIONAL TEAM FOR IMPLANTOLOGY',
    },
    {
      Id: 371,
      Name: 'ASSOCIATION OF DENTAL ANAESTHESIA',
    },
    {
      Id: 372,
      Name: 'ASSOCIATION OF PAEDIATRIC ANAESTHETISTS',
    },
    {
      Id: 373,
      Name: 'ASSOCIATION OF ANAESTHETISTS OF GREAT BRITAIN AND IRELAND',
    },
    {
      Id: 374,
      Name: 'DENTAL SEDATION TEACHERS GROUP',
    },
    {
      Id: 375,
      Name: 'EUROPEAN PROTHODONTIC ASSOCIATION',
    },
    {
      Id: 376,
      Name: 'UNIVERSITY OF MICHIGAN',
    },
    {
      Id: 377,
      Name: 'MEDICAL INVESTIGATIONS SOCIETY',
    },
    {
      Id: 378,
      Name: 'CENTRAL BOHEMIA UNIVERSITY',
    },
    {
      Id: 379,
      Name: 'SCIENCE PRESS',
    },
    {
      Id: 380,
      Name: 'FACULTY OF GENERAL DENTAL PRACTICE',
    },
    {
      Id: 381,
      Name: 'TURKIYE KLINIKLERI',
    },
    {
      Id: 382,
      Name: 'DICLE UNIVERSITY, FACULTY OF DENTISTRY',
    },
    {
      Id: 383,
      Name: 'SUVISON EUROPE',
    },
    {
      Id: 384,
      Name: 'PAKISTAN ORAL & DENTAL JOURNAL',
    },
    {
      Id: 385,
      Name: 'MARY ANN LIEBERT',
    },
    {
      Id: 386,
      Name: 'ORDRE DES DENTISTES DU QUEBEC',
    },
    {
      Id: 387,
      Name: 'CENTRAL UNIVERSITY OF VENEZUELA',
    },
    {
      Id: 388,
      Name: 'AMERICAN DENTAL SOCIETY OF ANESTHESIOLOGY',
    },
    {
      Id: 389,
      Name: 'HONG KONG JOURNALS ONLINE',
    },
    {
      Id: 390,
      Name: 'JOURNAL OF DENTAL HEALTH BYTES',
    },
    {
      Id: 391,
      Name: 'FUTUREDONTICS, INC.',
    },
    {
      Id: 392,
      Name: 'MAXICAN DENTAL ASSOCIATION',
    },
    {
      Id: 393,
      Name: 'MEXICAN ASSOCIATION OF ORAL AND MAXILLOFACIAL SURGERY',
    },
    {
      Id: 394,
      Name: 'INFORMEDICA',
    },
    {
      Id: 395,
      Name: "NATIONAL DIABETES EDUCATION PROGRAM'S",
    },
    {
      Id: 396,
      Name: 'AMERICAN HEART ASSOCIATION',
    },
    {
      Id: 397,
      Name: 'LIPPINCOTT WILLIAMS & WILKINS',
    },
    {
      Id: 398,
      Name: 'BAISHIDENG PUBLISHING GROUP',
    },
    {
      Id: 399,
      Name: 'PAGEPRESS',
    },
    {
      Id: 400,
      Name: 'AMERICAN SOCIETY OF EXERCISE PHYSIOLOGISTS',
    },
    {
      Id: 401,
      Name: 'BRAZILIAN COLLEGE OF DIGESTIVE SURGERY',
    },
    {
      Id: 402,
      Name: 'THE NATIONAL CENTER ON HEALTH SCIENCES INFORMATION',
    },
    {
      Id: 403,
      Name: 'THE BRITISH PAIN SOCIETY',
    },
    {
      Id: 404,
      Name: 'AMERICAN PAIN SOCIETY',
    },
    {
      Id: 405,
      Name: 'AL. RIO CLARO',
    },
    {
      Id: 406,
      Name: 'ASOCIACION COLOMBIANA DE MEDICINA INTERNA',
    },
    {
      Id: 407,
      Name: 'COLEGIO DE MÉDICOS Y CIRUJANOS DE COSTA RICA',
    },
    {
      Id: 408,
      Name: 'SOCIEDADE BRASILEIRA DE ORTOPEDIA E TRAUMATOLOGIA',
    },
    {
      Id: 409,
      Name: 'ESCOLA PAULISTA DE ENFERMAGEM, UNIVERSIDADE FEDERAL DE SÃO PAULO',
    },
    {
      Id: 410,
      Name: 'ASOCIACIÓN COSTARRICENSE DE PEDIATRÍA',
    },
    {
      Id: 411,
      Name: 'CENTRO INTERDISCIPLINARIO DE ESTUDIOS EN BIOÉTICA, UNIVERSIDAD DE CHILE',
    },
    {
      Id: 412,
      Name: 'CAJA COSTARRICENSE DE SEGURO SOCIAL. PROGRAMA ATENCIÓN INTEGRAL DEL ADOLESCENTE',
    },
    {
      Id: 413,
      Name: 'SOCIEDADE BRASILEIRA DE DERMATOLOGIA',
    },
    {
      Id: 414,
      Name: 'ACADEMIA BRASILEIRA DE CIÊNCIAS',
    },
    {
      Id: 415,
      Name: 'FOUNDATION BENGOA',
    },
    {
      Id: 416,
      Name: 'ARÁN EDICIONES, S. L.',
    },
    {
      Id: 417,
      Name: 'THE LANCET',
    },
    {
      Id: 418,
      Name: 'BRITISH JOURNAL OF PSYCHAITRY',
    },
    {
      Id: 419,
      Name: 'KOREAN ACADEMY OF PROSTHODONTICS',
    },
    {
      Id: 420,
      Name: 'OMICS PUBLISHING GROUP',
    },
    {
      Id: 421,
      Name: 'JAPANESE SOCIETY OF ALLERGOLOGY',
    },
    {
      Id: 422,
      Name: 'MDPI AG',
    },
    {
      Id: 423,
      Name: 'FRONTIERS MEDIA',
    },
    {
      Id: 424,
      Name: 'NIKOLAI PETROVSKY PUBLISHING',
    },
    {
      Id: 425,
      Name: 'SHIRAZ UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 426,
      Name: 'ESMON PUBLICIDAD',
    },
    {
      Id: 427,
      Name: 'SAHARA',
    },
    {
      Id: 428,
      Name: 'UNITED STATES',
    },
    {
      Id: 429,
      Name: 'BENTHAM OPEN',
    },
    {
      Id: 430,
      Name: 'INDEX COPERNICUS INTERNATIONAL S.A.',
    },
    {
      Id: 431,
      Name: 'ASIAN NETWORK FOR SCIENTIFIC INFORMATION',
    },
    {
      Id: 432,
      Name: 'SOCIEDAD PERUANA DE ANESTESIA, ANALGESIA Y REANIMACIÓN',
    },
    {
      Id: 433,
      Name: 'DARIO GALANTE',
    },
    {
      Id: 434,
      Name: 'SOCIEDAD COLOMBIANA DE ANESTESIOLOGÍA',
    },
    {
      Id: 435,
      Name: 'EDIMES EDIZIONI INTERNAZIONALI SRL',
    },
    {
      Id: 436,
      Name: "ANAESTHETISTS' FORUM, JODHPUR",
    },
    {
      Id: 437,
      Name: 'MEDKNOW PUBLICATIONS',
    },
    {
      Id: 438,
      Name: 'COLLEGE OF ANAESTHESIOLOGISTS OF SRI LANKA',
    },
    {
      Id: 439,
      Name: 'SOCIEDADE BRASILEIRA DE CARDIOLOGIA - SBC',
    },
    {
      Id: 440,
      Name: 'ISFAHAN CARDIOVASCULAR RESEARCH CENTER',
    },
    {
      Id: 441,
      Name: 'MEDWELL ONLINE',
    },
    {
      Id: 442,
      Name: 'BANGLADESH SOCIETY OF GERIATRIC CARDIOLOGY',
    },
    {
      Id: 443,
      Name: 'BANGLADESH SOCIETY OF GERIATRIC CARDIOLOGY(442)',
    },
    {
      Id: 444,
      Name: 'THE JAPANESE CIRCULATION SOCIETY',
    },
    {
      Id: 445,
      Name: 'CONGENITAL CARDIOLOGY TODAY',
    },
    {
      Id: 446,
      Name: 'CARDIOCENTRO ERNESTO CHE GUEVARA',
    },
    {
      Id: 447,
      Name: 'HEALTHCARE BULLETIN',
    },
    {
      Id: 448,
      Name: 'WICHTIG EDITORE, MILAN',
    },
    {
      Id: 449,
      Name: 'HELLENIC CARDIOLOGICAL SOCIETY',
    },
    {
      Id: 450,
      Name: 'VALLABHBHAI PATEL CHEST INSTITUTE, UNIVERSITY OF DELHI AND THE NATIONAL COLLEGE OF CHEST PHYSICIANS',
    },
    {
      Id: 451,
      Name: 'INDIAN HEART RHYTHM SOCIETY',
    },
    {
      Id: 452,
      Name: 'SILVER HORSE S.R.L.',
    },
    {
      Id: 453,
      Name: 'EUROPEAN ASSOCIATION FOR CARDIO-THORACIC SURGERY',
    },
    {
      Id: 454,
      Name: 'JAPANESE HEART JOURNAL ASSOCIATION',
    },
    {
      Id: 455,
      Name: 'SOCIEDADE BRASILEIRA DE ANGIOLOGIA E DE CIRURGIA VASCULAR ,SBACV',
    },
    {
      Id: 456,
      Name: 'KRAUSE & PACHERNEGG GMBH',
    },
    {
      Id: 457,
      Name: 'JAPAN ATHEROSCLEROSIS SOCIETY',
    },
    {
      Id: 458,
      Name: 'BRAZILIAN SOCIETY PHLEBOLOGY AND LYMPHOLOGY',
    },
    {
      Id: 459,
      Name: 'WILEY',
    },
    {
      Id: 460,
      Name: 'THE JOURNAL KARDIOLÓGIA/CARDIOLOGY PUBLISHES ARTICLES ON CLINICAL CARDIOLOGY, ESPECIALLY ON TOPICS PERTAINING TO CLINICAL AND EXPERIMENTAL CARDIOLOGY, CARDIOSURGERY, CLINICAL PHYSIOLOGY, PATHOPHYSIOLOGY, PREVENTIVE CARDIOLOGY AND EPIDEMIOLOGY. THE JOURNAL PUBLISHES ORIGINAL ARTICLES, REVIEW ARTICLES, CASE REPORTS, INFORMATION ABOUT AND REPORTS FROM CONGRESSES AND STUDY STAYS, PERSONAL NEWS, LETTERS TO THE EDITOR AND OTHER MATTERS RELATED TO CARDIOLOGY. THE JOURNAL REGULARLY PUBLISHES INFORMATION THE SLOVAK SOCIETY OF CARDIOLOGY, ITS WORKING GROUPS AND THE SLOVAK SOCIETY OF HYPERTENSION',
    },
    {
      Id: 461,
      Name: 'SYMEKARD, BRATISLAVA',
    },
    {
      Id: 462,
      Name: 'SYMEKARD BRATISLAVA',
    },
    {
      Id: 463,
      Name: 'POLSKIE TOWARZYSTWO KARDIOLOGICZNE',
    },
    {
      Id: 464,
      Name: 'TURUNCU TANITIM',
    },
    {
      Id: 465,
      Name: 'CO-ACTION PUBLISHING',
    },
    {
      Id: 466,
      Name: 'CORNETIS SP. Z O. O.',
    },
    {
      Id: 467,
      Name: 'HIGHWIRE',
    },
    {
      Id: 468,
      Name: "STOLICHNAÂ IZDATEL'SKAÂ KOMPANYÂ",
    },
    {
      Id: 469,
      Name: 'SOCIEDAD ARGENTINA DE CARDIOLOGÍA',
    },
    {
      Id: 470,
      Name: 'SOCIEDADE BRASILEIRA DE CIRURGIA CARDIOVASCULAR',
    },
    {
      Id: 471,
      Name: 'SOCIEDAD CHILENA DE CARDIOLOGÍA Y CIRUGÍA CARDIOVASCULAR',
    },
    {
      Id: 472,
      Name: 'SOCIEDAD COLOMBIANA DE CARDIOLOGIA',
    },
    {
      Id: 473,
      Name: 'ECIMED',
    },
    {
      Id: 474,
      Name: 'SOCIEDAD URUGUAYA DE CARDIOLOGIA',
    },
    {
      Id: 475,
      Name: 'EVAGELISMOS GENERAL HOSPITAL OF ATHENS',
    },
    {
      Id: 476,
      Name: 'SOUTH AFRICAN HEART ASSOCIATION',
    },
    {
      Id: 477,
      Name: 'BAISHIDENG PUBLISHING GROUP',
    },
    {
      Id: 478,
      Name: 'SOCIETY FOR PUBLICATION OF ACTA DERMATO-VENEREOLOGICA',
    },
    {
      Id: 479,
      Name: 'HEALTH REFERENCE NETWORK',
    },
    {
      Id: 480,
      Name: 'UNIVERSITY OF CALIFORNIA, DAVIS',
    },
    {
      Id: 481,
      Name: 'DERM101.COM',
    },
    {
      Id: 482,
      Name: "EGYPTIAN WOMEN'S DERMATOLOGIC SOCIETY",
    },
    {
      Id: 483,
      Name: 'OUR DERMATOLOGY ONLINE',
    },
    {
      Id: 484,
      Name: 'TERMEDIA PUBLISHING HOUSE',
    },
    {
      Id: 485,
      Name: 'COLÉGIO BRASILEIRO DE CIRURGIA DIGESTIVA',
    },
    {
      Id: 486,
      Name: 'HELLENIC SOCIETY OF GASTROENTEROLOGY',
    },
    {
      Id: 487,
      Name: 'INSTITUTO BRASILEIRO DE ESTUDOS E PESQUISAS DE GASTROENTEROLOGIA - IBEPEGE',
    },
    {
      Id: 488,
      Name: 'KOREAN ASSOCIATION FOR THE STUDY OF THE LIVER',
    },
    {
      Id: 489,
      Name: 'IRANIAN ASSOCIATION OF GASTROENTEROLOGY AND HEPATOLOGY',
    },
    {
      Id: 490,
      Name: 'E S BURIONI RICERCHE BIBLIOGRAFICHE',
    },
    {
      Id: 491,
      Name: 'SOCIEDADE PORTUGUESA DE GASTRENTEROLOGIA',
    },
    {
      Id: 492,
      Name: 'SOCIEDADE BRASILEIRA DE COLOPROCTOLOGIA',
    },
    {
      Id: 493,
      Name: 'IRANIAN ASSOCIATION OF GASTROENTEROLOGY AND HEPATOLOGY, SHIRAZ UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 494,
      Name: 'CIDADE EDITORA CIENTÍFICA LTDA',
    },
    {
      Id: 495,
      Name: 'ASOCIACIÓN COLOMBIANA DE GASTROENTEROLOGÍA',
    },
    {
      Id: 496,
      Name: 'SOCIEDAD DE GASTROENTEROLOGÍA DEL PERÚ',
    },
    {
      Id: 497,
      Name: 'THE SPANISH SOCIETY OF DIGESTIVE PATHOLOGY',
    },
    {
      Id: 498,
      Name: 'BAISHIDENG PUBLISHING GROUP',
    },
    {
      Id: 499,
      Name: 'MOMENTO MÉDICO, LDA',
    },
    {
      Id: 500,
      Name: "WOMEN'S HEALTH AND ACTION RESEARCH CENTRE (WHARC)",
    },
    {
      Id: 501,
      Name: 'APROFEMA S.R.O.',
    },
    {
      Id: 502,
      Name: 'ALKIM BASIN YAYIN LTD. STI.',
    },
    {
      Id: 503,
      Name: 'NEPAL SOCIETY OF OBSTETRICIANS AND GYNAECOLOGISTS',
    },
    {
      Id: 504,
      Name: 'INSTITUTO MATERNO INFANTIL DE PERNAMBUCO',
    },
    {
      Id: 505,
      Name: 'SOCIEDAD CHILENA DE OBSTETRICIA Y GINECOLOGÍA',
    },
    {
      Id: 506,
      Name: 'SOCIEDAD DE OBSTETRICIA Y GINECOLOGÍA DE VENEZUELA',
    },
    {
      Id: 507,
      Name: 'SRI LANKA COLLEGE OF OBSTETRICIANS AND GYNAECOLOGISTS',
    },
    {
      Id: 508,
      Name: 'TURKISH SOCIETY OF OBSTETRICS AND GYNECOLOGY',
    },
    {
      Id: 509,
      Name: 'PAGEPRESS PUBLICATIONS',
    },
    {
      Id: 510,
      Name: 'HTTP://WWW.ACTA-ENDO.RO/MENUSTG/INSTRUCTIONS%20FOR%20AUTHORS.PHP',
    },
    {
      Id: 511,
      Name: 'EDITURA ACADEMIEI ROMÂNE',
    },
    {
      Id: 512,
      Name: 'BUCK INSTITUTE FOR AGE RESEARCH',
    },
    {
      Id: 513,
      Name: 'BILIMSEL TIP YAYINEVI',
    },
    {
      Id: 514,
      Name: 'SCIENCE PUBLICATIONS',
    },
    {
      Id: 515,
      Name: 'SOCIEDADE BRASILEIRA DE ENDOCRINOLOGIA E METABOLOGIA',
    },
    {
      Id: 516,
      Name: 'SIMTI',
    },
    {
      Id: 517,
      Name: 'UNIVERSIDAD DE CHILE',
    },
    {
      Id: 518,
      Name: 'BRAZILIAN SOCIETY OF INFECTIOUS DISEASES',
    },
    {
      Id: 519,
      Name: 'COLLEGE OF FAMILY PHYSICIANS OF CANADA',
    },
    {
      Id: 520,
      Name: 'MINISTER OF HEALTH',
    },
    {
      Id: 521,
      Name: 'THE CLEVELAND CLINIC EDUCATIONAL FOUNDATION',
    },
    {
      Id: 522,
      Name: 'MULTIMEDIA HEALTH CARE/FREEDOM LLC',
    },
    {
      Id: 523,
      Name: 'ESP BIOSCIENCE',
    },
    {
      Id: 524,
      Name: 'VUK VRHOVAC UNIVERSITY CLINIC, ZAGREB',
    },
    {
      Id: 525,
      Name: 'TURKISH SOCIETY OF RADIOLOGY',
    },
    {
      Id: 526,
      Name: 'U.S. NATIONAL CENTER FOR INFECTIOUS DISEASES',
    },
    {
      Id: 527,
      Name: 'THE JAPAN ENDOCRINE SOCIETY',
    },
    {
      Id: 528,
      Name: 'EUROPEAN RESPIRATORY SOCIETY',
    },
    {
      Id: 529,
      Name: 'STFM',
    },
    {
      Id: 530,
      Name: 'UNIVERSIDAD DE LAS CIENCIAS MÉDICAS DE CIENFUEGOS',
    },
    {
      Id: 531,
      Name: 'SOCIEDADE GALEGA DE MEDICINA INTERNA',
    },
    {
      Id: 532,
      Name: 'EUROPEAN HIV/AIDS AND INFECTIOUS DISEASES ACADEMY',
    },
    {
      Id: 533,
      Name: 'FERRATA STORTI FOUNDATION',
    },
    {
      Id: 534,
      Name: 'AMERICAN SOCIETY OF HEMATOLOGY',
    },
    {
      Id: 535,
      Name: 'CLINICAL CENTER OF VOJVODINA',
    },
    {
      Id: 536,
      Name: 'INDIAN ACADEMY OF NEUROSCIENCES',
    },
    {
      Id: 537,
      Name: 'INTERACTIVE MEDIA INSTITUTE, IMI',
    },
    {
      Id: 538,
      Name: 'ACADEMIA BRASILEIRA DE NEUROLOGIA - ABNEURO',
    },
    {
      Id: 539,
      Name: 'EDUSOFT PUBLISHING',
    },
    {
      Id: 540,
      Name: 'KURE ILETISIM GRUBU A S',
    },
    {
      Id: 541,
      Name: 'UNIVERSITY OF WALES',
    },
    {
      Id: 542,
      Name: 'UNIVERSITY OF WALES(541)',
    },
    {
      Id: 543,
      Name: 'NEUROPSICOLOGIA.CL',
    },
    {
      Id: 544,
      Name: 'UNIVERSIDAD VEREACRUZANA',
    },
    {
      Id: 545,
      Name: 'KARE PUBLISHING',
    },
    {
      Id: 546,
      Name: 'NATIONAL CENTER FOR BIOTECHNOLOGY INFORMATION',
    },
    {
      Id: 547,
      Name: 'University of South Carolina',
    },
    {
      Id: 548,
      Name: 'IRANIAN CHILD NEUROLOGY SOCIETY',
    },
    {
      Id: 549,
      Name: 'SOCIEDADE BRASILEIRA DE FONOAUDIOLOGIA',
    },
    {
      Id: 550,
      Name: 'SOCIETY FOR EXPERIMENTAL STROKE',
    },
    {
      Id: 551,
      Name: 'EGE UNIVERSITY PRESS',
    },
    {
      Id: 552,
      Name: 'ASHDIN PUBLISHING',
    },
    {
      Id: 553,
      Name: 'CANADIAN MEDICAL ASSOCIATION',
    },
    {
      Id: 554,
      Name: 'FACULTY FOR UNDERGRADUATE NEUROSCIENCE',
    },
    {
      Id: 555,
      Name: 'M. MUSTAFA ALDUR',
    },
    {
      Id: 556,
      Name: 'THE JAPAN NEUROSURGICAL SOCIETY',
    },
    {
      Id: 557,
      Name: 'SOCIEDAD LATINOAMERICANA DE NEUROPSICOLOGÍA (SLAN)',
    },
    {
      Id: 558,
      Name: 'ASIAN PACIFIC ORGANIZATION FOR CANCER PREVENTION',
    },
    {
      Id: 559,
      Name: 'CANCER RESEARCH INSTITUTE',
    },
    {
      Id: 560,
      Name: 'MULTIMED INC.',
    },
    {
      Id: 561,
      Name: 'CANCER INTELLIGENCE',
    },
    {
      Id: 562,
      Name: 'HELLENIC SOCIETY OF MEDICAL ONCOLOGY',
    },
    {
      Id: 563,
      Name: 'AKADEMI DOKTORLAR YAYINEVI',
    },
    {
      Id: 564,
      Name: 'SHAHID BEHESHTI UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 565,
      Name: 'SHAHID SADOUGHI UNIVERSITY OF MEDICAL SCIENCES AND HEALTH SERVICES',
    },
    {
      Id: 566,
      Name: 'IVYSPRING INTERNATIONAL PUBLISHER',
    },
    {
      Id: 567,
      Name: 'MEDUNION PRESS',
    },
    {
      Id: 568,
      Name: 'HERBERT PUBLICATIONS',
    },
    {
      Id: 569,
      Name: 'PIONEER BIOSCIENCE PUBLISHING COMPANY',
    },
    {
      Id: 570,
      Name: 'SCIEDU PRESS',
    },
    {
      Id: 571,
      Name: 'INSTITUTO NACIONAL DE CANCEROLOGÍA',
    },
    {
      Id: 572,
      Name: 'SHANGHAI CANCER INSTITUTE AND SHANGHAI JIAOTONG UNIVERSITY',
    },
    {
      Id: 573,
      Name: 'CONSELHO BRASILEIRO DE OFTALMOLOGIA',
    },
    {
      Id: 574,
      Name: 'THE INTERNATIONAL CENTRE FOR EYE HEALTH',
    },
    {
      Id: 575,
      Name: 'GERMAN MEDICAL SCIENCE',
    },
    {
      Id: 576,
      Name: 'OPHTHALMIC RESEARCH CENTER',
    },
    {
      Id: 577,
      Name: 'SPANISH COUNCIL OF OPTOMETRY',
    },
    {
      Id: 578,
      Name: 'ASSOCIATION FOR RESEARCH IN VISION AND OPHTHALMOLOGY',
    },
    {
      Id: 579,
      Name: 'NEPAL OPHTHALMIC SOCIETY',
    },
    {
      Id: 580,
      Name: 'ASSOCIATION OF SCHOOLS AND COLLEGES OF OPTOMETRY',
    },
    {
      Id: 581,
      Name: 'COLLEGE OF OPTOMETRISTS IN VISION DEVELOPMENT',
    },
    {
      Id: 582,
      Name: 'OPHTHALMOLOGICAL SOCIETY OF PAKISTAN',
    },
    {
      Id: 583,
      Name: 'FUNDAÇÃO OTORRINOLARINGOLOGIA',
    },
    {
      Id: 584,
      Name: 'CEFAC SAÚDE E EDUCAÇÃO',
    },
    {
      Id: 585,
      Name: 'CUMBERLAND OTOLARYNGOLOGY CONSULTANTS',
    },
    {
      Id: 586,
      Name: 'COMPANY OF BIOLOGISTS',
    },
    {
      Id: 587,
      Name: 'IRANIAN SOCIETY OF PATHOLOGY',
    },
    {
      Id: 588,
      Name: 'SOCIEDADE BRASILEIRA DE PATOLOGIA CLÍNICA',
    },
    {
      Id: 589,
      Name: 'SPRINGEROPEN',
    },
    {
      Id: 590,
      Name: 'THE KOREAN SOCIETY OF PATHOLOGISTS, THE KOREAN SOCIETY FOR CYTOPATHOLOGY',
    },
    {
      Id: 591,
      Name: 'ASOCIACIÓN COSTARRICENSE DE MEDICINA FORENSE',
    },
    {
      Id: 592,
      Name: 'AMERICAN SOCIETY OF INTERVENTIONAL PAIN PHYSICIANS',
    },
    {
      Id: 593,
      Name: 'RED UNIVERSITARIA DE SERVICIOS TELEMÁTICOS INTEGRADOS PARA COMUNIDADES VIRTUALES DE',
    },
    {
      Id: 594,
      Name: 'UNIVERSITY OF PERADENIYA',
    },
    {
      Id: 595,
      Name: 'FEDERATION OF TURKISH SOCIETY OF PATHOLOGY',
    },
    {
      Id: 596,
      Name: 'ASSOCIATION OF PEDIATRIC SURGEONS OF PAKISTAN',
    },
    {
      Id: 597,
      Name: 'HTTP://WWW.SCIELO.EDU.UY/REVISTAS/ADP/IINSTRUC.HTM',
    },
    {
      Id: 598,
      Name: 'SOCIEDAD URUGUAYA DE PEDIATRIA',
    },
    {
      Id: 599,
      Name: 'THE JAPANESE SOCIETY FOR PEDIATRIC ENDOCRINOLOGY',
    },
    {
      Id: 600,
      Name: 'HACETTEPE UNIVERSITY INSTITUTE OF CHILD HEALTH',
    },
    {
      Id: 601,
      Name: 'MEDCOM LIMITED',
    },
    {
      Id: 602,
      Name: 'INDIAN ACADEMY OF PEDIATRICS',
    },
    {
      Id: 603,
      Name: 'SOCIEDADE BRASILEIRA DE PEDIATRIA',
    },
    {
      Id: 604,
      Name: 'JOSEPH D. CAUTILLI',
    },
    {
      Id: 605,
      Name: 'EL-MED-PUB PUBLISHERS',
    },
    {
      Id: 606,
      Name: 'NEPAL PAEDIATRIC SOCIETY',
    },
    {
      Id: 607,
      Name: 'JOURNAL OF PEDIATRIC SCIENCES',
    },
    {
      Id: 608,
      Name: 'SOCIEDAD PARAGUAYA DE PEDIATRÍA',
    },
    {
      Id: 609,
      Name: 'THE JAPANESE SOCIETY OF PEDIATRIC DENTISTRY',
    },
    {
      Id: 610,
      Name: 'ASSOCIACAO DE APOIO A PESQUISA EM SAUDE BUCAL, APESB',
    },
    {
      Id: 611,
      Name: 'CENTRO DE ESTUDOS DE CRESCIMENTO E DESENVOLVIMENTO DO SER HUMANO',
    },
    {
      Id: 612,
      Name: 'SOCIEDAD CHILENA DE PEDIATRÍA',
    },
    {
      Id: 613,
      Name: 'EDITORIAL CIENCIAS MÉDICAS',
    },
    {
      Id: 614,
      Name: 'SOCIEDADE DE PEDIATRIA DE SÃO PAULO',
    },
    {
      Id: 615,
      Name: 'ASOCIACIÓN ESPAÑOLA DE PEDIATRÍA DE ATENCIÓN PRIMARIA, AEPAP',
    },
    {
      Id: 616,
      Name: 'PHARMAMED MADO',
    },
    {
      Id: 617,
      Name: 'INTERNATIONAL JOURNAL OF CHEMICAL AND PHARMACEUTICAL SCIENCES',
    },
    {
      Id: 618,
      Name: 'AMERICAN ASSOCIATION OF COLLEGES OF PHARMACY',
    },
    {
      Id: 619,
      Name: 'AMERICAN JOURNAL OF PHARMTECH RESEARCH',
    },
    {
      Id: 620,
      Name: 'ARCHIVES OF GLOBAL PROFESSIONALS',
    },
    {
      Id: 621,
      Name: 'ASSOCIATION OF PHARM INNOVATORS',
    },
    {
      Id: 622,
      Name: 'YOUNG PHARMACEUTICAL AND BIOLOGICAL SCIENTIST GROUP',
    },
    {
      Id: 623,
      Name: 'ABHILASHA JAIN',
    },
    {
      Id: 624,
      Name: 'PHARMACEUTICAL AND BIOLOGICAL SOCIETY',
    },
    {
      Id: 625,
      Name: 'ASIAN JOURNAL OF PHARMACEUTICAL RESEARCH AND HEALTH CARE',
    },
    {
      Id: 626,
      Name: 'SHRI BALRAM SINGH EDUCATION SOCIETY',
    },
    {
      Id: 627,
      Name: 'UNIVERSIDADE DE SÃO PAULO',
    },
    {
      Id: 628,
      Name: 'ASSOCIATION OF PHARMACEUTICAL INNOVATORS',
    },
    {
      Id: 629,
      Name: 'ADIS, SPRINGER HEALTHCARE',
    },
    {
      Id: 630,
      Name: 'HYGEIA',
    },
    {
      Id: 631,
      Name: 'INDO GLOBAL JOURNAL OF PHARMACEUTICAL SCIENCES',
    },
    {
      Id: 632,
      Name: 'INTERNATIONAL BULLETIN OF DRUG RESEARCH',
    },
    {
      Id: 633,
      Name: 'KMR PHARMA WELFARE ASSOCIATION',
    },
    {
      Id: 634,
      Name: 'ADVANCED RESEARCH JOURNALS',
    },
    {
      Id: 635,
      Name: 'HEALTHY SYNERGIES PUBLICATIONS',
    },
    {
      Id: 636,
      Name: 'SCIENCE ACADEMY PUBLISHER UNITED KINGDOM',
    },
    {
      Id: 637,
      Name: 'CHAUHAN PUBLISHERS',
    },
    {
      Id: 638,
      Name: 'BIOINFO PUBLICATIONS',
    },
    {
      Id: 639,
      Name: 'BHARTI PUBLICATION',
    },
    {
      Id: 640,
      Name: 'KEJA PUBLICATIONS',
    },
    {
      Id: 641,
      Name: 'PHARMSCIDIRECT PUBLICATIONS',
    },
    {
      Id: 642,
      Name: 'INTERNATIONAL JOURNAL OF PHARMACEUTICAL AND PHYTOPHARMACOLOGICAL RESEARCH',
    },
    {
      Id: 643,
      Name: 'INTERNATIONAL JOURNAL OF PHARMACEUTICAL FRONTIER RESEARCH',
    },
    {
      Id: 644,
      Name: 'INTERNATIONAL JOURNAL OF PHARMACEUTICAL RESEARCH AND ALLIED SCIENCES',
    },
    {
      Id: 645,
      Name: 'SOCIETY OF PHARMACEUTICAL SCIENCES AND RESEARCH',
    },
    {
      Id: 646,
      Name: 'INTERNATIONAL JOURNAL OF PHARMACY AND BIOLOGICAL SCIENCES',
    },
    {
      Id: 647,
      Name: 'PHARMAINTERSCIENCE PUBLISHER',
    },
    {
      Id: 648,
      Name: 'INTERNATIONAL JOURNAL OF PHARMACY AND PHARMACEUTICAL SCIENCES',
    },
    {
      Id: 649,
      Name: 'IJPT',
    },
    {
      Id: 650,
      Name: 'SPHINX KNOWLEDGE HOUSE',
    },
    {
      Id: 651,
      Name: 'INTERNATIONAL JOURNAL OF RESEARCH IN AYURVEDA AND PHARMACY',
    },
    {
      Id: 652,
      Name: 'INTERNATIONAL JOURNAL OF RESEARCH IN PHARMACY AND CHEMISTRY',
    },
    {
      Id: 653,
      Name: 'INTERNATIONAL JOURNAL OF RESEARCH IN PHARMACY AND SCIENCE',
    },
    {
      Id: 654,
      Name: 'INTERNATIONAL RESEARCH JOURNAL OF PHARMACY',
    },
    {
      Id: 655,
      Name: 'SCHOOL OF PHARMACY, SHAHID BEHESHTI UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 656,
      Name: 'MEDIPOEIA PUBLICATION',
    },
    {
      Id: 657,
      Name: 'INSTITUTE ON GLOBAL DRUG POLICY & THE INTERNATIONAL SCIENTIFIC AND MEDICAL FORUM ON DRUG ABUSE',
    },
    {
      Id: 658,
      Name: 'JOURNAL OF GLOBAL PHARMA TECHNOLOGY',
    },
    {
      Id: 659,
      Name: 'JOURNAL OF PHARMACEUTICAL AND BIOMEDICAL SCIENCES',
    },
    {
      Id: 660,
      Name: 'MOKSHA PUBLISHING HOUSE',
    },
    {
      Id: 661,
      Name: 'PUNJAB COLLEGE OF TECHNICAL EDUCATION',
    },
    {
      Id: 662,
      Name: 'JOURNAL OF PHARMACEUTICAL RESEARCH AND HEALTH CARE',
    },
    {
      Id: 663,
      Name: 'PHARMTECH PUBLICATIONS',
    },
    {
      Id: 664,
      Name: 'PHARMAINFO PUBLICATIONS',
    },
    {
      Id: 665,
      Name: 'CANADIAN SOCIETY FOR PHARMACEUTICAL SCIENCES',
    },
    {
      Id: 666,
      Name: 'MRS DEEPIKA CHARAN',
    },
    {
      Id: 667,
      Name: 'MEDICINAL AND AROMATIC PLANTS ASSOCIATION OF INDIA',
    },
    {
      Id: 668,
      Name: 'SCHOLARS RESEARCH LIBRARY',
    },
    {
      Id: 669,
      Name: 'PHARMA SCIENCE MONITOR',
    },
    {
      Id: 670,
      Name: 'PELAGIA RESEARCH LIBRARY',
    },
    {
      Id: 671,
      Name: 'PHARMACIE GLOBALE',
    },
    {
      Id: 672,
      Name: 'CENTRO DE INVESTIGACIONES Y PUBLICACIONES FARMACEUTICAS',
    },
    {
      Id: 673,
      Name: 'SOCIEDADE BRASILEIRA DE FARMACOGNOSIA',
    },
    {
      Id: 674,
      Name: 'UNESP',
    },
    {
      Id: 675,
      Name: 'JOURNAL OF BASIC AND APPLIED PHARMACEUTICAL SCIENCES',
    },
    {
      Id: 676,
      Name: 'ELECTRONIC JOURNAL OF PHARMACY',
    },
    {
      Id: 677,
      Name: 'RAJIV GANDHI UNIVERSITY OF HEALTH SCIENCES',
    },
    {
      Id: 678,
      Name: 'RGUHS J PHARM SCI.',
    },
    {
      Id: 679,
      Name: 'ÖSTERREICHISCHE APOTHEKER-VERLAGSGESELLSCHAFT M. B. H.',
    },
    {
      Id: 680,
      Name: 'DR ZAHEER-UD-DIN BABAR',
    },
    {
      Id: 681,
      Name: 'STAMFORD UNIVERSITY',
    },
    {
      Id: 682,
      Name: 'JOBSON MEDICAL INFORMATION LLC',
    },
    {
      Id: 683,
      Name: 'SOCIEDAD DE NEUROLOGÍA, PSIQUIATRÍA Y NEUROCIRUGÍA',
    },
    {
      Id: 684,
      Name: 'UNIVERSIDAD DE LA FRONTERA',
    },
    {
      Id: 685,
      Name: 'ROMANIAN SOCIETY OF NEUROSURGERY',
    },
    {
      Id: 686,
      Name: 'TURKISH NEUROLOGICAL SOCIETY',
    },
    {
      Id: 687,
      Name: 'CERRAHPASA MEDICAL FACULTY, ISTANBUL',
    },
    {
      Id: 688,
      Name: 'MASSEY UNIVERSITY, SCHOOL OF PSYCHOLOGY',
    },
    {
      Id: 689,
      Name: 'ASSOCIAZIONE CROSSING DIALOGUES',
    },
    {
      Id: 690,
      Name: 'UNIVERSIDAD DE ZARAGOZA',
    },
    {
      Id: 691,
      Name: 'UNIVERSITY OF GOETTINGEN',
    },
    {
      Id: 692,
      Name: 'LIBRARY OF THE UNIVERSITY OF HEIDELBERG',
    },
    {
      Id: 693,
      Name: 'MAZANDARAN UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 694,
      Name: 'UNIVERSIDADE FEDERAL DO RIO DE JANEIRO',
    },
    {
      Id: 695,
      Name: 'PAKISTAN PSYCHIATRIC SOCIETY',
    },
    {
      Id: 696,
      Name: 'CANADIAN ACADEMY OF CHILD AND ADOLESCENT PSYCHIATRY',
    },
    {
      Id: 697,
      Name: 'RUTGERS UNIVERSITY LIBRARIES',
    },
    {
      Id: 698,
      Name: 'ACADEMIC LIBRARY OF THE UNIVERSITY OF REGENSBURG',
    },
    {
      Id: 699,
      Name: 'ARBEITSGEMEINSCHAFT DER WISSENSCHAFTLICHEN MEDIZINISCHEN FACHGESELLSCHAFTEN',
    },
    {
      Id: 700,
      Name: 'ASOCIACION COLOMBIANA DE PSIQUIATRIA',
    },
    {
      Id: 701,
      Name: 'SPANISH ASSOCIATION OF NEUROPSYCHIATRY',
    },
    {
      Id: 702,
      Name: 'FACULDADE DE MEDICINA DA UNIVERSIDADE DE SÃO PAULO',
    },
    {
      Id: 703,
      Name: 'SOCIEDADE DE PSIQUIATRIA DO RIO GRANDE DO SUL',
    },
    {
      Id: 704,
      Name: 'SRI LANKA JOURNAL OF PSYCHIATRY',
    },
    {
      Id: 705,
      Name: 'ASSOCIAÇÃO DE PSIQUIATRIA DO RIO GRANDE DO SUL',
    },
    {
      Id: 706,
      Name: 'CIAFEL, RESEARCH CENTRE IN PHYSICAL ACTIVITY, HEALTH AND LEISURE',
    },
    {
      Id: 707,
      Name: 'MARCO MACHADO',
    },
    {
      Id: 708,
      Name: 'UNIVERSITY OF ALICANTE',
    },
    {
      Id: 709,
      Name: 'ASIST GROUP',
    },
    {
      Id: 710,
      Name: 'MEDICINA SPORTIVA',
    },
    {
      Id: 711,
      Name: 'UNIVERSIDAD NACIONAL',
    },
    {
      Id: 712,
      Name: 'TUZLA UNIVERSITY',
    },
    {
      Id: 713,
      Name: 'SOCIEDADE BRASILEIRA PARA O DESENVOLVIMENTO DA PESQUISA EM CIRURGIA',
    },
    {
      Id: 714,
      Name: 'CERRAHI SANATLAR DERGISI',
    },
    {
      Id: 715,
      Name: 'SOCIEDADE BRASILEIRA DE COLUNA',
    },
    {
      Id: 716,
      Name: 'ASSOCIATION OF SURGEONS OF EAST AFRICA AND COLLEGE OF SURGEONS OF EAST CENTRAL AND SOUTHERN AFRICA',
    },
    {
      Id: 717,
      Name: 'OPEN SCIENCE CO. LLC',
    },
    {
      Id: 718,
      Name: 'FOOT AND ANKLE JOURNAL ONLINE',
    },
    {
      Id: 719,
      Name: 'AVICENNA ORGAN TRANSPLANTATION INSTITUTE',
    },
    {
      Id: 720,
      Name: 'BANGLADESH COLLEGE OF PHYSICIANS AND SURGEONS',
    },
    {
      Id: 721,
      Name: 'INDIAN ORTHOPAEDIC RESEARCH GROUP',
    },
    {
      Id: 722,
      Name: 'CALICUT MEDICAL COLLEGE',
    },
    {
      Id: 723,
      Name: 'INTERNATIONAL COLLEGE OF SURGEONS PAKISTAN CHAPTER AND SAARC ASSOCIATION OF SURGEONS PAKISTAN CHAPTER',
    },
    {
      Id: 724,
      Name: 'UNIVERSITI KEBANGSAAN MALAYSIA, UKM',
    },
    {
      Id: 725,
      Name: 'KERALA ORTHOPAEDIC ASSOCIATION',
    },
    {
      Id: 726,
      Name: 'AMERICAN ASSOCIATION OF NEUROLOGICAL SURGEONS',
    },
    {
      Id: 727,
      Name: 'SOCIEDADE BRASILEIRA DE ANESTESIOLOGIA',
    },
    {
      Id: 728,
      Name: 'SOCIEDADE BRASILEIRA DE CIRURGIA PLÁSTICA',
    },
    {
      Id: 729,
      Name: 'ASOCIACIÓN COLOMBIANA DE CIRUGÍA',
    },
    {
      Id: 730,
      Name: 'COLÉGIO BRASILEIRO DE CIRURGIÕES',
    },
    {
      Id: 731,
      Name: 'JAPANESE ASSOCIATION OF OCCUPATIONAL THERAPISTS',
    },
    {
      Id: 732,
      Name: 'ASSOCIAÇÃO BRASILEIRA DE FISIOTERAPIA CARDIORRESPIRATORIA E FISIOTERAPIA EM TERAPIA INTENSIVA',
    },
    {
      Id: 733,
      Name: 'NATIONAL PRESCRIBING SERVICE',
    },
    {
      Id: 734,
      Name: 'BANGLADESH PHARMACOLOGICAL SOCIETY',
    },
    {
      Id: 735,
      Name: 'MAXWELL SCIENCE PUBLICATION',
    },
    {
      Id: 736,
      Name: 'INTERNATIONAL JOURNAL OF APPLIED BIOLOGY AND PHARMACEUTICAL TECHNOLOGY',
    },
    {
      Id: 737,
      Name: 'INTERNATIONAL INTEGRATIVE PSYCHOTHERAPY ASSOCIATION',
    },
    {
      Id: 738,
      Name: 'OPEN ACCESS SCIENCE RESEARCH PUBLISHER',
    },
    {
      Id: 739,
      Name: 'RTECHNOLOGY',
    },
    {
      Id: 740,
      Name: 'INTERNATIONAL JOURNAL OF PHARMACEUTICAL SCIENCES AND DRUG RESEARCH',
    },
    {
      Id: 741,
      Name: 'JK WELFARE & PHARMASCOPE FOUNDATION',
    },
    {
      Id: 742,
      Name: 'UNIVERSITY LIBRARY SYSTEM, UNIVERSITY OF PITTSBURGH',
    },
    {
      Id: 743,
      Name: 'MASSAGE THERAPY FOUNDATION',
    },
    {
      Id: 744,
      Name: 'UNIVERSITY OF SOCIAL WELFARE AND REHABILITATION SCIENCES',
    },
    {
      Id: 745,
      Name: 'THERAPEUTIC SOLUTIONS, LLC',
    },
    {
      Id: 746,
      Name: 'ISLAMIC AZAD UNIVERSITY',
    },
    {
      Id: 747,
      Name: 'JPSBR PUBLICATION',
    },
    {
      Id: 748,
      Name: 'THE JAPANESE PHARMACOLOGICAL SOCIETY',
    },
    {
      Id: 749,
      Name: 'JOURNAL OF PHYSICAL THERAPY',
    },
    {
      Id: 750,
      Name: 'SOCIETY OF PHYSICAL THERAPY SCIENCE',
    },
    {
      Id: 751,
      Name: 'THE JAPANESE PHYSICAL THERAPY ASSOCIATION',
    },
    {
      Id: 752,
      Name: 'AHVAZ JUNDISHAPUR UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 753,
      Name: 'UNIVERSITI SAINS MALAYSIA',
    },
    {
      Id: 754,
      Name: 'LUMITEXT PUBLISHING',
    },
    {
      Id: 755,
      Name: 'UNIVERSIDADE ESTADUAL PAULISTA',
    },
    {
      Id: 756,
      Name: 'INFORESIGHTS PUBLISHING',
    },
    {
      Id: 757,
      Name: 'GVGS',
    },
    {
      Id: 758,
      Name: 'ASSOCIAÇÃO BRASILEIRA DE PESQUISA E PÓS-GRADUAÇÃO EM FISIOTERAPIA',
    },
    {
      Id: 759,
      Name: 'SOCIEDADE BRASILEIRA DE UROLOGIA',
    },
    {
      Id: 760,
      Name: 'SOCIEDADE BRASILEIRA DE NEFROLOGIA',
    },
    {
      Id: 761,
      Name: 'OMNISCIENTIA',
    },
    {
      Id: 762,
      Name: 'KOWSAR CORPORATION',
    },
    {
      Id: 763,
      Name: 'TURKISH ASSOCIATION OF UROLOGY',
    },
    {
      Id: 764,
      Name: 'SHAHEED BEHESHTI UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 765,
      Name: 'THE NATIONAL MEDICAL JOURNAL OF INDIA',
    },
    {
      Id: 766,
      Name: 'THE INDIAN ASSOCIATION  OF CARDIOVASCULAR THORACIC ANAESTHESIOLOGISTS',
    },
    {
      Id: 767,
      Name: 'DEPARTMENT OF PSYCHIATRY UNIVERSITY COLLEGE OF MEDICAL SCIENCES AND GURU TEG BAHADUR HOSPITAL',
    },
    {
      Id: 768,
      Name: 'INDIAN MEDICAL ASSOCIATION, GUJARAT STATE BRANCH',
    },
    {
      Id: 769,
      Name: 'THE INDIAN SOCIETY OF HEALTH ADMINISTRATORS',
    },
    {
      Id: 770,
      Name: 'NATIONAL INSTITUTE OF HEALTH AND FAMILY WELFARE',
    },
    {
      Id: 771,
      Name: 'INDIAN SOCIETY OF AEROSPACE MEDICINE',
    },
    {
      Id: 772,
      Name: 'S.N. GAUR',
    },
    {
      Id: 773,
      Name: 'INDIAN JOURNAL OF CLINICAL PRACTICE',
    },
    {
      Id: 774,
      Name: 'THE NEUROTRAUMA SOCIETY OF INDIA',
    },
    {
      Id: 775,
      Name: 'DR. ANIL K. SRIVASTAVA',
    },
    {
      Id: 776,
      Name: 'THE ASSOCIATION OF OTOLARYNGOLOGISTS OF INDIA',
    },
    {
      Id: 777,
      Name: 'IJPSM',
    },
    {
      Id: 778,
      Name: 'INDIAN ASSOCIATION FOR THE STUDY OF  SEXUALLY TRANSMITTED DISEASES',
    },
    {
      Id: 779,
      Name: 'INDIAN ASSOCIATION OF CARDIOVASCULAR- THORACIC SURGEONS',
    },
    {
      Id: 780,
      Name: 'THE TUBERCULOSIS ASSOCIATION OF INDIA',
    },
    {
      Id: 781,
      Name: 'THE DEVELOPMENT OF INDIAN MEDICINE & SURGERY',
    },
    {
      Id: 782,
      Name: 'DR. GM MALIK',
    },
    {
      Id: 783,
      Name: 'THE INDIAN ASSOCIATION OF CLINICAL MEDICINE',
    },
    {
      Id: 784,
      Name: 'EXERCISE FITNESS AND HEALTH ALLIANCE',
    },
    {
      Id: 785,
      Name: 'THE INDIAN ACADEMY OF APPLIED PSYCHOLOGY.',
    },
    {
      Id: 786,
      Name: 'INDIAN ACADEMY OF FORENSIC MEDICINE',
    },
    {
      Id: 787,
      Name: 'THE INDIAN RHEUMATOLOGY ASSOCIATION',
    },
    {
      Id: 788,
      Name: 'MAHATMA GANDHI INSTITUTE OF MEDICAL SCIENCES',
    },
    {
      Id: 789,
      Name: 'THE FEDERATION OF OBSTETRIC AND GYNAECOLOGICAL SOCIETIES OF INDIA',
    },
    {
      Id: 790,
      Name: 'PUNJAB ACADEMY OF FORENSIC MEDICINE & TOXICOLOGY',
    },
    {
      Id: 791,
      Name: 'DIRECTOR GENERAL ARMED FORCES MEDICAL SERVICES',
    },
    {
      Id: 792,
      Name: 'NTI BULLETIN',
    },
    {
      Id: 793,
      Name: 'NURSING AND MIDWIFERY RESEARCH JOURNAL',
    },
    {
      Id: 794,
      Name: 'THE SOCIETY FOR BIOMATERIALS AND ARTIFICIAL ORGANS - INDIA',
    },
    {
      Id: 795,
      Name: 'NEJM GROUP',
    },
    {
      Id: 796,
      Name: 'AAAS',
    },
    {
      Id: 797,
      Name: 'AMERICAN MEDICAL ASSOCIATION',
    },
    {
      Id: 798,
      Name: 'AMERICAN SOCIETY FOR CLINICAL INVESTIGATION',
    },
    {
      Id: 799,
      Name: 'MAYO CLINIC PROCEEDINGS',
    },
    {
      Id: 800,
      Name: 'HOPE — THE PEOPLE-TO-PEOPLE HEALTH FOUNDATION',
    },
    {
      Id: 801,
      Name: 'MJA GROUP AUSTRALIA',
    },
    {
      Id: 802,
      Name: 'THE SOCIETY OF EXPERIMENTAL BIOLOGY AND MEDICINE',
    },
    {
      Id: 803,
      Name: 'THE ASSOCIATION OF PHYSICIANS',
    },
    {
      Id: 804,
      Name: 'THE NETHERLANDS ASSOCIATION OF INTERNAL MEDICINE',
    },
    {
      Id: 805,
      Name: 'POSTGRADUATE MEDICAL JOURNAL',
    },
    {
      Id: 806,
      Name: 'THE ROYAL SOCIETY OF MEDICINE',
    },
    {
      Id: 807,
      Name: 'THE ANNALS, ACADEMY OF MEDICINE, SINGAPORE',
    },
    {
      Id: 808,
      Name: 'CANADIAN SOCIETY FOR CLINICAL INVESTIGATION',
    },
    {
      Id: 809,
      Name: 'EDIZIONI MINERVA MEDICA',
    },
    {
      Id: 810,
      Name: 'VERDUCI',
    },
    {
      Id: 811,
      Name: 'KOREAN ACADEMY OF MEDICAL SCIENCES',
    },
    {
      Id: 812,
      Name: 'THE ACADEMY OF MEDICAL SCIENCES',
    },
    {
      Id: 813,
      Name: 'ASSOCIAÇÃO MÉDICA BRASILEIRA',
    },
    {
      Id: 814,
      Name: 'THE SINGAPORE MEDICAL ASSOCIATION',
    },
    {
      Id: 815,
      Name: 'ASSOCIAÇÃO PAULISTA DE MEDICINA',
    },
    {
      Id: 816,
      Name: 'THE UNIVERSITY OF PUERTO RICO MEDICAL SCIENCES CAMPUS',
    },
    {
      Id: 817,
      Name: 'INSTITUTO NACIONAL DE SALUD',
    },
    {
      Id: 818,
      Name: 'CSIRO PUBLISHING',
    },
    {
      Id: 819,
      Name: 'THE SCIENTIFIC COMMITTEE',
    },
    {
      Id: 820,
      Name: 'THE UNIVERSITY OF THE WEST INDIES',
    },
    {
      Id: 821,
      Name: 'JOURNAL OF NEPAL MEDICAL ASSOCIATION',
    },
    {
      Id: 822,
      Name: 'PROFESSIONAL MEDICAL PUBLICATIONS',
    },
    {
      Id: 823,
      Name: 'KUWAIT MEDICAL JOURNAL',
    },
    {
      Id: 824,
      Name: 'CELL PRESS',
    },
    {
      Id: 825,
      Name: 'THE FEDERATION OF AMERICAN SOCIETIES FOR EXPERIMENTAL BIOLOGY',
    },
    {
      Id: 826,
      Name: 'THE SOCIETY FOR LEUKOCYTE BIOLOGY',
    },
    {
      Id: 827,
      Name: 'FRONTIERS IN BIOSCIENCE',
    },
    {
      Id: 828,
      Name: 'THE COMPANY OF BIOLOGISTS LIMITED',
    },
    {
      Id: 829,
      Name: 'PORTLAND PRESS LIMITED',
    },
    {
      Id: 830,
      Name: 'THE CHINESE ACADEMY OF SCIENCES',
    },
    {
      Id: 831,
      Name: 'THE MARINE BIOLOGICAL LABORATORY',
    },
    {
      Id: 832,
      Name: 'MARY ANN LIEBERT, INC',
    },
    {
      Id: 833,
      Name: 'INSTITUTE OF ENVIRONMENTAL  SCIENCES',
    },
    {
      Id: 834,
      Name: 'LANDES BIOSCIENCE',
    },
    {
      Id: 835,
      Name: 'JAPAN SOCIETY FOR BIOSCIENCE, BIOTECHNOLOGY, AND AGROCHEMISTRY',
    },
    {
      Id: 836,
      Name: 'IACMHR CO., LTD.',
    },
    {
      Id: 837,
      Name: 'INSTITUTO INTERNACIONAL DE ECOLOGIA',
    },
    {
      Id: 838,
      Name: 'SOCIETY OF NEMATOLOGISTS',
    },
    {
      Id: 839,
      Name: 'THE AMERICAN SOCIETY FOR CELL BIOLOGY',
    },
    {
      Id: 840,
      Name: 'COLD SPRING HARBOR LABORATORY PRESS',
    },
    {
      Id: 841,
      Name: 'ARISTOTLE UNIVERSITY OF THESSALONIKI',
    },
    {
      Id: 842,
      Name: 'THE AMERICAN ASSOCIATION FOR THORACIC SURGERY',
    },
    {
      Id: 843,
      Name: 'MATTIOLI 1885 SRL',
    },
    {
      Id: 844,
      Name: 'ZITA PUBLISHING PTY LTD',
    },
    {
      Id: 845,
      Name: 'CLINICS CARDIVE PUBLISHING LTD',
    },
    {
      Id: 846,
      Name: 'THE ENDOCRINE SOCIETY',
    },
    {
      Id: 847,
      Name: 'AMERICAN DIABETES ASSOCIATION',
    },
    {
      Id: 848,
      Name: 'THE SOCIETY FOR ENDOCRINOLOGY',
    },
    {
      Id: 849,
      Name: 'KURTIS EDITRICE SRL',
    },
    {
      Id: 850,
      Name: 'EDITRICE KURTIS SRL',
    },
    {
      Id: 851,
      Name: 'DIABETES TECHNOLOGY SOCIETY',
    },
    {
      Id: 852,
      Name: 'THE AMERICAN SOCIETY FOR MICROBIOLOGY',
    },
    {
      Id: 853,
      Name: 'THE UNIVERSITY OF CHICAGO PRESS',
    },
    {
      Id: 854,
      Name: 'PULSUS GROUP INC',
    },
    {
      Id: 855,
      Name: 'ACTA DERMATOVENEROLOGICA CROATICA',
    },
    {
      Id: 856,
      Name: 'INDIAN ACADEMY OF SCIENCES',
    },
    {
      Id: 857,
      Name: 'GENETICS SOCIETY OF AMERICA',
    },
    {
      Id: 858,
      Name: 'CBS-KNAW FUNGAL BIODIVERSITY CENTRE',
    },
    {
      Id: 859,
      Name: 'THE AMERICAN PHYTOPATHOLOGICAL SOCIETY',
    },
    {
      Id: 860,
      Name: 'THE SOCIETY FOR GENERAL MICROBIOLOGY',
    },
    {
      Id: 861,
      Name: 'THE MYCOLOGICAL SOCIETY OF AMERICA',
    },
    {
      Id: 862,
      Name: 'BRAZILIAN SOCIETY OF MICROBIOLOGY',
    },
    {
      Id: 863,
      Name: 'CALVO BELINDA MORALES',
    },
    {
      Id: 864,
      Name: 'THE SOCIETY FOR NEUROSCIENCE',
    },
    {
      Id: 865,
      Name: 'AMERICAN SOCIETY OF NEURORADIOLOGY',
    },
    {
      Id: 866,
      Name: 'KOREAN NEUROLOGICAL ASSOCIATION',
    },
    {
      Id: 867,
      Name: 'CIC EDIZIONI INTERNAZIONALI SRL',
    },
    {
      Id: 868,
      Name: 'JOHN LIBBEY EUROTEXT LIMITED',
    },
    {
      Id: 869,
      Name: 'TERMEDIA MEDICAL PUBLISHING',
    },
    {
      Id: 870,
      Name: 'AMERICAN SOCIETY OF CLINICAL ONCOLOGY',
    },
    {
      Id: 871,
      Name: 'AMERICAN ASSOCIATION FOR CANCER RESEARCH',
    },
    {
      Id: 872,
      Name: 'SPI PUBLISHER',
    },
    {
      Id: 873,
      Name: 'THE SOCIETY OF SURGICAL ONCOLOGY',
    },
    {
      Id: 874,
      Name: 'SPANDIDOS PUBLICATIONS LTD.',
    },
    {
      Id: 875,
      Name: 'THE INTERNATIONAL INSTITUTE OF ANTICANCER RESEARCH',
    },
    {
      Id: 876,
      Name: 'ASIAN SOCIETY OF GYNECOLOGIC ONCOLOGY',
    },
    {
      Id: 877,
      Name: 'AEPRESS',
    },
    {
      Id: 878,
      Name: 'THE KOREAN BREAST CANCER SOCIETY',
    },
    {
      Id: 879,
      Name: 'IMPACT JOURNALS LLC',
    },
    {
      Id: 880,
      Name: 'PHIL DALY',
    },
    {
      Id: 881,
      Name: 'INTERNATIONAL AIDS SOCIETY',
    },
    {
      Id: 882,
      Name: 'SAJHIVMED',
    },
    {
      Id: 883,
      Name: 'UNIVERSITY OF SANTIAGO DE CHILE',
    },
    {
      Id: 884,
      Name: 'DRUG RESAERCH AND PRODUCTION UNIT',
    },
    {
      Id: 885,
      Name: 'AMERICAN SOCIETY OF ANESTHESIOLOGISTS',
    },
    {
      Id: 886,
      Name: 'INTERNATIONAL ANESTHESIA RESEARCH SOCIETY',
    },
    {
      Id: 887,
      Name: 'AMERICAN SOCIETY FOR BIOCHEMISTRY AND MOLECULAR BIOLOGY',
    },
    {
      Id: 888,
      Name: 'KOREAN SOCIETY FOR BIOCHEMISTRY AND MOLECULAR BIOLOGYAND',
    },
    {
      Id: 889,
      Name: 'CROATIAN SOCIETY OF MEDICAL BIOCHEMISTRY AND LABORATORY MEDICINE',
    },
    {
      Id: 890,
      Name: 'NATIONAL INSTITUTE OF SCIENCE COMMUNICATION AND INFORMATION RESOURCES, NISCAIR',
    },
    {
      Id: 891,
      Name: 'AO RESEARCH INSTITUTE DAVOS',
    },
    {
      Id: 892,
      Name: 'PLOS',
    },
    {
      Id: 893,
      Name: 'BIOLIFE',
    },
    {
      Id: 894,
      Name: 'HORIZON SCIENTIFIC PRESS',
    },
    {
      Id: 895,
      Name: 'INTERNATIONAL UNION OF CRYSTALLOGRAPHY',
    },
    {
      Id: 896,
      Name: 'JOURNAL OF MEDICAL AND BIOLOGICAL ENGINEERING',
    },
    {
      Id: 897,
      Name: 'WROCLAW UNIVERSITY OF TECHNOLOGY',
    },
    {
      Id: 898,
      Name: 'NALECZ INSTITUTE OF BIOCYBERNETICS AND BIOMEDICAL ENGINEERING',
    },
    {
      Id: 899,
      Name: 'THE JOURNAL OF THE AMERICAN COLLEGE OF CARDIOLOGYTHE JOURNAL OF THE AMERICAN COLLEGE OF CARDIOLOGY',
    },
    {
      Id: 900,
      Name: 'SPANISH SOCIETY OF CARDIOLOGY',
    },
    {
      Id: 901,
      Name: 'E JOURNAL OF DENTISTRY',
    },
    {
      Id: 902,
      Name: 'INTERNATIONAL ORGANIZATION OF SCIENTIFIC RESEARCH',
    },
    {
      Id: 903,
      Name: 'UNITED NATIONS STANDING COMMITTEE ON NUTRITION',
    },
    {
      Id: 904,
      Name: 'DEPT. OF HEALTH PHILLIPINS',
    },
    {
      Id: 905,
      Name: 'RXLIST INC.',
    },
    {
      Id: 906,
      Name: 'U.S. NATIONAL LIBRARY OF MEDICINE',
    },
    {
      Id: 907,
      Name: 'AMERICAN ACADEMY OF PEDIATRICS',
    },
    {
      Id: 908,
      Name: 'THE AMERICAN ASSOCIATION FOR AEROSOL RESEARCH',
    },
    {
      Id: 909,
      Name: 'TAYLOR & FRANCIS ONLINE',
    },
    {
      Id: 910,
      Name: 'ACS PUBLICATIONS',
    },
    {
      Id: 911,
      Name: 'NATIONAL INSTITUTE ON AGING',
    },
    {
      Id: 912,
      Name: 'SAMHSA',
    },
    {
      Id: 913,
      Name: 'VIRTUAL JOURNAL OF ORTHODONTICS',
    },
    {
      Id: 914,
      Name: 'NIOSH',
    },
    {
      Id: 915,
      Name: 'WEB DENTAL',
    },
    {
      Id: 916,
      Name: 'LIBRARY  PHILOSOPHY AND PRACTICE',
    },
    {
      Id: 917,
      Name: 'MEDICAL NEWS TODAY',
    },
    {
      Id: 918,
      Name: 'MEDICAL DEVICE DAILY',
    },
    {
      Id: 919,
      Name: 'UNIVERSITY OF PITTSBURGH MEDICAL CENTER.',
    },
    {
      Id: 920,
      Name: 'LIBRARY PROFESSIONAL ASSOCIATION',
    },
    {
      Id: 921,
      Name: 'DENTAL XP',
    },
    {
      Id: 922,
      Name: 'ORAL & MAXILLOFACIAL PATHOLOGY JOURNAL',
    },
    {
      Id: 923,
      Name: 'EOGME',
    },
    {
      Id: 924,
      Name: 'PROMED',
    },
    {
      Id: 925,
      Name: 'EDP SCIENCES',
    },
    {
      Id: 926,
      Name: 'AUSTRALIAN GOVERNMENT DEPARTMENT OF HEALTH AND AGEING',
    },
    {
      Id: 927,
      Name: 'ICMPE',
    },
    {
      Id: 928,
      Name: 'PUCRS',
    },
    {
      Id: 929,
      Name: 'FEDERAL AVIATION ADMINISTRATION',
    },
    {
      Id: 930,
      Name: 'ANNALS OF LONG TERM-CARE',
    },
    {
      Id: 931,
      Name: 'THE CANADIAN GERIATRICS SOCIETY',
    },
    {
      Id: 932,
      Name: 'LINKÖPING UNIVERSITY',
    },
    {
      Id: 933,
      Name: 'INDIAN ACADEMY OF GERIATRICS',
    },
    {
      Id: 934,
      Name: 'ACB; ANATOMY AND CELL BIOLOGY',
    },
    {
      Id: 935,
      Name: 'INTERNATIONAL JOURNAL OF ANATOMICAL VARIATIONS',
    },
    {
      Id: 936,
      Name: 'SOCIEDAD CHILENA DE ANATOMÍA',
    },
    {
      Id: 937,
      Name: 'NATIONAL UNIVERSITY OF COLOMBIA',
    },
    {
      Id: 938,
      Name: 'ASSOCIATION ARGENTINA OF ANATOMY',
    },
    {
      Id: 939,
      Name: 'IDUP',
    },
    {
      Id: 940,
      Name: 'CLAM',
    },
    {
      Id: 941,
      Name: 'SOCIETY OF ANESTHESIOLOGY OF URUGUAY',
    },
    {
      Id: 942,
      Name: 'IARS',
    },
    {
      Id: 943,
      Name: 'THE INDIAN ANAESTHETISTS’ FORUM',
    },
    {
      Id: 944,
      Name: 'JOURNAL OF THE BANGLADESH SOCIETY OF ANAESTHESIOLOGISTS',
    },
    {
      Id: 945,
      Name: 'KOREAN SOCIETY OF ANESTHESIOLOGISTS',
    },
    {
      Id: 946,
      Name: 'THE KOREAN PAIN SOCIETY',
    },
    {
      Id: 947,
      Name: 'SCARE',
    },
    {
      Id: 948,
      Name: 'MEDICAL SCIENCES PUBLISHING HOUSE',
    },
    {
      Id: 949,
      Name: 'SOCIEDADE BRASILEIRA PARA O ESTUDO DA DOR',
    },
    {
      Id: 950,
      Name: 'SAJAA',
    },
    {
      Id: 951,
      Name: 'FEDERATION BIOCHEMISTRY OF THE PROVINCE OF BUENOS AIRES',
    },
    {
      Id: 952,
      Name: 'SCIENTIFIC & ACADEMIC PUBLISHING CO.',
    },
    {
      Id: 953,
      Name: 'SCIENCE ALERT',
    },
    {
      Id: 954,
      Name: 'ASBMB',
    },
    {
      Id: 955,
      Name: 'SREE BALAJI DENTAL COLLEGE & HOSPITAL',
    },
    {
      Id: 956,
      Name: 'ASIAN BIOETHICS REVIEW',
    },
    {
      Id: 957,
      Name: 'BANGLADESH BIOETHICS SOCIETY',
    },
    {
      Id: 958,
      Name: 'DEPARTMENT OF MEDICAL HUMANITIES',
    },
    {
      Id: 959,
      Name: 'CENTRE FOR DEVELOPMENT OF SOCIAL SCIENCES AND HUMANITIES IN HEALTH',
    },
    {
      Id: 960,
      Name: 'FORUM FOR MEDICAL ETHICS SOCIETY',
    },
    {
      Id: 961,
      Name: 'JOURNAL OF INJURY AND VIOLENCE RESEARCH',
    },
    {
      Id: 962,
      Name: 'ISLAMIC MEDICAL ASSOCIATION OF NORTH AMERICA',
    },
    {
      Id: 963,
      Name: 'ONLINE JOURNAL OF HEALTH ETHICS',
    },
    {
      Id: 964,
      Name: 'UNIVERSITY OF LA SABANA',
    },
    {
      Id: 965,
      Name: 'FEDERAL COUNCIL OF MEDICINE',
    },
    {
      Id: 966,
      Name: 'CONSORTIUM OF ACADEMIC LIBRARIES OF CATALONIA',
    },
    {
      Id: 967,
      Name: 'SEBASTIAN LAROCA',
    },
    {
      Id: 968,
      Name: 'EDUEM',
    },
    {
      Id: 969,
      Name: 'INSTITUTE OF BIOLOGY, UNIVERSITY OF ANTIOQUIA',
    },
    {
      Id: 970,
      Name: 'HIKARI LTD',
    },
    {
      Id: 971,
      Name: 'ALEXANDRU IOAN CUZA UNIVERSITY',
    },
    {
      Id: 972,
      Name: "ORADEA UNIVERSITY'S PUBLISHING HOUSE",
    },
    {
      Id: 973,
      Name: 'SERBIAN BIOLOGICAL SOCIETY',
    },
    {
      Id: 974,
      Name: 'PBS JOURNALS',
    },
    {
      Id: 975,
      Name: 'ASIAN JOURNAL OF EXPERIMENTAL BIOLOGICAL SCIENCES',
    },
    {
      Id: 976,
      Name: 'ATLAS SCIENTIFIC PUBLISHING',
    },
    {
      Id: 977,
      Name: 'SOCIEDAD LATINOAMERICANA DE MICROSCOPÍA ELECTRÓNICA',
    },
    {
      Id: 978,
      Name: 'SOCIETY OF BIOLOGY OF CHILE',
    },
    {
      Id: 979,
      Name: 'BIOLOGY AND MEDICINE',
    },
    {
      Id: 980,
      Name: 'THE CENTRE FOR BIOSCIENCE',
    },
    {
      Id: 981,
      Name: 'INSTITUTE OF BIOCHEMISTRY AND CELL BIOLOGY',
    },
    {
      Id: 982,
      Name: 'SRI LANKA JOURNALS ONLINE',
    },
    {
      Id: 983,
      Name: 'BANGLADESH JOURNALS ONLINE',
    },
    {
      Id: 984,
      Name: 'EGYPTIAN BRITISH BIOLOGICAL SOCIETY',
    },
    {
      Id: 985,
      Name: 'EJARR PUBLISHING.',
    },
    {
      Id: 986,
      Name: 'CANADIAN CENTER OF SCIENCE AND EDUCATION',
    },
    {
      Id: 987,
      Name: 'INTERNATIONAL JOURNAL OF BIOSCIENCES AND TECHNOLOGY',
    },
    {
      Id: 988,
      Name: 'IRANIAN JOURNAL OF APPLIED ANIMAL SCIENCE',
    },
    {
      Id: 989,
      Name: 'TMKARPINSKI',
    },
    {
      Id: 990,
      Name: 'THE ASSOCIATION OF BIOMOLECULAR RESOURCE FACILITIES',
    },
    {
      Id: 991,
      Name: 'HALIÇ ÜNIVERSITESI FEN-EDEBIYAT FAKÜLTESI',
    },
    {
      Id: 992,
      Name: 'ROYAL SOCIETY PUBLISHING',
    },
    {
      Id: 993,
      Name: 'REGIONAL EURO-ASIAN BIOLOGICAL INVASIONS CENTRE',
    },
    {
      Id: 994,
      Name: 'SOCIEDAD DE BIOLOGÍA DE CHILE',
    },
    {
      Id: 995,
      Name: 'NATIONAL UNIVERSITY OF SAN MARCOS',
    },
    {
      Id: 996,
      Name: 'RNA PUBLICATION',
    },
    {
      Id: 997,
      Name: 'THE SCIENTIFIC AND TECHNOLOGICAL RESEARCH COUNCIL OF TURKEY',
    },
    {
      Id: 998,
      Name: 'SAMANTHI PUBLICATIONS PVT. LTD.',
    },
    {
      Id: 999,
      Name: 'AMERICAN INSTITUTE OF PHYSICS',
    },
    {
      Id: 1000,
      Name: 'RUA PROF. ALGACYR MUNHOZ MADER',
    },
    {
      Id: 1001,
      Name: 'MM UNIVERSITY MULLANA',
    },
    {
      Id: 1002,
      Name: 'PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO',
    },
    {
      Id: 1003,
      Name: 'INSTITUTE OF INTEGRATIVE OMICS AND APPLIED BIOTECHNOLOGY',
    },
    {
      Id: 1004,
      Name: 'INTERNATIONAL JOURNAL OF LIFE SCIENCES BIOTECHNOLOGY AND PHARMA RESEARCH',
    },
    {
      Id: 1005,
      Name: 'SEVAS PUBLISHING',
    },
    {
      Id: 1006,
      Name: 'JOURNAL OF BIOTECH RESEARCH',
    },
    {
      Id: 1007,
      Name: 'LIBRARY PUBLISHING MEDIA',
    },
    {
      Id: 1008,
      Name: 'RESEARCH IN BIOTECHNOLOGY',
    },
    {
      Id: 1009,
      Name: 'SEIOMM',
    },
    {
      Id: 1010,
      Name: 'KOREAN SOCEITY FOR THORACIC AND CARDIOVASCULAR SURGERY',
    },
    {
      Id: 1011,
      Name: 'MASOUMEH SADEGHI',
    },
    {
      Id: 1012,
      Name: 'VIA MEDICA LTD',
    },
    {
      Id: 1013,
      Name: 'MIKHAIL RUDENKO, PROF.',
    },
    {
      Id: 1014,
      Name: 'KOREAN SOCIETY OF JOURNAL OF CARDIOVASCULAR ULTRASOUND OFFICE',
    },
    {
      Id: 1015,
      Name: 'JACC, JACC HEART FAILURE',
    },
    {
      Id: 1016,
      Name: 'SCHATTAUER PUBLISHERS',
    },
    {
      Id: 1017,
      Name: 'ASSOCIAÇÃO BRASILEIRA DE ENGENHARIA QUÍMICA',
    },
    {
      Id: 1018,
      Name: 'DEPARTMENT OF CHEMICAL ENGINEERING',
    },
    {
      Id: 1019,
      Name: 'WORLD ACADEMY OF SCIENCE, ENGINEERING AND TECHNOLOGY',
    },
    {
      Id: 1020,
      Name: 'ZORAN ZDRAVKOVSKI',
    },
    {
      Id: 1021,
      Name: 'SCIENTIFIC PUBLICATION',
    },
    {
      Id: 1022,
      Name: 'CANADIAN POPULATION SOCIETY',
    },
    {
      Id: 1023,
      Name: 'DEMOGRAPHIC RESEARCH',
    },
    {
      Id: 1024,
      Name: 'THE AMERICAN POPULATION CENTER',
    },
    {
      Id: 1025,
      Name: 'REVISTA BRASILEIRA DE ESTUDOS DE POPULAÇÃO',
    },
    {
      Id: 1026,
      Name: 'ACTA DERMATOVENEROLOGICA ALPINA PANNONICA ET ADRIATICA',
    },
    {
      Id: 1027,
      Name: 'ACEEE',
    },
    {
      Id: 1028,
      Name: 'AMAE',
    },
    {
      Id: 1029,
      Name: 'ACEE',
    },
    {
      Id: 1030,
      Name: 'VOTRIX',
    },
    {
      Id: 1031,
      Name: 'DEPARTMENT OF TELECOMMUNICATIONS',
    },
    {
      Id: 1032,
      Name: 'WORLD SCIENCE PUBLISHER',
    },
    {
      Id: 1033,
      Name: 'URSI NATIONAL COMMITTEE IN THE FEDERAL REPUBLIC OF GERMANY EV',
    },
    {
      Id: 1034,
      Name: 'GALATI UNIVERSITY PRESS',
    },
    {
      Id: 1035,
      Name: 'VERSITA LTD',
    },
    {
      Id: 1036,
      Name: 'HAMBURG',
    },
    {
      Id: 1037,
      Name: 'PRIMEDIA BUSINESS MAGAZINES & MEDIA INC.',
    },
    {
      Id: 1038,
      Name: 'EMERALD',
    },
    {
      Id: 1039,
      Name: 'SLACK',
    },
    {
      Id: 1040,
      Name: 'ACADEMY OF MANAGEMENT',
    },
    {
      Id: 1041,
      Name: 'UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE',
    },
    {
      Id: 1042,
      Name: 'UNIVERSIDADE FEDERAL DE SANTA CATARINA',
    },
    {
      Id: 1043,
      Name: 'UNIVERSIDADE DE BRASÍLIA',
    },
    {
      Id: 1044,
      Name: 'UNIVERSIDADE FEDERAL DO ESPÍRITO SANTO',
    },
    {
      Id: 1045,
      Name: 'CANON COMMUNICATIONS LLC',
    },
    {
      Id: 1046,
      Name: 'DECEMBER COMMUNICATIONS, INC.',
    },
    {
      Id: 1047,
      Name: 'GEORGIAN INTERNET ACADEMY',
    },
    {
      Id: 1048,
      Name: 'INSTITUTE OF COMMUNICATIONS AND INFORMATION TECHNOLOGY',
    },
    {
      Id: 1049,
      Name: 'CAMBRIDGE UNIVERSITY PRESS',
    },
    {
      Id: 1050,
      Name: 'DUPONT DE NEMOURS INTERNATIONAL SA',
    },
    {
      Id: 1051,
      Name: 'FORSCHUNGSGEMEINSCHAFT FUNK',
    },
    {
      Id: 1052,
      Name: 'INSTITUTE OF ELECTRON TECHNOLOGY',
    },
    {
      Id: 1053,
      Name: 'FLOMERICS LIMITED',
    },
    {
      Id: 1054,
      Name: 'ELEKTROTEHNICKI FAKULTET',
    },
    {
      Id: 1055,
      Name: 'FACULTY OF ELECTRICAL ENGINEERING',
    },
    {
      Id: 1056,
      Name: 'FURUKAWA ELECTRIC COMPANY',
    },
    {
      Id: 1057,
      Name: 'FUJITSU',
    },
    {
      Id: 1058,
      Name: 'BLAKE HANNAFORD',
    },
    {
      Id: 1059,
      Name: 'BEAM-VERLAG',
    },
    {
      Id: 1060,
      Name: 'HEINZ-NIXDORF-INSTITUT',
    },
    {
      Id: 1061,
      Name: 'BERLIN : FACHGEBIET',
    },
    {
      Id: 1062,
      Name: 'INSTITUTE OF POWER TRANSMISSION AND  HIGH VOLTAGE TECHNOLOGY',
    },
    {
      Id: 1063,
      Name: 'UNIVERSITY OF STUTTGART',
    },
    {
      Id: 1064,
      Name: 'EUROPEAN AVIATION SAFETY AGENCY EASA',
    },
    {
      Id: 1065,
      Name: 'INDUSTRIAL RESEARCH INST. FOR AUTOMATION AND MEASUREMENTS',
    },
    {
      Id: 1066,
      Name: 'ENGINEERING AND SCIENTIFIC RESEARCH GROUPS',
    },
    {
      Id: 1067,
      Name: 'INTERNATIONAL ASSOCIATION OF PHYSICAL CHEMISTS',
    },
    {
      Id: 1068,
      Name: 'PENNWELL',
    },
    {
      Id: 1069,
      Name: 'FACULTY OF MECHANICAL ENGINEERING, UNIVERSITY OF ŽILINA',
    },
    {
      Id: 1070,
      Name: 'PHYSIKALISCH-TECHNISCHE BUNDESANSTALT',
    },
    {
      Id: 1071,
      Name: 'MECHATRONIK-CLUSTER',
    },
    {
      Id: 1072,
      Name: 'TECHNICAL UNIVERSITY OF LODZ',
    },
    {
      Id: 1073,
      Name: 'BAYERISCHES KOMPETENZNETZWERK FÜR MECHATRONIK',
    },
    {
      Id: 1074,
      Name: 'UKRMETALLURGINFORM"STA" LTD.',
    },
    {
      Id: 1075,
      Name: 'WARSAW',
    },
    {
      Id: 1076,
      Name: 'MICROMAGAZINE.COM, C 2007 TOM CHEYNEY',
    },
    {
      Id: 1077,
      Name: 'MAXIM INTEGRATED PRODUCTS',
    },
    {
      Id: 1078,
      Name: 'HORIZON HOUSE PUBLICATIONS',
    },
    {
      Id: 1079,
      Name: 'SOCIETY FOR MICROWAVE TECHNIQUE, TECHNOLOGIES AND SYSTEMS',
    },
    {
      Id: 1080,
      Name: 'PENTON MEDIA',
    },
    {
      Id: 1081,
      Name: 'MITSUBISHI ELECTRIC CORPORATION',
    },
    {
      Id: 1082,
      Name: 'MM PUBLISHING',
    },
    {
      Id: 1083,
      Name: 'NEC CORPORATION',
    },
    {
      Id: 1084,
      Name: 'OKI ELECTRIC INDUSTRY',
    },
    {
      Id: 1085,
      Name: 'INFOMESR',
    },
    {
      Id: 1086,
      Name: 'INOE',
    },
    {
      Id: 1087,
      Name: 'ROYAL PHILIPS ELECTRONICS',
    },
    {
      Id: 1088,
      Name: 'PERIODICA POLYTECHNICA, BUDAPEST UNIVERSITY OF TECHNOLOGY AND ECONOMICS',
    },
    {
      Id: 1089,
      Name: 'PHOTONICS SOCIETY OF POLAND ; INTERNATIONAL SOCIETY FOR OPTICAL ENGINEERING',
    },
    {
      Id: 1090,
      Name: 'DFA MEDIA LTD',
    },
    {
      Id: 1091,
      Name: 'PENNNET PUBLISHING',
    },
    {
      Id: 1092,
      Name: 'EMW PUBLISHING',
    },
    {
      Id: 1093,
      Name: 'PUBLISH-INDUSTRY VERLAG',
    },
    {
      Id: 1094,
      Name: 'HÜTHIG',
    },
    {
      Id: 1095,
      Name: 'AMERICAN ASSOCIATION OF PETROLEUM GEOLOGISTS',
    },
    {
      Id: 1096,
      Name: 'CONSEJO SUPERIOR DE INVESTIGACIONES CIENTÍFICAS',
    },
    {
      Id: 1097,
      Name: 'NORTH UNIVERSITY OF BAIA MARE PUBLISHING HOUSE',
    },
    {
      Id: 1098,
      Name: 'INSTITUTO COLOMBIANO DEL PETRÓLEO',
    },
    {
      Id: 1099,
      Name: 'INSTITUTE OF AGRICULTURAL AND FOOD INFORMATION',
    },
    {
      Id: 1100,
      Name: 'NISCAIR',
    },
    {
      Id: 1101,
      Name: 'ELECTROCHEMICAL SCIENCE GROUP',
    },
    {
      Id: 1102,
      Name: 'ISEKI_FOOD ASSOCIATION',
    },
    {
      Id: 1103,
      Name: 'DEPARTMENT OF POWER ENGINEERING, INSTITUTE OF CHEMICAL TECHNOLOGY',
    },
    {
      Id: 1104,
      Name: 'INTERNATIONAL PHARMACEUTICAL EXCIPIENTS COUNCIL',
    },
    {
      Id: 1105,
      Name: 'INSTITUT FRANÇAIS DU PÉTROLE',
    },
    {
      Id: 1106,
      Name: 'UFA STATE PETROLEUM TECHNOLOGICAL UNIVERSITY',
    },
    {
      Id: 1107,
      Name: 'SLOVNAFT VÚRUP',
    },
    {
      Id: 1108,
      Name: 'SOCIETY OF PLASTICS AND RUBBER ENGINEERS',
    },
    {
      Id: 1109,
      Name: 'ASSOCIAÇÃO BRASILEIRA DE POLÍMEROS',
    },
    {
      Id: 1110,
      Name: 'SOCIEDADE PORTUGUESA DE ELECTROQUÍMICA',
    },
    {
      Id: 1111,
      Name: 'ASSOCIATION HACCP CONSULTING',
    },
    {
      Id: 1112,
      Name: 'UNIVERSITY OF NOVI SAD',
    },
    {
      Id: 1113,
      Name: 'UNIVERSIDADE TECNOLÓGIA FEDERAL DO PARANÁ',
    },
    {
      Id: 1114,
      Name: 'UNIVERSITY OF ZAGREB',
    },
    {
      Id: 1115,
      Name: 'ACADEMY & INDUSTRY RESEARCH COLLABORATION CENTER',
    },
    {
      Id: 1116,
      Name: 'STEFAN CEL MARE UNIVERSITY OF SUCEAVA',
    },
    {
      Id: 1117,
      Name: 'BATON ROUGE, LA: SOUTHERN UNIVERSITY, AICTRG',
    },
    {
      Id: 1118,
      Name: 'AUSTRALIAN ASSOCIATION FOR INFORMATION SYSTEMS',
    },
    {
      Id: 1119,
      Name: 'AUSTRALASIAN ASSOCIATION FOR INFORMATION SYSTEMS AND AUSTRALIAN COMPUTER SOCIETY',
    },
    {
      Id: 1120,
      Name: 'VLADIMIR STATE UNIVERSITY',
    },
    {
      Id: 1121,
      Name: 'UNIVERSITATEA DUNAREA DE JOS',
    },
    {
      Id: 1122,
      Name: 'DUNAREA DE JOS UNIVERSITY OF GALATI',
    },
    {
      Id: 1123,
      Name: 'MIRTON PUBLISHING HOUSE, TIMISOARA',
    },
    {
      Id: 1124,
      Name: 'ARPN PUBLISHERS',
    },
    {
      Id: 1125,
      Name: "CONSORZIO INTERUNIVERSITARIO LOMBARDO PER L'ELABORAZIONE AUTOMATICA",
    },
    {
      Id: 1126,
      Name: 'TECHNICAL UNIVERSITY GHEORGHE ASACHI OF IASI',
    },
    {
      Id: 1127,
      Name: "BHARATI VIDYAPEETH'S INSTITUTE OF COMPUTER APPLICATIONS AND MANAGEMENT",
    },
    {
      Id: 1128,
      Name: 'THE CANADIAN NETWORK FOR INNOVATION IN EDUCATION',
    },
    {
      Id: 1129,
      Name: 'THE ARAB COMPUTER SOCIETY',
    },
    {
      Id: 1130,
      Name: 'UNSRI AND IAES INDONESIA SECTION',
    },
    {
      Id: 1131,
      Name: 'AGH UNIVERSITY OF SCIENCE AND TECHNOLOGY PRESS',
    },
    {
      Id: 1132,
      Name: 'DAFFODIL INTERNATIONAL UNIVERSITY',
    },
    {
      Id: 1133,
      Name: 'NATIONAL SCIENCE & TECHNOLOGY MUSEUM',
    },
    {
      Id: 1134,
      Name: 'DEPARTMENT OF INDUSTRIAL AND PRODUCTION ENGINEERING',
    },
    {
      Id: 1135,
      Name: 'DEPARTMENT OF NAVAL ARCHITECTURE AND MARINE ENGINEERING',
    },
    {
      Id: 1136,
      Name: 'COMSIS CONSORTIUM',
    },
    {
      Id: 1137,
      Name: 'INNOVATIVE RESEARCH FOUNDATION',
    },
    {
      Id: 1138,
      Name: 'BULGARIAN ACADEMY OF SCIENCE',
    },
    {
      Id: 1139,
      Name: 'BUCHAREST ACADEMY OF ECONOMIC STUDIES PUBLISHING HOUSE',
    },
    {
      Id: 1140,
      Name: 'DISCRETE MATHEMATICS & THEORETICAL COMPUTER SCIENCE',
    },
    {
      Id: 1141,
      Name: 'ASIAN JOURNAL OF PHARMACEUTICAL AND CLINICAL RESEARCH',
    },
    {
      Id: 1142,
      Name: 'INFOREC ASSOCIATION',
    },
    {
      Id: 1143,
      Name: 'ELECTRONIC JOURNAL OF ORGANIZATIONAL VIRTUALNESS',
    },
    {
      Id: 1144,
      Name: 'COMPUTER VISION CENTER PRESS',
    },
    {
      Id: 1145,
      Name: 'EUROPEAN ASSOCIATION OF SOFTWARE SCIENCE AND TECHNOLOGY, EASST',
    },
    {
      Id: 1146,
      Name: 'ACADEMIC CONFERENCES LIMITED',
    },
    {
      Id: 1147,
      Name: 'CITY UNIVERSITY OF HONG KONG',
    },
    {
      Id: 1148,
      Name: 'OPEN PUBLISHING ASSOCIATION',
    },
    {
      Id: 1149,
      Name: 'SINGAPORE-MIT GAMBIT GAME LAB',
    },
    {
      Id: 1150,
      Name: 'INTERNATIONAL ASSOCIATION OF ENGINEERS',
    },
    {
      Id: 1151,
      Name: 'GAME STUDIES',
    },
    {
      Id: 1152,
      Name: 'HELLENIC OPEN UNIVERSITY',
    },
    {
      Id: 1153,
      Name: 'AGORA CENTER, UNIVERSITY OF JYVÄSKYLÄ',
    },
    {
      Id: 1154,
      Name: 'IAENG - INTERNATIONAL ASSOCIATION OF ENGINEERS',
    },
    {
      Id: 1155,
      Name: 'INSTITUTE OF ADVANCED ENGINEERING AND SCIENCE, IAES',
    },
    {
      Id: 1156,
      Name: 'FACHHOCHSCHULE NORDWESTSCHWEIZ FHNW, INSTITUT FÜR MOBILE UND',
    },
    {
      Id: 1157,
      Name: 'MIT PUBLICATIONS',
    },
    {
      Id: 1158,
      Name: 'FEDERAL UNIVERSITY OF LAVRAS',
    },
    {
      Id: 1159,
      Name: 'THE SLOVENE SOCIETY INFORMATIKA, LJUBLJANA',
    },
    {
      Id: 1160,
      Name: 'VILNIUS UNIVERSITY INSTITUTE OF MATHEMATICS AND INFORMATICS',
    },
    {
      Id: 1161,
      Name: 'INTERNATIONAL INSTITUTE FOR SCIENCE, TECHNOLOGY AND EDUCATION',
    },
    {
      Id: 1162,
      Name: 'INFORMATION ENGINEERING RESEARCH INSTITUTE',
    },
    {
      Id: 1163,
      Name: 'UNIVERSITY OF SOUTH TOULON',
    },
    {
      Id: 1164,
      Name: 'UNIVERSITY OF SOUTHERN CALIFORNIA',
    },
    {
      Id: 1165,
      Name: 'UT PRESS',
    },
    {
      Id: 1166,
      Name: 'NATIONAL ASSOCIATION OF BUILT ENVIRONMENT TECHNOLOGY',
    },
    {
      Id: 1167,
      Name: 'UTSEPRESS',
    },
    {
      Id: 1168,
      Name: 'BUILT & HUMAN ENVIRONMENT REIVEW',
    },
    {
      Id: 1169,
      Name: 'ISSR',
    },
    {
      Id: 1170,
      Name: 'INTERNATIONAL COUNCIL FOR RESEARCH AND INNOVATION IN BUILDING AND CONSTRUCTION, CIB',
    },
    {
      Id: 1171,
      Name: 'EJSE INTERNATIONAL',
    },
    {
      Id: 1172,
      Name: 'TECHNISCHE UNIVERSITEIT DELFT',
    },
    {
      Id: 1173,
      Name: 'INTEGRATED PUBLISHING ASSOCIATION',
    },
    {
      Id: 1174,
      Name: 'PENERBIT UTHM',
    },
    {
      Id: 1175,
      Name: 'LEAN CONSTRUCTION INSTITUTE',
    },
    {
      Id: 1176,
      Name: 'GHENT UNIVERSITY',
    },
    {
      Id: 1177,
      Name: 'FIRENZE UNIVERSITY PRESS',
    },
    {
      Id: 1178,
      Name: 'TECHNICAL UNIVERSITY OF OSTRAVA',
    },
    {
      Id: 1179,
      Name: 'SCIENTIFIC AND TECHNICAL RESEARCH COUNCIL OF TURKEY',
    },
    {
      Id: 1180,
      Name: 'KOREAN INSTITUTE OF ELECTRICAL AND ELECTRONIC MATERIAL ENGINEERS',
    },
    {
      Id: 1181,
      Name: 'AHMAD DAHLAN UNIVERSITY',
    },
    {
      Id: 1182,
      Name: 'FACULTY OF TECHNICAL SCIENCES CACAK',
    },
    {
      Id: 1183,
      Name: 'EDITURA POLITEHNICA',
    },
    {
      Id: 1184,
      Name: 'INSTITUTO SUPERIOR POLITÉCNICO JOSÉ ANTONIO ECHEVERRÍA',
    },
    {
      Id: 1185,
      Name: 'FACULTY OF ELECTRICAL ENGINEERING AND COMMUNICATION',
    },
    {
      Id: 1186,
      Name: 'ACADEMY OF SCIENCES OF MOLDOVA',
    },
    {
      Id: 1187,
      Name: 'WARSAW UNIVERSITY OF TECHNOLOGY',
    },
    {
      Id: 1188,
      Name: 'BRAZILIAN MICROWAVE AND OPTOELECTRONICS SOCIETY AND BRAZILIAN SOCIETY OF ELECTROMAGNETISM',
    },
    {
      Id: 1189,
      Name: 'UNIVERSITY OF ELECTRONIC SCIENCE AND TECHNOLOGY',
    },
    {
      Id: 1190,
      Name: 'HYPERSCIENCES PUBLISHER',
    },
    {
      Id: 1191,
      Name: 'EDITURA UNIVERSITATII DIN ORADEA',
    },
    {
      Id: 1192,
      Name: 'WESTING PUBLISHING CO. FREMONT',
    },
    {
      Id: 1193,
      Name: 'UNIVERSITI TENAGA NASIONAL',
    },
    {
      Id: 1194,
      Name: 'SOLARI CO. HONG KONG',
    },
    {
      Id: 1195,
      Name: 'ELECTRONICS AND TELECOMMUNICATIONS RESEARCH INSTITUTE',
    },
    {
      Id: 1196,
      Name: 'UNIVERSITY TEKNOLOGI MALAYSIA',
    },
    {
      Id: 1197,
      Name: 'UNIVERSITAS AHMAD DAHLAN',
    },
    {
      Id: 1198,
      Name: 'ASOCIACIÓN TOXICOLÓGICA ARGENTINA',
    },
    {
      Id: 1199,
      Name: 'SOCIEDADE BRASILEIRA DE PLANEJAMENTO ENERGÉTICO',
    },
    {
      Id: 1200,
      Name: 'UNIPINHAL',
    },
    {
      Id: 1201,
      Name: 'BRAZILIAN ASSOCIATION OF SANITARY AND ENVIRONMENTAL ENGINEERING',
    },
    {
      Id: 1202,
      Name: 'DIPONEGORO UNIVERSITY',
    },
    {
      Id: 1203,
      Name: 'UNIVERSITY OF PARAIBA',
    },
    {
      Id: 1204,
      Name: 'UNIVERSIDAD DE CARABOBO',
    },
    {
      Id: 1205,
      Name: 'SEPULUH NOPEMBER INSTITUTE OF TECHNOLOGY',
    },
    {
      Id: 1206,
      Name: 'UNIVERSITY OF MOHAMMED PREMIER',
    },
    {
      Id: 1207,
      Name: 'JAPAN SOCIETY ON WATER ENVIRONMENT',
    },
    {
      Id: 1208,
      Name: 'ZAVOD ZA ISTRAŽIVANJE I RAZVOJ SIGURNOSTI D.D.',
    },
    {
      Id: 1209,
      Name: 'EFTIMIE MURGU UNIVERSITY',
    },
    {
      Id: 1210,
      Name: 'EXECUTIVE BUSINESS SCHOOL',
    },
    {
      Id: 1211,
      Name: 'UNIVERSIDAD CENTRAL DE VENEZUELA',
    },
    {
      Id: 1212,
      Name: 'GHEORGHE ASACHI TECHNICAL UNIVERSITY OF JASSY',
    },
    {
      Id: 1213,
      Name: 'ASSOCIAÇÃO BRASILEIRA DE CERÂMICA',
    },
    {
      Id: 1214,
      Name: 'NATIONAL INSTITUTE OF OPTOELECTRONICS AND NATIONAL INSTITUTE OF MATERIAL PHYSICS',
    },
    {
      Id: 1215,
      Name: 'UNIVERSITY OF GUILAN',
    },
    {
      Id: 1216,
      Name: 'JOURNAL OF ENTOMOLOGY AND ZOOLOGY STUDIES',
    },
    {
      Id: 1217,
      Name: 'INTERNATIONAL OCSCO WORLD PRESS',
    },
    {
      Id: 1218,
      Name: 'AMSTERDAM UNIVERSITY PRESS',
    },
    {
      Id: 1219,
      Name: 'MORANA RTD D.O.O.',
    },
    {
      Id: 1220,
      Name: 'ELECTRONIC JOURNAL OF GEOTECHNICAL ENGINEERING',
    },
    {
      Id: 1221,
      Name: 'UNIVERSIDADE FEDERAL FLUMINENSE',
    },
    {
      Id: 1222,
      Name: 'MANCHESTER UNIVERSITY PRESS',
    },
    {
      Id: 1223,
      Name: 'PALGRAVE MACMILLAN',
    },
    {
      Id: 1224,
      Name: 'TECHNOLOGIJA',
    },
    {
      Id: 1225,
      Name: 'CHULALONGKORN UNIVERSITY',
    },
    {
      Id: 1226,
      Name: 'ENGINEERING, TECHNOLOGY & APPLIED SCIENCE RESEARCH',
    },
    {
      Id: 1227,
      Name: 'TALLERES DE IMPRESOS OMAR',
    },
    {
      Id: 1228,
      Name: 'BUDAPEST UNIVERSITY OF TECHNOLOGY',
    },
    {
      Id: 1229,
      Name: 'GRUPPO ITALIANO FRATTURA',
    },
    {
      Id: 1230,
      Name: 'UNIVERSITY OF MICHIGAN PRESS',
    },
    {
      Id: 1231,
      Name: 'UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO',
    },
    {
      Id: 1232,
      Name: 'PONTIFICIA UNIVERSIDAD JAVERIANA',
    },
    {
      Id: 1233,
      Name: 'UNIVERSIDAD DE SAN BUENAVENTURA',
    },
    {
      Id: 1234,
      Name: 'PENN STATE UNIVERSITY',
    },
    {
      Id: 1235,
      Name: 'RG EDUCATION SOCIETY',
    },
    {
      Id: 1236,
      Name: 'QUEEN’S UNIVERSITY',
    },
    {
      Id: 1237,
      Name: 'YORK UNIVERSITY',
    },
    {
      Id: 1238,
      Name: 'MATERIALS AND ENERGY RESEARCH CENTER',
    },
    {
      Id: 1239,
      Name: 'SCIENCE PUBLISHING CORPORATION',
    },
    {
      Id: 1240,
      Name: 'ENGG JOURNALS PUBLICATIONS',
    },
    {
      Id: 1241,
      Name: 'KASSEL UNIVERSITY PRESS GMBH',
    },
    {
      Id: 1242,
      Name: 'IJER',
    },
    {
      Id: 1243,
      Name: 'INTERNATIONAL JOURNAL OF ENGINEERING RESEARCH AND APPLICATIONS',
    },
    {
      Id: 1244,
      Name: 'SEVENTH SENSE RESEARCH GROUP',
    },
    {
      Id: 1245,
      Name: 'THE OPEN UNIVERSITY',
    },
    {
      Id: 1246,
      Name: 'CSC JOURNALS',
    },
    {
      Id: 1247,
      Name: 'INTERNATIONAL JOURNAL OF INNOVATIVE TECHNOLOGY AND CREATIVE ENGINEERING',
    },
    {
      Id: 1248,
      Name: 'THE PROGNOSTICS AND HEALTH MANAGEMENT SOCIETY',
    },
    {
      Id: 1249,
      Name: 'ACADEMIC RESEARCH PUBLISHING AGENCY',
    },
    {
      Id: 1250,
      Name: 'IJSRET',
    },
    {
      Id: 1251,
      Name: 'IOP PUBLISHING',
    },
    {
      Id: 1252,
      Name: 'INSTITUT TEKNOLOGI BANDUNG',
    },
    {
      Id: 1253,
      Name: 'SORGING',
    },
    {
      Id: 1254,
      Name: 'WORLD ACADEMY OF MATERIALS AND MANUFACTURING ENGINEERING',
    },
    {
      Id: 1255,
      Name: 'SCHOLARLINK RESOURCE CENTRE',
    },
    {
      Id: 1256,
      Name: 'KAVALA INSTITUTE OF TECHNOLOGY',
    },
    {
      Id: 1257,
      Name: 'PURDUE UNIVERSITY',
    },
    {
      Id: 1258,
      Name: 'OMNIASCIENCE',
    },
    {
      Id: 1259,
      Name: 'TRIBHUVAN UNIVERSITY TEACHERS ASSOCIATION',
    },
    {
      Id: 1260,
      Name: 'AGRONOMY SOCIETY OF NEPAL',
    },
    {
      Id: 1261,
      Name: 'JOINT SECRETARY GENDER EQUITY AND ENVIRONMENT DIVISION',
    },
    {
      Id: 1262,
      Name: 'SOCIETY OF AGRICULTURAL SCIENTISTS NEPAL',
    },
    {
      Id: 1263,
      Name: "NEPAL FORESTERS' ASSOCIATION",
    },
    {
      Id: 1264,
      Name: 'KATHMANDU UNIVERSITY',
    },
    {
      Id: 1265,
      Name: 'NEPAL WATER CONSERVATION FOUNDATION',
    },
    {
      Id: 1266,
      Name: 'SOUTH AFRICAN INSTITUTION OF CIVIL ENGINEERING',
    },
    {
      Id: 1267,
      Name: 'ST-PETERSBURG STATE POLYTECHNICAL UNIVERSITY',
    },
    {
      Id: 1268,
      Name: 'REPUBLICAN SCIENTIFIC-PRODUCTION UNITARY ENTERPRISE "DIATEH"',
    },
    {
      Id: 1269,
      Name: 'UNIVERSIDAD CATÓLICA DE LA SANTÍSIMA CONCEPCIÓN',
    },
    {
      Id: 1270,
      Name: 'INSTITUTOS SUPERIORES DE ENSINO DO CENSA',
    },
    {
      Id: 1271,
      Name: 'SOCIEDADE BRASILEIRA DE PESQUISA OPERACIONAL',
    },
    {
      Id: 1272,
      Name: 'ESCOLA DE MINAS',
    },
    {
      Id: 1273,
      Name: 'INSTITUTE OF PROBLEMS OF MECHANICAL ENGINEERING',
    },
    {
      Id: 1274,
      Name: 'BRAZILIAN ASSOCITATION OF ENGINEERING EDUCATION',
    },
    {
      Id: 1275,
      Name: 'ESCUELA DE INGENIERIA DE ANTIOQUIA',
    },
    {
      Id: 1276,
      Name: 'UNIVERSIDAD PEDAGÓGICA Y TECNOLÓGICA DE COLOMBIA',
    },
    {
      Id: 1277,
      Name: 'CES UNIVERSITY & ESCUELA DE INGENIERÍA DE ANTIOQUIA',
    },
    {
      Id: 1278,
      Name: 'PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE',
    },
    {
      Id: 1279,
      Name: 'UNIVERSIDAD DE MEDELLÍN',
    },
    {
      Id: 1280,
      Name: 'UNIVERSITY OF PUERTO RICO AT MAYAGUEZ',
    },
    {
      Id: 1281,
      Name: 'FACULTAD DE INGENIERÍA, UNIVERSIDAD DEL ZULIA',
    },
    {
      Id: 1282,
      Name: 'UNIVERSIDAD CATÓLICA ARGENTINA',
    },
    {
      Id: 1283,
      Name: 'NEW MEXICO STATE UNIVERSITY',
    },
    {
      Id: 1284,
      Name: 'DISTRITAL FRANCISCO JOSE DE CALDAS UNIVERSITY',
    },
    {
      Id: 1285,
      Name: 'ULUDAG UNIVERSITY',
    },
    {
      Id: 1286,
      Name: 'UFA STATE AVIATION TECHNICAL UNIVERSITY',
    },
    {
      Id: 1287,
      Name: 'COPERNICUS PUBLICATIONS ON BEHALF OF THE TU DELFT',
    },
    {
      Id: 1288,
      Name: 'UNIVERSIDADE FEDERAL DE SÃO CARLOS',
    },
    {
      Id: 1289,
      Name: 'UNIVERSIDAD DE TARAPACÁ',
    },
    {
      Id: 1290,
      Name: 'UNIVERSIDAD DEL BIOBIO',
    },
    {
      Id: 1291,
      Name: 'IRAN UNIVERSITY OF SCIENCE & TECHNOLOGY',
    },
    {
      Id: 1292,
      Name: 'GROWING SCIENCE',
    },
    {
      Id: 1293,
      Name: 'ASSOCIATION OF ENGINEERING, PROJECT, AND PRODUCTION MANAGEMENT',
    },
    {
      Id: 1294,
      Name: 'PETRA CHRISTIAN UNIVERSITY',
    },
    {
      Id: 1295,
      Name: 'SOUTH AFRICAN JOURNAL OF INDUSTRIAL ENGINEERING',
    },
    {
      Id: 1296,
      Name: 'UNIVERSIDAD POLITÉCNICA DE VALENCIA',
    },
    {
      Id: 1297,
      Name: 'BRAZILIAN ASSOCIATION OF PRODUCTION ENGINEERING',
    },
    {
      Id: 1298,
      Name: 'INSTITUTE OF CHEMICAL FIBRES',
    },
    {
      Id: 1299,
      Name: 'FEDERAL UNIVERSITY OF ITAJUBÁ',
    },
    {
      Id: 1300,
      Name: 'ASSOCIAÇÃO BRASILEIRA DE ENGENHARIA DE PRODUÇÃO',
    },
    {
      Id: 1301,
      Name: 'AACHEN UNIVERSITY OF APPLIED SCIENCES',
    },
    {
      Id: 1302,
      Name: 'APPLIED SCIENCE INNOVATIONS PRIVATE LIMITED',
    },
    {
      Id: 1303,
      Name: 'REGIONAL INFORMATION CENTER FOR SCIENCE AND TECHNOLOGY',
    },
    {
      Id: 1304,
      Name: 'CZECH TECHNICAL UNIVERSITY, PRAGUE',
    },
    {
      Id: 1305,
      Name: 'GLOBAL DIGITAL CENTRAL',
    },
    {
      Id: 1306,
      Name: 'CROATIAN SOCIETY FOR FUELS AND LUBRICANTS',
    },
    {
      Id: 1307,
      Name: 'UNIVERSITI MALAYSIA PAHANG',
    },
    {
      Id: 1308,
      Name: 'INTERNATIONAL JOURNAL OF RENEWABLE ENERGY RESEARCH',
    },
    {
      Id: 1309,
      Name: 'HASHEMITE UNIVERSITY',
    },
    {
      Id: 1310,
      Name: 'SHAHID RAJAEE TEACHER TRAINING UNIVERSITY',
    },
    {
      Id: 1311,
      Name: 'PUBLISHING HOUSE OF WROCLAW BOARD OF SCIENTIFIC TECHNICAL SOCIETIES FEDERATION NOT',
    },
    {
      Id: 1312,
      Name: 'UNIVERSITI TEKNIKAL MALAYSIA MELAKA',
    },
    {
      Id: 1313,
      Name: 'THE BRAZILIAN SOCIETY OF MECHANICAL SCIENCES',
    },
    {
      Id: 1314,
      Name: 'THE BRAZILIAN SOCIETY OF MECHANICAL SCIENCES AND ENGINEERING',
    },
    {
      Id: 1315,
      Name: 'FACULTY OF TECHNICAL SCIENCES, NOVI SAD',
    },
    {
      Id: 1316,
      Name: 'SOUTH AFRICAN INSTITUTION OF MECHANICAL ENGINEERING',
    },
    {
      Id: 1317,
      Name: 'MAGDEBURGER VEREIN FÜR TECHNISCHE MECHANIK E.V.',
    },
    {
      Id: 1318,
      Name: 'SERBIAN SOCIETY OF MECHANICS, BELGRADE',
    },
    {
      Id: 1319,
      Name: 'VINCA INSTITUTE OF NUCLEAR SCIENCES',
    },
    {
      Id: 1320,
      Name: 'UNIVERSITY OF KRAGUJEVAC',
    },
    {
      Id: 1321,
      Name: 'DEFENCE SCIENTIFIC INFORMATION & DOCUMENTATION CENTRE',
    },
    {
      Id: 1322,
      Name: 'REGIONAL DEPARTMENT OF DEFENSE RESOURCES MANAGEMENT STUDIES',
    },
    {
      Id: 1323,
      Name: 'UNIVERSITY OF CALGARY',
    },
    {
      Id: 1324,
      Name: 'SERVICE HISTORY OF DEFENSE',
    },
    {
      Id: 1325,
      Name: 'THE STATE UNIVERSITY OF MARINGÁ',
    },
    {
      Id: 1326,
      Name: 'PRAGUE DEVELOPMENT CENTER',
    },
    {
      Id: 1327,
      Name: 'SWINBURNE UNIVERSITY OF TECHNOLOGY',
    },
    {
      Id: 1328,
      Name: 'BEILSTEIN-INSTITUT',
    },
    {
      Id: 1329,
      Name: 'BONFRING',
    },
    {
      Id: 1330,
      Name: 'SOCIETY FOR INFORMATION TECHNOLOGY AND TEACHER EDUCATION',
    },
    {
      Id: 1331,
      Name: 'THE DESIGN AND TECHNOLOGY ASSOCIATION',
    },
    {
      Id: 1332,
      Name: 'THE SURFACE SCIENCE SOCIETY OF JAPAN',
    },
    {
      Id: 1333,
      Name: 'INTERNATIONAL FORUM OF EDUCATIONAL TECHNOLOGY & SOCIETY',
    },
    {
      Id: 1334,
      Name: 'MOMENT PUBLICATIONS',
    },
    {
      Id: 1335,
      Name: 'VILNIUS GEDIMINAS TECHNICAL UNIVERSITY',
    },
    {
      Id: 1336,
      Name: 'POWER CONTROL OPTIMIZATION',
    },
    {
      Id: 1337,
      Name: 'THE UNIVERSITY OF MELBOURNE',
    },
    {
      Id: 1338,
      Name: 'CENTRO DE INFORMACIÓN TECNOLÓGICA',
    },
    {
      Id: 1339,
      Name: 'UNIVERSIDAD AUTÓNOMA DE NUEVO LEÓN',
    },
    {
      Id: 1340,
      Name: 'UNIQUEIDEAZ PUBLICATIONS',
    },
    {
      Id: 1341,
      Name: 'INTERNATIONAL JOURNAL OF ADVANCED TECHNOLOGY AND ENGINEERING RESEARCH',
    },
    {
      Id: 1342,
      Name: 'IJOAT FOUNDATION',
    },
    {
      Id: 1343,
      Name: 'INTERNATIONAL ASSOCIATION OF ENGINEERING AND TECHNOLOGY',
    },
    {
      Id: 1344,
      Name: 'RADIANCE RESEARCH ACADEMY',
    },
    {
      Id: 1345,
      Name: 'ISLAMIA UNIVERSITY OF BAHAWALPUR',
    },
    {
      Id: 1346,
      Name: 'IJET PUBLICATIONS',
    },
    {
      Id: 1347,
      Name: 'INTERNATIONAL JOURNAL OF PURE AND APPLIED SCIENCES AND TECHNOLOGY',
    },
    {
      Id: 1348,
      Name: 'PIONEER RESEARCH & DEVELOPMENT GROUP',
    },
    {
      Id: 1349,
      Name: 'INTERNATIONAL JOURNAL OF SCIENTIFIC ENGINEERING AND TECHNOLOGY',
    },
    {
      Id: 1350,
      Name: 'SCIENCE & ENGINEERING RESEARCH SUPPORT SOCIETY',
    },
    {
      Id: 1351,
      Name: 'THE UNIVERSITY OF ADELAIDE',
    },
    {
      Id: 1352,
      Name: 'UNIVERSITAS INDONESIA',
    },
    {
      Id: 1353,
      Name: 'TECHNOLOGY AND RESEARCH PUBLICATIONS',
    },
    {
      Id: 1354,
      Name: 'ROCHESTER INSTITUTE OF TECHNOLOGY',
    },
    {
      Id: 1355,
      Name: 'IBEROAMERICAN SCIENCE & TECHNOLOGY EDUCATION CONSORTIUM',
    },
    {
      Id: 1356,
      Name: 'INDA, ASSOCIATION OF THE NONWOVENS FABRICS INDUSTRY',
    },
    {
      Id: 1357,
      Name: 'RESEARCH LABORATORY ON INFORMATION SYSTEMS AND TECHNOLOGY MANAGEMENT',
    },
    {
      Id: 1358,
      Name: 'JAPAN LASER PROCESSING SOCIETY',
    },
    {
      Id: 1359,
      Name: 'THE NATIONAL INSTITUTE OF STANDARDS AND TECHNOLOGY',
    },
    {
      Id: 1360,
      Name: 'INSTITUTE OF STEM EDUCATION AND RESEARCH',
    },
    {
      Id: 1361,
      Name: 'UNIVERSIDAD ALBERTO HURTADO',
    },
    {
      Id: 1362,
      Name: 'ACADEMICDIRECT',
    },
    {
      Id: 1363,
      Name: 'COMPORTER SRL',
    },
    {
      Id: 1364,
      Name: 'MAEJO UNIVERSITY',
    },
    {
      Id: 1365,
      Name: 'OPEN-ACCESS HOUSE OF SCIENCE AND TECHNOLOGY',
    },
    {
      Id: 1366,
      Name: 'OPEN ACCESS HOUSE OF SCIENCE AND TECHNOLOGY',
    },
    {
      Id: 1367,
      Name: 'NORTHWESTERN UNIVERSITY SCHOOL OF LAW',
    },
    {
      Id: 1368,
      Name: 'PSYCHNOLOGY JOURNAL',
    },
    {
      Id: 1369,
      Name: 'SHASTRI EDUCATION TRUST',
    },
    {
      Id: 1370,
      Name: 'SCHOOL OF INDUSTRIAL ENGINEERING OF BARCELONA',
    },
    {
      Id: 1371,
      Name: 'UKRAINIAN NATIONAL TECHNICAL UNIVERSITY "KYIV POLYTECHNIC INSTITUTE"',
    },
    {
      Id: 1372,
      Name: 'FEDERAL UNIVERSITY OF SERGIPE',
    },
    {
      Id: 1373,
      Name: 'UNIVERSITY OF DORTMUND',
    },
    {
      Id: 1374,
      Name: 'AHRC RESEARCH CENTRE FOR STUDIES IN INTELLECTUAL PROPERTY AND TECHNOLOGY LAW',
    },
    {
      Id: 1375,
      Name: 'SONGKLA UNIVERSITY',
    },
    {
      Id: 1376,
      Name: 'FORSCHUNGSZENTRUM KARLSRUHE',
    },
    {
      Id: 1377,
      Name: 'CARLETON UNIVERSITY',
    },
    {
      Id: 1378,
      Name: 'UNIVERSITY OF SANTA CRUZ DO SUL',
    },
    {
      Id: 1379,
      Name: 'THAMMASAT UNIVERSITY',
    },
    {
      Id: 1380,
      Name: 'UNIVERSIDAD DISTRITAL FRANCISCO JOSÉ DE CALDAS',
    },
    {
      Id: 1381,
      Name: 'KHAJURE RESEARCH FOUNDATION AND DEVELOPMENT SOCIETY',
    },
    {
      Id: 1382,
      Name: 'PONTIFÍCIA UNIVERSIDADE CATÓLICA DO RIO GRANDE DO SUL',
    },
    {
      Id: 1383,
      Name: 'DELFT UNIVERSITY OF TECHNOLOGY',
    },
    {
      Id: 1384,
      Name: 'SCIENTIFIC RESEARCH JOURNAL LTD.',
    },
    {
      Id: 1385,
      Name: 'TECHNICAL UNIVERSITY OF KOŠICE, UNIVERSITY OF BELGRADE',
    },
    {
      Id: 1386,
      Name: 'INSTITUTE OF AERONAUTICS AND SPACE',
    },
    {
      Id: 1387,
      Name: 'UNIVERSITY OF MINNESOTA',
    },
    {
      Id: 1388,
      Name: 'BRAZILIAN TRANSPORTATION PLANNING SOCIETY',
    },
    {
      Id: 1389,
      Name: 'UNIVERSITY OF DUBROVNIK',
    },
    {
      Id: 1390,
      Name: 'STATENS VÄG- OCH TRANSPORTFORSKNINGSINSTITUT',
    },
    {
      Id: 1391,
      Name: 'UNIVERSITY PARDUBICE',
    },
    {
      Id: 1392,
      Name: 'UNIVERSITY OF RIJEKA',
    },
    {
      Id: 1393,
      Name: 'NATIONAL AVIATION UNIVERSITY',
    },
    {
      Id: 1394,
      Name: 'REDE DE PESQUISA EM TRANSPORTES',
    },
    {
      Id: 1395,
      Name: 'ASSOCIAÇÃO NACIONAL DE PESQUISA E ENSINO EM TRANSPORTES',
    },
    {
      Id: 1396,
      Name: 'ACADEMIA PUBLISHING',
    },
    {
      Id: 1397,
      Name: 'UNIVERSITY OF DEBRECEN',
    },
    {
      Id: 1398,
      Name: 'UNIVERSIDADE ESTADUAL DO CENTRO-OESTE',
    },
    {
      Id: 1399,
      Name: 'UKOLN',
    },
    {
      Id: 1400,
      Name: 'INTERNATIONAL JOURNAL OF PHARMACEUTICAL, CHEMICAL AND BIOLOGICAL SCIENCES',
    },
    {
      Id: 1401,
      Name: 'RAJIV GANDHI CENTER FOR BIO TECHNOLOGY',
    },
    {
      Id: 1402,
      Name: 'SM KADRI  EPIDEMIOLOGIST, DIVISION OF EPIDEMIOLOGY AND PUBLIC HEALTH',
    },
    {
      Id: 1403,
      Name: 'ANNALS PUBLISHING COMPANY',
    },
    {
      Id: 1404,
      Name: 'AMERICAN THORACIC SOCIETY',
    },
    {
      Id: 1405,
      Name: 'THE AMERICAN SOCIETY FOR CLINICAL PATHOLOGY',
    },
    {
      Id: 1406,
      Name: 'THE AMERICAN OCCUPATIONAL THERAPY ASSOCIATION',
    },
    {
      Id: 1407,
      Name: 'AMERICAN PUBLIC HEALTH ASSOCIATION',
    },
    {
      Id: 1408,
      Name: 'AUSTRALIAN SOCIETY OF ANAESTHETISTS',
    },
    {
      Id: 1409,
      Name: 'AMERICAN COLLEGE OF PHYSICIAN',
    },
    {
      Id: 1410,
      Name: 'HARVEY WHITNEY BOOKS COMPANY',
    },
    {
      Id: 1411,
      Name: 'THE ROYAL COLLEGE OF SURGEONS OF ENGLAND',
    },
    {
      Id: 1412,
      Name: 'MANEY PUBLISHING',
    },
    {
      Id: 1413,
      Name: 'COLLEGE OF AMERICAN PATHOLOGISTS',
    },
    {
      Id: 1414,
      Name: 'ROYAL COLLEGE OF PSYCHIATRISTS',
    },
    {
      Id: 1415,
      Name: 'AMERICAN COLLEGE OF CHEST PHYSICIANS',
    },
    {
      Id: 1416,
      Name: 'THE CLEFT PALATE–CRANIOFACIAL JOURNAL',
    },
    {
      Id: 1417,
      Name: 'AMERICAN ASSOCIATION FOR CLINICAL CHEMISTRY',
    },
    {
      Id: 1418,
      Name: 'ROYAL COLLEGE OF PHYSICIANS',
    },
    {
      Id: 1419,
      Name: 'OECD',
    },
    {
      Id: 1420,
      Name: 'JOHN HOPKINS UNIVERSITY',
    },
    {
      Id: 1421,
      Name: 'UNIVERSITY OF MELBOURNE',
    },
    {
      Id: 1422,
      Name: 'THE OHIO STATE UNIVERSITY',
    },
    {
      Id: 1423,
      Name: 'DUKE UNIVERSITY',
    },
    {
      Id: 1424,
      Name: 'UNIVERSITY OF SAN DIEGO',
    },
    {
      Id: 1425,
      Name: 'MEGHANA PUBLICATIONS',
    },
    {
      Id: 1426,
      Name: 'AMERICAN SOCIETY ON AGING',
    },
    {
      Id: 1427,
      Name: 'INTERNATIONAL JOURNAL OF INNOVATIVE RESEARCH & DEVELOPMENT',
    },
    {
      Id: 1428,
      Name: 'THE TAMILNADU DR. M.G.R. MEDICAL UNIVERSITY',
    },
    {
      Id: 1429,
      Name: 'CALICUT MEDICAL JOURNA',
    },
    {
      Id: 1430,
      Name: 'ASSOCIATION OF EDUCATIONAL COMMUNICATIONS AND TECHNOLOGY',
    },
    {
      Id: 1431,
      Name: 'CLOUD PUBLICATIONS',
    },
    {
      Id: 1432,
      Name: 'ASCILITE',
    },
    {
      Id: 1433,
      Name: 'EDUCATIONAL TECHNOLOGY & SOCIETY',
    },
    {
      Id: 1434,
      Name: 'MEDIATEC PUBLISHING INC',
    },
    {
      Id: 1435,
      Name: 'DEOSNEWS',
    },
    {
      Id: 1436,
      Name: 'WESTMINSTER',
    },
    {
      Id: 1437,
      Name: 'TRANSFORMATIONSJOURNAL',
    },
    {
      Id: 1438,
      Name: 'ACADEMIC PUBLISHING LIMITED',
    },
    {
      Id: 1439,
      Name: 'RECIIS',
    },
    {
      Id: 1440,
      Name: 'OHIO UNIVERSITY',
    },
    {
      Id: 1441,
      Name: 'EUROPEAN DISTANCE AND E-LEARNING NETWORK',
    },
    {
      Id: 1442,
      Name: 'AMERICAN ACADEMY OF ADVERTISING',
    },
    {
      Id: 1443,
      Name: 'UNIVERSITY OF THE PUNJAB',
    },
    {
      Id: 1444,
      Name: 'SISSA MEDIALAB',
    },
    {
      Id: 1445,
      Name: 'INNOVATIONJOURNALISM',
    },
    {
      Id: 1446,
      Name: 'EJOURNALIST: REFEREED MEDIA JOURNAL',
    },
    {
      Id: 1447,
      Name: 'COMMUNICAR',
    },
    {
      Id: 1448,
      Name: 'WORD PRESS',
    },
    {
      Id: 1449,
      Name: 'UNIVERSITY OF BRASILIA',
    },
    {
      Id: 1450,
      Name: 'CARDIFF UNIVERSITY',
    },
    {
      Id: 1451,
      Name: 'THE PUBLIC RELATIONS SOCIETY OF AMERICA',
    },
    {
      Id: 1452,
      Name: 'ONLINE JOURNAL OF COMMUNICATION AND MEDIA TECHNOLOGIES',
    },
    {
      Id: 1453,
      Name: 'MEDIA FIELDS JOURNAL',
    },
    {
      Id: 1454,
      Name: 'MEDIA AND CULTURE',
    },
    {
      Id: 1455,
      Name: 'INTERNATIONAL ASSOCIATION FOR MEDIA AND COMMUNICATION RESEARCH',
    },
    {
      Id: 1456,
      Name: 'ACADEMY PUBLISHER',
    },
    {
      Id: 1457,
      Name: 'EUROPEAN INSTITUTE FOR COMMUNICATION AND CULTURE',
    },
    {
      Id: 1458,
      Name: 'INTERACTIVE MEDIA IN EDUCATION (JIME)',
    },
    {
      Id: 1459,
      Name: 'JOURNAL OF INTERACTIVE MEDIA IN EDUCATION (JIME)',
    },
    {
      Id: 1460,
      Name: 'ANADOLU UNIVERSITY, ESKISEHIR, TURKEY',
    },
    {
      Id: 1461,
      Name: 'THE TECHNOLOGY SOURCE ARCHIVES THE TECHNOLOGY SOURCE ARCHIVES  AT THE UNIVERSITY OF NORTH CAROLINA',
    },
    {
      Id: 1462,
      Name: 'EDUCAUSE',
    },
    {
      Id: 1463,
      Name: 'SATISH SERIAL PUBLISHING HOUSE',
    },
    {
      Id: 1464,
      Name: 'UNIVERSITY OF CALCUTTA',
    },
    {
      Id: 1465,
      Name: 'INTERNATIONAL SCIENTIFIC PUBLICATIONS',
    },
    {
      Id: 1466,
      Name: 'WEB AND MASS COMMUNICATION',
    },
    {
      Id: 1467,
      Name: 'SMALL PROGRAMS INTEREST GROUP',
    },
    {
      Id: 1468,
      Name: 'AUSTRALIAN CENTRE FOR PUBLIC COMMUNICATION',
    },
    {
      Id: 1469,
      Name: 'THE SOCIAL SCIENCES AND HUMANITIES RESEARCH COUNCIL',
    },
    {
      Id: 1470,
      Name: 'COMMUNICATIONS IN INFORMATION LITERACY',
    },
    {
      Id: 1471,
      Name: 'ECREA',
    },
    {
      Id: 1472,
      Name: 'CORPORATE COMMUNICATION INTERNATIONAL',
    },
    {
      Id: 1473,
      Name: 'THE ELECTRONIC JOURNAL OF E-LEARNING (EJEL)',
    },
    {
      Id: 1474,
      Name: 'THE INTERNATIONAL ACADEMIC FORUM',
    },
    {
      Id: 1475,
      Name: 'EUROPEAN JOURNAL OF OPEN, DISTANCE AND E-LEARNING – EURODL',
    },
    {
      Id: 1476,
      Name: "NOVA SOUTHEASTERN UNIVERSITY'S FISCHLER SCHOOL OF EDUCATION AND HUMAN SERVICES",
    },
    {
      Id: 1477,
      Name: 'ASSOCIATION FOR EDUCATION IN JOURNALISM AND MASS COMMUNICATION',
    },
    {
      Id: 1478,
      Name: 'INTERNATIONAL JOURNAL OF COMMUNICATION',
    },
    {
      Id: 1479,
      Name: 'INFORMING SCIENCE INSTITUTE',
    },
    {
      Id: 1480,
      Name: 'UP MEDIA GROUP INC',
    },
    {
      Id: 1481,
      Name: 'INTERNATIONAL JOURNAL OF INSTRUCTIONAL TECHNOLOGY & DISTANCE LEARNING',
    },
    {
      Id: 1482,
      Name: 'INTERNATIONAL JOURNAL OF INSTRUCTIONAL TECHNOLOGY AND DISTANCE LEARNING',
    },
    {
      Id: 1483,
      Name: 'INTERNATIONAL REVIEW OF RESEARCH IN OPEN AND DISTANCE LEARNING ATHABASCA UNIVERSITY',
    },
    {
      Id: 1484,
      Name: 'ATHABASCA UNIVERSITY',
    },
    {
      Id: 1485,
      Name: 'SOCIETY OF SATELLITE PROFESSIONALS INTERNATIONAL',
    },
    {
      Id: 1486,
      Name: 'INSTITUTE OF COMMUNICATION STUDIES, UNIVERSITY OF THE PUNJAB,',
    },
    {
      Id: 1487,
      Name: 'PRESERVING AND ACCESSING NETWORKED DOCUMENTARY RESOURCES OF AUSTRALIA.',
    },
    {
      Id: 1488,
      Name: 'PUBLIC RELATIONS SOCIETY OF AMERICA',
    },
    {
      Id: 1489,
      Name: 'EASTERN MEDITERRANEAN UNIVERSITY',
    },
    {
      Id: 1490,
      Name: 'STUDIES IN MYCENAEAN INSCRIPTIONS AND DIALECT',
    },
    {
      Id: 1491,
      Name: 'MEDIA FIELDS RESEARCH COLLECTIVE',
    },
    {
      Id: 1492,
      Name: 'THE CATHOLIC HEALTH ASSOCIATION',
    },
    {
      Id: 1493,
      Name: 'WAYNE STATE UNIVERSITY PRESS',
    },
    {
      Id: 1494,
      Name: 'DUSTRI VERLAG',
    },
    {
      Id: 1495,
      Name: 'INTERNATIONAL HEART JOURNAL ASSOCIATION',
    },
    {
      Id: 1496,
      Name: 'THE JOURNAL OF BONE AND JOINT SURGERY, INC.',
    },
    {
      Id: 1497,
      Name: 'JOURNAL OF CLINICAL PEDIATRIC DENTISTRY',
    },
    {
      Id: 1498,
      Name: 'INTERNATIONAL SOCIETY OF ENDOVASCULAR SPECIALISTS',
    },
    {
      Id: 1499,
      Name: 'HMP COMMUNICATIONS LLC',
    },
    {
      Id: 1500,
      Name: 'SOCIETY OF NUCLEAR MEDICINE AND MOLECULAR IMAGING',
    },
    {
      Id: 1501,
      Name: 'CENTER FOR ACADEMIC PUBLICATIONS JAPAN',
    },
    {
      Id: 1502,
      Name: 'AMERICAN SOCIETY FOR PHARMACOLOGY AND EXPERIMENTAL THERAPEUTICS',
    },
    {
      Id: 1503,
      Name: 'AMERICAN SOCIETY OF PARASITOLOGISTS',
    },
    {
      Id: 1504,
      Name: 'ANAESTHESIA, PAIN & INTENSIVE CARE',
    },
    {
      Id: 1505,
      Name: 'THE JOURNAL OF RHEUMATOLOGY PUBLISHING COMPANY LIMITED.',
    },
    {
      Id: 1506,
      Name: 'FOUNDATION FOR REHABILITATION INFORMATION',
    },
    {
      Id: 1507,
      Name: 'AMERICAN SPEECH-LANGUAGE-HEARING ASSOCIATION.',
    },
    {
      Id: 1508,
      Name: 'AMERICAN PHYSICAL THERAPY ASSOCIATION',
    },
    {
      Id: 1509,
      Name: 'INTERNATIONAL HOSPITAL FEDERATION',
    },
    {
      Id: 1510,
      Name: "EMPLOYEES' STATE INSURANCE CORPORATION",
    },
    {
      Id: 1511,
      Name: 'ABORIGINAL NURSES ASSOCIATION OF CANADA',
    },
    {
      Id: 1512,
      Name: 'CANADIAN BREAST CANCER NETWORK',
    },
    {
      Id: 1513,
      Name: 'CANADIAN PAEDIATRIC SOCIETY',
    },
    {
      Id: 1514,
      Name: 'SCRIBD SAN FRANCISCO',
    },
    {
      Id: 1515,
      Name: 'MOOD DISORDERS SOCIETY OF CANADA',
    },
    {
      Id: 1516,
      Name: 'NATIONAL COLLABORATING CENTRE FOR ABORIGINAL HEALTH',
    },
    {
      Id: 1517,
      Name: 'CANADIAN LUNG ASSOCIATION',
    },
    {
      Id: 1518,
      Name: 'ADVANCED PRACTICE NURSING',
    },
    {
      Id: 1519,
      Name: 'ONTARIO HOSPITAL ASSOCIATION',
    },
    {
      Id: 1520,
      Name: 'ACADEMY OF CLINICAL LABORATORY PHYSICIANS AND SCIENTISTS',
    },
    {
      Id: 1521,
      Name: 'AMERICAN SOCIETY FOR CLINICAL PATHOLOGY',
    },
    {
      Id: 1522,
      Name: 'MIT PRESS',
    },
    {
      Id: 1523,
      Name: 'ACADEMY OF MANAGED CARE PHARMACY',
    },
    {
      Id: 1524,
      Name: 'ACADEMY OF MEDICAL ROYAL COLLEGES,',
    },
    {
      Id: 1525,
      Name: 'WORLD LUNG FOUNDATION',
    },
    {
      Id: 1526,
      Name: 'ACTION ON SMOKING AND HEALTH',
    },
    {
      Id: 1527,
      Name: 'FOOD STANDARDS AGENCY',
    },
    {
      Id: 1528,
      Name: 'EHEALTH MAGAZINE',
    },
    {
      Id: 1529,
      Name: 'THE HEALTH SCOOP',
    },
    {
      Id: 1530,
      Name: 'SEABREEZE COMMUNICATIONS PTY LTD',
    },
    {
      Id: 1531,
      Name: 'AGENCY FOR HEALTHCARE RESEARCH AND QUALITY',
    },
    {
      Id: 1532,
      Name: 'AUSTRALIAN SOCIETY FOR MEDICAL RESEARCH',
    },
    {
      Id: 1533,
      Name: 'AUSTRALASIAN MEDICAL PUBLISHING COMPANY',
    },
    {
      Id: 1534,
      Name: 'DEOSNEWS ARCHIVES',
    },
    {
      Id: 1535,
      Name: 'ASSOCIATION FOR COMPUTING MACHINERY',
    },
    {
      Id: 1536,
      Name: 'ESCHOOLMEDIA & ESCHOOL NEWS.',
    },
    {
      Id: 1537,
      Name: 'MAGNA PUBLICATIONS',
    },
    {
      Id: 1538,
      Name: 'JOURNAL OF EDUCATORS ONLINE',
    },
    {
      Id: 1539,
      Name: 'THE UNIVERSITY OF ALABAMA',
    },
    {
      Id: 1540,
      Name: 'INSTITUTE OF EDUCATIONAL TECHNOLOGY',
    },
    {
      Id: 1541,
      Name: 'LANGUAGE LEARNING & TECHNOLOGY',
    },
    {
      Id: 1542,
      Name: 'LEARNING SOLUTIONS MAGAZINE',
    },
    {
      Id: 1543,
      Name: 'MERLOT',
    },
    {
      Id: 1544,
      Name: 'OJDLA',
    },
    {
      Id: 1545,
      Name: 'TECH & LEARNING',
    },
    {
      Id: 1546,
      Name: 'THE TEACHING WITH TECHNOLOGY TODAY',
    },
    {
      Id: 1547,
      Name: 'HUMAN KINETICS',
    },
    {
      Id: 1548,
      Name: 'FIRST MONDAY',
    },
    {
      Id: 1549,
      Name: "TAYLOR'S UNIVERSITY",
    },
    {
      Id: 1550,
      Name: 'IJEDICT',
    },
    {
      Id: 1551,
      Name: 'JOURNAL OF COMPUTER-MEDIATED COMMUNICATION',
    },
    {
      Id: 1552,
      Name: 'JOURNAL OF INTERCULTURAL COMMUNICATION',
    },
    {
      Id: 1553,
      Name: 'THE JOURNAL OF VIRTUAL WORLDS RESEARCH',
    },
    {
      Id: 1554,
      Name: 'M/C — MEDIA AND CULTURE',
    },
    {
      Id: 1555,
      Name: 'DEPARTMENT OF ENGLISH LANGUAGE & LITERATURE',
    },
    {
      Id: 1556,
      Name: 'ASSOCIATION OF MEDIA RESEARCHERS IN DENMARK',
    },
    {
      Id: 1557,
      Name: 'CASE STUDIES IN STRATEGIC COMMUNICATION',
    },
    {
      Id: 1558,
      Name: 'UNIVERSITY OF QUEENSLAND',
    },
    {
      Id: 1559,
      Name: 'UNIVERSITY OF WESTMINSTER',
    },
    {
      Id: 1560,
      Name: 'IIT MADRAS',
    },
    {
      Id: 1561,
      Name: 'DANUBIUS UNIVERSITY',
    },
    {
      Id: 1562,
      Name: 'EDUKATOR D.O.O. KOPER',
    },
    {
      Id: 1563,
      Name: 'SCIENPRESS LTD',
    },
    {
      Id: 1564,
      Name: 'INSTITUTO DE ESTUDIOS BURSÁTILES',
    },
    {
      Id: 1565,
      Name: 'LOS ALAMOS NATIONAL SECURITY',
    },
    {
      Id: 1566,
      Name: 'NATIONAL ACADEMIES PRESS',
    },
    {
      Id: 1567,
      Name: 'IWA PUBLISHING',
    },
    {
      Id: 1568,
      Name: 'MUMBAI EDUCATIONAL TRUST',
    },
    {
      Id: 1569,
      Name: 'THE UNIVERSITY OF ARIZONA LIBRARIES',
    },
    {
      Id: 1570,
      Name: 'MISC',
    },
    {
      Id: 1571,
      Name: 'NEW DELHI PUBLISHERS',
    },
    {
      Id: 1572,
      Name: 'CENTRE FOR COMMUNICATION STUDIES',
    },
    {
      Id: 1573,
      Name: 'EURICOM',
    },
    {
      Id: 1574,
      Name: 'DELHI PSYCHIATRIC SOCIETY',
    },
    {
      Id: 1575,
      Name: 'DR. ZARINE D. FERZANDI',
    },
    {
      Id: 1576,
      Name: 'INDIAN RADIOLOGICAL AND IMAGING ASSOCIATION',
    },
    {
      Id: 1577,
      Name: 'INTERNATIONAL MEDICAL SCIENCES ACADEMY',
    },
    {
      Id: 1578,
      Name: 'FAMILY PLANNING ASSOCIATION OF INDIA',
    },
    {
      Id: 1579,
      Name: 'DEPT. OF ANATOMY SUBHARTI MEDICAL COLLEGE',
    },
    {
      Id: 1580,
      Name: 'VSPM DENTAL COLLEGE',
    },
    {
      Id: 1581,
      Name: 'INSTITUTE OF BIOLOGICAL SCIENCES',
    },
    {
      Id: 1582,
      Name: 'ASHOK YAKKALDEVI',
    },
    {
      Id: 1583,
      Name: 'BRITISH DENTAL ASSOCIATION',
    },
    {
      Id: 1584,
      Name: 'EUROPEAN SOCIETY OF RADIOLOGY',
    },
    {
      Id: 1585,
      Name: 'CANADIAN MEDICAL PROTECTIVE ASSOCIATION',
    },
    {
      Id: 1586,
      Name: 'SRI BALAJI VIDYAPEETH UNIVERSITY',
    },
    {
      Id: 1587,
      Name: 'MEENAKSHI MISSION HOSPITAL & RESEARCH CENTRE',
    },
    {
      Id: 1588,
      Name: 'LAXMI BOOK PUBLICATION',
    },
    {
      Id: 1589,
      Name: 'THE CANADIAN SOCIETY OF HOSPITAL PHARMACISTS',
    },
    {
      Id: 1590,
      Name: 'CANADIAN ANESTHESIOLOGISTS SOCIETY',
    },
    {
      Id: 1591,
      Name: 'SUNNYBROOK & WOMEN’S COLLEGE HEALTH SCIENCES CENTRE',
    },
    {
      Id: 1592,
      Name: 'ANESTHESIA PATIENT SAFETY FOUNDATION',
    },
    {
      Id: 1593,
      Name: 'CALL SCOTLAND',
    },
    {
      Id: 1594,
      Name: 'PAPPIN COMMUNICATIONS',
    },
    {
      Id: 1595,
      Name: 'AMERICAN ASSOCIATION OF ENDODONTISTS',
    },
    {
      Id: 1596,
      Name: 'AMERICAN ACADEMY OF DENTAL PRACTICE ADMINISTRATION',
    },
    {
      Id: 1597,
      Name: 'CANADIAN SOCIETY FOR MOLECULAR BIOSCIENCES',
    },
    {
      Id: 1598,
      Name: 'CANADIAN EPILEPSY ALLIANCE',
    },
    {
      Id: 1599,
      Name: 'THE BRITISH PSYCHOLOGICAL SOCIETY',
    },
    {
      Id: 1600,
      Name: 'BRITISH SOCIETY OF GASTROENTEROLOGY',
    },
    {
      Id: 1601,
      Name: 'CTISUS',
    },
    {
      Id: 1602,
      Name: 'BSACI',
    },
    {
      Id: 1603,
      Name: 'BIOSCIENTIFICA',
    },
    {
      Id: 1604,
      Name: 'AMERICAN ORTHODONTIC SOCEITY',
    },
    {
      Id: 1605,
      Name: 'AMERICAN ACADEMY OF IMPLANTOLOGY',
    },
    {
      Id: 1606,
      Name: 'CENTRE FOR PHARMACY POSTGRADUATE EDUCATION',
    },
    {
      Id: 1607,
      Name: 'BRITISH PHARMACOLOGICAL SOCIETY',
    },
    {
      Id: 1608,
      Name: 'DIABETES UK',
    },
    {
      Id: 1609,
      Name: 'BC CANCER AGENCY',
    },
    {
      Id: 1610,
      Name: 'BELGIAN SOCIETY OF RADIOLOGY',
    },
    {
      Id: 1611,
      Name: 'AMERICAN COLLEGE OF DENTISTS',
    },
    {
      Id: 1612,
      Name: 'HONG KONG DENTAL ASSOCIATION',
    },
    {
      Id: 1613,
      Name: 'HONG KONG ACADEMY OF MEDICINE PRESS',
    },
    {
      Id: 1614,
      Name: 'IADH',
    },
    {
      Id: 1615,
      Name: 'INTERNATIONAL CONGRESS OF ORAL IMPLANTOLOGISTS',
    },
    {
      Id: 1616,
      Name: "DR. ROBERT O'BLOCK",
    },
    {
      Id: 1617,
      Name: 'AMERICAN ACADEMY FOR ORAL SYSTEMIC HEALTHCARE',
    },
    {
      Id: 1618,
      Name: 'BIOINDUSTRY ASSOCIATION',
    },
    {
      Id: 1619,
      Name: 'BRITISH ASSOCIATION OF DAY SURGERY',
    },
    {
      Id: 1620,
      Name: 'BRITISH ASSOCIATION OF PHARMACEUTICAL PHYSICIANS',
    },
    {
      Id: 1621,
      Name: 'COLLEGE OF OCCUPATIONAL THERAPISTS',
    },
    {
      Id: 1622,
      Name: 'OPTOMETRY TODAY',
    },
    {
      Id: 1623,
      Name: 'ABPI',
    },
    {
      Id: 1624,
      Name: 'ULRIKE FISCHER',
    },
    {
      Id: 1625,
      Name: 'DGPW',
    },
    {
      Id: 1626,
      Name: 'GERMAN SOCIETY OF PLASTIC, RECONSTRUCTIVE AND AESTHETIC SURGEONS',
    },
    {
      Id: 1627,
      Name: 'GERMAN INSTITUTE FOR MEDICAL DOCUMENTATION AND INFORMATION',
    },
    {
      Id: 1628,
      Name: 'UNIVERSITY MEDICINE GREIFSWALD',
    },
    {
      Id: 1629,
      Name: 'LIBRARY OF THE MEDICAL UNIVERSITY OF VIENNA',
    },
    {
      Id: 1630,
      Name: 'GMDS',
    },
    {
      Id: 1631,
      Name: 'ASSOCIATION OF THE SCIENTIFIC MEDICAL SOCIETIES IN GERMANY',
    },
    {
      Id: 1632,
      Name: 'GERMAN SOCIETY OF HEMATOLOGY AND ONCOLOGY ASSOCIATION',
    },
    {
      Id: 1633,
      Name: 'UNIVERSITY HOSPITAL OF COLOGNE',
    },
    {
      Id: 1634,
      Name: 'SOCIETY FOR THE PROMOTION OF QUALITY ASSURANCE IN MEDICAL LABORATORIES ASSOCIATION',
    },
    {
      Id: 1635,
      Name: 'SOCIETY FOR MEDICAL EDUCATION',
    },
    {
      Id: 1636,
      Name: 'ERMAN SOCIETY FOR COMPUTER AND ROBOT-ASSISTED SURGERY',
    },
    {
      Id: 1637,
      Name: 'GERMAN SOCIETY FOR INTERNAL MEDICINE',
    },
    {
      Id: 1638,
      Name: 'ITALIAN ASSOCIATION OF CLINICAL MICROBIOLOGISTS',
    },
    {
      Id: 1639,
      Name: 'NATIONAL ASTHMA COUNCIL AUSTRALIA LTD.',
    },
    {
      Id: 1640,
      Name: 'ASTHMA FOUNDATION',
    },
    {
      Id: 1641,
      Name: 'WALTER AND ELIZA HALL INSTITUTE',
    },
    {
      Id: 1642,
      Name: 'ASCIA',
    },
    {
      Id: 1643,
      Name: 'AUSTRALIAN COLLEGE OF RURAL AND REMOTE MEDICINE',
    },
    {
      Id: 1644,
      Name: 'AUSTRALIAN DENTAL ASSOCIATION INC.',
    },
    {
      Id: 1645,
      Name: 'AUSTRALIAN FEDERATION OF AIDS ORGANISATIONS',
    },
    {
      Id: 1646,
      Name: 'UNIVERSITY OF WASHINGTON',
    },
    {
      Id: 1647,
      Name: 'UNIVERSITY OF PITTSBURGH BOOK CENTER',
    },
    {
      Id: 1648,
      Name: 'UNIVERSITY OF PITTSBURGH',
    },
    {
      Id: 1649,
      Name: 'JOHN MEW',
    },
    {
      Id: 1650,
      Name: 'DR. PAUL MOORE',
    },
    {
      Id: 1651,
      Name: '3SHAPE DENTAL SYSTEM',
    },
    {
      Id: 1652,
      Name: 'PHANTOMS FOUNDATION',
    },
    {
      Id: 1653,
      Name: 'NATIONAL ASSOCIATION OF DENTAL LABORATORIES',
    },
    {
      Id: 1654,
      Name: 'ACFCQ',
    },
    {
      Id: 1655,
      Name: 'GLOBAL HELP ORGANIZATION',
    },
    {
      Id: 1656,
      Name: 'INTERNATIONAL ASSOCIATION FOR THE STUDY IN PAIN',
    },
    {
      Id: 1657,
      Name: 'THE ROYAL COLLEGE OF ANAESTHETISTS',
    },
    {
      Id: 1658,
      Name: 'AOSIS',
    },
    {
      Id: 1659,
      Name: 'MEDPHARM PUBLICATIONS',
    },
    {
      Id: 1660,
      Name: 'THE NATIONAL ACADEMIES',
    },
    {
      Id: 1661,
      Name: 'EUROPEAN PARLIAMENT',
    },
    {
      Id: 1662,
      Name: 'NATIONAL PARKINSON FOUNDATION, INC.',
    },
    {
      Id: 1663,
      Name: 'NATIONAL MEDICAL ASSOCIATION',
    },
    {
      Id: 1664,
      Name: 'NATIONAL KIDNEY FOUNDATION',
    },
    {
      Id: 1665,
      Name: 'ROYAL COLLEGE OF NURSING',
    },
    {
      Id: 1666,
      Name: 'ROYAL COLLEGE OF PATHOLOGISTS OF AUSTRALASIA',
    },
    {
      Id: 1667,
      Name: 'ROYAL SOCIETY FOR THE PREVENTION OF ACCIDENTS',
    },
    {
      Id: 1668,
      Name: 'ANNA MAHONEY',
    },
    {
      Id: 1669,
      Name: 'ROYAL MICROSCOPICAL SOCIETY',
    },
    {
      Id: 1670,
      Name: 'THE ROYAL COLLEGE OF SURGEONS OF EDINBURGH',
    },
    {
      Id: 1671,
      Name: 'COMMUNICATION MATTERS',
    },
    {
      Id: 1672,
      Name: 'THE ROYAL COLLEGE OF RADIOLOGISTS',
    },
    {
      Id: 1673,
      Name: 'INFOTRACK LIBRARY SOLUTIONS',
    },
    {
      Id: 1674,
      Name: 'AALBORG UNIVERSITY',
    },
    {
      Id: 1675,
      Name: 'SOUTH-WEST UNIVERSITY',
    },
    {
      Id: 1676,
      Name: 'JACOBS UNIVERSITY BREMEN',
    },
    {
      Id: 1677,
      Name: 'FEDERAL UNIVERSITY OF ESPIRITO SANTO',
    },
    {
      Id: 1678,
      Name: 'KCA UK',
    },
    {
      Id: 1679,
      Name: 'JMIR PUBLICATIONS INC.',
    },
    {
      Id: 1680,
      Name: 'ELIFE',
    },
    {
      Id: 1681,
      Name: 'BLOOMSBURY QATAR FOUNDATION JOURNALS',
    },
    {
      Id: 1682,
      Name: 'WAGENINGEN ACADEMIC PUBLISHERS',
    },
    {
      Id: 1683,
      Name: 'HONG KONG UNIVERSITY PRESS',
    },
    {
      Id: 1684,
      Name: 'DENNIS BARBER',
    },
    {
      Id: 1685,
      Name: 'SAVAP INTERNATIONAL',
    },
    {
      Id: 1686,
      Name: 'UNIVERSITAS SYIAH KUALA PROGRAM PASCASARJANA',
    },
    {
      Id: 1687,
      Name: 'NEBULA',
    },
    {
      Id: 1688,
      Name: 'EDITURA UNIVERSITATII',
    },
    {
      Id: 1689,
      Name: 'AMERICAN HUNGARIAN EDUCATORS ASSOCIATION',
    },
    {
      Id: 1690,
      Name: 'UNIVERSITY OF NOTTINGHAM NINGBO',
    },
    {
      Id: 1691,
      Name: 'UNIVERSITY OF VICTORIA',
    },
    {
      Id: 1692,
      Name: 'DEPARTMENT OF AESTHETICS AND COMMUNICATION - AARHUS UNIVERSITY',
    },
    {
      Id: 1693,
      Name: 'UNIVERSIDAD AUTÓNOMA DEL ESTADO DE MÉXICO',
    },
    {
      Id: 1694,
      Name: 'AIX-MARSEILLE UNIVERSITÉ',
    },
    {
      Id: 1695,
      Name: 'THE COLLEGE OF THE BAHAMAS',
    },
    {
      Id: 1696,
      Name: 'UNIVERSITAT DE BARCELONA',
    },
    {
      Id: 1697,
      Name: 'UNIVERSITY OF HERTFORDSHIRE',
    },
    {
      Id: 1698,
      Name: 'OHIO STATE UNIVERSITY LIBRARIES',
    },
    {
      Id: 1699,
      Name: 'EGE UNIVERSITY FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES',
    },
    {
      Id: 1700,
      Name: 'EISRJC',
    },
    {
      Id: 1701,
      Name: 'DEPARTMENTS OF THE TECHNOLOGICAL EDUCATIONAL INSTITUTIONS',
    },
    {
      Id: 1702,
      Name: 'EJOVOC',
    },
    {
      Id: 1703,
      Name: 'AEDEI',
    },
    {
      Id: 1704,
      Name: 'EUROPEAN ASSOCIATION FOR AMERICAN STUDIES',
    },
    {
      Id: 1705,
      Name: 'FACULTY OF INTERNATIONAL BUSINESS AND ECONOMICS',
    },
    {
      Id: 1706,
      Name: 'DEPARTMENT OF PHYSICAL EDUCATION AND SPORT SCIENCE',
    },
    {
      Id: 1707,
      Name: 'UNIVERSITY OF SUSSEX',
    },
    {
      Id: 1708,
      Name: 'VILLANOVA UNIVERSITY',
    },
    {
      Id: 1709,
      Name: 'INSTITUT VEOLIA ENVIRONNEMENT',
    },
    {
      Id: 1710,
      Name: 'TECHNOLOGICAL CENTRE',
    },
    {
      Id: 1711,
      Name: 'CONTEMPORARY AESTHETICS INC.',
    },
    {
      Id: 1712,
      Name: 'ALPHA OMEGAN',
    },
    {
      Id: 1713,
      Name: 'THE JOURNAL OF DENTAL PRACTICE MANAGEMENT',
    },
    {
      Id: 1714,
      Name: 'SRI GURU RAM DAS INSTITUTE OF DENTAL SCIENCES & RESEARCH',
    },
    {
      Id: 1715,
      Name: 'MODERN DENTISTRY MEDIA',
    },
    {
      Id: 1716,
      Name: 'SAKARYA UNIVERSITY',
    },
    {
      Id: 1717,
      Name: 'IJMESS',
    },
    {
      Id: 1718,
      Name: 'IRPN PUBLISHERS',
    },
    {
      Id: 1719,
      Name: 'IJTR',
    },
    {
      Id: 1720,
      Name: 'UNIVERSITY OF GUELPH',
    },
    {
      Id: 1721,
      Name: 'THE ISRAELI SOCIETY FOR HUMOR STUDIES',
    },
    {
      Id: 1722,
      Name: 'INT. ASSOCIATION FOR ACADEMIANS',
    },
    {
      Id: 1723,
      Name: 'DEPARTMENT OF CINEMA STUDIES',
    },
    {
      Id: 1724,
      Name: 'NATIONAL SPELEOLOGICAL SOCIETY',
    },
    {
      Id: 1725,
      Name: 'DAYTONA STATE COLLEGE',
    },
    {
      Id: 1726,
      Name: 'LINDENWOOD UNIVERSITY',
    },
    {
      Id: 1727,
      Name: 'AFRICAN JOURNALS ONLINE',
    },
    {
      Id: 1728,
      Name: "O'MAILIA HALL",
    },
    {
      Id: 1729,
      Name: 'JPAS',
    },
    {
      Id: 1730,
      Name: 'UNIVERSITI TEKNOLOGI MARA',
    },
    {
      Id: 1731,
      Name: 'HOLY NAME UNIVERSITY',
    },
    {
      Id: 1732,
      Name: 'EASTERN MICHIGAN UNIVERSITY',
    },
    {
      Id: 1733,
      Name: 'UNIFE ANNALI ONLINE',
    },
    {
      Id: 1734,
      Name: 'UNIVERSITY OF LEICESTER',
    },
    {
      Id: 1735,
      Name: 'THE JAPAN FOUNDATION',
    },
    {
      Id: 1736,
      Name: 'BRILL',
    },
    {
      Id: 1737,
      Name: 'UNIVERSITY OF AKUREYRI',
    },
    {
      Id: 1738,
      Name: 'UBIQUITY PRESS LTD',
    },
    {
      Id: 1739,
      Name: 'PHILICA',
    },
    {
      Id: 1740,
      Name: 'UNIVERSITY OF TECHNOLOGY SYDNEY',
    },
    {
      Id: 1741,
      Name: 'ASSOCIATION HEXIS',
    },
    {
      Id: 1742,
      Name: 'UNIVERSITY OF CANTERBURY',
    },
    {
      Id: 1743,
      Name: 'IIU PRESS AND RESEARCH CENTRE',
    },
    {
      Id: 1744,
      Name: 'THE EDUCATIONAL PUBLISHER',
    },
    {
      Id: 1745,
      Name: 'SINGIDUNUM UNIVERSITY',
    },
    {
      Id: 1746,
      Name: 'UNIVERSITY OF KENT',
    },
    {
      Id: 1747,
      Name: 'TONAN AJIA KENKYU',
    },
    {
      Id: 1748,
      Name: 'UNIVERSITY OF TARTU',
    },
    {
      Id: 1749,
      Name: 'KOZMINSKI UNIVERSITY',
    },
    {
      Id: 1750,
      Name: 'THE PANTANETO FORUM',
    },
    {
      Id: 1751,
      Name: 'RUPRECHT-KARLS-UNIVERSITÄT HEIDELBERG',
    },
    {
      Id: 1752,
      Name: 'UNIVERSITÉ DE STRASBOURG',
    },
    {
      Id: 1753,
      Name: 'VANDERBILT UNIVERSITY',
    },
    {
      Id: 1754,
      Name: 'GEA COLLEGE OF ENTREPRENEURSHIP',
    },
    {
      Id: 1755,
      Name: 'ZARSAMI',
    },
    {
      Id: 1756,
      Name: 'SOCIETY FOR BUSINESS RESEARCH PROMOTION',
    },
    {
      Id: 1757,
      Name: 'MACROTHINK INSTITUTE',
    },
    {
      Id: 1758,
      Name: 'UNIVERSITY OF WOLLONGONG',
    },
    {
      Id: 1759,
      Name: 'AJBMR',
    },
    {
      Id: 1760,
      Name: 'ANPAD',
    },
    {
      Id: 1761,
      Name: 'VERBAND DER HOCHSCHULLEHRER FÜR BETRIEBSWIRTSCHAFT E. V.',
    },
    {
      Id: 1762,
      Name: 'ASTONJOURNALS',
    },
    {
      Id: 1763,
      Name: 'GLOBAL RESEARCH SOCIETY',
    },
    {
      Id: 1764,
      Name: 'SOCIETY FOR BUSINESS MANAGEMENT DYNAMICS',
    },
    {
      Id: 1765,
      Name: 'BENTLEY UNIVERSITY',
    },
    {
      Id: 1766,
      Name: 'IBIMA PUBLISHING',
    },
    {
      Id: 1767,
      Name: 'UNIVERSITY OF PAVIA',
    },
    {
      Id: 1768,
      Name: 'QUEENSLAND UNIVERSITY OF TECHNOLOGY',
    },
    {
      Id: 1769,
      Name: 'PETROLEUM – GAS UNIVERSITY OF PLOIESTI',
    },
    {
      Id: 1770,
      Name: 'UNIVERSITY OF TUZLA',
    },
    {
      Id: 1771,
      Name: 'REVISTAS DE LA UNIVERSIDAD DE OVIEDO',
    },
    {
      Id: 1772,
      Name: 'FACULDADE DE ECONOMIA',
    },
    {
      Id: 1773,
      Name: 'UNIVERSITY OF INFORMATION TECHNOLOGY AND MANAGEMENT IN RZESZOW',
    },
    {
      Id: 1774,
      Name: 'BUSINESS AND ORGANIZATION ETHICS NETWORK',
    },
    {
      Id: 1775,
      Name: 'REGENT UNIVERSITY SCHOOL OF BUSINESS & LEADERSHIP',
    },
    {
      Id: 1776,
      Name: 'EJBSS',
    },
    {
      Id: 1777,
      Name: 'FAR EAST RESEARCH CENTRE',
    },
    {
      Id: 1778,
      Name: 'MASARYK UNIVERSITY',
    },
    {
      Id: 1779,
      Name: 'AFCPE',
    },
    {
      Id: 1780,
      Name: 'INSTITUTE FOR THE INTEGRATION OF LATIN AMERICA AND THE CARIBBEAN',
    },
    {
      Id: 1781,
      Name: 'INSTITUTE OF INTERDISCIPLINARY BUSINESS RESEARCH',
    },
    {
      Id: 1782,
      Name: 'WORLD CENTRE FOR ACADEMIC RESEARCH',
    },
    {
      Id: 1783,
      Name: 'HUMAN RESOURCE MANAGEMENT ACADEMIC RESEARCH SOCIETY',
    },
    {
      Id: 1784,
      Name: 'THE SOCIAL SCIENCES RESERACH SOCIETY',
    },
    {
      Id: 1785,
      Name: 'ASTON UNIVERSITY',
    },
    {
      Id: 1786,
      Name: 'IJDAR',
    },
    {
      Id: 1787,
      Name: 'ELITE HALL PUBLISHING HOUSE',
    },
    {
      Id: 1788,
      Name: 'AIRCC PUBLISHING CORPORATION',
    },
    {
      Id: 1789,
      Name: 'CONSORTIA ACADEMIA PUBLISHING',
    },
    {
      Id: 1790,
      Name: 'CAG UNIVERSITY',
    },
    {
      Id: 1791,
      Name: 'INVESTMENT ANALYSTS SOCIETY OF SOUTHERN AFRICA',
    },
    {
      Id: 1792,
      Name: 'UNIVERSITY OF TEHRAN',
    },
    {
      Id: 1793,
      Name: 'ACADEMIC AND BUSINESS RESEARCH INSTITUTE',
    },
    {
      Id: 1794,
      Name: 'JOURNAL OF BUSINESS STUDIES QUARTERLY',
    },
    {
      Id: 1795,
      Name: 'KENNESAW STATE UNIVERSITY',
    },
    {
      Id: 1796,
      Name: 'UNIVERSITY OF SOUTH AUSTRALIA',
    },
    {
      Id: 1797,
      Name: 'AHMEDABAD DENTAL COLLEGE AND HOSPITA',
    },
    {
      Id: 1798,
      Name: 'HALMSTAD UNIVERSITY',
    },
    {
      Id: 1799,
      Name: 'SCIENCE & EDUCATION FOUNDATION',
    },
    {
      Id: 1800,
      Name: 'ARRAY DEVELPMENT',
    },
    {
      Id: 1801,
      Name: 'THE LEADERSHIP ALLIANCE INC',
    },
    {
      Id: 1802,
      Name: 'JOURNAL OF KNOWLEDGE MANAGEMENT, ECONOMICS AND INFORMATION TECHNOLOGY',
    },
    {
      Id: 1803,
      Name: 'DVL',
    },
    {
      Id: 1804,
      Name: 'U OTTAWA',
    },
    {
      Id: 1805,
      Name: 'U OTTAWA',
    },
    {
      Id: 1806,
      Name: 'U OTTAWA',
    },
    {
      Id: 1807,
      Name: 'U OTTAWA',
    },
    {
      Id: 1808,
      Name: 'U OTTAWA',
    },
    {
      Id: 1809,
      Name: 'U OTTAWA',
    },
    {
      Id: 1810,
      Name: 'U OTTAWA',
    },
    {
      Id: 1811,
      Name: 'U OTTAWA',
    },
    {
      Id: 1812,
      Name: 'U OTTAWA',
    },
    {
      Id: 1813,
      Name: 'Foundation of Nursing Studies UK',
    },
    {
      Id: 1814,
      Name: 'Online Brazilian Journal of Nursing',
    },
    {
      Id: 1815,
      Name: 'The American Nurses Association',
    },
    {
      Id: 1816,
      Name: 'AMERICAN NURSE ASSOCIATION ',
    },
    {
      Id: 1817,
      Name: 'Healthcare Information and Management Systems Society',
    },
    {
      Id: 1818,
      Name: 'Rural Nurse Organization',
    },
    {
      Id: 1819,
      Name: 'Mohindra Documentation Centre',
    },
    {
      Id: 1820,
      Name: 'School of Dental Sciences, USM',
    },
    {
      Id: 1821,
      Name: 'Cumhuriyet University Faculty of Dentistry',
    },
    {
      Id: 1822,
      Name: 'Journal of Osseointegration',
    },
    {
      Id: 1823,
      Name: 'Facultad de Odontologia, University of Conception ',
    },
    {
      Id: 1824,
      Name: 'KOREAN ACADEMY OF PERIODONTOLOGY',
    },
    {
      Id: 1825,
      Name: 'University of Southern of Santa Catarina',
    },
    {
      Id: 1826,
      Name: 'Showa University Dental Society',
    },
    {
      Id: 1827,
      Name: 'Shahid Beheshti University of Medical Sciences',
    },
    {
      Id: 1828,
      Name: 'Shiraz University of Medical Sciences',
    },
    {
      Id: 1829,
      Name: 'BIOMET ',
    },
    {
      Id: 1830,
      Name: 'Biomet',
    },
    {
      Id: 1831,
      Name: 'ORAL AND IMPLANTOLOGY',
    },
    {
      Id: 1832,
      Name: 'ORAL SCIENCES',
    },
    {
      Id: 1833,
      Name: 'International College of Dentists',
    },
    {
      Id: 1834,
      Name: 'Universidad Nacional de Rosario',
    },
    {
      Id: 1835,
      Name: 'JORDI',
    },
    {
      Id: 1836,
      Name: 'Medicina Oral S.L',
    },
    {
      Id: 1837,
      Name: 'Pontificia Universidad Javeriana',
    },
    {
      Id: 1838,
      Name: 'Journal of Advanced Medical and Dental Sciences Research',
    },
    {
      Id: 1839,
      Name: 'FLORIDA',
    },
    {
      Id: 1840,
      Name: 'Society for Biomaterials and Artificial Organs',
    },
    {
      Id: 1841,
      Name: 'AGING',
    },
    {
      Id: 1842,
      Name: 'School of Nursing & Midwifery',
    },
    {
      Id: 1843,
      Name: 'INTERNATIONAL JOURNAL OF HEMATOLOGY AND ONCOLOGY',
    },
    {
      Id: 1844,
      Name: 'Revista Acta Médica Colombiana',
    },
    {
      Id: 1845,
      Name: 'ACTA MÉDICA COSTARRICENSE',
    },
    {
      Id: 1846,
      Name: 'Iranian center for endodontic research',
    },
    {
      Id: 1847,
      Name: 'Annals of Family Medicine',
    },
    {
      Id: 1848,
      Name: 'Indian Society of Maxillofacial Prosthetics and Dental Implantology',
    },
    {
      Id: 1849,
      Name: 'SUDHA RASTOGI DENTAL COLLEGE',
    },
    {
      Id: 1850,
      Name: 'B.K.L. Walawalkar Rural Medical College & Hospita',
    },
    {
      Id: 1851,
      Name: 'B.K.L. Walawalkar Rural Medical College & Hospital',
    },
    {
      Id: 1852,
      Name: 'BKL Walawalkar Rural Medical College',
    },
    {
      Id: 1853,
      Name: 'BKL Walawalkar Rural Medical College, Sawarde',
    },
    {
      Id: 1854,
      Name: 'Society of Cosmetic Chemists',
    },
    {
      Id: 1855,
      Name: 'Association of Dental Research and Scientific Development',
    },
    {
      Id: 1856,
      Name: 'Co-Action Publishing',
    },
    {
      Id: 1857,
      Name: 'Academy of Advanced Dental Research',
    },
    {
      Id: 1858,
      Name: ' LOOK Academic Publishers',
    },
    {
      Id: 1859,
      Name: 'IISTE',
    },
    {
      Id: 1860,
      Name: 'IISTE',
    },
    {
      Id: 1861,
      Name: 'ISITE',
    },
    {
      Id: 1862,
      Name: 'REDFAME',
    },
    {
      Id: 1863,
      Name: 'REDFAME',
    },
    {
      Id: 1864,
      Name: 'REDFAME',
    },
    {
      Id: 1865,
      Name: 'REDFAME',
    },
    {
      Id: 1866,
      Name: 'REDFAME',
    },
    {
      Id: 1867,
      Name: 'IISITE',
    },
    {
      Id: 1868,
      Name: 'IISTE',
    },
    {
      Id: 1869,
      Name: 'IISTE',
    },
    {
      Id: 1870,
      Name: 'IISTE',
    },
    {
      Id: 1871,
      Name: 'IISTE',
    },
    {
      Id: 1872,
      Name: 'IISTE',
    },
    {
      Id: 1873,
      Name: 'IISTE',
    },
    {
      Id: 1874,
      Name: 'Horizon Research Publishing',
    },
    {
      Id: 1875,
      Name: 'Horizon Research Publishing',
    },
    {
      Id: 1876,
      Name: 'Horizon Research Publishing',
    },
    {
      Id: 1877,
      Name: 'Horizon Research Publishing',
    },
    {
      Id: 1878,
      Name: ' Horizon Research Publishing',
    },
    {
      Id: 1879,
      Name: 'Horizon Research Publishing',
    },
    {
      Id: 1880,
      Name: ' Horizon Research Publishing',
    },
    {
      Id: 1881,
      Name: ' Horizon Research Publishing',
    },
    {
      Id: 1882,
      Name: 'Horizon Research Publishing',
    },
    {
      Id: 1883,
      Name: 'Horizon Research Publishing',
    },
    {
      Id: 1884,
      Name: ' Horizon Research Publishing',
    },
    {
      Id: 1885,
      Name: ' Horizon Research Publishing',
    },
    {
      Id: 1886,
      Name: ' Canadian Center of Science and Education',
    },
    {
      Id: 1887,
      Name: 'Canadian Center of Science and Education',
    },
    {
      Id: 1888,
      Name: 'Canadian Center of Science and Education',
    },
    {
      Id: 1889,
      Name: 'CANADIAN CENTER OF SCIENCE AND EDUCATION',
    },
    {
      Id: 1890,
      Name: 'Canadian Center of Science and Education',
    },
    {
      Id: 1891,
      Name: 'Canadian Center of Science and Education',
    },
    {
      Id: 1892,
      Name: 'Canadian Center of Science and Education',
    },
    {
      Id: 1893,
      Name: ' Canadian Center of Science and Education',
    },
    {
      Id: 1894,
      Name: 'Canadian Center of Science and Education',
    },
    {
      Id: 1895,
      Name: 'Canadian Center of Science and Education',
    },
    {
      Id: 1896,
      Name: 'Canadian Center of Science and Education',
    },
    {
      Id: 1897,
      Name: 'International Electronic Journal of Elementary Education',
    },
    {
      Id: 1898,
      Name: 'INTERNATIONAL ELECTRONIC JOURNAL OF ELEMENTARY EDUCATION',
    },
    {
      Id: 1899,
      Name: ' Eurasian Society of Educational Research',
    },
    {
      Id: 1900,
      Name: 'Eurasian Society of Educational Research ',
    },
    {
      Id: 1901,
      Name: 'A Publication of Penn State Libraries Open Publishing',
    },
    {
      Id: 1902,
      Name: 'ANI PUBLISHING',
    },
    {
      Id: 1903,
      Name: 'ANI PUBLISHING',
    },
    {
      Id: 1904,
      Name: 'http://dergipark.ulakbim.gov.tr/ijres',
    },
    {
      Id: 1905,
      Name: 'International Journal of Research in Education and Science',
    },
    {
      Id: 1906,
      Name: ' Academic Development Institute',
    },
    {
      Id: 1907,
      Name: 'INTERNATIONAL LITERACY ASSOCIATION',
    },
    {
      Id: 1908,
      Name: 'INTERNATIONAL LITERACY ASSOCIATION',
    },
    {
      Id: 1909,
      Name: 'UNIVERSITY ',
    },
    {
      Id: 1910,
      Name: 'UNIVERSITY OF ALBERTA',
    },
    {
      Id: 1911,
      Name: 'Aksaray University',
    },
    {
      Id: 1912,
      Name: 'Aksaray University',
    },
    {
      Id: 1913,
      Name: ' Conferences and Publishing International Limited',
    },
    {
      Id: 1914,
      Name: ' SAGE Publications',
    },
    {
      Id: 1915,
      Name: 'North American Association for Environmental Education',
    },
    {
      Id: 1916,
      Name: 'University of Malta',
    },
    {
      Id: 1917,
      Name: 'PKP Publishing Services ',
    },
    {
      Id: 1918,
      Name: 'University of California',
    },
    {
      Id: 1919,
      Name: 'The California Digital Library ',
    },
    {
      Id: 1920,
      Name: 'The California Digital Library ',
    },
    {
      Id: 1921,
      Name: 'California Digital Library',
    },
    {
      Id: 1922,
      Name: 'California Digital Library',
    },
    {
      Id: 1923,
      Name: 'KARLSTADS UNIVERSITET',
    },
    {
      Id: 1924,
      Name: 'KARLSTADS UNIVERSITET',
    },
    {
      Id: 1925,
      Name: 'Western Libraries',
    },
    {
      Id: 1926,
      Name: 'Western University',
    },
    {
      Id: 1927,
      Name: 'TOJET',
    },
    {
      Id: 1928,
      Name: 'TOJET',
    },
    {
      Id: 1929,
      Name: ' The University of Georgia College of Education',
    },
    {
      Id: 1930,
      Name: 'The University of Georgia College of Education',
    },
    {
      Id: 1931,
      Name: 'TASET',
    },
    {
      Id: 1932,
      Name: 'TASET',
    },
    {
      Id: 1933,
      Name: 'Cooperative Education Unit',
    },
    {
      Id: 1934,
      Name: ' Cooperative Education Unit',
    },
    {
      Id: 1935,
      Name: 'Laureate Education',
    },
    {
      Id: 1936,
      Name: 'Laureate Education',
    },
    {
      Id: 1937,
      Name: 'Society of Education',
    },
    {
      Id: 1938,
      Name: 'Society of Education',
    },
    {
      Id: 1939,
      Name: 'Mevlana University Educational Faculty',
    },
    {
      Id: 1940,
      Name: 'Mevlana University Educational Faculty',
    },
    {
      Id: 1941,
      Name: 'Springer Nature ',
    },
    {
      Id: 1942,
      Name: 'SpringerOpen',
    },
    {
      Id: 1943,
      Name: 'Fayetteville State University',
    },
    {
      Id: 1944,
      Name: 'Critical Education',
    },
    {
      Id: 1945,
      Name: 'Journal of Learning Development in Higher Education',
    },
    {
      Id: 1946,
      Name: 'K-12 STEM Education',
    },
    {
      Id: 1947,
      Name: 'Institute of Professional Studies',
    },
    {
      Id: 1948,
      Name: 'TOJCE',
    },
    {
      Id: 1949,
      Name: 'Polytechnic Institute of Viana do Castelo - Schooll of Education',
    },
    {
      Id: 1950,
      Name: ' International Journal of English and Education',
    },
    {
      Id: 1951,
      Name: 'International Journal of English and Education',
    },
    {
      Id: 1952,
      Name: 'Science Park Research, Organization and Counseling',
    },
    {
      Id: 1953,
      Name: ' World Education, Science, Research and Counseling Center',
    },
    {
      Id: 1954,
      Name: ' LOOK Academic Publishers',
    },
    {
      Id: 1955,
      Name: 'African Journal of Health Professions Education',
    },
    {
      Id: 1956,
      Name: 'Index Copernicus International',
    },
    {
      Id: 1957,
      Name: 'Educational Sciences Department',
    },
    {
      Id: 1958,
      Name: 'Mustafa Ersoy',
    },
    {
      Id: 1959,
      Name: 'Pamukkale University',
    },
    {
      Id: 1960,
      Name: ' Chinese American Educational Research and Development Association',
    },
    {
      Id: 1961,
      Name: 'COMUNICAR',
    },
    {
      Id: 1962,
      Name: ' University of Malaya',
    },
    {
      Id: 1963,
      Name: '[Journal of Education Policy, Planning and Administration',
    },
    {
      Id: 1964,
      Name: 'Directory of Open Access Journals',
    },
    {
      Id: 1965,
      Name: 'T&K Academic     ',
    },
    {
      Id: 1966,
      Name: 'University of Sofia',
    },
    {
      Id: 1967,
      Name: 'UNIVERSITEPARK',
    },
    {
      Id: 1968,
      Name: 'Elsevier Publishing Campus',
    },
    {
      Id: 1969,
      Name: 'Universitas Negeri Yogyakarta',
    },
    {
      Id: 1970,
      Name: 'The Design and Technology Association',
    },
    {
      Id: 1971,
      Name: 'INDEX COPERNICUS',
    },
    {
      Id: 1972,
      Name: 'The Learning & Technology Library',
    },
    {
      Id: 1973,
      Name: 'Electronic Education Magazine',
    },
    {
      Id: 1974,
      Name: 'Texas Christian University',
    },
    {
      Id: 1975,
      Name: 'Consortia Academia',
    },
    {
      Id: 1976,
      Name: 'Institute for Critical Education Studie',
    },
    {
      Id: 1977,
      Name: 'The University of Georgia',
    },
    {
      Id: 1978,
      Name: 'European Journal of Contemporary Education',
    },
    {
      Id: 1979,
      Name: ' University of Borås',
    },
    {
      Id: 1980,
      Name: 'TOJCE',
    },
    {
      Id: 1981,
      Name: 'ELSEVIER',
    },
    {
      Id: 1982,
      Name: 'Academic Development Institute',
    },
    {
      Id: 1983,
      Name: 'SWOSU',
    },
    {
      Id: 1984,
      Name: 'North American Association for Environmental Education',
    },
    {
      Id: 1985,
      Name: 'International Journal of Special Education',
    },
    {
      Id: 1986,
      Name: 'Near East University',
    },
    {
      Id: 1987,
      Name: 'Greek Association of Primary Music Education Teachers',
    },
    {
      Id: 1988,
      Name: 'T&K Academic     ',
    },
    {
      Id: 1989,
      Name: 'Austin Publishing Group ',
    },
    {
      Id: 1990,
      Name: 'Innovative Publication ',
    },
    {
      Id: 1991,
      Name: 'The Forsyth Institute ',
    },
    {
      Id: 1992,
      Name: 'Orthotown L.L.C',
    },
    {
      Id: 1993,
      Name: 'Wiley',
    },
    {
      Id: 1994,
      Name: 'ANU PRESS',
    },
    {
      Id: 1995,
      Name: 'INDIA EDUCATION REVIEW',
    },
    {
      Id: 1996,
      Name: 'Tribune Publishing Company',
    },
    {
      Id: 1997,
      Name: 'New Century Science Press LLC',
    },
    {
      Id: 1998,
      Name: 'Afarand Scholarly Publishing Institute',
    },
    {
      Id: 1999,
      Name: 'Afarand Scholarly Publishing Institute',
    },
    {
      Id: 2000,
      Name: 'Hunter New England Local Health District',
    },
    {
      Id: 2001,
      Name: 'Diponegoro University',
    },
    {
      Id: 2002,
      Name: ' University of Ostrava',
    },
    {
      Id: 2003,
      Name: 'University of Ostrava',
    },
    {
      Id: 2004,
      Name: ' New Century Science Press Limited',
    },
    {
      Id: 2005,
      Name: 'HIMSS',
    },
    {
      Id: 2997,
      Name: 'Professor Despina Sapountzi-Krepia',
    },
    {
      Id: 2998,
      Name: 'BioMed Central',
    },
    {
      Id: 2999,
      Name: 'Dove Medical Press',
    },
    {
      Id: 3000,
      Name: 'MASHHAD UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 3001,
      Name: 'Shiraz University of Medical Sciences',
    },
    {
      Id: 3002,
      Name: 'Wiley',
    },
    {
      Id: 3003,
      Name: 'Hindawi Publishing Corporation',
    },
    {
      Id: 3004,
      Name: 'SAGE Publishing',
    },
    {
      Id: 3005,
      Name: 'AOSIS',
    },
    {
      Id: 3006,
      Name: 'University of Ottawa',
    },
    {
      Id: 3007,
      Name: '  Hindawi Publishing Corporation',
    },
    {
      Id: 3008,
      Name: 'Hindawi Publishing Corporation',
    },
    {
      Id: 3009,
      Name: 'Korean Academy of Women Health Nursing',
    },
    {
      Id: 3010,
      Name: 'Wolters Kluwer Medknow Publications',
    },
    {
      Id: 3011,
      Name: 'Rural Nurse Organization and Bighamton University',
    },
    {
      Id: 3012,
      Name: 'Belitung Raya Publisher',
    },
    {
      Id: 3013,
      Name: 'Asia Pacific Higher Learning',
    },
    {
      Id: 3014,
      Name: 'Fundación para el Desarrollo de la Enfermería',
    },
    {
      Id: 3015,
      Name: 'American Association of Nurse Anesthetists',
    },
    {
      Id: 3016,
      Name: 'KOREAN SOCIETY OF NURSING SCIENCE',
    },
    {
      Id: 3017,
      Name: 'KOREAN ASSOCIATION OF MEDICAL JOURNAL EDITORS',
    },
    {
      Id: 3018,
      Name: 'DVL',
    },
    {
      Id: 3019,
      Name: 'AUSTRALIAN NURSING & MIDWIFERY FEDERATION',
    },
    {
      Id: 3020,
      Name: 'BIOMED CENTRAL',
    },
    {
      Id: 3021,
      Name: ' University of Ostrava',
    },
    {
      Id: 3022,
      Name: 'AMERICAN ASSOCIATION OF CRITICAL-CARE NURSES',
    },
    {
      Id: 3023,
      Name: 'DEMOCRATIC NURSING ORGANISATION OF SOUTH AFRICA',
    },
    {
      Id: 3024,
      Name: 'BMJ PUBLISHING GROUP LTD.',
    },
    {
      Id: 3025,
      Name: 'ELSEVIER',
    },
    {
      Id: 3026,
      Name: 'SHIRAZ UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 3027,
      Name: 'HINDAWI PUBLISHING CORPORATION',
    },
    {
      Id: 3028,
      Name: 'TABRIZ UNIVERSITY OF MEDICAL SCIENCES',
    },
    {
      Id: 3029,
      Name: 'BINKIE MAIS',
    },
    {
      Id: 3030,
      Name: 'AMERICAN ASSOCIATION FOR MANAGED CARE NURSING',
    },
    {
      Id: 3031,
      Name: 'http://journals.sbmu.ac.ir/jps/issue/archive',
    },
    {
      Id: 3032,
      Name: 'KUFA UNIVERSITY',
    },
    {
      Id: 3033,
      Name: 'NURSING AND MIDWIFERY RESEARCH JOURNAL',
    },
    {
      Id: 3034,
      Name: 'AMERICAN NURSE ASSOCIATION ',
    },
    {
      Id: 3035,
      Name: 'Rural Nurse Organization',
    },
    {
      Id: 3036,
      Name: 'Journal of Dental Hygiene Science',
    },
    {
      Id: 3037,
      Name: 'Nobel Research ',
    },
    {
      Id: 4036,
      Name: 'NOVARTIS',
    },
    {
      Id: 4037,
      Name: 'CANADIAN NURSE',
    },
    {
      Id: 4038,
      Name: 'EDUNOVUS',
    },
    {
      Id: 4039,
      Name: 'Indian Pharmaceutical Association (IPA)',
    },
    {
      Id: 4040,
      Name: 'CENTRAL DRUGS STANDARD CONTROL ORGANIZATION -INDIA',
    },
    {
      Id: 4041,
      Name: 'Anthony J. Jannetti, Inc',
    },
    {
      Id: 4042,
      Name: 'Health Science Journal ',
    },
    {
      Id: 4043,
      Name: 'BRNSS Publication Hub',
    },
    {
      Id: 4044,
      Name: 'Investigación y Educación en Enfermería',
    },
    {
      Id: 4045,
      Name: 'Emanuscript ',
    },
    {
      Id: 4046,
      Name: 'Faculty of Nursing and Midwifery,',
    },
    {
      Id: 4047,
      Name: 'Walter De Gruyter',
    },
    {
      Id: 4048,
      Name: 'ARS PHARMACEUTICA',
    },
    {
      Id: 4049,
      Name: 'The Pharmaceutical Society of Japan',
    },
    {
      Id: 4050,
      Name: 'BioPharm International',
    },
    {
      Id: 4051,
      Name: 'Japanese Society of Chemotherapy',
    },
    {
      Id: 4052,
      Name: 'The Japanese Society of Clinical Neuropsychopharmacology ',
    },
    {
      Id: 4053,
      Name: 'The Japanese Society of Clinical Neuropsychopharmacology ',
    },
    {
      Id: 4054,
      Name: 'THE KOREAN COLLEGE OF NEUROPSYCHOPHARMACOLOGY',
    },
    {
      Id: 4055,
      Name: 'European Association of Hospital Pharmacists',
    },
    {
      Id: 4056,
      Name: ' THE JAPAN SOCIETY OF DRUG DELIVERY SYSTEM ',
    },
    {
      Id: 4057,
      Name: 'THE JAPAN SOCIETY OF DRUG DELIVERY SYSTEM ',
    },
    {
      Id: 4058,
      Name: 'ASSOCIATION OF PHARMACEUTICAL TEACHERS OF INDIA (APTI)',
    },
    {
      Id: 4059,
      Name: 'INSIGHT MEDICAL PUBLISHING',
    },
    {
      Id: 4060,
      Name: 'INTERNATIONAL JOURNAL OF PHARMACEUTICAL RESEARCH AND DEVELOPMENT',
    },
    {
      Id: 4061,
      Name: 'PHARMSCOPE PUBLICATIONS',
    },
    {
      Id: 4062,
      Name: 'Pulsus Group',
    },
    {
      Id: 4063,
      Name: 'Iranian Association of Pharmaceutical Scientists',
    },
    {
      Id: 4064,
      Name: 'IRAN UNIVERSITY OF MEDICAL SCIENCE',
    },
    {
      Id: 4065,
      Name: 'Korean Pharmacopuncture Institute',
    },
    {
      Id: 4066,
      Name: 'Pediatric Pharmacy Advocacy Group',
    },
    {
      Id: 4067,
      Name: 'JOURNAL OF PHARMACY RESEARCH',
    },
    {
      Id: 4068,
      Name: 'Polish Physiological Society',
    },
    {
      Id: 4069,
      Name: 'Phcog.net',
    },
    {
      Id: 5047,
      Name: 'AkiNik Publications',
    },
    {
      Id: 5048,
      Name: 'Pulsus Group',
    },
    {
      Id: 5049,
      Name: 'Accademia Peloritana dei Pericolanti  ',
    },
    {
      Id: 5050,
      Name: 'Accademia Peloritana dei Pericolanti  ',
    },
    {
      Id: 5051,
      Name: 'University Publications  ',
    },
    {
      Id: 5052,
      Name: 'Accademia Peloritana dei Pericolanti  ',
    },
    {
      Id: 5053,
      Name: 'American Chemical Society  ',
    },
    {
      Id: 5054,
      Name: 'Multidisciplinary Digital Publishing Institute  ',
    },
    {
      Id: 5055,
      Name: 'American Association for the Advancement of Science  ',
    },
    {
      Id: 5056,
      Name: 'American Association for the Advancement of Science  ',
    },
    {
      Id: 5057,
      Name: 'National Cave Research and Protection Organization ',
    },
    {
      Id: 5058,
      Name: 'Open Science Publishers ',
    },
    {
      Id: 5059,
      Name: 'Science Publishing Group',
    },
    {
      Id: 5060,
      Name: 'American Journal of Biopharmacology Biochemistry and Life Sciences  ',
    },
    {
      Id: 5061,
      Name: 'ScienceHub  ',
    },
    {
      Id: 5062,
      Name: 'American Journal of Science  ',
    },
    {
      Id: 5063,
      Name: 'American Association for Science and Technology  ',
    },
    {
      Id: 5064,
      Name: 'Korean Society of Analytical Science  ',
    },
    {
      Id: 5065,
      Name: 'Japan Society for Analytical Chemistry  ',
    },
    {
      Id: 5066,
      Name: 'Negah Institute for Scientific Communication  ',
    },
    {
      Id: 5067,
      Name: 'Vedic Research International  ',
    },
    {
      Id: 5068,
      Name: 'Vedic Research International  ',
    },
    {
      Id: 5069,
      Name: 'Columbia International Publishing  ',
    },
    {
      Id: 5070,
      Name: 'Polish Academy of Sciences  ',
    },
    {
      Id: 5071,
      Name: 'Dr. RK Misra  ',
    },
    {
      Id: 5072,
      Name: 'Hikari Publishing Ltd  ',
    },
    {
      Id: 5073,
      Name: 'Natural Sciences Publishing Corporation  ',
    },
    {
      Id: 5074,
      Name: 'Progressive Science Publications',
    },
    {
      Id: 5075,
      Name: 'Balkan Society of Geometers  ',
    },
    {
      Id: 5076,
      Name: 'Balkan Society of Geometers ',
    },
    {
      Id: 5077,
      Name: 'Elsevier Science  ',
    },
    {
      Id: 5078,
      Name: 'King Fahd University of Petroleum and Minerals  ',
    },
    {
      Id: 5079,
      Name: 'Knowledgia Scientific',
    },
    {
      Id: 5080,
      Name: 'Multidisciplinary Journals  ',
    },
    {
      Id: 5081,
      Name: 'Hind Agri-Horticultural Society  ',
    },
    {
      Id: 5082,
      Name: 'Athens Institute for Education and Research  ',
    },
    {
      Id: 5083,
      Name: 'Control Publications  ',
    },
    {
      Id: 5084,
      Name: 'American Eurasian Network for Scientific Information  ',
    },
    {
      Id: 5085,
      Name: 'Scientific & Academic Publishing  ',
    },
    {
      Id: 5086,
      Name: 'Copernicus GmbH ',
    },
    {
      Id: 5087,
      Name: 'SciPress Ltd',
    },
    {
      Id: 5088,
      Name: 'BPAS Research  ',
    },
    {
      Id: 5089,
      Name: 'American Academy of Arts & Sciences  ',
    },
    {
      Id: 5090,
      Name: 'Institute of Mathematics Polish Academy of Sciences  ',
    },
    {
      Id: 5091,
      Name: 'Consortium Publishers',
    },
    {
      Id: 5092,
      Name: 'Applied Science Innovations  ',
    },
    {
      Id: 5093,
      Name: 'Caribbean Natural Science  ',
    },
    {
      Id: 5094,
      Name: 'Center of Advanced Scientific Research and Publications ',
    },
    {
      Id: 5095,
      Name: 'Science and Education Publishing',
    },
    {
      Id: 5096,
      Name: 'Royal Society of Chemistry  ',
    },
    {
      Id: 5097,
      Name: 'Chemical Science Transactions',
    },
    {
      Id: 5098,
      Name: 'Coastal and Estuarine Research Federation  ',
    },
    {
      Id: 5099,
      Name: 'International Society of East Asian Science, Technology, and Medicine',
    },
    {
      Id: 5100,
      Name: 'AGH University of Science and Technology  ',
    },
    {
      Id: 5101,
      Name: 'Current Science Association  ',
    },
    {
      Id: 5102,
      Name: 'Americanos College  ',
    },
    {
      Id: 5103,
      Name: 'IOS Press  ',
    },
    {
      Id: 5104,
      Name: 'Association for Science Education  ',
    },
    {
      Id: 5105,
      Name: 'Korean Society of Elementary Science Education  ',
    },
    {
      Id: 5106,
      Name: 'Future Science  ',
    },
    {
      Id: 5107,
      Name: 'Science Gate Publishing P.C  ',
    },
    {
      Id: 5108,
      Name: 'Mehmet Akif Ocak  ',
    },
    {
      Id: 5109,
      Name: 'Council for Scientific and Industrial Research Ghana  ',
    },
    {
      Id: 5110,
      Name: 'Global Journal Series  ',
    },
    {
      Id: 5111,
      Name: 'Research India Publications  ',
    },
    {
      Id: 5112,
      Name: 'Science History Publications Ltd  ',
    },
    {
      Id: 5113,
      Name: 'Faculty of Science, Obafemi Awolowo University  ',
    },
    {
      Id: 5114,
      Name: 'Taylor and Francis Ltd  ',
    },
    {
      Id: 5115,
      Name: 'Discovery Publication  ',
    },
    {
      Id: 5116,
      Name: 'Innovare Academic Sciences  ',
    },
    {
      Id: 5117,
      Name: 'Insciences Organisation  ',
    },
    {
      Id: 5118,
      Name: 'Graduate School of Information Sciences  ',
    },
    {
      Id: 5119,
      Name: 'nternational Journal for Research in Applied Science and Engineering Technology  ',
    },
    {
      Id: 5120,
      Name: 'International Journals for Research  ',
    },
    {
      Id: 5121,
      Name: 'GlobalTek Publications  ',
    },
    {
      Id: 5122,
      Name: 'International Journal of Advanced Information Science and Technology  ',
    },
    {
      Id: 5123,
      Name: 'IGI Publishing  ',
    },
    {
      Id: 5124,
      Name: 'Research India Publications  ',
    },
    {
      Id: 5125,
      Name: 'Serials Publications  ',
    },
    {
      Id: 5126,
      Name: 'International Academy of Science, Engineering and Technology  ',
    },
    {
      Id: 5127,
      Name: 'Science Instinct Publication  ',
    },
    {
      Id: 5128,
      Name: 'Computer Science Journals  ',
    },
    {
      Id: 5129,
      Name: 'Modern Scientific Press  ',
    },
    {
      Id: 5130,
      Name: 'Master Rameshwar Dutt Sharma Educational and Charitable Trust  ',
    },
    {
      Id: 5131,
      Name: 'Academe Research Journals   ',
    },
    {
      Id: 5132,
      Name: 'Emerald Group Publishing Limited  ',
    },
    {
      Id: 5133,
      Name: 'International Academy for Science and Technology Education and Research  ',
    },
    {
      Id: 5134,
      Name: 'Alkhaer Publications  ',
    },
    {
      Id: 5135,
      Name: 'Sage Publications  ',
    },
    {
      Id: 5136,
      Name: 'Scholarly Exchange, Inc  ',
    },
    {
      Id: 5137,
      Name: 'John Wiley and Sons, Ltd  ',
    },
    {
      Id: 5138,
      Name: 'International Science Community Association  ',
    },
    {
      Id: 5139,
      Name: 'Center for Islam and Science  ',
    },
    {
      Id: 5140,
      Name: 'IOS Press  ',
    },
    {
      Id: 5141,
      Name: 'Journal of Advanced Research and Science  ',
    },
    {
      Id: 5142,
      Name: 'Society of Advanced Science  ',
    },
    {
      Id: 5143,
      Name: 'Bangladesh Academy of Sciences ',
    },
    {
      Id: 5144,
      Name: 'Lifescience Global  ',
    },
    {
      Id: 5145,
      Name: 'Science Indoors  ',
    },
    {
      Id: 5146,
      Name: 'International Journal of Research and Development Organisation  ',
    },
    {
      Id: 5147,
      Name: 'Sci-Edit Publications  ',
    },
    {
      Id: 5148,
      Name: 'Company of Biologists Ltd  ',
    },
    {
      Id: 5149,
      Name: 'Open Science Publications  ',
    },
    {
      Id: 5150,
      Name: 'Ommega Publishers  ',
    },
    {
      Id: 5151,
      Name: 'Journal of Chemical and Pharmaceutical Sciences  ',
    },
    {
      Id: 5152,
      Name: 'World Academic Publishing  ',
    },
    {
      Id: 5153,
      Name: 'Dr. V. K. Sharma  ',
    },
    {
      Id: 5154,
      Name: 'Misbah Qadir  ',
    },
    {
      Id: 5155,
      Name: 'Misbah Qadir  ',
    },
    {
      Id: 5156,
      Name: 'Scienceflora Publishers Pvt. Ltd  ',
    },
    {
      Id: 5157,
      Name: 'Cankiri Karatekin University  ',
    },
    {
      Id: 5158,
      Name: 'American Research Institute for Policy Development ',
    },
    {
      Id: 5159,
      Name: 'Scientific Research Gate  ',
    },
    {
      Id: 5160,
      Name: 'Valahia University  ',
    },
    {
      Id: 5161,
      Name: 'Cycling Research Center  ',
    },
    {
      Id: 5162,
      Name: 'Walter de Gruyter GmbH & Co. KG  ',
    },
    {
      Id: 5163,
      Name: 'Samford University  ',
    },
    {
      Id: 5164,
      Name: 'Arizona-Nevada Academy of Science  ',
    },
    {
      Id: 5165,
      Name: 'Arkansas Academy of Science  ',
    },
    {
      Id: 5166,
      Name: 'Asiatic Society of Bangladesh  ',
    },
    {
      Id: 5167,
      Name: 'National Science Foundation of Sri Lanka  ',
    },
    {
      Id: 5168,
      Name: 'Marsland Press ',
    },
    {
      Id: 5169,
      Name: 'Lucknow University  ',
    },
    {
      Id: 5170,
      Name: 'University of Georgia  ',
    },
    {
      Id: 5171,
      Name: 'American Institute of Mathematical Sciences  ',
    },
    {
      Id: 5172,
      Name: 'World Scientific Publishing Co Pvt Ltd  ',
    },
    {
      Id: 5173,
      Name: 'MEDtube Ltd  ',
    },
    {
      Id: 5174,
      Name: 'Shahzad & Co  ',
    },
    {
      Id: 5175,
      Name: 'Northwest Scientific Association  ',
    },
    {
      Id: 5176,
      Name: 'STM Journals  ',
    },
    {
      Id: 5177,
      Name: 'Scientific Research Publishing, Inc ',
    },
    {
      Id: 5178,
      Name: 'Scientific Online Publishing  ',
    },
    {
      Id: 5179,
      Name: 'Open Journal of Mathematical Sciences  ',
    },
    {
      Id: 5180,
      Name: 'Bentham Science Publishers Ltd  ',
    },
    {
      Id: 5181,
      Name: 'Science and Technology Publishing  ',
    },
    {
      Id: 5182,
      Name: 'NVO Start  ',
    },
    {
      Id: 5183,
      Name: 'Institute for Operations Research and the Management Sciences  ',
    },
    {
      Id: 5184,
      Name: 'Science and Technology Information Institute  ',
    },
    {
      Id: 5185,
      Name: 'Net Journals',
    },
    {
      Id: 5186,
      Name: 'Biological and Chemical Publishing ',
    },
    {
      Id: 5187,
      Name: 'Pinnacle Journal Publication  ',
    },
    {
      Id: 5188,
      Name: 'Pioneer Scientific Publisher  ',
    },
    {
      Id: 5189,
      Name: 'International School for Advanced Studies  ',
    },
    {
      Id: 5190,
      Name: 'Estonian Academy Publishers ',
    },
    {
      Id: 5191,
      Name: 'Estonian Academic Agricultural Society  ',
    },
    {
      Id: 5192,
      Name: 'Estonian Academic Agricultural Society  ',
    },
    {
      Id: 5193,
      Name: 'Indian National Science Academy  ',
    },
    {
      Id: 5194,
      Name: 'Indiana Academy of Science  ',
    },
    {
      Id: 5195,
      Name: 'International Academy of Ecology and Environmental Sciences',
    },
    {
      Id: 5196,
      Name: 'Japan Academy ',
    },
    {
      Id: 5197,
      Name: 'National Academy of Sciences, USA  ',
    },
    {
      Id: 5198,
      Name: 'Royal Irish Academy  ',
    },
    {
      Id: 5199,
      Name: 'European Mathematical Society  ',
    },
    {
      Id: 5200,
      Name: 'National Center for Science Education  ',
    },
    {
      Id: 5201,
      Name: 'Research and Reviews ',
    },
    {
      Id: 5202,
      Name: 'Vidya Publications, Mohali  ',
    },
    {
      Id: 5203,
      Name: 'Nobel Publishing  ',
    },
    {
      Id: 5204,
      Name: 'Academy for Environment and Life Sciences  ',
    },
    {
      Id: 5205,
      Name: 'Wudpecker Journals  ',
    },
    {
      Id: 5206,
      Name: 'Metaichmio Publications  ',
    },
    {
      Id: 5207,
      Name: 'Conspress Publishing House  ',
    },
    {
      Id: 5208,
      Name: 'Romanian Regional Science Association  ',
    },
    {
      Id: 5209,
      Name: 'IPSO  ',
    },
    {
      Id: 5210,
      Name: 'King Saud University  ',
    },
    {
      Id: 5211,
      Name: 'Scholarly Journals International ',
    },
    {
      Id: 5212,
      Name: 'Guilford Press  ',
    },
    {
      Id: 5213,
      Name: 'Science and Technology Journals  ',
    },
    {
      Id: 5214,
      Name: 'Science Society of Thailand  ',
    },
    {
      Id: 5215,
      Name: 'Bibliographical Center for Research ',
    },
    {
      Id: 5216,
      Name: 'Office of the Vice Chancellor for Research & Development,University of the Philippines  ',
    },
    {
      Id: 5217,
      Name: 'Science Publishing Group  ',
    },
    {
      Id: 5218,
      Name: 'John Wiley and Sons, Ltd ',
    },
    {
      Id: 5219,
      Name: 'International Council of Associations for Science Education  ',
    },
    {
      Id: 5220,
      Name: 'Science Teachers Association of New South Wales  ',
    },
    {
      Id: 5221,
      Name: 'National Science Education Leadership Association  ',
    },
    {
      Id: 5222,
      Name: 'Liverpool University Press  ',
    },
    {
      Id: 5223,
      Name: 'SF-TH Inc  ',
    },
    {
      Id: 5224,
      Name: 'Engineers Press Group  ',
    },
    {
      Id: 5225,
      Name: 'EIROforum  ',
    },
    {
      Id: 5226,
      Name: 'British Council  ',
    },
    {
      Id: 5227,
      Name: 'Universal Research Journals  ',
    },
    {
      Id: 5228,
      Name: 'Science International  ',
    },
    {
      Id: 5229,
      Name: 'Science International  ',
    },
    {
      Id: 5230,
      Name: 'Science Journal Publication ',
    },
    {
      Id: 5231,
      Name: 'Moroccan Association of Researchers and Scholars  ',
    },
    {
      Id: 5232,
      Name: 'Science Publishers  ',
    },
    {
      Id: 5233,
      Name: 'Science Service  ',
    },
    {
      Id: 5234,
      Name: 'National Science Teachers Association  ',
    },
    {
      Id: 5235,
      Name: 'Mizo Post-Graduate Science Society  ',
    },
    {
      Id: 5236,
      Name: 'Vellalar College for Women  ',
    },
    {
      Id: 5237,
      Name: 'Kowsar Medical Institute  ',
    },
    {
      Id: 5238,
      Name: 'Sift Desk Publishers  ',
    },
    {
      Id: 5239,
      Name: 'Süleyman Demirel University  ',
    },
    {
      Id: 5240,
      Name: 'International Seed Testing Association  ',
    },
    {
      Id: 5241,
      Name: 'Croatian Society of Agronomists  ',
    },
    {
      Id: 5242,
      Name: 'Selcuk University ',
    },
    {
      Id: 5243,
      Name: 'Institute of Physics Publishing  ',
    },
    {
      Id: 5244,
      Name: 'Eleven Senses  ',
    },
    {
      Id: 5245,
      Name: 'Sports Academy, Belgrade  ',
    },
    {
      Id: 5246,
      Name: 'Aurel Vlaicu University  ',
    },
    {
      Id: 5247,
      Name: 'Theory and Science  ',
    },
    {
      Id: 5248,
      Name: 'Trakia University  ',
    },
    {
      Id: 5249,
      Name: 'Kansas Academy of Science  ',
    },
    {
      Id: 5250,
      Name: 'University of Nebraska-Lincoln ',
    },
    {
      Id: 5251,
      Name: 'International Union of Biochemistry and Molecular Biology  ',
    },
    {
      Id: 5252,
      Name: 'Society for Advancement of Science and Rural Development  ',
    },
    {
      Id: 5253,
      Name: 'DAMA International  ',
    },
    {
      Id: 5254,
      Name: 'DAMA International  ',
    },
    {
      Id: 5255,
      Name: 'Begell House, Inc  ',
    },
    {
      Id: 5256,
      Name: 'University of Jaffna  ',
    },
    {
      Id: 5257,
      Name: 'VSRD International Journals Division ',
    },
    {
      Id: 5258,
      Name: 'Publishing House Scientific Survey  ',
    },
    {
      Id: 5259,
      Name: 'Wesley and Eber Publishing  ',
    },
    {
      Id: 5260,
      Name: 'Informatics Publishing Limited  ',
    },
    {
      Id: 5261,
      Name: 'Synchro Publisher  ',
    },
    {
      Id: 5262,
      Name: 'World Science Research Journals Ltd  ',
    },
    {
      Id: 5263,
      Name: 'Academic and Scientific Publishing  ',
    },
    {
      Id: 5264,
      Name: 'World Journal of Publisher  ',
    },
    {
      Id: 5265,
      Name: 'World Association for Sustainable Development ',
    },
    {
      Id: 5266,
      Name: 'International Digital Organization for Scientific Information Publications  ',
    },
    {
      Id: 5267,
      Name: 'Inderscience Enterprises Limited  ',
    },
    {
      Id: 5268,
      Name: 'World Scientific and Engineering Academy and Society  ',
    },
    {
      Id: 5269,
      Name: 'Verlag der Zeitschrift für Naturforschung  ',
    },
    {
      Id: 5270,
      Name: 'Zimbabwe Scientific Association ',
    },
    {
      Id: 5271,
      Name: 'Zoological Society of Japan  ',
    },
    {
      Id: 5272,
      Name: 'International Journal for Research in Applied Science and Engineering Technology  ',
    },
    {
      Id: 5273,
      Name: 'IDRR PUBLICATIONS',
    },
    {
      Id: 5274,
      Name: 'University of Birjand',
    },
    {
      Id: 5275,
      Name: ' Koya University',
    },
    {
      Id: 5276,
      Name: 'Koya University',
    },
    {
      Id: 5277,
      Name: ' Koya University',
    },
    {
      Id: 5278,
      Name: 'Andalas University',
    },
    {
      Id: 5279,
      Name: 'Graduate Program, Andalas University',
    },
    {
      Id: 5280,
      Name: 'Universidade Federal Rural do Semi-Árido',
    },
    {
      Id: 5281,
      Name: 'Salesiana Polytechnic University',
    },
    {
      Id: 5282,
      Name: 'Islamic Azad University',
    },
    {
      Id: 5283,
      Name: 'Corporación Colombiana de Investigación Agropecuaria (Corpoica)',
    },
    {
      Id: 5284,
      Name: 'Wiley',
    },
    {
      Id: 5285,
      Name: 'University of Zagreb, Faculty of Agriculture',
    },
    {
      Id: 5286,
      Name: 'Copernicus Publications',
    },
    {
      Id: 5287,
      Name: 'University of Debrecen',
    },
    {
      Id: 5288,
      Name: 'Autonomous University of Nayarit',
    },
    {
      Id: 5289,
      Name: 'Naucno-innovacionnyj Centr',
    },
    {
      Id: 5290,
      Name: 'Council for agricultural research and analysis of the agrarian economy - Research Center for Forestry and Wood',
    },
    {
      Id: 5291,
      Name: 'Center for Animal Research and Development',
    },
    {
      Id: 5292,
      Name: 'Sugar Beet Seed Institute',
    },
    {
      Id: 5293,
      Name: 'Faculty of Agricultural Sciences, National University of Córdoba',
    },
    {
      Id: 5294,
      Name: 'Czech Academy of Agricultural Sciences',
    },
    {
      Id: 5295,
      Name: 'Central University Marta Abreu de Las Villas',
    },
    {
      Id: 5296,
      Name: 'AAS Journal',
    },
    {
      Id: 5297,
      Name: ' Salesiana Polytechnic University',
    },
    {
      Id: 5298,
      Name: 'Board of Trustees for Engineering and Construction in Agriculture e. V.',
    },
    {
      Id: 5299,
      Name: ' Oxford University Press',
    },
    {
      Id: 5300,
      Name: 'University of the State of Santa Catarina',
    },
    {
      Id: 5301,
      Name: ' Mendel University Press',
    },
    {
      Id: 5302,
      Name: 'Society of Agrarian Sciences of Portugal',
    },
    {
      Id: 5303,
      Name: 'South Valley University',
    },
    {
      Id: 5304,
      Name: ' Research Institute for Fruit Growing Pitesti',
    },
    {
      Id: 5305,
      Name: 'Turkish Science and Tecnology (TST)',
    },
    {
      Id: 5306,
      Name: 'Sciendo',
    },
    {
      Id: 5307,
      Name: 'AcademicPres',
    },
    {
      Id: 5308,
      Name: ' National University of Asunción',
    },
    {
      Id: 5309,
      Name: 'Bogor Agricultural Institute',
    },
    {
      Id: 5310,
      Name: 'Sciendo',
    },
    {
      Id: 5311,
      Name: 'Institute of Rural Health',
    },
    {
      Id: 5312,
      Name: 'AcademicPres',
    },
    {
      Id: 5313,
      Name: ' University of Tehran',
    },
    {
      Id: 5314,
      Name: 'International Journal of Secondary Metabolite',
    },
    {
      Id: 5315,
      Name: ' University of Ljubljana, Biotechnical Faculty',
    },
    {
      Id: 5316,
      Name: ' Sciendo',
    },
    {
      Id: 5317,
      Name: 'International Journal of Food and Agricultural Economics',
    },
    {
      Id: 5318,
      Name: 'IJARIT Research Foundation',
    },
    {
      Id: 5319,
      Name: 'Peoples’ Friendship University of Russia (RUDN University)',
    },
    {
      Id: 5320,
      Name: 'Universidad Nacional de Trujillo',
    },
    {
      Id: 5321,
      Name: ' Kamel Belhamel',
    },
    {
      Id: 5322,
      Name: 'Scientific Society of Agricultural Economists of the Balkans, Belgrade; Institute of Economics of Agriculture, Belgrade and Academy of Economic Sciences, Bucharest',
    },
    {
      Id: 5323,
      Name: 'SpringerOpen',
    },
    {
      Id: 5324,
      Name: 'Gents Afrika Platform, Afrika Brug',
    },
    {
      Id: 5325,
      Name: 'Agronomic Institute for Overseas (IAO)',
    },
    {
      Id: 5326,
      Name: 'Slovak University of Agriculture',
    },
    {
      Id: 5327,
      Name: 'Universidad Juárez Autónoma de Tabasco',
    },
    {
      Id: 5328,
      Name: 'Contemporary Agriculture',
    },
    {
      Id: 5329,
      Name: 'PAGEPress Publications',
    },
    {
      Id: 5330,
      Name: 'University of Kragujevac, Faculty of Agronomy, Cacak',
    },
    {
      Id: 5331,
      Name: 'Federal University of Goiás',
    },
    {
      Id: 5332,
      Name: 'University of the Republic',
    },
    {
      Id: 5333,
      Name: 'Slovak University of Agriculture in Nitra',
    },
    {
      Id: 5334,
      Name: 'Czech Academy of Agricultural Sciences',
    },
    {
      Id: 5335,
      Name: 'Indonesian Coffee and Cocoa Research Institute',
    },
    {
      Id: 5336,
      Name: ' International Center for Tropical Agriculture',
    },
    {
      Id: 5337,
      Name: 'University of Western Sao Paulo, UNOESTE',
    },
    {
      Id: 5338,
      Name: 'Farm to Fork Foundation',
    },
    {
      Id: 5339,
      Name: 'Thomas A. Lyson Center for Civic Agriculture and Food Systems',
    },
    {
      Id: 5340,
      Name: ' TathQeef Scientific Publishing',
    },
    {
      Id: 5341,
      Name: ' National Institute of Agricultural and Food Research and Technology',
    },
    {
      Id: 5342,
      Name: 'NISCAIR',
    },
    {
      Id: 5343,
      Name: 'Hasanuddin University',
    },
    {
      Id: 5344,
      Name: 'Universidade Federal de Roraima',
    },
    {
      Id: 5345,
      Name: 'Faculty of Agricultural Sciences. National University of Cuyo',
    },
    {
      Id: 5346,
      Name: ' Julius Kühn-Institut',
    },
    {
      Id: 5347,
      Name: 'SUNBLO LC',
    },
    {
      Id: 5348,
      Name: 'Muhammadiyah University Purwokerto',
    },
    {
      Id: 5349,
      Name: 'Federal Institute of Education, Science and Technology of Amapá',
    },
    {
      Id: 5350,
      Name: 'European Agrophysical Institute',
    },
    {
      Id: 5351,
      Name: 'Biotika',
    },
    {
      Id: 5352,
      Name: 'MDPI AG',
    },
    {
      Id: 5353,
      Name: 'University of California Agriculture and Natural Resources',
    },
    {
      Id: 5354,
      Name: 'National Institute of Agricultural Technology (INTA)',
    },
    {
      Id: 5355,
      Name: 'Federal University of Pernambuco',
    },
    {
      Id: 5356,
      Name: 'University of the State of Mato Grosso',
    },
    {
      Id: 5357,
      Name: 'American Society of Agronomy; Crop Science Society of America; Soil Science Society of America',
    },
    {
      Id: 5358,
      Name: 'Iranian Society of Irrigation and Water',
    },
    {
      Id: 5359,
      Name: 'MDPI AG',
    },
    {
      Id: 5360,
      Name: 'Autonomous University of Yucatán',
    },
    {
      Id: 5361,
      Name: 'PAGEPress Publications',
    },
    {
      Id: 5362,
      Name: 'Scientific Agricultural Society of Finland',
    },
    {
      Id: 5363,
      Name: ' Indio Hatuey Pastures and Forages Experimental Station',
    },
    {
      Id: 5364,
      Name: 'Federal University of Mato Grosso (UFMT)',
    },
    {
      Id: 5365,
      Name: 'AgroAid Foundation',
    },
    {
      Id: 5366,
      Name: 'Universitas Brawijaya',
    },
    {
      Id: 5367,
      Name: 'Odessa National Academy of Food Technologies',
    },
    {
      Id: 5368,
      Name: ' Center for Animal Research and Development',
    },
    {
      Id: 5369,
      Name: 'Trakia University. Faculty of Agriculture, Stara Zagora',
    },
    {
      Id: 5370,
      Name: 'Universitas Gadjah Mada',
    },
    {
      Id: 5371,
      Name: 'Bati Akdeniz Agricultural Research Institute',
    },
    {
      Id: 5372,
      Name: ' National University of Colombia',
    },
    {
      Id: 5373,
      Name: 'University of Montenegro',
    },
    {
      Id: 5374,
      Name: 'Bangladesh Agricultural University Research System',
    },
    {
      Id: 5375,
      Name: 'AGRI-OVERSEAS',
    },
    {
      Id: 5376,
      Name: 'Shahid Sadoughi University of Medical Sciences and Health Services',
    },
    {
      Id: 5377,
      Name: 'Mendel University Press',
    },
    {
      Id: 5378,
      Name: 'Universidade Federal de Mato Grosso (UFMT)',
    },
    {
      Id: 5379,
      Name: 'Kastamonu University',
    },
    {
      Id: 5380,
      Name: 'Ondokuz Mayis University',
    },
    {
      Id: 5381,
      Name: 'Jomard Publishing',
    },
    {
      Id: 5382,
      Name: 'Industrial and Agricultural Magazine of Tucumán',
    },
    {
      Id: 5383,
      Name: ' TathQeef Scientific Publishing',
    },
    {
      Id: 5384,
      Name: 'Siirt University',
    },
    {
      Id: 5385,
      Name: ' Mexican Society of Soil Science AC',
    },
    {
      Id: 5386,
      Name: 'Trunojoyo University of Madura',
    },
    {
      Id: 5387,
      Name: 'University of Nariño',
    },
    {
      Id: 5388,
      Name: ' Moldova State Agrarian University',
    },
    {
      Id: 5389,
      Name: 'KeAi',
    },
    {
      Id: 5390,
      Name: 'Life Sciences Society of Pakistan',
    },
    {
      Id: 5391,
      Name: 'University of Agronomic Sciences and Veterinary Medicine of Bucharest',
    },
    {
      Id: 5392,
      Name: ' University Business Academy, Faculty of Economics and Engineering Management, Novi Sad, Serbia',
    },
    {
      Id: 5393,
      Name: 'Nepal Agricultural Research Council',
    },
    {
      Id: 5394,
      Name: 'Librelloph',
    },
    {
      Id: 5395,
      Name: ' Agroprint Timisoara',
    },
    {
      Id: 5396,
      Name: ' Instituto de Investigaciones Agropecuarias, INIA',
    },
    {
      Id: 5397,
      Name: 'Latin American Association of Animal Production',
    },
    {
      Id: 5398,
      Name: ' Journal of Agriculture and Food Sciences',
    },
    {
      Id: 5399,
      Name: 'Bangladesh Council of Scientific and Industrial Research',
    },
    {
      Id: 5400,
      Name: ' LPPM Merdeka University Surabaya',
    },
    {
      Id: 5401,
      Name: 'Kassel University Press',
    },
    {
      Id: 5402,
      Name: 'Abant Izzet Baysal University',
    },
    {
      Id: 5403,
      Name: 'Advances in Agricultural Science',
    },
    {
      Id: 5404,
      Name: 'ADERA',
    },
    {
      Id: 5405,
      Name: 'Czech Academy of Agricultural Sciences',
    },
    {
      Id: 5406,
      Name: 'Bogor Agricultural University',
    },
    {
      Id: 5407,
      Name: 'Federal State Budgetary Scientific Institution "Federal Scientific Vegetable Center"',
    },
    {
      Id: 5408,
      Name: 'National University of Colombia, Headquarters Medellín',
    },
    {
      Id: 5409,
      Name: 'Lithuanian Research Centre for Agriculture and Forestry',
    },
    {
      Id: 5410,
      Name: 'Scientific Publications of the Museum',
    },
    {
      Id: 5411,
      Name: 'Eleven March University',
    },
    {
      Id: 5412,
      Name: ' Sabaragamuwa University, Faculty of Agricultural Sciences',
    },
    {
      Id: 5413,
      Name: 'Sciendo',
    },
    {
      Id: 5414,
      Name: 'Federal University of Santa Maria',
    },
    {
      Id: 5415,
      Name: 'Bahauddin Zakariya University',
    },
    {
      Id: 5416,
      Name: ' Federal University of São Carlos (UFSCAR)',
    },
    {
      Id: 5417,
      Name: 'University of Sucre',
    },
    {
      Id: 5418,
      Name: ' De Gruyter',
    },
    {
      Id: 5419,
      Name: 'Suleyman Demirel University',
    },
    {
      Id: 5420,
      Name: 'Elewa BioSciences',
    },
    {
      Id: 5421,
      Name: 'Leonardo Daniel Ploper',
    },
    {
      Id: 5422,
      Name: 'De Gruyter',
    },
    {
      Id: 5423,
      Name: 'Intechopen',
    },
    {
      Id: 5424,
      Name: 'American Journal Of Pharmaceutical Education',
    },
    {
      Id: 5425,
      Name: 'Gazi University  ',
    },
    {
      Id: 5426,
      Name: 'University of Zagreb  ',
    },
    {
      Id: 5427,
      Name: 'Juniper Publishers  ',
    },
    {
      Id: 5428,
      Name: 'International Scholars Journals Publishing Corporation  ',
    },
    {
      Id: 5429,
      Name: 'Ivy Union Publishing LLC  ',
    },
    {
      Id: 5430,
      Name: 'McMed International  ',
    },
    {
      Id: 5431,
      Name: 'CIC Edizioni Internazionali  ',
    },
    {
      Id: 5432,
      Name: 'Mind Reader Publications  ',
    },
    {
      Id: 5433,
      Name: 'Annals of Dental Specialty  ',
    },
    {
      Id: 5434,
      Name: 'Dr. Rohit Varshney  ',
    },
    {
      Id: 5435,
      Name: 'Open Access Publishing London  ',
    },
    {
      Id: 5436,
      Name: 'Aperito Online Publishing  ',
    },
    {
      Id: 5437,
      Name: 'Medknow Publications Pvt Ltd  ',
    },
    {
      Id: 5438,
      Name: 'Quintessence Publishing Co Ltd  ',
    },
    {
      Id: 5439,
      Name: 'Bharat Paper House  ',
    },
    {
      Id: 5440,
      Name: 'Vernon Innovative Publishers Pvt Ltd  ',
    },
    {
      Id: 5441,
      Name: 'Editora Champagnat  ',
    },
    {
      Id: 5442,
      Name: 'Universiti Sains Malaysia  ',
    },
    {
      Id: 5443,
      Name: 'Ediciones Avances, S.L.  ',
    },
    {
      Id: 5444,
      Name: 'Bangladesh Academy of Dentistry International  ',
    },
    {
      Id: 5445,
      Name: 'Bangladesh Orthodontic Society  ',
    },
    {
      Id: 5446,
      Name: 'Dental Foundation of Ribeirão Preto  ',
    },
    {
      Id: 5447,
      Name: 'Universidade Estadual Paulista  ',
    },
    {
      Id: 5448,
      Name: 'Universidade de Pernambuco  ',
    },
    {
      Id: 5449,
      Name: 'Brazilian Journal of Oral Sciences  ',
    },
    {
      Id: 5450,
      Name: 'Groupement International pour la Recherche Scientifique en Stomatologie et Odontologie  ',
    },
    {
      Id: 5451,
      Name: 'Tokyo Dental College  ',
    },
    {
      Id: 5452,
      Name: 'Lasting Impressions Press  ',
    },
    {
      Id: 5453,
      Name: 'Babol University of Medical Sciences  ',
    },
    {
      Id: 5454,
      Name: 'Universidad CES  ',
    },
    {
      Id: 5455,
      Name: 'Chulalongkorn University  ',
    },
    {
      Id: 5456,
      Name: 'John Wiley and Sons, Ltd  ',
    },
    {
      Id: 5457,
      Name: 'Universidade de São Paulo  ',
    },
    {
      Id: 5458,
      Name: 'Dove Medical Press Ltd  ',
    },
    {
      Id: 5459,
      Name: 'Jaypee Brothers Medical Publishers  ',
    },
    {
      Id: 5460,
      Name: 'Wroclaw Medical University  ',
    },
    {
      Id: 5461,
      Name: 'OMICS Publishing Group  ',
    },
    {
      Id: 5462,
      Name: 'United Business Media company  ',
    },
    {
      Id: 5463,
      Name: 'Open Access Text Pvt. Ltd  ',
    },
    {
      Id: 5464,
      Name: 'Openventio Publishers  ',
    },
    {
      Id: 5465,
      Name: 'Donnish Journals  ',
    },
    {
      Id: 5466,
      Name: 'E-Cronicon  ',
    },
    {
      Id: 5467,
      Name: 'Edorium Journals  ',
    },
    {
      Id: 5468,
      Name: 'Innovative Publication  ',
    },
    {
      Id: 5469,
      Name: 'Società Italiana di Odontoiatria Infantile  ',
    },
    {
      Id: 5470,
      Name: 'Springer Science+Business Media  ',
    },
    {
      Id: 5471,
      Name: 'Global Science Research Journals  ',
    },
    {
      Id: 5472,
      Name: 'Research Evolution Technology Press  ',
    },
    {
      Id: 5473,
      Name: 'Greek Orthodontic Society  ',
    },
    {
      Id: 5474,
      Name: 'Korean Academy of Oral and Maxillofacial Radiology  ',
    },
    {
      Id: 5475,
      Name: 'National Academy of Dentistry  ',
    },
    {
      Id: 5476,
      Name: 'Diva Enterprises Pvt. Ltd  ',
    },
    {
      Id: 5477,
      Name: 'Indian Journal Of Stomatology  ',
    },
    {
      Id: 5478,
      Name: 'Yadav Scientific Journals Publishers  ',
    },
    {
      Id: 5479,
      Name: 'Incessant Nature Science Publishers Pvt Ltd  ',
    },
    {
      Id: 5480,
      Name: "Indian Medical Students' Association  ",
    },
    {
      Id: 5481,
      Name: 'Modern Dentistry Media CC  ',
    },
    {
      Id: 5482,
      Name: 'Cloud Publications  ',
    },
    {
      Id: 5483,
      Name: 'AkiNik Publications  ',
    },
    {
      Id: 5484,
      Name: 'eDent Journals  ',
    },
    {
      Id: 5485,
      Name: 'Dankook University  ',
    },
    {
      Id: 5486,
      Name: 'DentaMed Publishing  ',
    },
    {
      Id: 5487,
      Name: 'Renu Publishers  ',
    },
    {
      Id: 5488,
      Name: 'Celesta Software private limited  ',
    },
    {
      Id: 5489,
      Name: 'Science Publishing Corporation  ',
    },
    {
      Id: 5490,
      Name: 'Transstellar Journal Publications and Research Consultancy Private Limited  ',
    },
    {
      Id: 5491,
      Name: 'Sci Forschen  ',
    },
    {
      Id: 5492,
      Name: 'SciDoc Publishers  ',
    },
    {
      Id: 5493,
      Name: 'Manickam Natarajan  ',
    },
    {
      Id: 5494,
      Name: 'Dr. Sukhbir Sodhi  ',
    },
    {
      Id: 5495,
      Name: 'International Journal of Medical Dentistry  ',
    },
    {
      Id: 5496,
      Name: 'Peertechz  ',
    },
    {
      Id: 5497,
      Name: 'ClinMed International Library  ',
    },
    {
      Id: 5498,
      Name: 'Iranian Association of Endodontists and Iranian Center for Endodontic Research  ',
    },
    {
      Id: 5499,
      Name: 'Jacobs Publishers  ',
    },
    {
      Id: 5500,
      Name: 'Journal of Advanced Medical and Dental Sciences Research  ',
    },
    {
      Id: 5501,
      Name: 'Design for Scientific Renaissance  ',
    },
    {
      Id: 5502,
      Name: 'International Society of Preventive and Community Dentistry  ',
    },
    {
      Id: 5503,
      Name: 'Cairo University  ',
    },
    {
      Id: 5504,
      Name: 'Dr. Manish Goutam  ',
    },
    {
      Id: 5505,
      Name: 'University of Baghdad  ',
    },
    {
      Id: 5506,
      Name: 'Scient Open Access  ',
    },
    {
      Id: 5507,
      Name: 'MedCrave Group  ',
    },
    {
      Id: 5508,
      Name: 'Kalsi IT Solutions  ',
    },
    {
      Id: 5509,
      Name: 'Dental Panacea  ',
    },
    {
      Id: 5510,
      Name: 'Seoul National University  ',
    },
    {
      Id: 5511,
      Name: 'International Association of Dental Research and Scientific Development  ',
    },
    {
      Id: 5512,
      Name: 'Tabriz University of Medical Sciences  ',
    },
    {
      Id: 5513,
      Name: 'Editora Universitária da PUCRS  ',
    },
    {
      Id: 5514,
      Name: 'Verizona Publisher  ',
    },
    {
      Id: 5515,
      Name: 'Association for Dental Sciences of the Republic of China  ',
    },
    {
      Id: 5516,
      Name: 'Sri Siddhartha Academy of Higher Education  ',
    },
    {
      Id: 5517,
      Name: 'Annex Publishers  ',
    },
    {
      Id: 5518,
      Name: 'JScholar  ',
    },
    {
      Id: 5519,
      Name: 'Open Access Pub   ',
    },
    {
      Id: 5520,
      Name: 'Elyns Group  ',
    },
    {
      Id: 5521,
      Name: 'Universitas Indonesia  ',
    },
    {
      Id: 5522,
      Name: 'International Research Journals  ',
    },
    {
      Id: 5523,
      Name: 'Symbiosis Group  ',
    },
    {
      Id: 5524,
      Name: 'Savvy Science Publisher  ',
    },
    {
      Id: 5525,
      Name: 'Journal of Dentofacial Sciences  ',
    },
    {
      Id: 5526,
      Name: 'Stephen Hancocks Limited  ',
    },
    {
      Id: 5527,
      Name: 'Akshantala Enterprises  ',
    },
    {
      Id: 5528,
      Name: 'International Organization for Forensic Odonto-Stomatology  ',
    },
    {
      Id: 5529,
      Name: 'Hacettepe University  ',
    },
    {
      Id: 5530,
      Name: 'MAAN Scientific Research Foundation  ',
    },
    {
      Id: 5531,
      Name: 'Dr. Dominic R M Saldanha  ',
    },
    {
      Id: 5532,
      Name: 'Dentmedpub Research and Printing Co  ',
    },
    {
      Id: 5533,
      Name: 'Islamic Dental Association of Iran  ',
    },
    {
      Id: 5534,
      Name: 'Korean Academy of Dental Technology  ',
    },
    {
      Id: 5535,
      Name: 'Korean Academy of Dental Sciences  ',
    },
    {
      Id: 5536,
      Name: 'Korean Society of Dental Hygiene  ',
    },
    {
      Id: 5537,
      Name: 'Quest Journals Inc  ',
    },
    {
      Id: 5538,
      Name: 'Midentistry cc  ',
    },
    {
      Id: 5539,
      Name: 'Iraqi Association for Oral Research  ',
    },
    {
      Id: 5540,
      Name: 'Sydus Publishing  ',
    },
    {
      Id: 5541,
      Name: 'Avens Publishing Group  ',
    },
    {
      Id: 5542,
      Name: 'Consortium of Research Ardent Dentists  ',
    },
    {
      Id: 5543,
      Name: 'ScienceScript LLC  ',
    },
    {
      Id: 5544,
      Name: 'Japanese Association of Regenerative Dentistry  ',
    },
    {
      Id: 5545,
      Name: 'Ariesdue  ',
    },
    {
      Id: 5546,
      Name: 'Korea Academy of Periodontology  ',
    },
    {
      Id: 5547,
      Name: 'Universidade do Sul de Santa Catarina  ',
    },
    {
      Id: 5548,
      Name: 'Journal of Research in Medical and Dental Science  ',
    },
    {
      Id: 5549,
      Name: 'American Academy of the History of Dentistry  ',
    },
    {
      Id: 5550,
      Name: 'Japanese Society of Periodontology  ',
    },
    {
      Id: 5551,
      Name: 'Japanese Society of Periodontology  ',
    },
    {
      Id: 5552,
      Name: 'Kyushu Dental Society  ',
    },
    {
      Id: 5553,
      Name: 'Pakistan Dental Association  ',
    },
    {
      Id: 5554,
      Name: 'Japan Science and Technology Agency  ',
    },
    {
      Id: 5555,
      Name: 'JSciMed Central  ',
    },
    {
      Id: 5556,
      Name: 'Health Science Journals In Thailand  ',
    },
    {
      Id: 5557,
      Name: 'Mathews International Publishers LLC  ',
    },
    {
      Id: 5558,
      Name: 'Galenos Yayinevi  ',
    },
    {
      Id: 5559,
      Name: 'Medical Channel Publishing Network  ',
    },
    {
      Id: 5560,
      Name: 'Sociedad Española de Medicina Oral  ',
    },
    {
      Id: 5561,
      Name: 'Indra Publishing House  ',
    },
    {
      Id: 5562,
      Name: 'Dental Society of the State of New York  ',
    },
    {
      Id: 5563,
      Name: 'C.S.M. Medical University',
    },
    {
      Id: 5564,
      Name: 'Universidad de Costa Rica  ',
    },
    {
      Id: 5565,
      Name: 'Bentham Science Publishers Ltd  ',
    },
    {
      Id: 5566,
      Name: 'Orthodontic and Dentofacial Orthopedic Association of Nepal  ',
    },
    {
      Id: 5567,
      Name: 'Polish Dental Society  ',
    },
    {
      Id: 5568,
      Name: 'Pyrex Journals  ',
    },
    {
      Id: 5569,
      Name: 'Rama University  ',
    },
    {
      Id: 5570,
      Name: 'Ilustre Consejo General de Colegios de Odontólogos  ',
    },
    {
      Id: 5571,
      Name: 'International Association for Orthodontics',
    },
    {
      Id: 5572,
      Name: 'Japanese Society of Oral Pathology  ',
    },
    {
      Id: 5573,
      Name: 'Korean Academy of Conservative Dentistry  ',
    },
    {
      Id: 5574,
      Name: 'Universidade Estadual Paulista Júlio de Mesquita Filho  ',
    },
    {
      Id: 5575,
      Name: 'Fondo Editorial Universidad Cooperativa de Colombia  ',
    },
    {
      Id: 5576,
      Name: 'Amaltea Medical Publishing House  ',
    },
    {
      Id: 5577,
      Name: 'Saudi Dental Society  ',
    },
    {
      Id: 5578,
      Name: 'Scholars Middle East Publishers   ',
    },
    {
      Id: 5579,
      Name: 'Scholars Academic and Scientific Publishers  ',
    },
    {
      Id: 5580,
      Name: 'Japanese Society for Oral and Maxillofacial Radiology  ',
    },
    {
      Id: 5581,
      Name: 'SM Online Publishers LLC  ',
    },
    {
      Id: 5582,
      Name: 'The South African Dental Association  ',
    },
    {
      Id: 5583,
      Name: 'University of Sarajevo  ',
    },
    {
      Id: 5584,
      Name: 'Kaunas Medical University  ',
    },
    {
      Id: 5585,
      Name: 'Thailand Nursing Council  ',
    },
    {
      Id: 5586,
      Name: 'Teerthanker Mahaveer University  ',
    },
    {
      Id: 5587,
      Name: 'Virtual Journal of Orthodontics  ',
    },
    {
      Id: 5588,
      Name: 'University of Sciences and Technology  ',
    },
    {
      Id: 5589,
      Name: 'Update Dental College  ',
    },
    {
      Id: 5590,
      Name: 'Oral and Craniofacial Research Associates  ',
    },
    {
      Id: 5591,
      Name: 'Japan Prosthodontic Society  ',
    },
    {
      Id: 5592,
      Name: 'Royal Australasian College of Surgeons  ',
    },
    {
      Id: 5593,
      Name: 'Baba Farid University of Health & Sciences  ',
    },
    {
      Id: 5594,
      Name: 'Ascend Media  ',
    },
    {
      Id: 5595,
      Name: 'Rila Publications Ltd  ',
    },
    {
      Id: 5596,
      Name: 'Dental Consultants, Inc  ',
    },
    {
      Id: 5597,
      Name: 'Academy of Dental Materials  ',
    },
    {
      Id: 5598,
      Name: 'MA Healthcare Ltd  ',
    },
    {
      Id: 5599,
      Name: 'George Warman Publications UK Ltd  ',
    },
    {
      Id: 5600,
      Name: 'Egyptian Association of Oral & Maxillofacial Surgeons  ',
    },
    {
      Id: 5601,
      Name: 'Sabinet  ',
    },
    {
      Id: 5602,
      Name: 'Royal College of Surgeons of England  ',
    },
    {
      Id: 5603,
      Name: 'Dr. R.K. Sharma Institute of Medico-Legal Publications  ',
    },
    {
      Id: 5604,
      Name: 'Red Flower Publication Pvt. Ltd  ',
    },
    {
      Id: 5605,
      Name: 'BRS Dental College & General Hospital  ',
    },
    {
      Id: 5606,
      Name: 'Todd Gold',
    },
    {
      Id: 5607,
      Name: 'Luxmi Bai Institute of Dental Sciences & Hospital  ',
    },
    {
      Id: 5608,
      Name: 'Dr. Sharmila Chatterjee  ',
    },
    {
      Id: 5609,
      Name: 'Indian Medico Journals  ',
    },
    {
      Id: 5610,
      Name: 'Isfahan University of Medical Sciences  ',
    },
    {
      Id: 5611,
      Name: 'American Association of Oral and Maxillofacial Surgeons  ',
    },
    {
      Id: 5612,
      Name: 'Asian Association of Oral and Maxillofacial Surgeons  ',
    },
    {
      Id: 5613,
      Name: 'Japanese Association for Oral Biology  ',
    },
    {
      Id: 5614,
      Name: 'Dr. Puja Bansal  ',
    },
    {
      Id: 5615,
      Name: 'American Academy of Implant Dentistry  ',
    },
    {
      Id: 5616,
      Name: 'Dr. M. Srinivasa Raju  ',
    },
    {
      Id: 5617,
      Name: 'British Orthodontic Society  ',
    },
    {
      Id: 5618,
      Name: 'Dasmesh Institute of Research & Dental Sciences  ',
    },
    {
      Id: 5619,
      Name: 'Korean Association of Oral and Maxillofacial Surgeons  ',
    },
    {
      Id: 5620,
      Name: 'World Federation of Orthodontists  ',
    },
    {
      Id: 5621,
      Name: 'Philippine Association of Institutions for Research  ',
    },
    {
      Id: 5622,
      Name: 'Indiana University School of Dentistry  ',
    },
    {
      Id: 5623,
      Name: 'Tissue Engineering Society  ',
    },
    {
      Id: 5624,
      Name: 'HSTalks  ',
    },
    {
      Id: 5625,
      Name: 'Japanese Stomatological Society  ',
    },
    {
      Id: 5626,
      Name: 'Shanghai Jiao Tong University  ',
    },
    {
      Id: 5627,
      Name: 'University of Joinville  ',
    },
    {
      Id: 5628,
      Name: 'Chiang Mai University  ',
    },
    {
      Id: 5629,
      Name: 'Istanbul University Faculty of Dentistry',
    },
    {
      Id: 5630,
      Name: 'Japanese Association for Dental Science  ',
    },
    {
      Id: 5631,
      Name: 'Japanese Society of Orofacial Pain  ',
    },
    {
      Id: 5632,
      Name: 'Chanakya Kumar  ',
    },
    {
      Id: 5633,
      Name: 'Escola Bahiana de Medicina e Saúde Pública  ',
    },
    {
      Id: 5634,
      Name: 'INDERSCIENCE PUBLISHERS',
    },
    {
      Id: 5635,
      Name: 'RESEARCH GATE',
    },
    {
      Id: 5636,
      Name: '21st Century  ',
    },
    {
      Id: 5637,
      Name: 'The Journal of Polish Academy of Sciences',
    },
    {
      Id: 5638,
      Name: '3Ciencias  ',
    },
    {
      Id: 5639,
      Name: 'Istanbul Technical University  ',
    },
    {
      Id: 5640,
      Name: 'American Association of Clinical Endocrinologists  ',
    },
    {
      Id: 5641,
      Name: 'YMT College of Management, Navi Mumbai  ',
    },
    {
      Id: 5642,
      Name: 'American Association of Nurse Anesthetists  ',
    },
    {
      Id: 5643,
      Name: 'SOCIEDADE SOCIEDADE BOTANICA DO BRASIL',
    },
    {
      Id: 5644,
      Name: 'American Association of Neurological Surgeons  ',
    },
    {
      Id: 5645,
      Name: 'Anglo-Australian Observatory  ',
    },
    {
      Id: 5646,
      Name: 'Accademia Peloritana dei Pericolanti  ',
    },
    {
      Id: 5647,
      Name: 'Association of Asia Pacific Physical Societies  ',
    },
    {
      Id: 5648,
      Name: 'Pontifical Catholic University of Minas Gerais  ',
    },
    {
      Id: 5649,
      Name: 'SOCIEDADE BOTANICA DO BRASIL ',
    },
    {
      Id: 5650,
      Name: 'SOCIDADE BOTANICA DO BRASIL',
    },
    {
      Id: 5651,
      Name: 'ABB Corporate Management Services AG  ',
    },
    {
      Id: 5652,
      Name: 'Asian Business Consortium  ',
    },
    {
      Id: 5653,
      Name: 'Faculdade de Medicina do ABC  ',
    },
    {
      Id: 5654,
      Name: 'Acta Botanica Croatica',
    },
    {
      Id: 5655,
      Name: 'Abhinav Journal  ',
    },
    {
      Id: 5656,
      Name: 'Abraham Zelmanov Journal  ',
    },
    {
      Id: 5657,
      Name: ' Institute of Botany W. Szafer Polish Academy of Sciences',
    },
    {
      Id: 5658,
      Name: 'Hindawi Publishing Corporation  ',
    },
    {
      Id: 5659,
      Name: 'Japan Academic Collaboration Medical Society  ',
    },
    {
      Id: 5660,
      Name: 'Association of American Medical Colleges  ',
    },
    {
      Id: 5661,
      Name: 'Institute of Botany W. Szafer Polish Academy of Sciences',
    },
    {
      Id: 5662,
      Name: 'SAVAP International  ',
    },
    {
      Id: 5663,
      Name: 'Academic Research Journals  ',
    },
    {
      Id: 5664,
      Name: 'Thakur Ram Multiple Campus',
    },
    {
      Id: 5665,
      Name: 'Polish Botanical Society Journals',
    },
    {
      Id: 5666,
      Name: ' Department of Environmental Biology',
    },
    {
      Id: 5667,
      Name: 'University of Belgrade',
    },
    {
      Id: 5668,
      Name: 'Brazilian Journal of Plant Physiology',
    },
    {
      Id: 5669,
      Name: 'The Institute of Dendrology',
    },
    {
      Id: 5670,
      Name: 'Sociedade Brasileira de Fitopatologia',
    },
    {
      Id: 5671,
      Name: 'Faculty of Natural and Oceanographic Sciences',
    },
    {
      Id: 5672,
      Name: 'Gene Conserve',
    },
    {
      Id: 5673,
      Name: ' International Mycological Association',
    },
    {
      Id: 5674,
      Name: 'International Mycological Association',
    },
    {
      Id: 5675,
      Name: 'Journal of Pollination Ecology',
    },
    {
      Id: 5676,
      Name: 'DUTCH BRYOLOGICAL AND LICHENOLOGICAL SOCIETY  NORDIC BRYOLOGICAL SOCIETY',
    },
    {
      Id: 5677,
      Name: 'North American Fungi',
    },
    {
      Id: 5678,
      Name: 'FLORABASE',
    },
    {
      Id: 5679,
      Name: 'Oklahoma Native Plant Society',
    },
    {
      Id: 5680,
      Name: 'BENTHAM OPEN',
    },
    {
      Id: 5681,
      Name: 'Flight Safety Foundation  ',
    },
    {
      Id: 5682,
      Name: 'Pakistan Botanical Society',
    },
    {
      Id: 5683,
      Name: 'National Distance Education University  ',
    },
    {
      Id: 5684,
      Name: 'Syiah Kuala University  ',
    },
    {
      Id: 5685,
      Name: ' Japanese Society for Plant Cell and Molecular Biology',
    },
    {
      Id: 5686,
      Name: 'Applied Computational Electromagnetics Society  ',
    },
    {
      Id: 5687,
      Name: 'PLANT OMICS',
    },
    {
      Id: 5688,
      Name: 'American College of Gastroenterology  ',
    },
    {
      Id: 5689,
      Name: 'Brazilian Society of Science',
    },
    {
      Id: 5690,
      Name: 'Brazilian Academy of Sciences',
    },
    {
      Id: 5691,
      Name: ' Brazilian Academy of Sciences',
    },
    {
      Id: 5692,
      Name: 'Shahid Chamran University of Ahvaz  ',
    },
    {
      Id: 5693,
      Name: 'Acoustical Society of Japan  ',
    },
    {
      Id: 5694,
      Name: 'Acoustical Society of America  ',
    },
    {
      Id: 5695,
      Name: 'American Society of Plant Biologists',
    },
    {
      Id: 5696,
      Name: 'American College of Physicians  ',
    },
    {
      Id: 5697,
      Name: 'Faversham House Group Ltd  ',
    },
    {
      Id: 5698,
      Name: 'Institute of Oceanography and Fisheries  ',
    },
    {
      Id: 5699,
      Name: 'University of Ljubljana  ',
    },
    {
      Id: 5700,
      Name: 'Crop Science Society of China  ',
    },
    {
      Id: 5701,
      Name: 'Instituto Nacional de Pesquisas da Amazônia',
    },
    {
      Id: 5702,
      Name: 'Taiwan Society of Anesthesiologists  ',
    },
    {
      Id: 5703,
      Name: 'Arachnological Society of Japan  ',
    },
    {
      Id: 5704,
      Name: 'Polish Biochemical Society  ',
    },
    {
      Id: 5705,
      Name: 'Universidad de Los Andes  ',
    },
    {
      Id: 5706,
      Name: 'Pan American Health Organization  ',
    },
    {
      Id: 5707,
      Name: 'Universidade Federal do Parana  ',
    },
    {
      Id: 5708,
      Name: 'Taylor and Francis Ltd  ',
    },
    {
      Id: 5709,
      Name: 'McMed International  ',
    },
    {
      Id: 5710,
      Name: 'Acta Biomedica Scientifica  ',
    },
    {
      Id: 5711,
      Name: 'Federación Bioquímica de la Provincia de Buenos Aires  ',
    },
    {
      Id: 5712,
      Name: 'Instituto de Ecología, A.C  ',
    },
    {
      Id: 5713,
      Name: 'Fundación Instituto Botánico de Venezuela Dr. Tobías Lasser  ',
    },
    {
      Id: 5714,
      Name: 'Walloon Agricultural Research Center',
    },
    {
      Id: 5715,
      Name: 'Sociedade Botânica do Brasil  ',
    },
    {
      Id: 5716,
      Name: 'Slovenian Academy of Sciences and Arts  ',
    },
    {
      Id: 5717,
      Name: 'Institute of Technology of Paraná - Tecpar ',
    },
    {
      Id: 5718,
      Name: 'Pontificia Universidad Católica de Valparaíso',
    },
    {
      Id: 5719,
      Name: 'Research Center for Biotechnology ',
    },
    {
      Id: 5720,
      Name: 'Faculty of Agriculture, University of Udayana',
    },
    {
      Id: 5721,
      Name: 'PLOVDIV UNIVERSITY PRESS "PAISII HILENDARSKI"',
    },
    {
      Id: 5722,
      Name: 'the Faculty of Biotechnology and Food Sciences',
    },
    {
      Id: 5723,
      Name: 'Biotechnology Institute, National University of Colombia ',
    },
    {
      Id: 5724,
      Name: ' Faculty of Biotechnologies',
    },
    {
      Id: 5725,
      Name: 'OFFICAL JOURNAL OF PHARMACOTHERAPY GROUP',
    },
    {
      Id: 5726,
      Name: ' University of Debrecen ',
    },
    {
      Id: 5727,
      Name: 'Acta Protozoologica',
    },
    {
      Id: 5728,
      Name: 'Applied Ecology and Environmental Research',
    },
    {
      Id: 5729,
      Name: 'Ecology and Society',
    },
    {
      Id: 5730,
      Name: 'The Society for Ethnobiology',
    },
    {
      Id: 5731,
      Name: 'A JOURNAL OF APPLIED PEOPLES, AND APPLIED RESEARCH ',
    },
    {
      Id: 5732,
      Name: 'Swedish Chemical Society  ',
    },
    {
      Id: 5733,
      Name: 'Herpetological Conservation and Biology',
    },
    {
      Id: 5734,
      Name: 'Trade Science, Inc  ',
    },
    {
      Id: 5735,
      Name: 'Slovenian Chemical Society  ',
    },
    {
      Id: 5736,
      Name: 'Klinièki Centar Srbije  ',
    },
    {
      Id: 5737,
      Name: 'Sociedade Brasileira para o Desenvolvimento da Pesquisa em Cirurgia  ',
    },
    {
      Id: 5738,
      Name: 'Sestre milosrdnice University Hospital and Institute for Clinical Medical Research  ',
    },
    {
      Id: 5739,
      Name: 'I.A.U OF TONEKABON BRANCH',
    },
    {
      Id: 5740,
      Name: 'Universidad Católica de Colombia  ',
    },
    {
      Id: 5741,
      Name: 'International Union of Crystallography  ',
    },
    {
      Id: 5742,
      Name: 'Romanian Limnogeographical Association',
    },
    {
      Id: 5743,
      Name: 'Society for Publishing Acta Dermato-Venereologica',
    },
    {
      Id: 5744,
      Name: 'Madagascar Conservation & Development',
    },
    {
      Id: 5745,
      Name: 'Dermatovenerologic Society of Slovenija  ',
    },
    {
      Id: 5746,
      Name: 'Acta Dermatovenerologica Croatica  ',
    },
    {
      Id: 5747,
      Name: 'Madagascar Conservation & Development',
    },
    {
      Id: 5748,
      Name: 'Babes-Bolyai University',
    },
    {
      Id: 5749,
      Name: 'Zibeline International Publishing  ',
    },
    {
      Id: 5750,
      Name: 'Technical University of Kosice',
    },
    {
      Id: 5751,
      Name: 'Marine Turtle Newsletter',
    },
    {
      Id: 5752,
      Name: 'Editura Academiei Romane ',
    },
    {
      Id: 5753,
      Name: 'Entomological Society of Serbia  ',
    },
    {
      Id: 5754,
      Name: 'Opuscula Zoologica Instituti Zoosystematici et Oecologici Universitatis Budapestinensis',
    },
    {
      Id: 5755,
      Name: 'Chinese Academy of Sciences  ',
    },
    {
      Id: 5756,
      Name: 'University of Tartu  ',
    },
    {
      Id: 5757,
      Name: 'Rangifer',
    },
    {
      Id: 5758,
      Name: 'European Space Agency  ',
    },
    {
      Id: 5759,
      Name: 'Sociedad Argentina de Gastroenterología  ',
    },
    {
      Id: 5760,
      Name: 'Geobalcanica Society  ',
    },
    {
      Id: 5761,
      Name: ' Salento University Publishing',
    },
    {
      Id: 5762,
      Name: 'Surveying and Mapping Press  ',
    },
    {
      Id: 5763,
      Name: 'Comenius University in Bratislava  ',
    },
    {
      Id: 5764,
      Name: 'University of Maribor  ',
    },
    {
      Id: 5765,
      Name: 'Japan Society of Histochemistry and Cytochemistry  ',
    },
    {
      Id: 5766,
      Name: 'Scientific Society of Szczecin  ',
    },
    {
      Id: 5767,
      Name: 'Universidade Estadual do Oeste do Paraná  ',
    },
    {
      Id: 5768,
      Name: 'Avicena Publisher Sarajevo ',
    },
    {
      Id: 5769,
      Name: 'University of Economics in Prague  ',
    },
    {
      Id: 5770,
      Name: 'University of Travnik ',
    },
    {
      Id: 5771,
      Name: 'Associação Brasileira de Limnologia  ',
    },
    {
      Id: 5772,
      Name: 'College of Nyíregyháza',
    },
    {
      Id: 5773,
      Name: 'Comenius University  ',
    },
    {
      Id: 5774,
      Name: '4S go, s.r.o  ',
    },
    {
      Id: 5775,
      Name: 'Charles University  ',
    },
    {
      Id: 5776,
      Name: 'Academy of Sciences and Arts of Bosnia and Herzegovina  ',
    },
    {
      Id: 5777,
      Name: 'Alanya Alaaddin Keykubat University  ',
    },
    {
      Id: 5778,
      Name: 'Asociacion Colombiana de Medicina Interna  ',
    },
    {
      Id: 5779,
      Name: 'Colegio de Médicos y Cirujanos de Costa Rica  ',
    },
    {
      Id: 5780,
      Name: 'Croatian Academy of Medical Sciences  ',
    },
    {
      Id: 5781,
      Name: 'Internal Medicine',
    },
    {
      Id: 5782,
      Name: 'Teerthanker Mahaveer University  ',
    },
    {
      Id: 5783,
      Name: 'Tehran University of Medical Sciences  ',
    },
    {
      Id: 5784,
      Name: 'Versita  ',
    },
    {
      Id: 5785,
      Name: 'Nagasaki University School of Medicine  ',
    },
    {
      Id: 5786,
      Name: 'Okayama University Medical School',
    },
    {
      Id: 5787,
      Name: 'Colegio Médico del Perú  ',
    },
    {
      Id: 5788,
      Name: 'Portuguese Medical Association  ',
    },
    {
      Id: 5789,
      Name: 'Acta Medica Transilvanica  ',
    },
    {
      Id: 5790,
      Name: 'Bulgarian Society for Microbiology  ',
    },
    {
      Id: 5791,
      Name: 'Technical University of Kosice ',
    },
    {
      Id: 5792,
      Name: 'Polish Botanical Society  ',
    },
    {
      Id: 5793,
      Name: 'Park Media  ',
    },
    {
      Id: 5794,
      Name: 'Nencki Institute of Experimental Biology  ',
    },
    {
      Id: 5795,
      Name: 'Asociación Colombiana de Neurología  ',
    },
    {
      Id: 5796,
      Name: 'Taiwan Neurological Society  ',
    },
    {
      Id: 5797,
      Name: 'BioMed Central Ltd  ',
    },
    {
      Id: 5798,
      Name: 'Federation of Portuguese Societies of Obstetrics and Gynecology  ',
    },
    {
      Id: 5799,
      Name: 'Universidad Nacional de Colombia  ',
    },
    {
      Id: 5800,
      Name: 'Scientific Electronic Library Online  ',
    },
    {
      Id: 5801,
      Name: 'Society of Automotive Engineers  ',
    },
    {
      Id: 5802,
      Name: 'Wroclaw University of Technology  ',
    },
    {
      Id: 5803,
      Name: 'Taylor and Francis Ltd  ',
    },
    {
      Id: 5804,
      Name: 'Turkish Association of Orthopaedics and Traumatology  ',
    },
    {
      Id: 5805,
      Name: 'Sociedade Brasileira de Ortopedia e Traumatologia  ',
    },
    {
      Id: 5806,
      Name: 'Italian Society of Otorhinolaryngology  ',
    },
    {
      Id: 5807,
      Name: 'Institute of Paleobiology  ',
    },
    {
      Id: 5808,
      Name: 'International Digital Organization for Scientific Information Publications  ',
    },
    {
      Id: 5809,
      Name: 'Escola Paulista de Medicina, Departamento de Enfermagem  ',
    },
    {
      Id: 5810,
      Name: 'Faculty of Technology, Novi Sad  ',
    },
    {
      Id: 5811,
      Name: 'Medigraphic.com  ',
    },
    {
      Id: 5812,
      Name: 'John Wiley and Sons, Ltd  ',
    },
    {
      Id: 5813,
      Name: 'Jagiellonian University  ',
    },
    {
      Id: 5814,
      Name: 'university publishing home',
    },
    {
      Id: 5815,
      Name: 'Czech Technical University in Prague  ',
    },
    {
      Id: 5816,
      Name: 'Óbuda University  ',
    },
    {
      Id: 5817,
      Name: 'Nencki Institute of Experimental Biology  ',
    },
    {
      Id: 5818,
      Name: 'Salento University Publishing',
    },
    {
      Id: 5819,
      Name: 'Portuguese Society of Rheumatology  ',
    },
    {
      Id: 5820,
      Name: 'AU PRESS',
    },
    {
      Id: 5821,
      Name: 'Acta Scientiae et Intellectus  ',
    },
    {
      Id: 5822,
      Name: 'Universidade Federal do Rio Grande do Sul  ',
    },
    {
      Id: 5823,
      Name: 'University of Life Science in Lublin  ',
    },
    {
      Id: 5824,
      Name: 'Urban Habitats',
    },
    {
      Id: 5825,
      Name: 'Wydawnictwa Uczelniane Uniwersytetu Technologiczno-Przyrodniczego w Bydgoszczy  ',
    },
    {
      Id: 5826,
      Name: 'Polish Agricultural Universities  ',
    },
    {
      Id: 5827,
      Name: ' European Ecological Federation ',
    },
    {
      Id: 5828,
      Name: 'Agricultural University of Poznan Press  ',
    },
    {
      Id: 5829,
      Name: 'Eduem - Editora da Universidade Estadual de Maringá  ',
    },
    {
      Id: 5830,
      Name: 'Universidade Estadual de Maringá  ',
    },
    {
      Id: 5831,
      Name: 'Editora da Universidade Estadual de Maringá  ',
    },
    {
      Id: 5832,
      Name: 'Slovenian Forestry Institute  ',
    },
    {
      Id: 5833,
      Name: '4S go, s.r.o  ',
    },
    {
      Id: 5834,
      Name: 'University of Wroclaw  ',
    },
    {
      Id: 5835,
      Name: 'Acta Stomatologica Naissi  ',
    },
    {
      Id: 5836,
      Name: 'African Journals OnLine  ',
    },
    {
      Id: 5837,
      Name: 'University Politehnica Timisoara  ',
    },
    {
      Id: 5838,
      Name: 'Asociación Toxicológica Argentina  ',
    },
    {
      Id: 5839,
      Name: 'Universidad de Guanajuata  ',
    },
    {
      Id: 5840,
      Name: 'Universitatea  ',
    },
    {
      Id: 5841,
      Name: 'Lodz University Press  ',
    },
    {
      Id: 5842,
      Name: 'Palacky University  ',
    },
    {
      Id: 5843,
      Name: 'Universidade Federal Rural do Semi-Árido  ',
    },
    {
      Id: 5844,
      Name: 'University of Veterinary and Pharmaceutical Sciences Brno  ',
    },
    {
      Id: 5845,
      Name: 'BioMed Central Ltd  ',
    },
    {
      Id: 5846,
      Name: 'Hungarian Natural History Museum  ',
    },
    {
      Id: 5847,
      Name: 'Instituto de Ecología, A.C  ',
    },
    {
      Id: 5848,
      Name: 'Society for Actinomycetes Japan  ',
    },
    {
      Id: 5849,
      Name: 'Aprofema S.R.O  ',
    },
    {
      Id: 5850,
      Name: 'Universidad de Antioquia  ',
    },
    {
      Id: 5851,
      Name: 'EDP Sciences  ',
    },
    {
      Id: 5852,
      Name: 'Multidisciplinary Digital Publishing Institute  ',
    },
    {
      Id: 5853,
      Name: 'Korean Society of Critical Care Medicine  ',
    },
    {
      Id: 5854,
      Name: 'John Wiley and Sons, Ltd  ',
    },
    {
      Id: 5855,
      Name: "Scientific Publications of the Muséum National d'Histoire Naturelle  ",
    },
    {
      Id: 5856,
      Name: 'Adarsh Group of Institutions  ',
    },
    {
      Id: 5857,
      Name: 'National Institute on Drug Abuse  ',
    },
    {
      Id: 5858,
      Name: 'Addiction Treatment Forum  ',
    },
    {
      Id: 5859,
      Name: 'Business News Publishing Company  ',
    },
    {
      Id: 5860,
      Name: 'Sociedad Cientifica Espanola de Estudios Sobre el Alcohol  ',
    },
    {
      Id: 5861,
      Name: 'Wydawnictwo Uniwersytetu Warmiñsko-Mazurskiego w Olsztynie  ',
    },
    {
      Id: 5862,
      Name: 'Dove Medical Press Ltd  ',
    },
    {
      Id: 5863,
      Name: 'Progressive Science Publications  ',
    },
    {
      Id: 5864,
      Name: 'Ivy Publisher  ',
    },
    {
      Id: 5865,
      Name: 'Universitätsverlag Göttingen',
    },
    {
      Id: 5866,
      Name: 'Maxwell Science Publication  ',
    },
    {
      Id: 5867,
      Name: 'Institute for Research and Development India  ',
    },
    {
      Id: 5868,
      Name: 'Advance Research in Pharmaceutical and Biologicals  ',
    },
    {
      Id: 5869,
      Name: 'Austin Publishing Group  ',
    },
    {
      Id: 5870,
      Name: 'WV Publisher  ',
    },
    {
      Id: 5871,
      Name: 'Science and Engineering Publishing Company  ',
    },
    {
      Id: 5872,
      Name: 'Academy & Industry Research Collaboration Center  ',
    },
    {
      Id: 5873,
      Name: 'International Scientific Publications and Consulting Services  ',
    },
    {
      Id: 5874,
      Name: 'Academy & Industry Research Collaboration Center  ',
    },
    {
      Id: 5875,
      Name: 'Advanced Electromagnetics  ',
    },
    {
      Id: 5876,
      Name: 'Universe Scientific Publishing Pte. Ltd  ',
    },
    {
      Id: 5877,
      Name: ' University of Calgary Press ',
    },
    {
      Id: 5878,
      Name: 'KIT Scientific Publishing ',
    },
    {
      Id: 5879,
      Name: 'Utilus Busdiness School Zagreb  ',
    },
    {
      Id: 5880,
      Name: 'Ministry of Agriculture and Farmers Welfare',
    },
    {
      Id: 5881,
      Name: 'Advanced Scholars Journals Publishing Corporation  ',
    },
    {
      Id: 5882,
      Name: 'Tehran University of Medical Sciences  ',
    },
    {
      Id: 5883,
      Name: 'Open Access Text Pvt. Ltd  ',
    },
    {
      Id: 5884,
      Name: 'Jomard Publishing  ',
    },
    {
      Id: 5885,
      Name: 'ICI Publishing House  ',
    },
    {
      Id: 5886,
      Name: 'ASD Publisher  ',
    },
    {
      Id: 5887,
      Name: 'World Academic Publishing  ',
    },
    {
      Id: 5888,
      Name: 'University of Tabriz  ',
    },
    {
      Id: 5889,
      Name: 'Scienceweb Publishing  ',
    },
    {
      Id: 5890,
      Name: 'University of Punjab  ',
    },
    {
      Id: 5891,
      Name: 'Scientific Advances Publishers  ',
    },
    {
      Id: 5892,
      Name: 'MD Magazine  ',
    },
    {
      Id: 5893,
      Name: 'Techno Press  ',
    },
    {
      Id: 5894,
      Name: 'Isaac Scientific Publishing Co., Ltd  ',
    },
    {
      Id: 5895,
      Name: 'Scientific & Academic Publishing  ',
    },
    {
      Id: 5896,
      Name: 'Hans Publishers Inc  ',
    },
    {
      Id: 5897,
      Name: 'Nexus Academic Publishers  ',
    },
    {
      Id: 5898,
      Name: 'Science and Engineering Publishing Company  ',
    },
    {
      Id: 5899,
      Name: 'Public Science Framework  ',
    },
    {
      Id: 5900,
      Name: 'Hispaniola Academy of Sciences  ',
    },
    {
      Id: 5901,
      Name: 'Insight Medical Publishing  ',
    },
    {
      Id: 5902,
      Name: 'Gavin International Conferences and Publishers Inc.  ',
    },
    {
      Id: 5903,
      Name: 'International Digital Organization for Scientific Information Publications  ',
    },
    {
      Id: 5904,
      Name: 'International Journals of Scientific Research  ',
    },
    {
      Id: 5905,
      Name: 'BioMed Research Publication  ',
    },
    {
      Id: 5906,
      Name: 'InfinityPress  ',
    },
    {
      Id: 5907,
      Name: 'Australian International Academic Centre PTY. LTD  ',
    },
    {
      Id: 5908,
      Name: 'Juniper Publishers  ',
    },
    {
      Id: 5909,
      Name: 'National Center for Case Study Teaching in Science',
    },
    {
      Id: 5910,
      Name: 'OPEN SCIENCE NETWORK',
    },
    {
      Id: 5911,
      Name: 'Whitehouse Publishing  ',
    },
    {
      Id: 5912,
      Name: 'University of Finance and Management in Warsaw  ',
    },
    {
      Id: 5913,
      Name: 'Institute for Cognitive Science Studies  ',
    },
    {
      Id: 5914,
      Name: 'Bioinfo Publications  ',
    },
    {
      Id: 5915,
      Name: 'Advances in Computer Science: An International Journal  ',
    },
    {
      Id: 5916,
      Name: 'Clausius Scientific Press Inc.  ',
    },
    {
      Id: 5917,
      Name: 'Scientific & Academic Publishing  ',
    },
    {
      Id: 5918,
      Name: 'Hans Publishers Inc  ',
    },
    {
      Id: 5919,
      Name: 'Termedia Publishing House Ltd  ',
    },
    {
      Id: 5920,
      Name: 'International Society for Disease Surveillance  ',
    },
    {
      Id: 5921,
      Name: 'Universidad de Salamanca  ',
    },
    {
      Id: 5922,
      Name: 'Stefan cel Mare University of Suceava  ',
    },
    {
      Id: 5923,
      Name: 'Technical University of Ostrava  ',
    },
    {
      Id: 5924,
      Name: 'American Society for Engineering Education  ',
    },
    {
      Id: 5925,
      Name: 'American Eurasian Network for Scientific Information  ',
    },
    {
      Id: 5926,
      Name: 'Iranian Research Organization for Science and Technology  ',
    },
    {
      Id: 5927,
      Name: 'Science & Knowledge Publishing Corporation Limited  ',
    },
    {
      Id: 5928,
      Name: 'International Scholars Journals Publishing Corporation  ',
    },
    {
      Id: 5929,
      Name: 'UVED',
    },
    {
      Id: 5930,
      Name: 'Heather Miller Coyle, Ph.D.',
    },
    {
      Id: 5931,
      Name: 'Openventio Publishers  ',
    },
    {
      Id: 5932,
      Name: 'Ausasia Science and Technology Press  ',
    },
    {
      Id: 5933,
      Name: 'VIKASPEDIA',
    },
    {
      Id: 5934,
      Name: 'Copernicus GmbH ',
    },
    {
      Id: 5935,
      Name: 'Firenze University Press  ',
    },
    {
      Id: 5936,
      Name: 'Society for Science and Education  ',
    },
    {
      Id: 5937,
      Name: 'Science & Knowledge Publishing Corporation Limited  ',
    },
    {
      Id: 5938,
      Name: 'Jabir Ibn Hayyan Ltd. Publishing  ',
    },
    {
      Id: 5939,
      Name: 'Convention on Biological Diversity',
    },
    {
      Id: 5940,
      Name: 'World Academic Publishing  ',
    },
    {
      Id: 5941,
      Name: 'Academy & Industry Research Collaboration Center  ',
    },
    {
      Id: 5942,
      Name: 'Islamic Azad University of Arak  ',
    },
    {
      Id: 5943,
      Name: 'EXTENSION LEARN',
    },
    {
      Id: 5944,
      Name: 'FROM POVERTY TO POWER',
    },
    {
      Id: 5945,
      Name: 'airbus',
    },
    {
      Id: 5946,
      Name: 'biotech express ',
    },
    {
      Id: 5947,
      Name: 'science daily',
    },
    {
      Id: 5948,
      Name: 'magzter',
    },
    {
      Id: 5949,
      Name: 'MICROBIOLOGY ONLINE',
    },
    {
      Id: 5950,
      Name: 'American Communication Association',
    },
    {
      Id: 5951,
      Name: 'Tallinn University Baltic Film and Media School.',
    },
    {
      Id: 5952,
      Name: 'DALHOUSIE UNIVERSITY',
    },
    {
      Id: 5953,
      Name: 'CIESPAL',
    },
    {
      Id: 5954,
      Name: 'Commposite',
    },
    {
      Id: 5955,
      Name: 'COMMUNIQUER',
    },
    {
      Id: 5956,
      Name: 'THE JOURNAL OF COMMUNITY INFORMATICS ',
    },
    {
      Id: 5957,
      Name: 'Comunicación y Sociedad',
    },
    {
      Id: 5958,
      Name: 'Melissa Terras',
    },
    {
      Id: 5959,
      Name: 'UNIVERSIDAD DEL ROSARIO',
    },
    {
      Id: 5960,
      Name: 'Intermedia International',
    },
    {
      Id: 5961,
      Name: 'EIKON',
    },
    {
      Id: 5962,
      Name: 'EJISDC',
    },
    {
      Id: 5963,
      Name: 'University of Rio Grande do Sul',
    },
    {
      Id: 5964,
      Name: 'The Fibreculture Journal',
    },
    {
      Id: 5965,
      Name: 'ABV-Press Publishing House  ',
    },
    {
      Id: 5966,
      Name: 'A Great Cities Initiative of the University of Illinois ',
    },
    {
      Id: 5967,
      Name: 'Computer Science Journals  ',
    },
    {
      Id: 5968,
      Name: 'American Eurasian Network for Scientific Information  ',
    },
    {
      Id: 5969,
      Name: 'Great Cities Institute, University of Illinois',
    },
    {
      Id: 5970,
      Name: 'Canadian Research & Development Center of Sciences and Cultures  ',
    },
    {
      Id: 5971,
      Name: 'Academic Publications, Ltd.   ',
    },
    {
      Id: 5972,
      Name: 'global media ',
    },
    {
      Id: 5973,
      Name: 'American Physiological Society  ',
    },
    {
      Id: 5974,
      Name: 'National Institute of Polar Research  ',
    },
    {
      Id: 5975,
      Name: 'glocal times',
    },
    {
      Id: 5976,
      Name: 'Universal Research Journals  ',
    },
    {
      Id: 5977,
      Name: 'Science and Education Publishing  ',
    },
    {
      Id: 5978,
      Name: 'Open Science Center',
    },
    {
      Id: 5979,
      Name: 'Whioce Publishing Pte Ltd  ',
    },
    {
      Id: 5980,
      Name: ' University of Seville',
    },
    {
      Id: 5981,
      Name: 'Production Engineering Institute  ',
    },
    {
      Id: 5982,
      Name: 'Research Publisher Inc  ',
    },
    {
      Id: 5983,
      Name: 'Pulmonary Hypertension Association   ',
    },
    {
      Id: 5984,
      Name: ' University of Seville',
    },
    {
      Id: 5985,
      Name: 'Avestia Publishing  ',
    },
    {
      Id: 5986,
      Name: 'Sciencedomain International  ',
    },
    {
      Id: 5987,
      Name: 'Lublin University of Technology  ',
    },
    {
      Id: 5988,
      Name: 'Society of Polish Mechanical Engineers and Technicians  ',
    },
    {
      Id: 5989,
      Name: 'ASTES Publishers  ',
    },
    {
      Id: 5990,
      Name: 'Information Technologies and International Development (ITID)',
    },
    {
      Id: 5991,
      Name: 'Remedica Publishing Ltd.  ',
    },
    {
      Id: 5992,
      Name: 'InMedia ',
    },
    {
      Id: 5993,
      Name: 'Taiwan Association of Engineering and Technology Innovation  ',
    },
    {
      Id: 5994,
      Name: 'uma editorial',
    },
    {
      Id: 5995,
      Name: 'International Journal of Asia Pacific Studies',
    },
    {
      Id: 5996,
      Name: 'usc university of southern california',
    },
    {
      Id: 5997,
      Name: 'International Journal of Computer Science Issues (IJCSI)',
    },
    {
      Id: 5998,
      Name: 'International Journal of Education and Development using ICT (IJEDICT)',
    },
    {
      Id: 5999,
      Name: 'International Journal of Internet Science',
    },
    {
      Id: 6000,
      Name: 'Internet Policy Review',
    },
    {
      Id: 6001,
      Name: ' Invisible Culture',
    },
    {
      Id: 6002,
      Name: 'Institut Teknologi Bandung',
    },
    {
      Id: 6003,
      Name: 'Journal of Alternative and Community Media',
    },
    {
      Id: 6004,
      Name: 'Amity School of Communication',
    },
    {
      Id: 6005,
      Name: 'penn state university press',
    },
    {
      Id: 6006,
      Name: 'Journal of International Crisis and Risk Communication Research',
    },
    {
      Id: 6007,
      Name: 'Journal of Media Critiques [JMC]',
    },
    {
      Id: 6008,
      Name: 'university of baltimore',
    },
    {
      Id: 6009,
      Name: 'Journal of Communication Sciences',
    },
    {
      Id: 6010,
      Name: 'KOME - An International Journal of Pure Communication Inquiry',
    },
    {
      Id: 6011,
      Name: 'Information Technologies and International Development (ITID)',
    },
    {
      Id: 6012,
      Name: 'Krisis - Journal for contemporary philosophy',
    },
    {
      Id: 6013,
      Name: 'Malaysian Journal of Media Studies / Journal of Media Malaysia',
    },
    {
      Id: 6014,
      Name: 'Media and Communication',
    },
    {
      Id: 6015,
      Name: 'Media Theory',
    },
    {
      Id: 6016,
      Name: 'University of Gothenburg',
    },
    {
      Id: 6017,
      Name: 'Observatorio (OBS*) (Multilingual)',
    },
    {
      Id: 6018,
      Name: 'Perspectivas de la Comunicación (Spanish)',
    },
    {
      Id: 6019,
      Name: 'The Political Economy of Communication',
    },
    {
      Id: 6020,
      Name: 'Liceo de Cagayan University Press  ',
    },
    {
      Id: 6021,
      Name: 'Archers and Elevators Publishing House  ',
    },
    {
      Id: 6022,
      Name: 'Atomic Energy of Canada Limited  ',
    },
    {
      Id: 6023,
      Name: 'Aeromag Asia  ',
    },
    {
      Id: 6024,
      Name: 'Institute of Environmental Engineering  ',
    },
    {
      Id: 6025,
      Name: 'Multidisciplinary Digital Publishing Institute  ',
    },
    {
      Id: 6026,
      Name: 'American Institute of Aeronautics and Astronautics  ',
    },
    {
      Id: 6027,
      Name: 'African Crop Science Society  ',
    },
    {
      Id: 6028,
      Name: 'Communication Magazine',
    },
    {
      Id: 6029,
      Name: 'Makerere University  ',
    },
    {
      Id: 6030,
      Name: 'Pensoft Publishers  ',
    },
    {
      Id: 6031,
      Name: 'African Association of Agricultural Economists  ',
    },
    {
      Id: 6032,
      Name: 'International Scholars Journals Publishing Corporation  ',
    },
    {
      Id: 6033,
      Name: 'FAMECOS Magazine: media, culture and technology',
    },
    {
      Id: 6034,
      Name: 'Academic Journals  ',
    },
    {
      Id: 6035,
      Name: 'African Journals OnLine  ',
    },
    {
      Id: 6036,
      Name: 'International Digital Organization for Scientific Information Publications  ',
    },
    {
      Id: 6037,
      Name: 'RIED - Revista Iberoamericana de Educación a Distancia (Spanish)',
    },
    {
      Id: 6038,
      Name: 'Ibadan Biomedical Communications Group  ',
    },
    {
      Id: 6039,
      Name: 'Federation of African Societies of Chemistry  ',
    },
    {
      Id: 6040,
      Name: 'African Journal of Clinical and Experimental Microbiology  ',
    },
    {
      Id: 6041,
      Name: 'Galician universities',
    },
    {
      Id: 6042,
      Name: 'Centre For Research And Information On Substance Abuse  ',
    },
    {
      Id: 6043,
      Name: 'Net Journals  ',
    },
    {
      Id: 6044,
      Name: 'African Journal of Environmental Assessment and Management  ',
    },
    {
      Id: 6045,
      Name: 'International Research Journals  ',
    },
    {
      Id: 6046,
      Name: 'Rural Outreach Program  ',
    },
    {
      Id: 6047,
      Name: 'FUMEC University',
    },
    {
      Id: 6048,
      Name: 'African Journal of Health Sciences  ',
    },
    {
      Id: 6049,
      Name: 'Learning Information Networking and Knowledge Centre  ',
    },
    {
      Id: 6050,
      Name: 'International Center for IT and Development, Southern University  ',
    },
    {
      Id: 6051,
      Name: 'AOSIS OpenJournals  ',
    },
    {
      Id: 6052,
      Name: 'Womens Health and Action Research Centre  ',
    },
    {
      Id: 6053,
      Name: 'Mediterranean Communication Magazine (Spanish)',
    },
    {
      Id: 6054,
      Name: 'Research Centre and Centre for Applied Research Extension to Journalism and Education (OPAJE) of the Federal University of Tocantins (UFT) ',
    },
    {
      Id: 6055,
      Name: 'Revista Orbis (Spanish)',
    },
    {
      Id: 6056,
      Name: 'About journalism, About journalism, Sobre jornalismo',
    },
    {
      Id: 6057,
      Name: 'Studies in Communication | Media (SCM)',
    },
    {
      Id: 6058,
      Name: 'Transformations',
    },
    {
      Id: 6059,
      Name: 'tripleC',
    },
    {
      Id: 6060,
      Name: 'Ramón Llull University',
    },
    {
      Id: 6061,
      Name: 'the Netherlands Institute for Sound and Vision',
    },
    {
      Id: 6062,
      Name: 'live the Academy',
    },
    {
      Id: 6063,
      Name: 'WORLD OF MEDIA',
    },
    {
      Id: 6064,
      Name: 'CP Communications',
    },
    {
      Id: 6065,
      Name: ' University of Minnesota ',
    },
    {
      Id: 6066,
      Name: 'African Network of Scientific and Technical Institutions  ',
    },
    {
      Id: 6067,
      Name: 'Bioline International  ',
    },
    {
      Id: 6068,
      Name: 'IUCN/SSC Primate Specialist Group  ',
    },
    {
      Id: 6069,
      Name: 'Abdus Salam International Centre for Theoretical Physics  ',
    },
    {
      Id: 6070,
      Name: 'AgBioForum  ',
    },
    {
      Id: 6071,
      Name: 'Rapamycin Press  ',
    },
    {
      Id: 6072,
      Name: 'AGON : International Journal of Sport Sciences  ',
    },
    {
      Id: 6073,
      Name: 'Estonian Academic Agricultural Society',
    },
    {
      Id: 6074,
      Name: 'Ark Publications  ',
    },
    {
      Id: 6075,
      Name: 'REBUS COMMUNITY',
    },
    {
      Id: 6076,
      Name: 'AcademicPres Cluj-Napoca  ',
    },
    {
      Id: 6077,
      Name: 'University of Zagreb,Faculty of Science  ',
    },
    {
      Id: 6078,
      Name: 'Greek Association of Agricultural Economists  ',
    },
    {
      Id: 6079,
      Name: 'Scientific Journals   ',
    },
    {
      Id: 6080,
      Name: 'Agricultural and Food Science in Finland  ',
    },
    {
      Id: 6081,
      Name: 'Cambridge University Press  ',
    },
    {
      Id: 6082,
      Name: 'Asian Online Journal Publishing Group  ',
    },
    {
      Id: 6083,
      Name: 'Czech Academy of Agricultural Sciences  ',
    },
    {
      Id: 6084,
      Name: 'intellect',
    },
    {
      Id: 6085,
      Name: 'University of Belgrade  ',
    },
    {
      Id: 6086,
      Name: 'International Commission of Agricultural Engineering  ',
    },
    {
      Id: 6087,
      Name: 'International Digital Organization for Scientific Information Publications  ',
    },
    {
      Id: 6088,
      Name: 'International Association of Agricultural Information Specialists  ',
    },
    {
      Id: 6089,
      Name: 'Medwell Online  ',
    },
    {
      Id: 6090,
      Name: 'Escola de Agronomia e Engenharia de Alimentos  ',
    },
    {
      Id: 6091,
      Name: 'Commonwealth Publishing',
    },
    {
      Id: 6092,
      Name: 'US Department of Agriculture-Economic Research Service  ',
    },
    {
      Id: 6093,
      Name: 'Agricultural Research Communication Center  ',
    },
    {
      Id: 6094,
      Name: 'Science and Education Centre of North America  ',
    },
    {
      Id: 6095,
      Name: 'Trakia University  ',
    },
    {
      Id: 6096,
      Name: 'Directorate of Economics and Statistics / Agriculture  ',
    },
    {
      Id: 6097,
      Name: 'Transcript-Verlag ',
    },
    {
      Id: 6098,
      Name: 'University of Tehran  ',
    },
    {
      Id: 6099,
      Name: 'Agricultural Institute Osijek,Faculty of Agriculture  ',
    },
    {
      Id: 6100,
      Name: 'ScienceHub  ',
    },
    {
      Id: 6101,
      Name: 'Centre for Agriculture and Rural Development  ',
    },
    {
      Id: 6102,
      Name: 'Krishi Foundation  ',
    },
    {
      Id: 6103,
      Name: 'Czech University of Life Sciences Prague  ',
    },
    {
      Id: 6104,
      Name: 'Universidad Nacional de Córdoba  ',
    },
    {
      Id: 6105,
      Name: 'Baker, Peterson & Franklin, CPA, LLP  ',
    },
    {
      Id: 6106,
      Name: 'World Bank Publications',
    },
    {
      Id: 6107,
      Name: 'Tekno Scienze Publisher  ',
    },
    {
      Id: 6108,
      Name: 'Universidad Austral de Chile  ',
    },
    {
      Id: 6109,
      Name: 'Agro-Ciencia  ',
    },
    {
      Id: 6110,
      Name: 'Renu Publishers',
    },
    {
      Id: 6111,
      Name: 'Instituto Nacional de Investigación Agropecuaria  ',
    },
    {
      Id: 6112,
      Name: 'Islamic Azad University, Miyaneh Branch  ',
    },
    {
      Id: 6113,
      Name: 'Wydawnictwo Uniwersytetu Warmiñsko-Mazurskiego w Olsztynie  ',
    },
    {
      Id: 6114,
      Name: 'Universidad Nacional de Colombia  ',
    },
    {
      Id: 6115,
      Name: 'Universidad de Costa Rica  ',
    },
    {
      Id: 6116,
      Name: 'Crop Development Directorate and Agronomy Society of Nepal  ',
    },
    {
      Id: 6117,
      Name: 'Estonian Agricultural University, Faculty of Agronomy  ',
    },
    {
      Id: 6118,
      Name: 'Iasi Aleea Mihail Sadoveanu  ',
    },
    {
      Id: 6119,
      Name: 'Indian Council of Agricultural Research  ',
    },
    {
      Id: 6120,
      Name: 'University of Ilorin  ',
    },
    {
      Id: 6121,
      Name: 'Universitas Udayana  ',
    },
    {
      Id: 6122,
      Name: 'Carnegie Mellon University',
    },
    {
      Id: 6123,
      Name: 'AIDS Survival Project  ',
    },
    {
      Id: 6124,
      Name: 'AIMS Press  ',
    },
    {
      Id: 6125,
      Name: 'Lulu.com',
    },
    {
      Id: 6126,
      Name: 'BookBoon',
    },
    {
      Id: 6127,
      Name: 'Ain Shams University  ',
    },
    {
      Id: 6128,
      Name: 'American Institute of Physics  ',
    },
    {
      Id: 6129,
      Name: 'National Air & Space Museum  ',
    },
    {
      Id: 6130,
      Name: 'United States Air Force  ',
    },
    {
      Id: 6131,
      Name: 'Air Force Association  ',
    },
    {
      Id: 6132,
      Name: 'Cygnus Business Media  ',
    },
    {
      Id: 6133,
      Name: 'Flight Safety Foundation  ',
    },
    {
      Id: 6134,
      Name: 'Association for Information Systems  ',
    },
    {
      Id: 6135,
      Name: 'AJIT-e: Online Academic Journal of Information Technology  ',
    },
    {
      Id: 6136,
      Name: 'Akademeia Journal Ltd  ',
    },
    {
      Id: 6137,
      Name: 'Aksaray Üniversitesi  ',
    },
    {
      Id: 6138,
      Name: 'Ministry of New and Renewable Energy  ',
    },
    {
      Id: 6139,
      Name: 'Al Ameen Charitable Fund Trust  ',
    },
    {
      Id: 6140,
      Name: 'Mosul University  ',
    },
    {
      Id: 6141,
      Name: 'University of Baghdad  ',
    },
    {
      Id: 6142,
      Name: 'Al-Qadisiyah University  ',
    },
    {
      Id: 6143,
      Name: 'Division of Geological & Geophysical Surveys  ',
    },
    {
      Id: 6144,
      Name: 'Agricultural University of Tirana  ',
    },
    {
      Id: 6145,
      Name: 'Aulona Press  ',
    },
    {
      Id: 6146,
      Name: 'Alborz University of Medical Sciences  ',
    },
    {
      Id: 6147,
      Name: 'Lakehead University  ',
    },
    {
      Id: 6148,
      Name: 'National Institute on Alcohol Abuse and Alcoholism  ',
    },
    {
      Id: 6149,
      Name: 'University Hospital Center Sestre Milosrdnice  ',
    },
    {
      Id: 6150,
      Name: 'Alexandria University  ',
    },
    {
      Id: 6151,
      Name: 'Prof. Dr. A. M. Balba Soc  ',
    },
    {
      Id: 6152,
      Name: 'Korean Society of Phycology  ',
    },
    {
      Id: 6153,
      Name: 'National Academy of Sciences of Ukraine  ',
    },
    {
      Id: 6154,
      Name: 'Foundation Compositio Mathematica  ',
    },
    {
      Id: 6155,
      Name: 'Yazd University  ',
    },
    {
      Id: 6156,
      Name: 'University of Ouargla  ',
    },
    {
      Id: 6157,
      Name: 'Kamel Belhamel  ',
    },
    {
      Id: 6158,
      Name: 'Society for the Improvement of Science  ',
    },
    {
      Id: 6159,
      Name: 'All Results Journals  ',
    },
    {
      Id: 6160,
      Name: 'Sam Higginbottom University of Agriculture, Technology And Sciences  ',
    },
    {
      Id: 6161,
      Name: 'Japanese Society of Allergology  ',
    },
    {
      Id: 6162,
      Name: 'OceanSide Publications, Inc  ',
    },
    {
      Id: 6163,
      Name: 'Korean Academy of Asthma, Allergy and Clinical Immunology  ',
    },
    {
      Id: 6164,
      Name: 'American Society for Cellular and Computational Toxicology  ',
    },
    {
      Id: 6165,
      Name: 'Japanese Society for Alternative to Animal Experiments  ',
    },
    {
      Id: 6166,
      Name: 'American Medical Association  ',
    },
    {
      Id: 6167,
      Name: 'Universidade Federal Rural da Amazônia  ',
    },
    {
      Id: 6168,
      Name: 'Universidade Federal do Pará  ',
    },
    {
      Id: 6169,
      Name: 'National Cave Research and Protection Organization  ',
    },
    {
      Id: 6170,
      Name: 'ANPPAS  ',
    },
    {
      Id: 6171,
      Name: 'Asociación Paleontológica Argentina  ',
    },
    {
      Id: 6172,
      Name: 'American Academy of Orthopaedic Surgeons  ',
    },
    {
      Id: 6173,
      Name: 'American Bee Journal  ',
    },
    {
      Id: 6174,
      Name: 'American Communication Association  ',
    },
    {
      Id: 6175,
      Name: 'American Forests  ',
    },
    {
      Id: 6176,
      Name: 'Engage Healthcare Communications  ',
    },
    {
      Id: 6177,
      Name: 'International Association of Scientific Innovation and Research  ',
    },
    {
      Id: 6178,
      Name: 'American Journal of Advances in Medical Science   ',
    },
    {
      Id: 6179,
      Name: 'eScience Publisher  ',
    },
    {
      Id: 6180,
      Name: ' Routledge ',
    },
    {
      Id: 6181,
      Name: 'Peter Lang International Academic Publishing Group',
    },
    {
      Id: 6182,
      Name: 'UCL Press',
    },
    {
      Id: 6183,
      Name: ' Open Humanities Press ',
    },
    {
      Id: 6184,
      Name: 'CRC Press ',
    },
    {
      Id: 6185,
      Name: 'Routledge ',
    },
    {
      Id: 6186,
      Name: ' University of Adelaide Press ',
    },
    {
      Id: 6187,
      Name: ' Open Book Publishers ',
    },
    {
      Id: 6188,
      Name: 'New World Publishing International  ',
    },
    {
      Id: 6189,
      Name: 'International Scientific Information  ',
    },
    {
      Id: 6190,
      Name: 'SciKnow  ',
    },
    {
      Id: 6191,
      Name: 'American Journal of Clinical Chiropractic  ',
    },
    {
      Id: 6192,
      Name: 'eJManager LLC  ',
    },
    {
      Id: 6193,
      Name: 'Clute Institute  ',
    },
    {
      Id: 6194,
      Name: 'American Journal of Engineering Research  ',
    },
    {
      Id: 6195,
      Name: 'American Journal of Experimental and Clinical Research  ',
    },
    {
      Id: 6196,
      Name: 'American Journal of Forensic Psychology  ',
    },
    {
      Id: 6197,
      Name: 'Atlantic Center for Research Sciences  ',
    },
    {
      Id: 6198,
      Name: 'Scientific Scholar Private Ltd.  ',
    },
    {
      Id: 6199,
      Name: 'Managed Care and Healthcare Communications  ',
    },
    {
      Id: 6200,
      Name: 'Petrotex Publication Group  ',
    },
    {
      Id: 6201,
      Name: 'Thieme Medical Publishers Inc  ',
    },
    {
      Id: 6202,
      Name: 'American Journal of Pharmacy and Health Research  ',
    },
    {
      Id: 6203,
      Name: 'Research and Knowledge Publication  ',
    },
    {
      Id: 6204,
      Name: 'American Research Journals Inc  ',
    },
    {
      Id: 6205,
      Name: 'Amity Directorate of Management and Allied Areas  ',
    },
    {
      Id: 6206,
      Name: 'Amrita Institute of Medical Sciences and Research Centre  ',
    },
    {
      Id: 6207,
      Name: 'Veterinary College of La Plata University  ',
    },
    {
      Id: 6208,
      Name: 'National Agricultural Research and Development Institute  ',
    },
    {
      Id: 6209,
      Name: 'Longdom Publishing',
    },
    {
      Id: 6210,
      Name: 'University of Oradea  ',
    },
    {
      Id: 6211,
      Name: 'Universitatea Eftimie Murgu Resita  ',
    },
    {
      Id: 6212,
      Name: 'University of Resita  ',
    },
    {
      Id: 6213,
      Name: 'Universidad de Murcia  ',
    },
    {
      Id: 6214,
      Name: 'Universidad Complutense de Madrid  ',
    },
    {
      Id: 6215,
      Name: 'Real Academia Nacional de Farmacia  ',
    },
    {
      Id: 6216,
      Name: 'Arán Ediciones  ',
    },
    {
      Id: 6217,
      Name: 'Universidad de Magallanes  ',
    },
    {
      Id: 6218,
      Name: 'Gobierno de Navarra. Departamento de Salud  ',
    },
    {
      Id: 6219,
      Name: 'Global Science Press  ',
    },
    {
      Id: 6220,
      Name: 'Hayat Saglik Ve Sosyal Hizmetler Vakfi  ',
    },
    {
      Id: 6221,
      Name: 'D&G Health & Publishing Services  ',
    },
    {
      Id: 6222,
      Name: 'Cumhuriyet University Medical Faculty Department of Psychiatry  ',
    },
    {
      Id: 6223,
      Name: 'Negah Institute for Scientific Communication  ',
    },
    {
      Id: 6224,
      Name: 'Korean Association of Anatomists  ',
    },
    {
      Id: 6225,
      Name: 'University of Anbar  ',
    },
    {
      Id: 6226,
      Name: 'Vedic Research International  ',
    },
    {
      Id: 6227,
      Name: 'East Carolina University  ',
    },
    {
      Id: 6228,
      Name: 'Servicio Nacional de Geologia y Mineria  ',
    },
    {
      Id: 6229,
      Name: 'Indian Psychiatric Society  ',
    },
    {
      Id: 6230,
      Name: 'Angewandten Biologie Forschung  ',
    },
    {
      Id: 6231,
      Name: 'Sociedade Portuguesa de Angiologia e Cirurgia Vascular  ',
    },
    {
      Id: 6232,
      Name: 'Edward H. Angle Society of Orthodontists  ',
    },
    {
      Id: 6233,
      Name: 'American Angus Association  ',
    },
    {
      Id: 6234,
      Name: 'Professor Anil Aggrawal  ',
    },
    {
      Id: 6235,
      Name: 'Museu de Ciències Naturals de Barcelona  ',
    },
    {
      Id: 6236,
      Name: 'Institute of Animal Biology  ',
    },
    {
      Id: 6237,
      Name: 'ELSEVIER OPEN ',
    },
    {
      Id: 6238,
      Name: 'Animal Health Australia  ',
    },
    {
      Id: 6239,
      Name: 'Food and Agriculture Organization of the United Nations  ',
    },
    {
      Id: 6240,
      Name: 'Brazilian College of Animal Reproduction  ',
    },
    {
      Id: 6241,
      Name: 'Korean Society of Systematic Zoology  ',
    },
    {
      Id: 6242,
      Name: 'Szent István University  ',
    },
    {
      Id: 6243,
      Name: 'Pak Publishing Group  ',
    },
    {
      Id: 6244,
      Name: 'Society for Animation Studies  ',
    },
    {
      Id: 6245,
      Name: 'Ankara Atatürk Training and Research Hospital  ',
    },
    {
      Id: 6246,
      Name: 'Academia Scientiarum Fennica  ',
    },
    {
      Id: 6247,
      Name: 'Indonesian Institute of Sciences  ',
    },
    {
      Id: 6248,
      Name: 'Finnish Zoological and Botanical Publishing Board  ',
    },
    {
      Id: 6249,
      Name: 'Annales de Médecine Vétérinaire  ',
    },
    {
      Id: 6250,
      Name: 'BioPublisher  ',
    },
    {
      Id: 6251,
      Name: 'Geological Society of Poland  ',
    },
    {
      Id: 6252,
      Name: 'Wydawnictwo Naukowe Uniwersytetu Pedagogicznego  ',
    },
    {
      Id: 6253,
      Name: 'Istituto Superiore di Sanità  ',
    },
    {
      Id: 6254,
      Name: 'Università di Parma  ',
    },
    {
      Id: 6255,
      Name: 'University La Sapienza of Rome  ',
    },
    {
      Id: 6256,
      Name: 'CIC Edizioni Internazionali  ',
    },
    {
      Id: 6257,
      Name: 'Valahia University of Targoviste  ',
    },
    {
      Id: 6258,
      Name: 'Annals of Advanced Sciences  ',
    },
    {
      Id: 6259,
      Name: 'Surgical society of Kenya  ',
    },
    {
      Id: 6260,
      Name: 'Institute of Agricultural Medicine in Lublin  ',
    },
    {
      Id: 6261,
      Name: 'Indian Society of Agricultural Science  ',
    },
    {
      Id: 6262,
      Name: 'MedDocs Publishers LLC  ',
    },
    {
      Id: 6263,
      Name: 'Kowsar Medical Institute  ',
    },
    {
      Id: 6264,
      Name: 'Read & Research Publications',
    },
    {
      Id: 6265,
      Name: 'Pacific Group of e-Journals  ',
    },
    {
      Id: 6266,
      Name: 'Asian Exercise and Sport Science Association  ',
    },
    {
      Id: 6267,
      Name: 'Central Arid Zone Research Institute  ',
    },
    {
      Id: 6268,
      Name: 'Association of Ayurvedic Physicians of India  ',
    },
    {
      Id: 6269,
      Name: 'Stockholm University Press',
    },
    {
      Id: 6270,
      Name: ' Language Science Press ',
    },
    {
      Id: 6271,
      Name: 'language science press',
    },
    {
      Id: 6272,
      Name: 'The MIT Press',
    },
    {
      Id: 6273,
      Name: 'Mediterranean Council for Burns and Fire Disasters  ',
    },
    {
      Id: 6274,
      Name: 'Japanese Society of Strategies for Cancer Research and Therapy  ',
    },
    {
      Id: 6275,
      Name: 'AME Publishing Company  ',
    },
    {
      Id: 6276,
      Name: 'Cresco Publishing  ',
    },
    {
      Id: 6277,
      Name: 'Remedy Publications LLC  ',
    },
    {
      Id: 6278,
      Name: 'Korean Society of Coloproctology  ',
    },
    {
      Id: 6279,
      Name: 'Dr Gagan S  ',
    },
    {
      Id: 6280,
      Name: 'Polish Information Processing Society  ',
    },
    {
      Id: 6281,
      Name: 'Ankara Üniversitesi',
    },
    {
      Id: 6282,
      Name: 'Ankara Üniversitesi Eczacilik Fakültesi Dekani Prof. Dr. Gülbin ÖZÇELIKAY',
    },
    {
      Id: 6283,
      Name: 'American society for microbiology ',
    },
    {
      Id: 6284,
      Name: 'INTERNATIONAL MEDICAL PRESS',
    },
    {
      Id: 6285,
      Name: 'SEEd Medical Publishers',
    },
    {
      Id: 6286,
      Name: 'Korean Society of Infectious Diseases',
    },
    {
      Id: 6287,
      Name: ' International Journal of Pharmacy Teaching & Practices',
    },
    {
      Id: 6288,
      Name: 'International Journal of Pharmacy Teaching and Practices',
    },
    {
      Id: 6289,
      Name: 'J-STAGE',
    },
    {
      Id: 6290,
      Name: 'University of Jordan',
    },
    {
      Id: 6291,
      Name: ' The Korean Journal of Physiology & Pharmacology',
    },
    {
      Id: 6292,
      Name: 'The Korean Journal of Physiology & Pharmacology',
    },
    {
      Id: 6293,
      Name: 'PakMediNet',
    },
    {
      Id: 6294,
      Name: 'SILAE',
    },
    {
      Id: 6295,
      Name: 'IJCMPR',
    },
    {
      Id: 6296,
      Name: 'AYUSHDHARA',
    },
    {
      Id: 6297,
      Name: 'ADR  PUBLICATION',
    },
    {
      Id: 6298,
      Name: ' IJAPR',
    },
    {
      Id: 6299,
      Name: 'Dissolution Technologies, Inc.',
    },
    {
      Id: 6300,
      Name: 'Journal of Ayurveda Medical Sciences',
    },
    {
      Id: 6301,
      Name: 'Journal of Ayurvedic and Herbal Medicine ',
    },
    {
      Id: 6302,
      Name: 'International Journal of Research in Ayurveda and Pharmacy ',
    },
    {
      Id: 6303,
      Name: 'Journal of Drug Discovery and Therapeutics',
    },
    {
      Id: 6304,
      Name: 'Journal of Ayurveda and Holistic Medicine ',
    },
    {
      Id: 6305,
      Name: 'Society of Ayurvedic Physicians of India',
    },
    {
      Id: 6306,
      Name: ' International Journal of Pharmaceutical Sciences and Drug Research ',
    },
    {
      Id: 6307,
      Name: 'American Association of Law Libraries',
    },
    {
      Id: 6308,
      Name: 'American Association of University Professors',
    },
    {
      Id: 6309,
      Name: 'FORT HAYS STATE UNIVERSITY',
    },
    {
      Id: 6310,
      Name: 'AABA PUBLICATION',
    },
    {
      Id: 6311,
      Name: 'SAICA',
    },
    {
      Id: 6312,
      Name: 'University of Miami',
    },
    {
      Id: 6313,
      Name: 'SourceMedia LLC ',
    },
    {
      Id: 6314,
      Name: 'University of Northern British Columbia',
    },
    {
      Id: 6315,
      Name: 'Universidad Católica de Colombia',
    },
    {
      Id: 6316,
      Name: 'Geografski institut Antona Melika ZRC SAZU',
    },
    {
      Id: 6317,
      Name: 'Opinion Media',
    },
    {
      Id: 6318,
      Name: 'Nepal Journals Online',
    },
    {
      Id: 6319,
      Name: 'American Bar Association',
    },
    {
      Id: 6320,
      Name: 'DVV INTERNATIONAL',
    },
    {
      Id: 6321,
      Name: 'The Ministry of Science and Higher Education',
    },
    {
      Id: 6322,
      Name: 'Indiana University School of Social Work ',
    },
    {
      Id: 6323,
      Name: 'Texas A&M University',
    },
    {
      Id: 6324,
      Name: 'NAIFA',
    },
    {
      Id: 6325,
      Name: 'President University OJS',
    },
    {
      Id: 6326,
      Name: 'UNITED NATIONS',
    },
    {
      Id: 6327,
      Name: 'Central Connecticut State University',
    },
    {
      Id: 6328,
      Name: 'BEN AFRICA',
    },
    {
      Id: 6329,
      Name: 'University System of Maryland',
    },
    {
      Id: 6330,
      Name: 'Sacha And Diamond Academic Publishers',
    },
    {
      Id: 6331,
      Name: 'African Centre for the Constructive Resolution of Disputes',
    },
    {
      Id: 6332,
      Name: 'Union for African Population Studies',
    },
    {
      Id: 6333,
      Name: 'UNIVERSITY OF FLORIDA',
    },
    {
      Id: 6334,
      Name: 'Atdforum',
    },
    {
      Id: 6335,
      Name: 'INFORMA MARKET',
    },
    {
      Id: 6336,
      Name: 'Marxists Internet Archive',
    },
    {
      Id: 6337,
      Name: 'Faculty of Philosophy and Social-Political Sciences',
    },
    {
      Id: 6338,
      Name: 'Hathi Trust Digital Library',
    },
    {
      Id: 6339,
      Name: 'Instituto de Psicologia',
    },
    {
      Id: 6340,
      Name: 'AFJAGS PUBLICATIONS',
    },
    {
      Id: 6341,
      Name: 'ACI EUROPE',
    },
    {
      Id: 6342,
      Name: 'The University of Akron',
    },
    {
      Id: 6343,
      Name: 'Alaska Department of Labor & Workforce Development',
    },
    {
      Id: 6344,
      Name: 'University of Alaska Anchorage',
    },
    {
      Id: 6345,
      Name: 'Albany Law School',
    },
    {
      Id: 6346,
      Name: 'U.S. Navy Bureau of Naval Personnel',
    },
    {
      Id: 6347,
      Name: 'Alternatives: Turkish Journal of International Relations',
    },
    {
      Id: 6348,
      Name: 'American Diplomacy',
    },
    {
      Id: 6349,
      Name: 'Colorado School of Public Health',
    },
    {
      Id: 6350,
      Name: 'Center for Promoting Ideas',
    },
    {
      Id: 6351,
      Name: 'American Journal of Social Issues and Humanities ',
    },
    {
      Id: 6352,
      Name: 'Philip merrill college of journalism',
    },
    {
      Id: 6353,
      Name: 'Mises Institute',
    },
    {
      Id: 6354,
      Name: 'The American Scholar',
    },
    {
      Id: 6355,
      Name: 'American University Washington College of Law',
    },
    {
      Id: 6356,
      Name: 'Americana : E-Journal of American Studies in Hungary',
    },
    {
      Id: 6357,
      Name: 'The International Institute for Hermeneutics',
    },
    {
      Id: 6358,
      Name: 'Ankara Bar Association',
    },
    {
      Id: 6359,
      Name: 'Institute of Archeology',
    },
    {
      Id: 6360,
      Name: 'University of Alba Iulia',
    },
    {
      Id: 6361,
      Name: 'University of Galati',
    },
    {
      Id: 6362,
      Name: 'Peking University Press',
    },
    {
      Id: 6363,
      Name: 'University of Suceava',
    },
    {
      Id: 6364,
      Name: 'University of Petrosani',
    },
    {
      Id: 6365,
      Name: 'Golden Gate University School of Law',
    },
    {
      Id: 6366,
      Name: 'Anthropoetics',
    },
    {
      Id: 6367,
      Name: 'Pontificia Universidad Católica del Perú ',
    },
    {
      Id: 6368,
      Name: 'SOAS University of London',
    },
    {
      Id: 6369,
      Name: 'Indiana University',
    },
    {
      Id: 6370,
      Name: 'OpenEdition Journals',
    },
    {
      Id: 6371,
      Name: 'Antropo',
    },
    {
      Id: 6372,
      Name: 'SHSU Criminal Justice Center',
    },
    {
      Id: 6373,
      Name: 'Archaeological Institute of America ',
    },
    {
      Id: 6374,
      Name: 'Halcyon Business Publications',
    },
    {
      Id: 6375,
      Name: 'Area Development Online',
    },
    {
      Id: 6376,
      Name: 'university of caen',
    },
    {
      Id: 6377,
      Name: 'Sightline Media Group',
    },
    {
      Id: 6378,
      Name: 'Arms Control Association',
    },
    {
      Id: 6379,
      Name: 'ASSOCIATION OF THE UNITED STATES ARMY',
    },
    {
      Id: 6380,
      Name: 'Administrative Staff College of India',
    },
    {
      Id: 6381,
      Name: 'The Asia Association for Global Studies',
    },
    {
      Id: 6382,
      Name: 'New Zealand Association for Cooperative Edcuation',
    },
    {
      Id: 6383,
      Name: 'Global Business Investments and Publications LLC',
    },
    {
      Id: 6384,
      Name: 'Indian Research Journals',
    },
    {
      Id: 6385,
      Name: 'University of San Francisco',
    },
    {
      Id: 6386,
      Name: 'The National Bureau of Asian Research',
    },
    {
      Id: 6387,
      Name: 'Asian Economic and Social Society',
    },
    {
      Id: 6388,
      Name: 'Nanzan University',
    },
    {
      Id: 6389,
      Name: 'IMD Research Publications',
    },
    {
      Id: 6390,
      Name: 'Leena and Luna International',
    },
    {
      Id: 6391,
      Name: 'Lee Kuan Yew School of Public Policy',
    },
    {
      Id: 6392,
      Name: 'National University of Singapore',
    },
    {
      Id: 6393,
      Name: 'UH WordPress Service',
    },
    {
      Id: 6394,
      Name: 'United Nations ESCAP',
    },
    {
      Id: 6395,
      Name: 'De La Salle University Publishing House',
    },
    {
      Id: 6396,
      Name: 'The American Society of International Law',
    },
    {
      Id: 6397,
      Name: 'Talal Abu-Ghazaleh Global',
    },
    {
      Id: 6398,
      Name: 'For Construction Pros',
    },
    {
      Id: 6399,
      Name: 'Assistive Technology Industry Association',
    },
    {
      Id: 6400,
      Name: 'American Society of Association Executives',
    },
    {
      Id: 6401,
      Name: 'ASTM International',
    },
    {
      Id: 6402,
      Name: 'University of Concepción',
    },
    {
      Id: 6403,
      Name: 'Universitat Autònoma de Barcelona',
    },
    {
      Id: 6404,
      Name: 'British Society of Audiology',
    },
    {
      Id: 6405,
      Name: 'University of Sydney Library',
    },
    {
      Id: 6406,
      Name: 'Australian Psychological Society',
    },
    {
      Id: 6407,
      Name: 'AUSTRALIAN GOVERMENT DEPARTMENT OF DEFENCE',
    },
    {
      Id: 6408,
      Name: 'Association for the Study of Australian Literature',
    },
    {
      Id: 6409,
      Name: 'Australian Journal of Business and Management Research ',
    },
    {
      Id: 6410,
      Name: 'The University of Newcastle, Australia',
    },
    {
      Id: 7395,
      Name: 'Australasian Legal Information Institute',
    },
    {
      Id: 7396,
      Name: 'South-East Asian Studies',
    },
    {
      Id: 7397,
      Name: 'VendingMarketWatch.com',
    },
    {
      Id: 7398,
      Name: 'PMMI Media Group',
    },
    {
      Id: 7399,
      Name: 'Hogrefe Verlag',
    },
    {
      Id: 7400,
      Name: 'Azerbaijan Focus-Journal of International Affairs',
    },
    {
      Id: 7401,
      Name: 'UNIVERSITY OF IOWA',
    },
    {
      Id: 7402,
      Name: 'University of West Georgia',
    },
    {
      Id: 7403,
      Name: 'Orebro University School of Business',
    },
    {
      Id: 7404,
      Name: 'Baltic Defence College',
    },
    {
      Id: 7405,
      Name: 'Bangladesh Sociological Society',
    },
    {
      Id: 7406,
      Name: 'Bank of Canada',
    },
    {
      Id: 7407,
      Name: 'Bank of England',
    },
    {
      Id: 7408,
      Name: 'FinTech Futures',
    },
    {
      Id: 7409,
      Name: 'CREATIVE WORKS PUBLISHING',
    },
    {
      Id: 7410,
      Name: 'Baylor University',
    },
    {
      Id: 7411,
      Name: 'Behavior Analyst Online',
    },
    {
      Id: 7412,
      Name: 'China international publishing group',
    },
    {
      Id: 7413,
      Name: 'Beloit College Magazine',
    },
    {
      Id: 7414,
      Name: 'University Paris West Nanterre ',
    },
    {
      Id: 7415,
      Name: 'LATIN AMERICAN STUDIES ASSOCIATION',
    },
    {
      Id: 7416,
      Name: 'Lehman College-City University of New York',
    },
    {
      Id: 7417,
      Name: 'California Polytechnic State University',
    },
    {
      Id: 7418,
      Name: 'University and Research Librarians Association',
    },
    {
      Id: 7419,
      Name: 'BBI International',
    },
    {
      Id: 7420,
      Name: 'International Boat Industry',
    },
    {
      Id: 7421,
      Name: 'BANK OF FINLAND',
    },
    {
      Id: 7422,
      Name: 'Sapiens Research',
    },
    {
      Id: 7423,
      Name: 'Bond University',
    },
    {
      Id: 7424,
      Name: 'The University of New South Wales',
    },
    {
      Id: 7425,
      Name: 'Digital Commons Resources',
    },
    {
      Id: 7426,
      Name: 'Boston Review',
    },
    {
      Id: 7427,
      Name: 'BOSTON UNIVERSITY',
    },
    {
      Id: 7428,
      Name: 'Digital Peer Publishing ',
    },
    {
      Id: 7429,
      Name: 'Brazilian Administration Review',
    },
    {
      Id: 7430,
      Name: 'Fucape Business School',
    },
    {
      Id: 7431,
      Name: 'Revista Brasileira de Finanças',
    },
    {
      Id: 7432,
      Name: 'Brazilian Journal of Operations & Production Management',
    },
    {
      Id: 7433,
      Name: 'Brazilian Association of Journalism Researchers',
    },
    {
      Id: 7434,
      Name: 'Nove de Julho University',
    },
    {
      Id: 7435,
      Name: 'Brigham Young University ',
    },
    {
      Id: 7436,
      Name: 'Brock University',
    },
    {
      Id: 7437,
      Name: "British Insurance Brokers' Association",
    },
    {
      Id: 7438,
      Name: 'Brussels Studies Institute',
    },
    {
      Id: 8395,
      Name: 'University at Buffalo',
    },
    {
      Id: 8396,
      Name: 'FacilitiesNet',
    },
    {
      Id: 8397,
      Name: 'ScibiolMed.Org',
    },
    {
      Id: 8398,
      Name: 'HIV i-Base',
    },
    {
      Id: 8399,
      Name: 'University of Glasgow',
    },
    {
      Id: 8400,
      Name: ' Trade Science Inc',
    },
    {
      Id: 8401,
      Name: 'ASSOCIATION OF  CLINICAL BIOCHEMISTS OF INDIA',
    },
    {
      Id: 8402,
      Name: 'IMSciences',
    },
    {
      Id: 8403,
      Name: 'Sciedu Press',
    },
    {
      Id: 8404,
      Name: 'The Institute for Business and Finance Research',
    },
    {
      Id: 8405,
      Name: 'Transforming Data with Intelligence',
    },
    {
      Id: 8406,
      Name: 'Federal Reserve Bank of Philadelphia',
    },
    {
      Id: 8407,
      Name: 'Business Systems Laboratory',
    },
    {
      Id: 8408,
      Name: 'Federal University of Bahia Human Resources Center',
    },
    {
      Id: 8409,
      Name: 'Centro de Estudos Educacao e Sociedade - CEDES',
    },
    {
      Id: 8410,
      Name: 'University of Campinas ',
    },
    {
      Id: 8411,
      Name: 'The State Bar of California',
    },
    {
      Id: 8412,
      Name: 'California Western School of Law',
    },
    {
      Id: 8413,
      Name: 'Campbell University',
    },
    {
      Id: 8414,
      Name: 'Coaching Association of Canada',
    },
    {
      Id: 8415,
      Name: 'University of Saskatchewan',
    },
    {
      Id: 8416,
      Name: 'Le Journal Canadien de Famille et de la Jeunesse',
    },
    {
      Id: 8417,
      Name: 'Canadian Society for the Study of Higher Education',
    },
    {
      Id: 8418,
      Name: 'University of Western Ontario',
    },
    {
      Id: 8419,
      Name: 'Brandon University',
    },
    {
      Id: 8420,
      Name: 'Association for Nonprofit and Social Economy Research ',
    },
    {
      Id: 8421,
      Name: 'National Defence and Canadian Armed forces',
    },
    {
      Id: 8422,
      Name: 'Ontario Legislative Library',
    },
    {
      Id: 8423,
      Name: 'Newcom Media',
    },
    {
      Id: 8424,
      Name: 'University of Zulia',
    },
    {
      Id: 8425,
      Name: 'Cardozo Law Review',
    },
    {
      Id: 8426,
      Name: 'University of the West Indies',
    },
    {
      Id: 8427,
      Name: 'Toulouse School of Economics',
    },
    {
      Id: 8428,
      Name: 'Case Western Reserve University',
    },
    {
      Id: 8429,
      Name: 'Philosophy Documentation Center',
    },
    {
      Id: 8430,
      Name: 'Cato Institute',
    },
    {
      Id: 8431,
      Name: 'Caucasian Review of International Affairs',
    },
    {
      Id: 8432,
      Name: 'College English Association',
    },
    {
      Id: 8433,
      Name: 'Central Eurasian Studies Society',
    },
    {
      Id: 8434,
      Name: 'Ifo Institute for Economic Research',
    },
    {
      Id: 8435,
      Name: 'Central European Journal of International and Security Studies',
    },
    {
      Id: 8436,
      Name: 'Metropolitan University Prague',
    },
    {
      Id: 8437,
      Name: 'Central European University',
    },
    {
      Id: 8438,
      Name: 'Chief Learning Officer',
    },
    {
      Id: 8439,
      Name: 'University of Sheffield',
    },
    {
      Id: 8440,
      Name: 'University of Cincinnati',
    },
    {
      Id: 8441,
      Name: 'Cognitive Science Student Association',
    },
    {
      Id: 8442,
      Name: 'Chinese University Press',
    },
    {
      Id: 8443,
      Name: 'Internet Chinese Librarians Club',
    },
    {
      Id: 8444,
      Name: 'Australian National University',
    },
    {
      Id: 8445,
      Name: 'Brazilian Institute of Information in Science and Technology ',
    },
    {
      Id: 8446,
      Name: 'National University of Entre Ríos',
    },
    {
      Id: 8447,
      Name: 'Cities Insights',
    },
    {
      Id: 8448,
      Name: 'Centro de Estudos Avançados da Conservação Integrada',
    },
    {
      Id: 8449,
      Name: 'Office of policy development and research',
    },
    {
      Id: 8450,
      Name: 'Cleveland State University',
    },
    {
      Id: 8451,
      Name: 'Code4Lib',
    },
    {
      Id: 8452,
      Name: 'Council for the Development of Social Science Research in Africa',
    },
    {
      Id: 8453,
      Name: 'University of Louisiana at Monroe',
    },
    {
      Id: 8454,
      Name: 'University of Denver',
    },
    {
      Id: 8455,
      Name: 'University of Helsinki',
    },
    {
      Id: 8456,
      Name: 'Croatian Anthropological Society',
    },
    {
      Id: 8457,
      Name: 'University of Colorado',
    },
    {
      Id: 8458,
      Name: 'Colorado Business Statewide',
    },
    {
      Id: 8459,
      Name: 'Sheridan College',
    },
    {
      Id: 8460,
      Name: 'Columbia Law School',
    },
    {
      Id: 8461,
      Name: 'International journal of research in commerce & management',
    },
    {
      Id: 8462,
      Name: 'Oakland City University',
    },
    {
      Id: 8463,
      Name: 'American Antiquarian Society',
    },
    {
      Id: 8464,
      Name: 'Federal Reserve Bank of Boston',
    },
    {
      Id: 8465,
      Name: 'Federal Reserve Bank of Minneapolis',
    },
    {
      Id: 8466,
      Name: 'Comparative Cognition Society',
    },
    {
      Id: 8467,
      Name: 'Nicolaus Copernicus University',
    },
    {
      Id: 8468,
      Name: 'San Jose State University',
    },
    {
      Id: 8469,
      Name: 'American Educational Research Association ',
    },
    {
      Id: 8470,
      Name: 'University of Bristol',
    },
    {
      Id: 8471,
      Name: 'University of Konstanz',
    },
    {
      Id: 8472,
      Name: 'ACCORD',
    },
    {
      Id: 8473,
      Name: 'University of Connecticut',
    },
    {
      Id: 8474,
      Name: 'UConn School of Law',
    },
    {
      Id: 8475,
      Name: 'University of Bologna',
    },
    {
      Id: 8476,
      Name: 'Federal University of Minas Gerais',
    },
    {
      Id: 8477,
      Name: 'Society for Research in Social Sciences',
    },
    {
      Id: 8478,
      Name: 'National Taipei University',
    },
    {
      Id: 8479,
      Name: 'American Academy of Actuaries',
    },
    {
      Id: 8480,
      Name: 'Convenience Store Decisions',
    },
    {
      Id: 8481,
      Name: 'Asia Research Centre',
    },
    {
      Id: 8482,
      Name: 'Cornell law school',
    },
    {
      Id: 8483,
      Name: 'Law.com',
    },
    {
      Id: 8484,
      Name: 'American Counseling Association',
    },
    {
      Id: 8485,
      Name: 'The New York State Society of CPAs',
    },
    {
      Id: 8486,
      Name: 'CPA Technology Advisor',
    },
    {
      Id: 8487,
      Name: 'CADAAD Journal',
    },
    {
      Id: 8488,
      Name: 'Critical Disability Discourse',
    },
    {
      Id: 8489,
      Name: 'University of British Columbia',
    },
    {
      Id: 8490,
      Name: 'University of Windsor',
    },
    {
      Id: 8491,
      Name: 'Occidental college',
    },
    {
      Id: 8492,
      Name: 'Illinois State University',
    },
    {
      Id: 8493,
      Name: 'Université de Montréal',
    },
    {
      Id: 8494,
      Name: 'Pennsylvania State University',
    },
    {
      Id: 8495,
      Name: 'Cultural Survival',
    },
    {
      Id: 8496,
      Name: 'Vytautas Magnus University',
    },
    {
      Id: 8497,
      Name: 'California state university',
    },
    {
      Id: 8498,
      Name: 'Vikol publishing" ST Kolesnichenko V.V.',
    },
    {
      Id: 8499,
      Name: 'Cuneiform Digital Library Initiative ',
    },
    {
      Id: 8500,
      Name: 'American Accounting Association',
    },
    {
      Id: 8501,
      Name: 'Universite de Provence',
    },
    {
      Id: 8502,
      Name: 'The Arab Portal for Libraries and Information',
    },
    {
      Id: 8503,
      Name: 'AMERICAN COLLEGE',
    },
    {
      Id: 8504,
      Name: 'Institute of Sociology of the Czech Academy of Sciences',
    },
    {
      Id: 8505,
      Name: 'DEVELOPMENT AND COOPERATION',
    },
    {
      Id: 8506,
      Name: 'Universidade do Estado do Rio de Janeiro',
    },
    {
      Id: 8507,
      Name: 'Deakin University',
    },
    {
      Id: 8508,
      Name: 'Defence & Security Alert',
    },
    {
      Id: 8509,
      Name: 'University of Defence',
    },
    {
      Id: 8510,
      Name: 'Defense Acquisition University',
    },
    {
      Id: 8511,
      Name: 'Widener University',
    },
    {
      Id: 8512,
      Name: 'Delhi School of Professional Studies and Research',
    },
    {
      Id: 8513,
      Name: 'Lewis & Clark Graduate School of Education and Counseling',
    },
    {
      Id: 8514,
      Name: 'Democracy: A Journal of Ideas',
    },
    {
      Id: 8515,
      Name: 'Democratic Socialists of America',
    },
    {
      Id: 8516,
      Name: 'Max Planck Institute for Demographic Research',
    },
    {
      Id: 8517,
      Name: 'National Trust for Promotion of Knowledge, Lucknow',
    },
    {
      Id: 8518,
      Name: 'Institute for Social Development and Policy Research',
    },
    {
      Id: 8519,
      Name: 'Dialogue and Discourse',
    },
    {
      Id: 8520,
      Name: 'The official journal of Crossing Dialogues',
    },
    {
      Id: 8521,
      Name: 'Society for Disability Studies ',
    },
    {
      Id: 8522,
      Name: 'Vrije Universiteit Amsterdam',
    },
    {
      Id: 8523,
      Name: 'Defense Institute of Security Cooperation Studies',
    },
    {
      Id: 8524,
      Name: 'United Nations Institute for Disarmament Research',
    },
    {
      Id: 8525,
      Name: 'Sheffield Hallam University',
    },
    {
      Id: 8526,
      Name: 'District Administration',
    },
    {
      Id: 8527,
      Name: 'UNESCO',
    },
    {
      Id: 8528,
      Name: 'Corporation for National Research Initiatives',
    },
    {
      Id: 8529,
      Name: 'Dogus University',
    },
    {
      Id: 8530,
      Name: 'Double Dialogues',
    },
    {
      Id: 8531,
      Name: 'Croatian Academy of Sciences and Arts',
    },
    {
      Id: 8532,
      Name: 'Bakirkoy Research and Training Hospital for Psychiatry, Neurology and Neurosurgery',
    },
    {
      Id: 8533,
      Name: 'Dynamical Psychology',
    },
    {
      Id: 8534,
      Name: 'Murdoch University',
    },
    {
      Id: 8535,
      Name: 'Eä – Journal of Medical Humanities & Social Studies of Science and Technology',
    },
    {
      Id: 8536,
      Name: 'Archiving Early America ',
    },
    {
      Id: 8537,
      Name: 'Bergen Open Access Publishing',
    },
    {
      Id: 8538,
      Name: 'East Asian Pastoral Institute',
    },
    {
      Id: 8539,
      Name: 'Institute of Spontaneous Order Economics',
    },
    {
      Id: 8540,
      Name: 'Editura ASE',
    },
    {
      Id: 8541,
      Name: 'Federal Reserve Bank of Dallas',
    },
    {
      Id: 8542,
      Name: 'The Economic and Social Research Institute',
    },
    {
      Id: 8543,
      Name: 'Faculty of Economics',
    },
    {
      Id: 8544,
      Name: 'European Central Bank',
    },
    {
      Id: 8545,
      Name: 'Federal reserve bank of new york',
    },
    {
      Id: 8546,
      Name: 'Weissberg publishing',
    },
    {
      Id: 8547,
      Name: 'George Bacovia University in Bacau',
    },
    {
      Id: 8548,
      Name: 'Federal Reserve Bank of Atlanta',
    },
    {
      Id: 8549,
      Name: 'Federal University of Paraná',
    },
    {
      Id: 8550,
      Name: 'Arizona State University',
    },
    {
      Id: 8551,
      Name: 'Georgian Technical University ',
    },
    {
      Id: 8552,
      Name: 'National Center for Education Statistics',
    },
    {
      Id: 8553,
      Name: 'Pen Academic Publishing',
    },
    {
      Id: 8554,
      Name: 'UC Santa Barbara',
    },
    {
      Id: 8555,
      Name: 'EIPA',
    },
    {
      Id: 8556,
      Name: 'Danube-University Krems',
    },
    {
      Id: 8557,
      Name: 'E-Journal of Organizational Learning and Leadership',
    },
    {
      Id: 8558,
      Name: 'Brown University',
    },
    {
      Id: 8559,
      Name: 'UNSW Business School ',
    },
    {
      Id: 8560,
      Name: 'The British Library',
    },
    {
      Id: 8561,
      Name: 'University of Lueneburg',
    },
    {
      Id: 8562,
      Name: 'International Consortium for the Advancement of Academic Publication',
    },
    {
      Id: 8563,
      Name: 'University of Salento',
    },
    {
      Id: 8564,
      Name: 'Netherlands Comparative Law Association',
    },
    {
      Id: 8565,
      Name: 'Academic Conferences and Publishing International',
    },
    {
      Id: 8566,
      Name: 'Institute for Advanced Study of Human Sexuality',
    },
    {
      Id: 8567,
      Name: 'EMAJ',
    },
    {
      Id: 8568,
      Name: 'Regent university',
    },
    {
      Id: 8569,
      Name: 'Emory Law',
    },
    {
      Id: 8570,
      Name: 'Enculturation: A Journal of Rhetoric, Writing, and Culture',
    },
    {
      Id: 8571,
      Name: 'Energy Bar Association',
    },
    {
      Id: 8572,
      Name: 'Universidade Nova de Lisboa',
    },
    {
      Id: 8573,
      Name: 'Erasmus University Rotterdam',
    },
    {
      Id: 8574,
      Name: 'SPACES Magazine',
    },
    {
      Id: 8575,
      Name: 'Dullah Omar Institute',
    },
    {
      Id: 8576,
      Name: 'University of Essex',
    },
    {
      Id: 8577,
      Name: 'University Candido Mendes',
    },
    {
      Id: 8578,
      Name: 'Inter-Research',
    },
    {
      Id: 8579,
      Name: 'Ilia State University',
    },
    {
      Id: 8580,
      Name: 'Akdeniz Üniversitesi',
    },
    {
      Id: 8581,
      Name: 'Ala-Too International University',
    },
    {
      Id: 8582,
      Name: 'University of Maryland',
    },
    {
      Id: 8583,
      Name: 'European Community Studies Association',
    },
    {
      Id: 8584,
      Name: 'Kaunas University of Technology ',
    },
    {
      Id: 8585,
      Name: 'Linköping University',
    },
    {
      Id: 8586,
      Name: 'Cape Breton University',
    },
    {
      Id: 8587,
      Name: 'University Carlo Cattaneo',
    },
    {
      Id: 8588,
      Name: 'EuroJournals, Inc.',
    },
    {
      Id: 8589,
      Name: 'European University Institute',
    },
    {
      Id: 8590,
      Name: 'University of Notre Dame',
    },
    {
      Id: 8591,
      Name: 'Associazone Pragma',
    },
    {
      Id: 8592,
      Name: 'Spanish Society of Legal and Forensic Psychology',
    },
    {
      Id: 8593,
      Name: 'Varna University of Management',
    },
    {
      Id: 8594,
      Name: 'Istituto del Rischio',
    },
    {
      Id: 8595,
      Name: 'European Scientific Institute',
    },
    {
      Id: 8596,
      Name: 'European Electoral Studies',
    },
    {
      Id: 8597,
      Name: 'Zenith International Research and Academic Foundation',
    },
    {
      Id: 8598,
      Name: 'Exopolitics Institute',
    },
    {
      Id: 8599,
      Name: 'Indian Express ',
    },
    {
      Id: 8600,
      Name: 'Business & Economy',
    },
    {
      Id: 8601,
      Name: 'Family Science Association',
    },
    {
      Id: 8602,
      Name: 'Far East Research Centre',
    },
    {
      Id: 8603,
      Name: 'Far Eastern University',
    },
    {
      Id: 8604,
      Name: 'Open Humanities Press',
    },
    {
      Id: 8605,
      Name: 'FBI.gov',
    },
    {
      Id: 8606,
      Name: 'Federation of Defense & Corporate Counsel',
    },
    {
      Id: 8607,
      Name: 'Federal Deposit Insurance Corporation',
    },
    {
      Id: 8608,
      Name: 'US Federal Courts for the District of Colombia',
    },
    {
      Id: 8609,
      Name: 'United States Courts ',
    },
    {
      Id: 8610,
      Name: 'Federal Reserve Bank of Kansas City',
    },
    {
      Id: 8611,
      Name: 'Federal Reserve Bank of San Francisco',
    },
    {
      Id: 8612,
      Name: 'Federal Reserve Bank of St Louis',
    },
    {
      Id: 8613,
      Name: 'Federal Reserve Board',
    },
    {
      Id: 8614,
      Name: 'UW-Madison Libraries',
    },
    {
      Id: 8615,
      Name: 'International Religious Liberty Association',
    },
    {
      Id: 8616,
      Name: 'Edinburgh University Press',
    },
    {
      Id: 8617,
      Name: 'Reserve Bank of Australia',
    },
    {
      Id: 8618,
      Name: 'INSTITUTE OF PUBLIC FINANCE',
    },
    {
      Id: 8619,
      Name: 'ETMU Association',
    },
    {
      Id: 8620,
      Name: 'First Monday',
    },
    {
      Id: 8621,
      Name: 'The Caring Society',
    },
    {
      Id: 8622,
      Name: 'Flinders University',
    },
    {
      Id: 8623,
      Name: 'University of Central Florida',
    },
    {
      Id: 8624,
      Name: 'Florida State University',
    },
    {
      Id: 8625,
      Name: 'Flusser Studies',
    },
    {
      Id: 8626,
      Name: 'Folklore',
    },
    {
      Id: 8627,
      Name: "St. Paul's Cathedral Mission College",
    },
    {
      Id: 8628,
      Name: 'Food in Canada',
    },
    {
      Id: 8629,
      Name: 'Food Logistics',
    },
    {
      Id: 8630,
      Name: 'GIEWS - Global Information and Early Warning System',
    },
    {
      Id: 8631,
      Name: 'University of Oxford',
    },
    {
      Id: 8632,
      Name: 'Fordham University',
    },
    {
      Id: 8633,
      Name: 'American Foreign Service Association',
    },
    {
      Id: 8634,
      Name: 'Forman Christian College',
    },
    {
      Id: 8635,
      Name: 'Forum Qualitative Social',
    },
    {
      Id: 8636,
      Name: 'Copenhagen Business School',
    },
    {
      Id: 8637,
      Name: 'Center for World Indigenous Studies',
    },
    {
      Id: 8638,
      Name: 'International Franchise Association',
    },
    {
      Id: 8639,
      Name: 'Princeton University',
    },
    {
      Id: 8640,
      Name: 'World Future Society',
    },
    {
      Id: 8641,
      Name: 'University of Cologne',
    },
    {
      Id: 8642,
      Name: 'Centre for Society and Genomics',
    },
    {
      Id: 8643,
      Name: 'Antonin Scalia Law School ',
    },
    {
      Id: 8644,
      Name: 'The George Washington University',
    },
    {
      Id: 8645,
      Name: 'Georgetown University',
    },
    {
      Id: 8646,
      Name: 'Georgia State University',
    },
    {
      Id: 8647,
      Name: 'Deutsches Institut für Urbanistik',
    },
    {
      Id: 8648,
      Name: 'EFMD GLOBEL NETWORKS',
    },
    {
      Id: 8649,
      Name: 'GALAXIE SOFTWARE ELECTRONIC PUBLISHING',
    },
    {
      Id: 8650,
      Name: 'McMaster University',
    },
    {
      Id: 8651,
      Name: 'Bahria University',
    },
    {
      Id: 8652,
      Name: 'Stellenbosch University',
    },
    {
      Id: 8653,
      Name: 'Western Sydney University',
    },
    {
      Id: 8654,
      Name: 'GLOBAL MEDIA JOURNAL',
    },
    {
      Id: 8655,
      Name: 'Allama Iqbal Open University',
    },
    {
      Id: 8656,
      Name: 'Yeditepe University',
    },
    {
      Id: 8657,
      Name: 'Kennesaw State University',
    },
    {
      Id: 8658,
      Name: 'Stony Brook Institute for Global Studies',
    },
    {
      Id: 8659,
      Name: 'Goettingen Journal of International Law',
    },
    {
      Id: 8660,
      Name: 'North Coast Media',
    },
    {
      Id: 8661,
      Name: 'Gonzaga University',
    },
    {
      Id: 8662,
      Name: 'Governing',
    },
    {
      Id: 8663,
      Name: 'Government Technology',
    },
    {
      Id: 8664,
      Name: 'University of auckland',
    },
    {
      Id: 8665,
      Name: 'GJSS',
    },
    {
      Id: 8666,
      Name: 'Graziadio Business School',
    },
    {
      Id: 8667,
      Name: 'Greater Lansing Business Monthly',
    },
    {
      Id: 8668,
      Name: 'Duke University Press',
    },
    {
      Id: 8669,
      Name: 'Green Money',
    },
    {
      Id: 8670,
      Name: 'CONSORTIUM OF SCIENCE & TECHNOLOGY',
    },
    {
      Id: 8671,
      Name: 'THE INDIAN PHARMACOPOEIA COMMISSION',
    },
    {
      Id: 8672,
      Name: 'Pharmaceutical Press',
    },
    {
      Id: 8673,
      Name: 'McGraw-Hill',
    },
    {
      Id: 8674,
      Name: 'Praeger ',
    },
    {
      Id: 8675,
      Name: 'Ayurveda Holistic Center Press',
    },
    {
      Id: 8676,
      Name: 'Ministry of AYUSH',
    },
    {
      Id: 8677,
      Name: 'Wellness Research & Consulting',
    },
    {
      Id: 8678,
      Name: 'Chemists Corner ',
    },
    {
      Id: 8679,
      Name: 'Associated Audiologists',
    },
    {
      Id: 8680,
      Name: 'Blackwell Publishing Ltd.',
    },
    {
      Id: 8681,
      Name: 'F. A. Davis Company',
    },
    {
      Id: 8682,
      Name: 'International Book Distributing Co.',
    },
    {
      Id: 8683,
      Name: 'New Age International ',
    },
    {
      Id: 8684,
      Name: 'Dauphin Publications',
    },
    {
      Id: 8685,
      Name: 'Guttmacher Institute',
    },
    {
      Id: 8686,
      Name: "Harper's Magazine",
    },
    {
      Id: 8687,
      Name: 'Harvard Business School',
    },
    {
      Id: 8688,
      Name: 'Harvard Divinity School',
    },
    {
      Id: 8689,
      Name: 'Harvard Law School',
    },
    {
      Id: 8690,
      Name: 'Harvard University',
    },
    {
      Id: 8691,
      Name: 'UC Hastings College of the Law',
    },
    {
      Id: 8692,
      Name: 'Harvard T.H. Chan School of Public Health',
    },
    {
      Id: 8693,
      Name: 'Centers for Medicare and Medicaid Services',
    },
    {
      Id: 8694,
      Name: 'UCLA International Institute',
    },
    {
      Id: 8695,
      Name: 'Himal Southasian',
    },
    {
      Id: 8696,
      Name: 'Himalayan Academy Publications',
    },
    {
      Id: 8697,
      Name: 'Fjellhaug International University College Denmark',
    },
    {
      Id: 8698,
      Name: 'Consejo Superior de Investigaciones Científicas',
    },
    {
      Id: 8699,
      Name: 'Asociación de Historia Actual',
    },
    {
      Id: 8700,
      Name: 'Ingenta Connect Publication',
    },
    {
      Id: 8701,
      Name: 'Fundação Oswaldo Cruz ',
    },
    {
      Id: 8702,
      Name: 'Hmong Studies Journal',
    },
    {
      Id: 8703,
      Name: 'H-Net: Humanities and Social Sciences Online',
    },
    {
      Id: 8704,
      Name: 'Hofstra University ',
    },
    {
      Id: 8705,
      Name: 'Center for Homeland Defense and Security',
    },
    {
      Id: 8706,
      Name: 'Questex',
    },
    {
      Id: 8707,
      Name: 'HOTELSMag.com',
    },
    {
      Id: 8708,
      Name: 'University of Houston',
    },
    {
      Id: 8709,
      Name: 'Houston Bar Association',
    },
    {
      Id: 8710,
      Name: 'Howard University School of Law',
    },
    {
      Id: 8711,
      Name: 'University of Bucharest',
    },
    {
      Id: 8712,
      Name: 'Human Life Foundation',
    },
    {
      Id: 8713,
      Name: 'HRO Today Association',
    },
    {
      Id: 8714,
      Name: 'Librello publishing house',
    },
    {
      Id: 8715,
      Name: 'University of Jyväskylä',
    },
    {
      Id: 8716,
      Name: 'The Center for the Study of Statesmanship',
    },
    {
      Id: 8717,
      Name: 'University of the Philippines',
    },
    {
      Id: 8718,
      Name: 'University Of Tanzania',
    },
    {
      Id: 8719,
      Name: 'Hyperion University',
    },
    {
      Id: 8720,
      Name: 'IASSIST',
    },
    {
      Id: 8721,
      Name: 'Eldis',
    },
    {
      Id: 8722,
      Name: 'The Idaho Library Association',
    },
    {
      Id: 8723,
      Name: 'Krysia Hnatowicz Jacobs',
    },
    {
      Id: 8724,
      Name: 'University of New Hampshire',
    },
    {
      Id: 8725,
      Name: 'Escola Superior de Teologia ',
    },
    {
      Id: 8726,
      Name: 'India International Centre',
    },
    {
      Id: 8727,
      Name: 'Kastamonu Üniversitesi',
    },
    {
      Id: 8728,
      Name: 'Nova Southeastern University',
    },
    {
      Id: 8729,
      Name: 'Katholieke Universiteit Leuven',
    },
    {
      Id: 8730,
      Name: 'International Monetary Fund',
    },
    {
      Id: 8731,
      Name: 'Inbound Logistics',
    },
    {
      Id: 8732,
      Name: 'Indian Defence Review',
    },
    {
      Id: 8733,
      Name: 'National Folklore Support Centre',
    },
    {
      Id: 8734,
      Name: ' INDIAN SOCIETY FOR HEALTH AND ADVANCED RESEARCH',
    },
    {
      Id: 8735,
      Name: 'Indian Journal of Commerce & Management ',
    },
    {
      Id: 8736,
      Name: 'MedIND',
    },
    {
      Id: 8737,
      Name: 'EBSCO Publishing',
    },
    {
      Id: 8738,
      Name: 'EBSCO Publishing',
    },
    {
      Id: 8739,
      Name: 'Institute of Industrial and Systems Engineers',
    },
    {
      Id: 8740,
      Name: 'IMP Group',
    },
    {
      Id: 8741,
      Name: 'Facultad de Filosofía y Letras - UBA',
    },
    {
      Id: 8742,
      Name: 'Libr.org',
    },
    {
      Id: 8743,
      Name: 'American Library Association',
    },
    {
      Id: 8744,
      Name: 'Informing Science Institute',
    },
    {
      Id: 8745,
      Name: 'Eleanor Glor',
    },
    {
      Id: 8746,
      Name: 'Intangible Capital',
    },
    {
      Id: 8747,
      Name: 'Leadership Learning Community',
    },
    {
      Id: 8748,
      Name: 'Integral Review',
    },
    {
      Id: 8749,
      Name: 'International Islamic University Malaysia',
    },
    {
      Id: 8750,
      Name: 'York University',
    },
    {
      Id: 8751,
      Name: 'Brunel University',
    },
    {
      Id: 8752,
      Name: 'University of Tsukuba',
    },
    {
      Id: 8753,
      Name: 'Universidade Católica Dom Bosco',
    },
    {
      Id: 8754,
      Name: 'Interciencia Association',
    },
    {
      Id: 8755,
      Name: 'Immigrant Institute',
    },
    {
      Id: 8756,
      Name: 'Croatian Interdisciplinary Society',
    },
    {
      Id: 8757,
      Name: 'Shreeprakashan ',
    },
    {
      Id: 8758,
      Name: 'interfacejournals.net',
    },
    {
      Id: 8759,
      Name: 'Utah State University',
    },
    {
      Id: 8760,
      Name: 'Human Resource Management Academic Research Society',
    },
    {
      Id: 8761,
      Name: 'Embry-Riddle Aeronautical University',
    },
    {
      Id: 8762,
      Name: 'Monash University',
    },
    {
      Id: 8763,
      Name: 'American Scholars Press',
    },
    {
      Id: 8764,
      Name: '\t The Editorial Committee of the International Free and Open Source Software Law Review',
    },
    {
      Id: 8765,
      Name: 'International Journal about Parents in Education',
    },
    {
      Id: 8766,
      Name: 'Utrecht University',
    },
    {
      Id: 8767,
      Name: 'Thesa Publishers',
    },
    {
      Id: 8768,
      Name: 'Emerald Insight',
    },
    {
      Id: 8769,
      Name: 'Georgia Southern University',
    },
    {
      Id: 8770,
      Name: 'Equinox Publishing Ltd',
    },
    {
      Id: 8771,
      Name: 'TRANS STELLAR',
    },
    {
      Id: 8772,
      Name: 'International E-Learning Association',
    },
    {
      Id: 8773,
      Name: 'Jönköping University',
    },
    {
      Id: 8774,
      Name: 'Örebro University School of Business',
    },
    {
      Id: 8775,
      Name: 'Institute of International Economic Studies',
    },
    {
      Id: 8776,
      Name: "Bishop's University",
    },
    {
      Id: 8777,
      Name: 'American Psychological Association',
    },
    {
      Id: 8778,
      Name: 'Baqiyatallah University of Medical Sciences',
    },
    {
      Id: 8779,
      Name: 'International Journal of Business and Commerce',
    },
    {
      Id: 8780,
      Name: 'International Journal of Business and Information',
    },
    {
      Id: 8781,
      Name: 'International Journal of Community Currency Research',
    },
    {
      Id: 8782,
      Name: 'Intellect Books',
    },
    {
      Id: 8783,
      Name: 'IJCEM',
    },
    {
      Id: 8784,
      Name: 'University of Bielefeld',
    },
    {
      Id: 8785,
      Name: 'Academy of Knowledge Process',
    },
    {
      Id: 8786,
      Name: 'International Journal of Criminal Investigation',
    },
    {
      Id: 8787,
      Name: 'South Asian Society of Criminology and Victimology',
    },
    {
      Id: 8788,
      Name: 'The University of North Carolina at Greensboro',
    },
    {
      Id: 8789,
      Name: 'Pluto Journals',
    },
    {
      Id: 8790,
      Name: 'University of Edinburgh',
    },
    {
      Id: 8791,
      Name: 'The Social Sciences Research Society',
    },
    {
      Id: 8792,
      Name: 'Eastern Macedonia and Thrace Institute of Technology',
    },
    {
      Id: 8793,
      Name: 'Time Taylor International Ltd',
    },
    {
      Id: 8794,
      Name: 'International Society for Educational Technology',
    },
    {
      Id: 8795,
      Name: 'ER Publications',
    },
    {
      Id: 8796,
      Name: 'International Journal of Enterprise Computing and Business Systems',
    },
    {
      Id: 8797,
      Name: 'Oxford Brookes University',
    },
    {
      Id: 8798,
      Name: 'IJFM',
    },
    {
      Id: 8799,
      Name: 'International Organization of Supreme Audit Institutions',
    },
    {
      Id: 8800,
      Name: 'Inclusive Democracy',
    },
    {
      Id: 8801,
      Name: 'ARF Sourcing',
    },
    {
      Id: 8802,
      Name: 'Globeedu Group',
    },
    {
      Id: 8803,
      Name: 'Pakistan Society for Business and Management Research',
    },
    {
      Id: 8804,
      Name: 'shahid beheshti university',
    },
    {
      Id: 8805,
      Name: 'Society of Scientific Research and Education',
    },
    {
      Id: 8806,
      Name: 'IJMRA',
    },
    {
      Id: 8807,
      Name: 'International Sociological Association',
    },
    {
      Id: 8808,
      Name: 'International Microsimulation Association',
    },
    {
      Id: 8809,
      Name: 'International Center for Not-for-Profit Law',
    },
    {
      Id: 8810,
      Name: 'IAOI',
    },
    {
      Id: 8811,
      Name: 'Psychosocial Rehabilitation Association',
    },
    {
      Id: 8812,
      Name: 'Mid Sweden University',
    },
    {
      Id: 8813,
      Name: 'Galore Knowledge Publication',
    },
    {
      Id: 8814,
      Name: 'IJRBEM',
    },
    {
      Id: 8815,
      Name: 'IJRCM',
    },
    {
      Id: 8816,
      Name: 'IJRSM',
    },
    {
      Id: 8817,
      Name: 'Bursa Uludag University',
    },
    {
      Id: 8818,
      Name: 'Michigan State University',
    },
    {
      Id: 8819,
      Name: 'Pondicherry University',
    },
    {
      Id: 8820,
      Name: 'Publication Office of the European Union',
    },
    {
      Id: 8821,
      Name: 'Gale',
    },
    {
      Id: 8822,
      Name: 'Parthenon Publishing',
    },
    {
      Id: 8823,
      Name: 'KARL STORZ ',
    },
    {
      Id: 8824,
      Name: 'International Atomic Energy Agency',
    },
    {
      Id: 8825,
      Name: 'Jones & Bartlett Publishers',
    },
    {
      Id: 8826,
      Name: 'Pearson',
    },
    {
      Id: 8827,
      Name: 'CBS',
    },
    {
      Id: 8828,
      Name: 'E.S Prakash',
    },
    {
      Id: 8829,
      Name: 'Psychological Intelligence Foundation CIC',
    },
    {
      Id: 8830,
      Name: 'University of Belgrade',
    },
    {
      Id: 8831,
      Name: 'NADIA – Advancement Through Research',
    },
    {
      Id: 8832,
      Name: 'University of Waikato',
    },
    {
      Id: 8833,
      Name: 'University of Bonn',
    },
    {
      Id: 8834,
      Name: 'International Journal on World Peace',
    },
    {
      Id: 8835,
      Name: 'Friedrich Ebert Foundation',
    },
    {
      Id: 8836,
      Name: 'Centre for the Study of Living Standards',
    },
    {
      Id: 8837,
      Name: 'IPMR',
    },
    {
      Id: 8838,
      Name: 'American Real Estate Society',
    },
    {
      Id: 8839,
      Name: 'Stanford University',
    },
    {
      Id: 8840,
      Name: 'International Research Journal of Finance and Economics',
    },
    {
      Id: 8841,
      Name: 'Integral University',
    },
    {
      Id: 8842,
      Name: 'Zant World Press',
    },
    {
      Id: 8843,
      Name: 'IRIE',
    },
    {
      Id: 8844,
      Name: 'International Socialism',
    },
    {
      Id: 8845,
      Name: 'National Autonomous University of Mexico',
    },
    {
      Id: 8846,
      Name: 'Investment Advisor',
    },
    {
      Id: 8847,
      Name: 'IPRI',
    },
    {
      Id: 8848,
      Name: 'Ìrìnkèrindò',
    },
    {
      Id: 8849,
      Name: 'Irish America',
    },
    {
      Id: 8850,
      Name: 'Institute for Psychological Therapies',
    },
    {
      Id: 8851,
      Name: 'Western Australian Institute for Educational Research',
    },
    {
      Id: 8852,
      Name: 'Elon University',
    },
    {
      Id: 8853,
      Name: 'Association of College and Research Libraies',
    },
    {
      Id: 8854,
      Name: 'Ivey Business School',
    },
    {
      Id: 8855,
      Name: 'Trivium Publications',
    },
    {
      Id: 8856,
      Name: 'Japan Institute for Labour Policy and Training',
    },
    {
      Id: 8857,
      Name: 'JRTR.net',
    },
    {
      Id: 8858,
      Name: 'Florida International University',
    },
    {
      Id: 8859,
      Name: 'The Japanese Association for American Studies',
    },
    {
      Id: 8860,
      Name: 'National Institute of Population and Social Security Research',
    },
    {
      Id: 8861,
      Name: 'Northern Arizona University',
    },
    {
      Id: 8862,
      Name: 'Project MUSE',
    },
    {
      Id: 8863,
      Name: 'Jewish bible association',
    },
    {
      Id: 8864,
      Name: 'Jerusalem Center For Public Affairs',
    },
    {
      Id: 8865,
      Name: 'The Council on Biblical Manhood and Womanhood',
    },
    {
      Id: 8866,
      Name: 'Journal for Critical Animal Studies',
    },
    {
      Id: 8867,
      Name: 'Institute for education policy studies',
    },
    {
      Id: 8868,
      Name: 'Ball State University',
    },
    {
      Id: 8869,
      Name: 'AICPA',
    },
    {
      Id: 8870,
      Name: 'JAAME',
    },
    {
      Id: 8871,
      Name: 'JARER',
    },
    {
      Id: 8872,
      Name: 'International Academy',
    },
    {
      Id: 8873,
      Name: 'kentucky economic association',
    },
    {
      Id: 8874,
      Name: 'SimSoc Consortium',
    },
    {
      Id: 8875,
      Name: 'Journal of Australian Political Economy',
    },
    {
      Id: 8876,
      Name: 'UNCG',
    },
    {
      Id: 8877,
      Name: 'JBAM',
    },
    {
      Id: 8878,
      Name: 'TAF Publications',
    },
    {
      Id: 8879,
      Name: 'National Chengchi University',
    },
    {
      Id: 8880,
      Name: 'University of Münster',
    },
    {
      Id: 8881,
      Name: 'PressAcademia',
    },
    {
      Id: 8882,
      Name: 'Caribbean Centre for Money and Finance',
    },
    {
      Id: 8883,
      Name: 'Florida Museum',
    },
    {
      Id: 8884,
      Name: 'Tomas Bata University in Zlín',
    },
    {
      Id: 8885,
      Name: 'Open University of Catalonia',
    },
    {
      Id: 8886,
      Name: 'JESR',
    },
    {
      Id: 8887,
      Name: 'The Economic Research Institute',
    },
    {
      Id: 8888,
      Name: 'University of Arad',
    },
    {
      Id: 8889,
      Name: 'Academy of Economics and Finance',
    },
    {
      Id: 8890,
      Name: 'Aberdeen Business School',
    },
    {
      Id: 8891,
      Name: 'Publishing India',
    },
    {
      Id: 8892,
      Name: 'Eastern Washington University',
    },
    {
      Id: 8893,
      Name: 'International Association of IT Lawyers',
    },
    {
      Id: 8894,
      Name: 'Learning & Technology Library',
    },
    {
      Id: 8895,
      Name: 'Journal of International Social Research',
    },
    {
      Id: 8896,
      Name: 'Bridgewater State University',
    },
    {
      Id: 8897,
      Name: 'ARRAY Development',
    },
    {
      Id: 8898,
      Name: 'Management Development Research Foundation',
    },
    {
      Id: 8899,
      Name: 'Fountain University',
    },
    {
      Id: 8900,
      Name: 'Assam Don Bosco University',
    },
    {
      Id: 8901,
      Name: 'Qurtuba University of Science & IT',
    },
    {
      Id: 8902,
      Name: 'JPAS',
    },
    {
      Id: 8903,
      Name: 'West Virginia University',
    },
    {
      Id: 8904,
      Name: 'James Cook University',
    },
    {
      Id: 8905,
      Name: 'AMH International',
    },
    {
      Id: 8906,
      Name: 'Henley-Putnam University',
    },
    {
      Id: 8907,
      Name: 'University of Louisville',
    },
    {
      Id: 8908,
      Name: 'Universidad de Talca',
    },
    {
      Id: 8909,
      Name: 'KASBIT',
    },
    {
      Id: 8910,
      Name: 'Clemson University',
    },
    {
      Id: 8911,
      Name: 'Lahore School of Economics',
    },
    {
      Id: 8912,
      Name: 'National Cooperative Agriculture & Rural Development Banks Federation',
    },
    {
      Id: 8913,
      Name: 'Boise State University',
    },
    {
      Id: 8914,
      Name: 'University at Albany',
    },
    {
      Id: 8915,
      Name: 'Feinstein International Center',
    },
    {
      Id: 8916,
      Name: 'AAIR',
    },
    {
      Id: 8917,
      Name: 'Illinois Institute of Technology',
    },
    {
      Id: 8918,
      Name: 'DGRI',
    },
    {
      Id: 8919,
      Name: 'Salve Regina University',
    },
    {
      Id: 8920,
      Name: 'Andhra University',
    },
    {
      Id: 8921,
      Name: 'University of Massachusetts Boston',
    },
    {
      Id: 8922,
      Name: 'Cleveland State University',
    },
    {
      Id: 8923,
      Name: 'The University of Utah',
    },
    {
      Id: 8924,
      Name: 'Marquette Books LLC',
    },
    {
      Id: 8925,
      Name: 'Kluwer Academic Publishers',
    },
    {
      Id: 8926,
      Name: 'Griffith University',
    },
    {
      Id: 8927,
      Name: 'University of the South Pacific',
    },
    {
      Id: 8928,
      Name: 'University “Ss. Cyril and Methodius”',
    },
    {
      Id: 8929,
      Name: 'EAHIL',
    },
    {
      Id: 8930,
      Name: 'Medical Library Association',
    },
    {
      Id: 8931,
      Name: 'Society For Social Work & Research',
    },
    {
      Id: 8932,
      Name: 'Textile Association',
    },
    {
      Id: 8933,
      Name: 'eScholarship Repository',
    },
    {
      Id: 8934,
      Name: 'Bureau of Transportation Statistics',
    },
    {
      Id: 8935,
      Name: 'University Librarians Association of Sri Lanka',
    },
    {
      Id: 8936,
      Name: 'University of Virginia',
    },
    {
      Id: 8937,
      Name: 'Yasar University',
    },
    {
      Id: 8938,
      Name: 'Wageningen Academic Publishers',
    },
    {
      Id: 8939,
      Name: 'Ontario Association on Developmental Disabilities',
    },
    {
      Id: 8940,
      Name: 'North Carolina State University',
    },
    {
      Id: 8941,
      Name: 'Center on Juvenile and Criminal Justice',
    },
    {
      Id: 8942,
      Name: 'Penerbit USM',
    },
    {
      Id: 8943,
      Name: 'University of Kansas',
    },
    {
      Id: 8944,
      Name: 'Khazar University',
    },
    {
      Id: 8945,
      Name: 'University of Oregon',
    },
    {
      Id: 8946,
      Name: 'Institute of far eastern studies',
    },
    {
      Id: 8947,
      Name: 'National University of "Kyiv-Mohyla Academy',
    },
    {
      Id: 8948,
      Name: ' M. S. Thirumalai',
    },
    {
      Id: 8949,
      Name: 'University of Plymouth',
    },
    {
      Id: 8950,
      Name: 'University of the Western Cape',
    },
    {
      Id: 8951,
      Name: 'University of Warwick',
    },
    {
      Id: 8952,
      Name: 'The University of Texas at Austin',
    },
    {
      Id: 8953,
      Name: 'Lewis & Clark Law School',
    },
    {
      Id: 8954,
      Name: 'Universitatea Nicolae Titulescu',
    },
    {
      Id: 8955,
      Name: 'LIBER',
    },
    {
      Id: 8956,
      Name: 'Nanyang Technological University,',
    },
    {
      Id: 8957,
      Name: 'Foreign Policy Research Center',
    },
    {
      Id: 8958,
      Name: 'University of Zurich',
    },
    {
      Id: 8959,
      Name: 'University of Vienna',
    },
    {
      Id: 8960,
      Name: 'Forestnet',
    },
    {
      Id: 8961,
      Name: 'WGTL',
    },
    {
      Id: 8962,
      Name: 'Loyola University Chicago',
    },
    {
      Id: 8963,
      Name: 'Centro de Estudos de Cultura Contemporânea',
    },
    {
      Id: 8964,
      Name: 'Macquarie University',
    },
    {
      Id: 8965,
      Name: 'Universidad de Magallanes',
    },
    {
      Id: 8966,
      Name: 'Banking New York',
    },
    {
      Id: 8967,
      Name: 'SNSPMS',
    },
    {
      Id: 8968,
      Name: 'Research Center in Public Administration and Public Services',
    },
    {
      Id: 8969,
      Name: 'Growing Science',
    },
    {
      Id: 8970,
      Name: 'University of Split',
    },
    {
      Id: 8971,
      Name: 'PAF-KIET Institute of Economics and Technology',
    },
    {
      Id: 8972,
      Name: 'Marketing Bulletin',
    },
    {
      Id: 8973,
      Name: 'Marquette University',
    },
    {
      Id: 8974,
      Name: 'University of Copenhagen',
    },
    {
      Id: 8975,
      Name: 'Mediterranean Center of Social and Educational Research',
    },
    {
      Id: 8976,
      Name: 'Megatrend University',
    },
    {
      Id: 8977,
      Name: 'Museum Victoria',
    },
    {
      Id: 8978,
      Name: 'Hogrefe',
    },
    {
      Id: 8979,
      Name: 'Northern Marianas College',
    },
    {
      Id: 8980,
      Name: 'Mid-America Commerce & Industry',
    },
    {
      Id: 8981,
      Name: 'United States Committee for a Free Lebanon',
    },
    {
      Id: 8982,
      Name: 'military legal resources',
    },
    {
      Id: 8983,
      Name: 'Army University Press',
    },
    {
      Id: 8984,
      Name: 'Indian Association of Clinical Medicine',
    },
    {
      Id: 8985,
      Name: 'Scientific ?entre for Family Health and Human Reproduction Problems',
    },
    {
      Id: 8986,
      Name: 'Klinicka Bolnica Sestre Milosrdnice',
    },
    {
      Id: 8987,
      Name: 'Croatian Dermatovenerological Society',
    },
    {
      Id: 8988,
      Name: 'University of Indonesia',
    },
    {
      Id: 8989,
      Name: 'Lithuanian Academy of Sciences',
    },
    {
      Id: 8990,
      Name: 'Lucian Blaga University of Sibiu',
    },
    {
      Id: 8991,
      Name: 'Sociedade Portuguesa de Reumatologia',
    },
    {
      Id: 8992,
      Name: 'Maringá State University',
    },
    {
      Id: 8993,
      Name: 'Asociación Toxicológica Argentina',
    },
    {
      Id: 8994,
      Name: 'Pakistan Society of Anaesthesiologists',
    },
    {
      Id: 8995,
      Name: 'Korean Dermatological Association ',
    },
    {
      Id: 8996,
      Name: 'Korean Society for Laboratory Medicine',
    },
    {
      Id: 8997,
      Name: "Annals of Mechnikov's Institute",
    },
    {
      Id: 8998,
      Name: 'Bio Accent',
    },
    {
      Id: 8999,
      Name: 'Pakistan Institute of Medical Sciences  ',
    },
    {
      Id: 9000,
      Name: 'Korean Society of Pediatric Endocrinology',
    },
    {
      Id: 9001,
      Name: 'Ukaaz Publications',
    },
    {
      Id: 9002,
      Name: 'Korean Academy of Rehabilitation Medicine',
    },
    {
      Id: 9003,
      Name: 'King Faisal Specialist Hospital and Research Centre',
    },
    {
      Id: 9004,
      Name: 'korean surgical society',
    },
    {
      Id: 9005,
      Name: 'Academy of Medicine,Singapore',
    },
    {
      Id: 9006,
      Name: 'University of Buenos Aires  ',
    },
    {
      Id: 9007,
      Name: 'Anuradhapura Clinical Society  ',
    },
    {
      Id: 9008,
      Name: 'Anwer Khan Modern Medical College  ',
    },
    {
      Id: 9009,
      Name: 'University of Medicine and Pharmacy',
    },
    {
      Id: 9010,
      Name: 'ScopeMed',
    },
    {
      Id: 9011,
      Name: 'Universidad de Sevilla  ',
    },
    {
      Id: 9012,
      Name: 'Academicians Research Center  ',
    },
    {
      Id: 9013,
      Name: 'Golden Child Publishing',
    },
    {
      Id: 9014,
      Name: 'Mariyam Dental Corporation',
    },
    {
      Id: 9015,
      Name: 'Pastest',
    },
    {
      Id: 9016,
      Name: "St. Martin's Press",
    },
    {
      Id: 9017,
      Name: 'Nova Science Publishers',
    },
    {
      Id: 9018,
      Name: 'JBbooks',
    },
    {
      Id: 9019,
      Name: 'Arc Publications',
    },
    {
      Id: 9020,
      Name: 'National Medical University',
    },
    {
      Id: 9021,
      Name: 'Fortune Journals',
    },
    {
      Id: 9022,
      Name: 'American University of Antigua',
    },
    {
      Id: 9023,
      Name: 'korean society of plastic and reconstructive surgeons',
    },
    {
      Id: 9024,
      Name: 'Polish Psychiatric Association',
    },
    {
      Id: 9025,
      Name: 'Universidad de Ciencias Médicas de Camagüey',
    },
    {
      Id: 9026,
      Name: 'Sociedad Argentina de Pediatria',
    },
    {
      Id: 9027,
      Name: 'Sociedad Latinoamericana de Nutricion',
    },
    {
      Id: 9028,
      Name: 'Arquivos do Instituto Biológico',
    },
    {
      Id: 9029,
      Name: 'Asociación Argentina de Anatomía Clínica',
    },
    {
      Id: 9030,
      Name: 'Asean Federation Of Cardiology',
    },
    {
      Id: 9031,
      Name: 'Malaysian Psychiatric Association',
    },
    {
      Id: 9032,
      Name: 'Asia Pacific Association of Allergy, Asthma and Clinical Immunology',
    },
    {
      Id: 9033,
      Name: 'Asian Journal of Advanced Basic Sciences',
    },
    {
      Id: 9034,
      Name: 'EbuPress',
    },
    {
      Id: 9035,
      Name: 'Literati Scientific and Publishers',
    },
    {
      Id: 9036,
      Name: 'Hong Kong Geriatrics Society',
    },
    {
      Id: 9037,
      Name: 'Allergy and immunology society of thailand',
    },
    {
      Id: 9038,
      Name: 'Asian Pacific Journal of Health Sciences',
    },
    {
      Id: 9039,
      Name: 'KOREA SOCIETY OF SPINE SURGERY',
    },
    {
      Id: 9040,
      Name: 'Albert Science International Organization',
    },
    {
      Id: 9041,
      Name: 'QScience',
    },
    {
      Id: 9042,
      Name: 'Academia Brasileira de Audiologia',
    },
    {
      Id: 9043,
      Name: 'Australasian Neuroscience Nurses’ Association',
    },
    {
      Id: 9044,
      Name: 'Southern Cross Science',
    },
    {
      Id: 9045,
      Name: 'Australian Nursing Federation',
    },
    {
      Id: 9046,
      Name: 'University of Newcastle',
    },
    {
      Id: 9047,
      Name: 'Melbourne scientific publishers',
    },
    {
      Id: 9048,
      Name: 'Hamedan University of Medical Sciences',
    },
    {
      Id: 9049,
      Name: 'Mahadev publications',
    },
    {
      Id: 9050,
      Name: 'Yerküre Tanitim ve Yayincilik A.S.',
    },
    {
      Id: 9051,
      Name: 'Bahrain Medical Bulletin',
    },
    {
      Id: 9052,
      Name: 'Sanglah General Hospital',
    },
    {
      Id: 9053,
      Name: 'Trakya University',
    },
    {
      Id: 9054,
      Name: 'Romanian association of balneology',
    },
    {
      Id: 9055,
      Name: 'Bangabandhu Sheikh Mujib Medical University',
    },
    {
      Id: 9056,
      Name: 'Barrow Neurological Institute',
    },
    {
      Id: 9057,
      Name: 'Association for Behavioral and Cognitive Therapies',
    },
    {
      Id: 9058,
      Name: 'Association of otolaryngologists of india',
    },
    {
      Id: 9059,
      Name: 'Best Journals',
    },
    {
      Id: 9060,
      Name: 'Bezmialem University',
    },
    {
      Id: 9061,
      Name: 'Instituto de Histología y Embriología "Dr. Mario H. Burgos" ',
    },
    {
      Id: 9062,
      Name: 'Future Medicine',
    },
    {
      Id: 9063,
      Name: 'BioPublisher',
    },
    {
      Id: 9064,
      Name: 'Instituto Nacional de Salud',
    },
    {
      Id: 9065,
      Name: 'Biomedical and Pharmacology Journal',
    },
    {
      Id: 9066,
      Name: 'The Optical Society',
    },
    {
      Id: 9067,
      Name: 'BioMedPress',
    },
    {
      Id: 9068,
      Name: 'Gallaudet University',
    },
    {
      Id: 9069,
      Name: 'American Occupational Therapy Association',
    },
    {
      Id: 9070,
      Name: 'A&V Publications',
    },
    {
      Id: 9071,
      Name: 'Royal Australian College of General Practitioners',
    },
    {
      Id: 9072,
      Name: 'Australian Nursing and Midwifery Federation',
    },
    {
      Id: 9073,
      Name: 'Dietitians of Canada',
    },
    {
      Id: 9074,
      Name: 'Canadian Science Publishing',
    },
    {
      Id: 9075,
      Name: 'Canadian Journal of Nursing Informatics',
    },
    {
      Id: 9076,
      Name: 'The Canadian Society of Respiratory Therapists',
    },
    {
      Id: 9077,
      Name: 'Canadian Medical Association',
    },
    {
      Id: 9078,
      Name: 'Canadian Nurses Association',
    },
    {
      Id: 9079,
      Name: 'Canadian Association of Nurses in Oncology',
    },
    {
      Id: 9080,
      Name: 'RCNI',
    },
    {
      Id: 9081,
      Name: 'NATIONAL INSTITUTE OF PUBLIC HEALTH',
    },
    {
      Id: 9082,
      Name: 'Oncology Nursing Society',
    },
    {
      Id: 9083,
      Name: 'Relias Media',
    },
    {
      Id: 9084,
      Name: 'Dynamic Chiropractic',
    },
    {
      Id: 9085,
      Name: 'National Institute of Environmental Health Sciences',
    },
    {
      Id: 9086,
      Name: 'Journal of Community Positive Practices',
    },
    {
      Id: 9087,
      Name: 'National Environmental Health Association',
    },
    {
      Id: 9088,
      Name: 'JOULE INC.',
    },
    {
      Id: 9089,
      Name: 'Nigeria Society of Physiotherapy',
    },
    {
      Id: 9090,
      Name: 'NP Communications, LLC',
    },
    {
      Id: 9091,
      Name: 'Romanian Society of Ultrasonography in Medicine and Biology',
    },
    {
      Id: 9092,
      Name: 'Stephen Barrett',
    },
    {
      Id: 9093,
      Name: 'CINAHL',
    },
    {
      Id: 9094,
      Name: 'American Association for the History of Nursing',
    },
    {
      Id: 9095,
      Name: '1105 Media, Inc.',
    },
    {
      Id: 9096,
      Name: 'Haymarket Media',
    },
    {
      Id: 9097,
      Name: 'Information Today, Inc.',
    },
    {
      Id: 9098,
      Name: 'Healio',
    },
    {
      Id: 9099,
      Name: 'Occupational Therapy Association of South Africa',
    },
    {
      Id: 9100,
      Name: 'Turkish Journal of Public Health',
    },
    {
      Id: 9101,
      Name: 'i-manager Publications',
    },
    {
      Id: 9102,
      Name: 'Association for Pre & Perinatal Psychology and Health',
    },
    {
      Id: 9103,
      Name: 'Aligarh Muslim University',
    },
    {
      Id: 9104,
      Name: 'Zone Books',
    },
    {
      Id: 9105,
      Name: 'Policy press',
    },
    {
      Id: 9106,
      Name: 'Nomos Verlag',
    },
    {
      Id: 9107,
      Name: 'scandinavian university press',
    },
    {
      Id: 9108,
      Name: 'AboutScience',
    },
    {
      Id: 9109,
      Name: 'American Journal of Bio-Pharmacology Biochemistry and Life Sciences',
    },
    {
      Id: 9110,
      Name: 'Ebioscholar',
    },
    {
      Id: 9111,
      Name: 'Razi Vaccine and Serum Research Institute',
    },
    {
      Id: 9112,
      Name: 'Pharma research library',
    },
    {
      Id: 9113,
      Name: 'Scienceline Publication',
    },
    {
      Id: 9114,
      Name: 'Asian Journal of Multidisciplinary Studies',
    },
    {
      Id: 9115,
      Name: 'Asian Journal of Pharmaceutical Analysis and Medicinal Chemistry',
    },
    {
      Id: 9116,
      Name: 'Asian Journal of Pharmaceutical Education and Research',
    },
    {
      Id: 9117,
      Name: 'Pharma Intelligence',
    },
    {
      Id: 9118,
      Name: 'Asian Journal of Pharmacy and Pharmacology',
    },
    {
      Id: 9119,
      Name: 'Asian Journal of Phytomedicine and Clinical Research',
    },
    {
      Id: 9120,
      Name: 'UPTODATE RESEARCH PUBLICATION',
    },
    {
      Id: 9121,
      Name: 'Biomedical Review: Journal of Basic and Applied Medical Sciences',
    },
    {
      Id: 9122,
      Name: 'The Korean Society of Applied Pharmacology',
    },
    {
      Id: 9123,
      Name: 'KY Publications',
    },
    {
      Id: 9124,
      Name: 'Canadian Research Publications',
    },
    {
      Id: 9125,
      Name: 'STA HealthCare Communications',
    },
    {
      Id: 9126,
      Name: 'CENTER FOR INFO BIO TECHNOLOGY',
    },
    {
      Id: 9127,
      Name: 'Crimson Publishers',
    },
    {
      Id: 9128,
      Name: 'CES College of Pharmacy',
    },
    {
      Id: 9129,
      Name: 'Earth Journals',
    },
    {
      Id: 9130,
      Name: 'Global SciTech Ocean',
    },
    {
      Id: 9131,
      Name: 'Girijananda Chowdhury Institute of Management & Technology',
    },
    {
      Id: 9132,
      Name: 'Direct research journals',
    },
    {
      Id: 9133,
      Name: 'Drug delivery technology',
    },
    {
      Id: 9134,
      Name: 'Medical Economics',
    },
    {
      Id: 9135,
      Name: 'KenzPub',
    },
    {
      Id: 9136,
      Name: 'Einstein International Journal Organization',
    },
    {
      Id: 9137,
      Name: 'Enliven Archive',
    },
    {
      Id: 9138,
      Name: 'EJBPS',
    },
    {
      Id: 9139,
      Name: 'EJPMR',
    },
    {
      Id: 9140,
      Name: 'Galle Medical Association',
    },
    {
      Id: 9141,
      Name: 'International Academy of Science and Higher Education',
    },
    {
      Id: 9142,
      Name: 'Global Advanced Research Journals',
    },
    {
      Id: 9143,
      Name: 'Eureka Journals',
    },
    {
      Id: 9144,
      Name: 'Gratis Open Access Publishers',
    },
    {
      Id: 9145,
      Name: 'Greener Scholarly Publications',
    },
    {
      Id: 9146,
      Name: 'GSC Online Press',
    },
    {
      Id: 9147,
      Name: 'Hellenic Society of Nuclear Medicine',
    },
    {
      Id: 9148,
      Name: 'Himalayan Journal of Health Sciences',
    },
    {
      Id: 9149,
      Name: 'Scientific Society of Evangelismos General Hospital',
    },
    {
      Id: 9150,
      Name: 'Herald Scholarly Open Access',
    },
    {
      Id: 9151,
      Name: 'Centre for Info Bio Technology',
    },
    {
      Id: 9152,
      Name: 'IJMRPS',
    },
    {
      Id: 9153,
      Name: 'Karnataka Education and Scientific Society',
    },
    {
      Id: 9154,
      Name: 'Shri Manmohan Sharma Educational Society',
    },
    {
      Id: 9155,
      Name: 'AIIMS',
    },
    {
      Id: 9156,
      Name: 'Indian Journal of Research in Pharmacy and Biotechnology',
    },
    {
      Id: 9157,
      Name: 'Indian Research Journal of Pharmacy and Science',
    },
    {
      Id: 9158,
      Name: 'Indo American Journal of Pharmaceutical Research',
    },
    {
      Id: 9159,
      Name: 'Padjadjaran University',
    },
    {
      Id: 9160,
      Name: 'Federal Council of Pharmacy',
    },
    {
      Id: 9161,
      Name: 'Bio-Byword Scientific Publishing',
    },
    {
      Id: 9162,
      Name: 'Innovational Publishers',
    },
    {
      Id: 9163,
      Name: 'Insight Knowledge',
    },
    {
      Id: 9164,
      Name: 'Open Access Text',
    },
    {
      Id: 9165,
      Name: 'The Japanese Society of Internal Medicine',
    },
    {
      Id: 9166,
      Name: 'IJPRS',
    },
    {
      Id: 9167,
      Name: 'International Journal of Research',
    },
    {
      Id: 9168,
      Name: 'RET Academy for International Journals of Multidisciplinary Research',
    },
    {
      Id: 9169,
      Name: 'International Journal of Academic Studies',
    },
    {
      Id: 9170,
      Name: 'IADS',
    },
    {
      Id: 9171,
      Name: 'Atharva Scientific Publications',
    },
    {
      Id: 9172,
      Name: 'Conscientia Beam',
    },
    {
      Id: 9173,
      Name: 'Emap publishing',
    },
    {
      Id: 9174,
      Name: ' IAMJ',
    },
    {
      Id: 9175,
      Name: 'IAMJ',
    },
    {
      Id: 9176,
      Name: 'IJTMRPH',
    },
    {
      Id: 9177,
      Name: 'WJPR',
    },
    {
      Id: 9178,
      Name: 'WJPPS',
    },
    {
      Id: 9179,
      Name: 'WJPLS',
    },
    {
      Id: 9180,
      Name: 'SAS publisher',
    },
    {
      Id: 9181,
      Name: 'Covid-19',
    },
    {
      Id: 9182,
      Name: 'Greentree Group Publishers',
    },
    {
      Id: 9183,
      Name: 'AJES',
    },
    {
      Id: 9184,
      Name: ' Iris Publishers',
    },
    {
      Id: 9185,
      Name: 'Iris Publishers',
    },
    {
      Id: 9186,
      Name: 'IASET',
    },
    {
      Id: 9187,
      Name: 'SLAA PUBLICATIONS PRIVATE LIMITED',
    },
    {
      Id: 9188,
      Name: 'National Herbalists Association of Australia',
    },
    {
      Id: 9189,
      Name: 'American Society of Civil Engineers',
    },
    {
      Id: 9190,
      Name: 'The American Society of Mechanical Engineers',
    },
    {
      Id: 9191,
      Name: 'WIT Press',
    },
    {
      Id: 9192,
      Name: 'Open House International',
    },
    {
      Id: 9193,
      Name: 'Leuven University Press',
    },
    {
      Id: 9194,
      Name: 'Heidelberg University Publishing (heiUP)',
    },
    {
      Id: 9195,
      Name: ' SciELO ',
    },
    {
      Id: 9196,
      Name: ' FedOA - Federico II University Press',
    },
    {
      Id: 9197,
      Name: 'punctum books',
    },
    {
      Id: 9198,
      Name: 'University of South Florida',
    },
    {
      Id: 9199,
      Name: 'Integrated Publishers',
    },
    {
      Id: 9200,
      Name: ' Gavin Publishers',
    },
    {
      Id: 9201,
      Name: 'Gavin Publishers',
    },
    {
      Id: 9202,
      Name: ' Homeobook',
    },
    {
      Id: 9203,
      Name: ' Homeobook',
    },
    {
      Id: 9204,
      Name: 'Homeobook',
    },
    {
      Id: 9205,
      Name: ' ETHealthworld',
    },
    {
      Id: 9206,
      Name: 'ETHealthworld',
    },
    {
      Id: 9207,
      Name: 'The Economic Times',
    },
    {
      Id: 9208,
      Name: 'LawBriefs',
    },
    {
      Id: 9209,
      Name: 'the Guardian',
    },
    {
      Id: 9210,
      Name: 'Graduate Program of Syiah Kuala University',
    },
    {
      Id: 9211,
      Name: 'Adiyaman University',
    },
    {
      Id: 9212,
      Name: 'University of West Bohemia',
    },
    {
      Id: 9213,
      Name: 'Prague Development Center ',
    },
    {
      Id: 9214,
      Name: 'Czech Technical University in Prague, Faculty of Mechanical Engineering',
    },
    {
      Id: 9215,
      Name: 'Odessa National Polytechnic University ',
    },
    {
      Id: 9216,
      Name: 'STU Press',
    },
    {
      Id: 9217,
      Name: 'International Institute of Acoustics & Vibration',
    },
    {
      Id: 9218,
      Name: 'Aarya Publishing House',
    },
    {
      Id: 9219,
      Name: 'International Journal of Electrical, Electronics & Computer Systems',
    },
    {
      Id: 9220,
      Name: 'Isfahan University of  Technology ',
    },
    {
      Id: 9221,
      Name: 'ARIZONA STATE UNIVERSITY',
    },
    {
      Id: 9222,
      Name: 'American Meteorological Society',
    },
    {
      Id: 9223,
      Name: 'Allen Press Publishing Services Inc.',
    },
    {
      Id: 9224,
      Name: 'University of Miskolc',
    },
    {
      Id: 9225,
      Name: 'Journal of Computer Science and Control Systems',
    },
    {
      Id: 9226,
      Name: 'Eudoxus Press, LLC',
    },
    {
      Id: 9227,
      Name: 'Brazilian Microwave and Optoelectronics Society',
    },
    {
      Id: 9228,
      Name: 'Trans Tech Publications Ltd.',
    },
    {
      Id: 9229,
      Name: 'EVOKER RESEARCH PERFECTING COMPANY]',
    },
    {
      Id: 9230,
      Name: 'DEStech Publishing Inc',
    },
    {
      Id: 9231,
      Name: 'Boston University, School of Law',
    },
    {
      Id: 9232,
      Name: 'KeAi Publishing',
    },
    {
      Id: 9233,
      Name: 'University of Nigeria',
    },
    {
      Id: 9234,
      Name: 'Quanta',
    },
    {
      Id: 9235,
      Name: 'Zaporizhzhia National Technical University',
    },
    {
      Id: 9236,
      Name: 'Institute of Semiconductor Physics',
    },
    {
      Id: 9237,
      Name: 'Society for Industrial and Applied Mathematics',
    },
    {
      Id: 9238,
      Name: ' Matrix Rom Publishing House',
    },
    {
      Id: 9239,
      Name: 'Matrix Rom Publishing House',
    },
    {
      Id: 9240,
      Name: 'Tehnicki glasnik – Technical Journal',
    },
    {
      Id: 9241,
      Name: 'Tehnicki glasnik – Technical Journal',
    },
    {
      Id: 9242,
      Name: 'Theoretical and Applied Mechanics',
    },
    {
      Id: 9243,
      Name: 'Isik University, Department of Mathematics',
    },
    {
      Id: 9244,
      Name: 'Caldas District University',
    },
    {
      Id: 9245,
      Name: 'New Scientist Ltd.',
    },
    {
      Id: 9246,
      Name: 'The Conversation Global',
    },
    {
      Id: 9247,
      Name: 'Theprint',
    },
    {
      Id: 9248,
      Name: 'Business Insider India',
    },
    {
      Id: 9249,
      Name: 'The New York Times Company',
    },
    {
      Id: 9250,
      Name: 'NEWS-MEDICAL',
    },
    {
      Id: 9251,
      Name: 'the hindu ',
    },
    {
      Id: 9252,
      Name: ' CABI Media Centre',
    },
    {
      Id: 9253,
      Name: 'CABI Media Centre',
    },
    {
      Id: 9254,
      Name: 'International Journal of Physiotherapy',
    },
    {
      Id: 9255,
      Name: 'Hilaris',
    },
    {
      Id: 9256,
      Name: 'University of Zululand',
    },
    {
      Id: 9257,
      Name: 'University of Toronto Press',
    },
    {
      Id: 9258,
      Name: ' Journal of Orthopaedic & Sports Physical Therapy',
    },
    {
      Id: 9259,
      Name: 'Graphy Publications',
    },
    {
      Id: 9260,
      Name: 'Agriculture and Forestry',
    },
    {
      Id: 9261,
      Name: 'BS Publications',
    },
    {
      Id: 9262,
      Name: 'The Architect’s Newspaper, LLC',
    },
    {
      Id: 9263,
      Name: 'Business for Social Responsibility',
    },
    {
      Id: 9264,
      Name: 'Ayurveda UK',
    },
    {
      Id: 9265,
      Name: 'THE DIVINE LIFE SOCIETY',
    },
    {
      Id: 9266,
      Name: 'concept publishing company',
    },
    {
      Id: 9267,
      Name: 'althea press',
    },
    {
      Id: 9268,
      Name: 'M S Swaminathan Research Foundation',
    },
    {
      Id: 9269,
      Name: 'University of New South Wales',
    },
    {
      Id: 9270,
      Name: 'Gupta Publications',
    },
    {
      Id: 9271,
      Name: 'Annual Reviews',
    },
    {
      Id: 9272,
      Name: 'National Law University',
    },
    {
      Id: 9273,
      Name: 'CENTRE FOR RESEARCH ON ISLAMIC BANKING & FINANCE AND BUSINESS',
    },
    {
      Id: 9274,
      Name: 'Fordham University School of Law',
    },
    {
      Id: 9275,
      Name: ' VLEX JUSTIS',
    },
    {
      Id: 9276,
      Name: 'United Nations',
    },
    {
      Id: 9277,
      Name: 'IBS Center for Management Research',
    },
    {
      Id: 9278,
      Name: 'Assignment Point',
    },
    {
      Id: 9279,
      Name: 'IPC Systems',
    },
    {
      Id: 9280,
      Name: 'the world bank',
    },
    {
      Id: 9281,
      Name: 'Public Resource',
    },
    {
      Id: 9282,
      Name: 'Melissa Randall',
    },
    {
      Id: 9283,
      Name: 'SSRN',
    },
    {
      Id: 9284,
      Name: 'Oregon State University',
    },
    {
      Id: 9285,
      Name: 'Sydney University Press',
    },
    {
      Id: 9286,
      Name: 'Suzanne Adatto and Paul Brest',
    },
    {
      Id: 9287,
      Name: 'OpenStax',
    },
    {
      Id: 9288,
      Name: 'New York University',
    },
    {
      Id: 9289,
      Name: 'Open Oregon Educational Resources',
    },
    {
      Id: 9290,
      Name: 'University of Adelaide Press',
    },
    {
      Id: 9291,
      Name: 'Institute for Local Self-Government and Public Procurement Maribor',
    },
    {
      Id: 9292,
      Name: 'Prime Publications',
    },
    {
      Id: 9293,
      Name: ' International Journal of Law Management & Humanities',
    },
    {
      Id: 9294,
      Name: 'International Journal of Law Management & Humanities',
    },
    {
      Id: 9295,
      Name: ' Berghahn ',
    },
    {
      Id: 9296,
      Name: 'Law, Environment and Development Journal',
    },
    {
      Id: 9297,
      Name: 'INTERNATIONAL JOURNAL OF LEGAL STUDIES AND RESEARCH',
    },
    {
      Id: 9298,
      Name: 'International Journal for Crime, Justice and Social Democracy',
    },
    {
      Id: 9299,
      Name: 'Journal of Politics and Law',
    },
    {
      Id: 9300,
      Name: 'Edinburgh University Press.',
    },
    {
      Id: 9301,
      Name: 'Journal of Legal, Ethical and Regulatory Issues',
    },
    {
      Id: 9302,
      Name: ' Allied Business Academies',
    },
    {
      Id: 9303,
      Name: 'ScienceIn Publishing',
    },
    {
      Id: 9304,
      Name: 'M/S LIKHITA MEDICAL PUBLICATIONS (OPC), PVT. LTD',
    },
    {
      Id: 9305,
      Name: 'Journal of Biomedical and Pharmaceutical Research ',
    },
    {
      Id: 9306,
      Name: 'B.R. Nahata College of Pharmacy,',
    },
    {
      Id: 9307,
      Name: 'Journal of Pharmacognosy and Phytochemistry',
    },
    {
      Id: 9308,
      Name: 'Indian Journal of Odyssey of Ayurvedic Research',
    },
    {
      Id: 10297,
      Name: 'IJCRT Publisher',
    },
    {
      Id: 10298,
      Name: 'International Journal of Pharmaceutical Sciences and Research',
    },
    {
      Id: 10299,
      Name: 'ONOMY Science Publisher',
    },
    {
      Id: 10300,
      Name: 'iMedPub LTD',
    },
    {
      Id: 10301,
      Name: 'Ayurdoctor',
    },
    {
      Id: 10302,
      Name: 'Counselling Connection',
    },
    {
      Id: 10303,
      Name: 'Center for Open Education',
    },
    {
      Id: 10304,
      Name: 'Marmara University Press',
    },
    {
      Id: 10305,
      Name: 'Journal of Pharmacy Practice and Community Medicine',
    },
    {
      Id: 10306,
      Name: 'PHARMAVENTURES LTD',
    },
    {
      Id: 10307,
      Name: 'Elsevier Inc.',
    },
    {
      Id: 10308,
      Name: 'GRF Publishers',
    },
    {
      Id: 10309,
      Name: 'BioCore Group',
    },
    {
      Id: 10310,
      Name: 'The Journal of Clinical Investigation',
    },
    {
      Id: 10311,
      Name: 'Northern California',
    },
    {
      Id: 10312,
      Name: 'Scholarena',
    },
    {
      Id: 10313,
      Name: 'Massey University',
    },
    {
      Id: 10314,
      Name: 'Bosnian Journal of Basic Medical Sciences',
    },
    {
      Id: 10315,
      Name: 'Scientific Archives LLC,',
    },
    {
      Id: 10316,
      Name: 'American Association of School Administrators ',
    },
    {
      Id: 10317,
      Name: 'Academy of Management',
    },
    {
      Id: 10318,
      Name: 'Association for Computing Machinery, Inc.',
    },
    {
      Id: 10319,
      Name: 'Babes Bolyai University, Didactics of Exact Sciences Chair',
    },
    {
      Id: 10320,
      Name: 'Editora da Universidade Estadual de Maringá - EDUEM',
    },
    {
      Id: 10321,
      Name: 'Lodz University Press',
    },
    {
      Id: 10322,
      Name: 'AILA',
    },
    {
      Id: 10323,
      Name: 'Universidad Politécnica Salesiana del Ecuador',
    },
    {
      Id: 10324,
      Name: 'INFORMATION AGE PUBLISHING',
    },
    {
      Id: 10325,
      Name: 'INFORMATION AGE PUBLISHING',
    },
    {
      Id: 10326,
      Name: 'University of Nebraska Press',
    },
    {
      Id: 10327,
      Name: 'PNG Publications',
    },
    {
      Id: 10328,
      Name: 'The Strong',
    },
    {
      Id: 10329,
      Name: 'American Association on Intellectual and Developmental Disabilities',
    },
    {
      Id: 10330,
      Name: 'Music Teachers National Association',
    },
    {
      Id: 10331,
      Name: 'American Association of University Professors',
    },
    {
      Id: 10332,
      Name: 'Fort Hays State University',
    },
    {
      Id: 10333,
      Name: 'Allied Business Academies',
    },
    {
      Id: 10334,
      Name: 'Advances in Engineering Education',
    },
    {
      Id: 10335,
      Name: 'Advise',
    },
    {
      Id: 10336,
      Name: 'American Federation of Teachers',
    },
    {
      Id: 10337,
      Name: 'American Speech-Language-Hearing Association',
    },
    {
      Id: 10338,
      Name: 'American Occupational Therapy Association, Inc.',
    },
    {
      Id: 10339,
      Name: 'Association for Middle Level Education',
    },
    {
      Id: 10340,
      Name: 'Duzce University, Faculty of Education',
    },
    {
      Id: 10341,
      Name: 'University of New Brunswick',
    },
    {
      Id: 10342,
      Name: 'Appalachian Regional Commission',
    },
    {
      Id: 10343,
      Name: 'Defense Language Institute * Foreign Language Center',
    },
    {
      Id: 10344,
      Name: 'National Council of Teachers of Mathematics',
    },
    {
      Id: 10345,
      Name: 'Newstex',
    },
    {
      Id: 10346,
      Name: 'AMERICAN ART THERAPY ASSOCIATION',
    },
    {
      Id: 10347,
      Name: 'Publishers Development Corporation',
    },
    {
      Id: 10348,
      Name: 'American Society for Engineering Education',
    },
    {
      Id: 10349,
      Name: 'The Education University of Hong Kong',
    },
    {
      Id: 10350,
      Name: 'Asian Journal of Education and Training',
    },
    {
      Id: 10351,
      Name: 'Institute of Philosophy and Sociology',
    },
    {
      Id: 10352,
      Name: "The Alberta Teachers' Association",
    },
    {
      Id: 10353,
      Name: "National Athletic Trainers' Association",
    },
    {
      Id: 10354,
      Name: 'Ediciones Universidad de Salamanca',
    },
    {
      Id: 10355,
      Name: 'Control Publishing',
    },
    {
      Id: 10356,
      Name: 'ASCILITE',
    },
    {
      Id: 10357,
      Name: 'National Institute of Labour Studies',
    },
    {
      Id: 10358,
      Name: 'Australian Council for Computers in Education',
    },
    {
      Id: 10359,
      Name: 'Australian Education Union',
    },
    {
      Id: 10360,
      Name: 'University of Newcastle * Faculty of Education',
    },
    {
      Id: 10361,
      Name: 'John Benjamins',
    },
    {
      Id: 10362,
      Name: 'Australian Science Teachers Association',
    },
    {
      Id: 10363,
      Name: 'NTEU National Office',
    },
    {
      Id: 10364,
      Name: 'University of British Columbia',
    },
    {
      Id: 10365,
      Name: 'Owl Hill Media, LLC',
    },
    {
      Id: 10366,
      Name: 'Association of College and University Biology Educators',
    },
    {
      Id: 10367,
      Name: 'LRP Publications, Inc.',
    },
    {
      Id: 10368,
      Name: 'Booklist Publications',
    },
    {
      Id: 10369,
      Name: 'Bookbird',
    },
    {
      Id: 10370,
      Name: 'Brookings Institution Press',
    },
    {
      Id: 10371,
      Name: 'UNIVERSITY OF SOFIA',
    },
    {
      Id: 10372,
      Name: 'Institute of Education and Research',
    },
    {
      Id: 10373,
      Name: 'Bulletin of Education & Research',
    },
    {
      Id: 10374,
      Name: 'Johns Hopkins University Press',
    },
    {
      Id: 10375,
      Name: 'Faculdade de Educação',
    },
    {
      Id: 10376,
      Name: 'Equinox Publishing Ltd.',
    },
    {
      Id: 10377,
      Name: 'American Camping Association',
    },
    {
      Id: 10378,
      Name: 'American Camp Association',
    },
    {
      Id: 10379,
      Name: 'Canadian Society for Education Through Art',
    },
    {
      Id: 10380,
      Name: 'The Canadian Journal for the Scholarship of Teaching and Learning',
    },
    {
      Id: 10381,
      Name: 'Canadian Journal for the Study of Adult Education',
    },
    {
      Id: 10382,
      Name: 'Nipissing University',
    },
    {
      Id: 10383,
      Name: 'The Canadian Journal of Applied Linguistics',
    },
    {
      Id: 10384,
      Name: 'Canadian Journal of Education',
    },
    {
      Id: 10385,
      Name: 'Department of Leadership, Higher and Adult Education',
    },
    {
      Id: 10386,
      Name: 'Career Planning and Adult Development Network',
    },
    {
      Id: 10387,
      Name: 'Canadian Association of University Teachers',
    },
    {
      Id: 10388,
      Name: 'Life Sciences Education ',
    },
    {
      Id: 10389,
      Name: 'Radford University',
    },
    {
      Id: 10390,
      Name: 'Center for Educational Policy Studies Journal ',
    },
    {
      Id: 10391,
      Name: 'Child Welfare',
    },
    {
      Id: 10392,
      Name: 'Highway Safety Services, LLC',
    },
    {
      Id: 10393,
      Name: 'Johns Hopkins University Press',
    },
    {
      Id: 10394,
      Name: 'Chronicle of Higher Education',
    },
    {
      Id: 10395,
      Name: 'McFarland',
    },
    {
      Id: 10396,
      Name: 'COABE',
    },
    {
      Id: 10397,
      Name: 'AACRAO ',
    },
    {
      Id: 10398,
      Name: 'National Council of Teachers of English',
    },
    {
      Id: 10399,
      Name: 'College Literature',
    },
    {
      Id: 10400,
      Name: 'Communications in Information Literacy',
    },
    {
      Id: 10401,
      Name: 'Schoolcraft College',
    },
    {
      Id: 10402,
      Name: 'American Association of Community Colleges',
    },
    {
      Id: 10403,
      Name: 'Community Literacy Journal',
    },
    {
      Id: 10404,
      Name: 'Western University',
    },
    {
      Id: 10405,
      Name: 'The University of Chicago',
    },
    {
      Id: 10406,
      Name: 'Information Today, Inc.',
    },
    {
      Id: 10407,
      Name: 'Grupo Comunicar',
    },
    {
      Id: 10408,
      Name: 'Texas Music Educators Conference',
    },
    {
      Id: 10409,
      Name: 'CONTEMPORARY EDUCATIONAL TECHNOLOGY',
    },
    {
      Id: 10410,
      Name: 'Contemporary Issues in Technology and Teacher Education',
    },
    {
      Id: 10411,
      Name: 'Ohio Music Education Association',
    },
    {
      Id: 10412,
      Name: 'Prufrock Press',
    },
    {
      Id: 10413,
      Name: 'Arizona State University',
    },
    {
      Id: 10414,
      Name: 'James Nicholas Publishers',
    },
    {
      Id: 10415,
      Name: 'Cypriot Journal of Educational Sciences ',
    },
    {
      Id: 10416,
      Name: 'Delta Kappa Gamma Bulletin',
    },
    {
      Id: 10417,
      Name: 'Democracy & Education',
    },
    {
      Id: 10418,
      Name: 'Design and Technology Education: An International Journal',
    },
    {
      Id: 10419,
      Name: 'University of Delaware',
    },
    {
      Id: 10420,
      Name: 'Digital Education Review',
    },
    {
      Id: 10421,
      Name: 'Contemporary Dilemmas',
    },
    {
      Id: 10422,
      Name: 'DINAMIKA ILMU',
    },
    {
      Id: 10423,
      Name: 'Diverse: Issues In Higher Education',
    },
    {
      Id: 10424,
      Name: 'EAI Endorsed Transactions on e-Learning',
    },
    {
      Id: 10425,
      Name: 'Universidade Nove de Julho (UNINOVE)',
    },
    {
      Id: 10426,
      Name: 'CEARÁ STATE UNIVERSITY',
    },
    {
      Id: 10427,
      Name: 'Education & Reality Magazine Faculty of Education',
    },
    {
      Id: 10428,
      Name: 'Mathematics Education Magazine Research',
    },
    {
      Id: 10429,
      Name: 'ETD - Thematic Digital Education',
    },
    {
      Id: 10430,
      Name: 'University of Vale do Rio dos',
    },
    {
      Id: 10431,
      Name: 'University Institute of Creativity and Educational Innovations',
    },
    {
      Id: 10432,
      Name: 'National University of La Plata',
    },
    {
      Id: 10433,
      Name: 'Faculty of Education',
    },
    {
      Id: 10434,
      Name: 'University of Murcia',
    },
    {
      Id: 10435,
      Name: 'PURDUE UNIVERSITY PRESS',
    },
    {
      Id: 10436,
      Name: 'Division on Autism and Developmental Disabilities',
    },
    {
      Id: 10437,
      Name: 'Education Digest',
    },
    {
      Id: 10438,
      Name: 'ERP',
    },
    {
      Id: 10439,
      Name: 'ERP',
    },
    {
      Id: 10440,
      Name: 'National Center for Education Statistics',
    },
    {
      Id: 10441,
      Name: 'EDUCATIONAL PROCESS: INTERNATIONAL JOURNAL ',
    },
    {
      Id: 10442,
      Name: 'Educational Research Quarterly',
    },
    {
      Id: 10443,
      Name: 'Hill Publishing Group',
    },
    {
      Id: 10444,
      Name: 'Educational Technology Publications, Inc',
    },
    {
      Id: 10445,
      Name: 'Education and Science',
    },
    {
      Id: 10446,
      Name: 'University of Almeria',
    },
    {
      Id: 10447,
      Name: 'University of Almeria',
    },
    {
      Id: 10448,
      Name: 'Queens University',
    },
    {
      Id: 10449,
      Name: 'Engineering Design Graphics Journal',
    },
    {
      Id: 10450,
      Name: 'Education Faculty',
    },
    {
      Id: 10451,
      Name: 'university of Navarra',
    },
    {
      Id: 10452,
      Name: 'EUROMENTOR JOURNAL',
    },
    {
      Id: 10453,
      Name: 'Lectito',
    },
    {
      Id: 10454,
      Name: 'University of Illinois Press',
    },
    {
      Id: 10455,
      Name: 'Focus on Exceptional Children ',
    },
    {
      Id: 10456,
      Name: 'For the Learning of Mathematics',
    },
    {
      Id: 10457,
      Name: 'FRONTIERS: THE INTERDISCIPLINARY JOURNAL OF STUDY ABROAD',
    },
    {
      Id: 10458,
      Name: 'AGTA Secretary',
    },
    {
      Id: 10459,
      Name: 'Georgia School Counselors Association Journal ',
    },
    {
      Id: 10460,
      Name: 'Kennesaw Campus',
    },
    {
      Id: 10461,
      Name: 'Harvard Education Publishing',
    },
    {
      Id: 10462,
      Name: 'Greek Association of Primary Music Education Teachers',
    },
    {
      Id: 10463,
      Name: 'Old Dominion University',
    },
    {
      Id: 10464,
      Name: 'HOW Journal',
    },
    {
      Id: 10465,
      Name: 'The International Academic Forum ',
    },
    {
      Id: 10466,
      Name: 'IEEE Transactions on Education',
    },
    {
      Id: 10467,
      Name: 'Information Systems and Computing Academic Professionals',
    },
    {
      Id: 10468,
      Name: 'University of Michigan Library',
    },
    {
      Id: 10469,
      Name: 'Instrumentalist Co.',
    },
    {
      Id: 10470,
      Name: 'Intercollegiate Studies Institute, Inc.',
    },
    {
      Id: 10471,
      Name: 'University of Oslo',
    },
    {
      Id: 10472,
      Name: 'International Journal for Research in Vocational Education and Training',
    },
    {
      Id: 10473,
      Name: 'International Journal of Child, Youth and Family Studies',
    },
    {
      Id: 10474,
      Name: 'International Journal of Child, Youth & Family Studies',
    },
    {
      Id: 10475,
      Name: 'International Journal of Cognitive Research in Science, Engineering and Education',
    },
    {
      Id: 10476,
      Name: 'IGI Global',
    },
    {
      Id: 10477,
      Name: 'International Journal of Education & the Arts',
    },
    {
      Id: 10478,
      Name: 'Australian International Academic Centre PTY. LTD.',
    },
    {
      Id: 10479,
      Name: 'Modern Education and Computer Science Press',
    },
    {
      Id: 10480,
      Name: 'Simon Fraser University',
    },
    {
      Id: 10481,
      Name: 'International Journal of Education in Mathematics, Science and Technology',
    },
    {
      Id: 10482,
      Name: 'International Journal of Educational Leadership and Management',
    },
    {
      Id: 10483,
      Name: 'Thompson Rivers University',
    },
    {
      Id: 10484,
      Name: 'University of Malta',
    },
    {
      Id: 10485,
      Name: 'International Journal of English Studies',
    },
    {
      Id: 10486,
      Name: 'International Journal of Evaluation and Research in Education',
    },
    {
      Id: 10487,
      Name: 'Galore Knowledge Publication Pvt. Ltd.',
    },
    {
      Id: 10488,
      Name: 'Science Teaching Investigations',
    },
    {
      Id: 10489,
      Name: 'Iranian Journal of Language Teaching Research',
    },
    {
      Id: 10490,
      Name: 'Control Publications Pty Ltd',
    },
    {
      Id: 10491,
      Name: 'Agricultural Economics Association of Georgia',
    },
    {
      Id: 10492,
      Name: 'Indian Journal of Agricultural Marketing',
    },
    {
      Id: 10493,
      Name: 'agrimoon.com',
    },
    {
      Id: 10494,
      Name: 'Cornell University',
    },
    {
      Id: 10495,
      Name: 'Cornell University',
    },
    {
      Id: 10496,
      Name: 'Haramaya University',
    },
    {
      Id: 10497,
      Name: 'The Library of Congress',
    },
    {
      Id: 10498,
      Name: 'Child Rights International Network',
    },
    {
      Id: 10499,
      Name: 'Administrative Staff College of India',
    },
    {
      Id: 10500,
      Name: 'FREEDOM FORUM INSTITUTE',
    },
    {
      Id: 10501,
      Name: 'Vidhi Centre for Legal Policy',
    },
    {
      Id: 10502,
      Name: 'Universal Media Ltd',
    },
    {
      Id: 10503,
      Name: 'Family Lawyer Magazine',
    },
    {
      Id: 10504,
      Name: 'Best Lawyers',
    },
    {
      Id: 10505,
      Name: 'Super Lawyers',
    },
    {
      Id: 10506,
      Name: 'Trademark Lawyer Magazine',
    },
    {
      Id: 10507,
      Name: 'National University of Asuncion',
    },
    {
      Id: 10508,
      Name: 'TGFT',
    },
    {
      Id: 10509,
      Name: 'KMG Publishers',
    },
    {
      Id: 10510,
      Name: 'Granthaalayah Publications & Printers',
    },
    {
      Id: 10511,
      Name: 'Asian Journal of Pharmaceutical and Health Sciences',
    },
    {
      Id: 10512,
      Name: 'Asian Journal of Pharmacy and Technology',
    },
    {
      Id: 10513,
      Name: 'Ayurved Darpan',
    },
    {
      Id: 10514,
      Name: 'Indian Journal of Community Health',
    },
    {
      Id: 10515,
      Name: 'Institute of Medico-Legal Publications',
    },
    {
      Id: 10516,
      Name: 'Indian Journal of Medical Sciences',
    },
    {
      Id: 10517,
      Name: 'International Journal of Applied Ayurved Research',
    },
    {
      Id: 10518,
      Name: 'International Journal of Ayurveda',
    },
    {
      Id: 10519,
      Name: 'International Journal of Ayurveda and Traditional Medicine',
    },
    {
      Id: 10520,
      Name: 'International Journal of Ayurvedic and Herbal Medicine ',
    },
    {
      Id: 10521,
      Name: 'International Journal of Ayurvedic Medicine',
    },
    {
      Id: 10522,
      Name: 'International Journal of Medicine and Health Profession Research ',
    },
    {
      Id: 10523,
      Name: 'International Journal of Medicine and Health Profession Research ',
    },
    {
      Id: 10524,
      Name: 'international journal of medicine and public health',
    },
    {
      Id: 10525,
      Name: 'International Journal of Movement Education and Social Science',
    },
    {
      Id: 10526,
      Name: 'International Journal of Pharmacology and Clinical Sciences',
    },
    {
      Id: 10527,
      Name: 'INTERNATIONAL JOURNAL OF RESEARCH IN AYURVED AND MEDICAL SCIENCES',
    },
    {
      Id: 10528,
      Name: 'International Journal of Research in Pharmaceutical Sciences',
    },
    {
      Id: 10529,
      Name: 'International Journal of Science and Research',
    },
    {
      Id: 10530,
      Name: 'International Journal of Yoga and Allied Sciences',
    },
    {
      Id: 10531,
      Name: 'Journal of Ayurveda and Integrated Medical Sciences',
    },
    {
      Id: 10532,
      Name: 'Journal of Ayurveda Physicians & Surgeons',
    },
    {
      Id: 10533,
      Name: 'Asclepius Open LLC',
    },
    {
      Id: 10534,
      Name: 'Journal of Complementary Medicine Research',
    },
    {
      Id: 10535,
      Name: 'Xia & He Publishing Inc.',
    },
    {
      Id: 10536,
      Name: 'International Journal of Innovation Science and Research',
    },
    {
      Id: 10537,
      Name: 'Medwin Publishers',
    },
    {
      Id: 10538,
      Name: 'Journal of Research & Education in Indian Medicine',
    },
    {
      Id: 10539,
      Name: 'Journal of Vishwa Ayurved Parishad ',
    },
    {
      Id: 10540,
      Name: 'Pharma Ayurved',
    },
    {
      Id: 10541,
      Name: 'Sutra Journal',
    },
    {
      Id: 10542,
      Name: 'Society of Pharmacognosy and Phytochemistry',
    },
    {
      Id: 10543,
      Name: 'Unique Journal of Ayurvedic and Herbal Medicine',
    },
    {
      Id: 10544,
      Name: 'Unique Journal of Ayurvedic and Herbal Medicine',
    },
    {
      Id: 10545,
      Name: 'Universal Journal of Pharmaceutical Research',
    },
    {
      Id: 10546,
      Name: 'ARCH: Ayurved Research Copying House',
    },
    {
      Id: 10547,
      Name: 'International Journal of AYUSH',
    },
    {
      Id: 10548,
      Name: 'Swami Paramhansa Swastha Shiksha avam Paryavaran Sanrakshan Samsthana',
    },
    {
      Id: 10549,
      Name: 'International Journal of Research in AYUSH and Pharmaceutical Sciences',
    },
    {
      Id: 10550,
      Name: 'International Research Journal of Ayurveda & Yoga',
    },
    {
      Id: 10551,
      Name: 'International Journal Of Indian Medicine',
    },
    {
      Id: 10552,
      Name: 'Lupine Publishers',
    },
    {
      Id: 10553,
      Name: 'Frontiers Meetings Ltd',
    },
    {
      Id: 10554,
      Name: 'Sryahwa Publications, LLC',
    },
    {
      Id: 10555,
      Name: 'Universitat Ramon Llull',
    },
    {
      Id: 10556,
      Name: 'Journal of Arts and Humanities',
    },
    {
      Id: 10557,
      Name: 'South Punjab Center for Research and Development (SPCRD)',
    },
    {
      Id: 10558,
      Name: 'International Journal of Sustainable Development and Planning',
    },
    {
      Id: 10559,
      Name: 'Journal of Contemporary Governance and Public Policy',
    },
    {
      Id: 10560,
      Name: 'European Journal of Humanities and Social Sciences',
    },
    {
      Id: 10561,
      Name: 'Federal University of Paraíba',
    },
    {
      Id: 10562,
      Name: 'International Journal of Research in Orthopaedics',
    },
    {
      Id: 10563,
      Name: 'The British Editorial Society of Bone & Joint Surgery',
    },
    {
      Id: 10564,
      Name: 'Indian Journal of Pharmaceutical Sciences',
    },
    {
      Id: 10565,
      Name: 'Journal of Radiology and Clinical Imaging',
    },
    {
      Id: 10566,
      Name: 'Journal of Psychiatry and Psychiatric Disorders',
    },
    {
      Id: 10567,
      Name: 'Corpus Publishers',
    },
    {
      Id: 10568,
      Name: 'POLISH JOURNAL OF MICROBIOLOGY',
    },
    {
      Id: 10569,
      Name: 'Bilingual Publishing',
    },
    {
      Id: 10570,
      Name: 'IJMBS Publication',
    },
    {
      Id: 10571,
      Name: 'International Journal of Medical Sciences and Academic Research',
    },
    {
      Id: 10572,
      Name: 'past knowledge people',
    },
    {
      Id: 10573,
      Name: 'Modestum Publishing LTD',
    },
    {
      Id: 10574,
      Name: 'Journal of Medical Physiology',
    },
    {
      Id: 10575,
      Name: 'International Online Medical Council',
    },
    {
      Id: 10576,
      Name: 'Excellent Publishers',
    },
    {
      Id: 10577,
      Name: 'Journal of Natural Science, Biology and Medicine',
    },
    {
      Id: 10578,
      Name: 'National Academy of Medical Sciences',
    },
    {
      Id: 10579,
      Name: 'International Journal Of Advances In Medicine',
    },
    {
      Id: 10580,
      Name: 'IMED Research Publication',
    },
    {
      Id: 10581,
      Name: 'Scientific Open Access Journals',
    },
    {
      Id: 10582,
      Name: 'Clinical Medicine & Research',
    },
    {
      Id: 10583,
      Name: 'Update Publishing House',
    },
    {
      Id: 10584,
      Name: 'National Trust for Promotion of Knowledge',
    },
    {
      Id: 10585,
      Name: 'DigitalCommons@UMaine',
    },
    {
      Id: 10586,
      Name: ' Pitt Open Library',
    },
    {
      Id: 10587,
      Name: 'TDMRC Universitas Syiah Kuala',
    },
    {
      Id: 10588,
      Name: 'Shahid Sadoughi University of Medical Sciences',
    },
    {
      Id: 10589,
      Name: 'Berghahn books',
    },
    {
      Id: 10590,
      Name: 'Virtual Commons is Bridgewater State University’',
    },
    {
      Id: 10591,
      Name: 'hipatiapress',
    },
    {
      Id: 10592,
      Name: 'NINETEENTH CENTURY GENDER STUDIES',
    },
    {
      Id: 10593,
      Name: 'Walsh Medical Media',
    },
    {
      Id: 10594,
      Name: 'David Publishing Company',
    },
    {
      Id: 10595,
      Name: 'Centre of Sociological Research',
    },
    {
      Id: 10596,
      Name: 'Institute for Research and European Studies',
    },
    {
      Id: 10597,
      Name: 'Institute for Research and European Studies ',
    },
    {
      Id: 10598,
      Name: 'white rose university press',
    },
    {
      Id: 10599,
      Name: 'infogain publication',
    },
    {
      Id: 10600,
      Name: 'al-kindipublisher',
    },
    {
      Id: 10601,
      Name: 'Journal of Critical Reviews',
    },
    {
      Id: 10602,
      Name: 'joell veda publication',
    },
    {
      Id: 10603,
      Name: 'KARE Yayincilik ve Iletisim Hiz. Tic. Ltd. Sti.',
    },
    {
      Id: 10604,
      Name: 'Padova University Press',
    },
    {
      Id: 10605,
      Name: 'Publisher, Sapienza University of Rome',
    },
    {
      Id: 10606,
      Name: ' Sapienza University of Rome',
    },
    {
      Id: 10607,
      Name: 'Sapienza University of Rome',
    },
    {
      Id: 10608,
      Name: 'Mykolas Romeris University',
    },
    {
      Id: 10609,
      Name: 'Medip Academy',
    },
    {
      Id: 10610,
      Name: "Nab'a Al-Hayat Foundation for Medical Sciences and Health Care",
    },
    {
      Id: 10611,
      Name: 'Munich University Hospital',
    },
    {
      Id: 10612,
      Name: 'University of Minnesota Medical Center',
    },
    {
      Id: 10613,
      Name: 'NIRD URBAN-INCERC',
    },
    {
      Id: 10614,
      Name: ' Spenta Multimedia',
    },
    {
      Id: 10615,
      Name: 'Emerald Publishing Limited',
    },
    {
      Id: 10616,
      Name: 'Emerald Publishing Limited',
    },
    {
      Id: 10617,
      Name: 'The Institution of Structural Engineers',
    },
    {
      Id: 10618,
      Name: 'Riga Technical University',
    },
    {
      Id: 10619,
      Name: 'ACAD-WISE',
    },
    {
      Id: 10620,
      Name: ' Society for Healthcare & Research Development',
    },
    {
      Id: 10621,
      Name: ' Scholastica, the modern academic journal management system',
    },
    {
      Id: 10622,
      Name: 'Briefland',
    },
    {
      Id: 10623,
      Name: 'Ms. M. B. Mondal',
    },
    {
      Id: 10624,
      Name: 'Gulf Index Electronic Publisher (GIEP)',
    },
    {
      Id: 10625,
      Name: 'Association of Pharmaceutical Teachers of India',
    },
    {
      Id: 10626,
      Name: 'Department of Pharmacology and Toxicology',
    },
    {
      Id: 10627,
      Name: 'MRE PRESS',
    },
    {
      Id: 10628,
      Name: 'Journal of Cardio-Thoracic Medicine',
    },
    {
      Id: 10629,
      Name: 'Iranian Journal of Allergy, Asthma and Immunology',
    },
    {
      Id: 10630,
      Name: 'Iranian Journal of Allergy, Asthma and Immunology;',
    },
    {
      Id: 10631,
      Name: 'Iranian Journal of Otorhinolaryngology',
    },
    {
      Id: 10632,
      Name: 'Asia Pacific Journal of Medical Toxicology',
    },
    {
      Id: 10633,
      Name: 'African Traditional, Herbal Medicine Supporters Initiative',
    },
    {
      Id: 10634,
      Name: 'Indian Journal of Applied Microbiology',
    },
    {
      Id: 10635,
      Name: 'Journal of Pure and Applied Microbiology',
    },
    {
      Id: 10636,
      Name: 'Marcel Dekker, Inc.',
    },
    {
      Id: 10637,
      Name: 'American Association of Colleges of Nursing',
    },
    {
      Id: 10638,
      Name: 'Milano University Press',
    },
    {
      Id: 10639,
      Name: 'International Journal of Business Management and Commerce',
    },
    {
      Id: 10640,
      Name: 'American Journal of Economics and Business Management',
    },
    {
      Id: 10641,
      Name: 'Asian Journal of Economics, Business and Accounting',
    },
    {
      Id: 10642,
      Name: 'SciTechnol',
    },
    {
      Id: 10643,
      Name: 'journalspub',
    },
    {
      Id: 10644,
      Name: 'ART India Mag',
    },
    {
      Id: 10645,
      Name: 'Jap Sam Books',
    },
    {
      Id: 10646,
      Name: 'Zonda Media, a Delaware corporation',
    },
    {
      Id: 10647,
      Name: 'American International Journal of Social Science Research',
    },
    {
      Id: 10648,
      Name: 'Asian Research Journal of Arts & Social Sciences',
    },
    {
      Id: 10649,
      Name: 'JOURNAL OF TOURISM, HOSPITALITY AND ENVIRONMENT MANAGEMENT',
    },
    {
      Id: 10650,
      Name: 'Ann L. Hendrich',
    },
    {
      Id: 10651,
      Name: 'Whurr Publishers Ltd',
    },
    {
      Id: 10652,
      Name: 'Delmar, Cengage Learning',
    },
    {
      Id: 10653,
      Name: 'Delmar, Cengage Learning',
    },
    {
      Id: 10654,
      Name: 'Bartlett Publishers, Inc.',
    },
    {
      Id: 10655,
      Name: 'DEPARATMENT OF Veteran-AFFAIRS',
    },
    {
      Id: 10656,
      Name: 'brunner-suddarth',
    },
    {
      Id: 10657,
      Name: 'Sigma Theta Tau International',
    },
    {
      Id: 10658,
      Name: 'Kathleen Montgomery',
    },
    {
      Id: 10659,
      Name: 'D.G. Byrne',
    },
    {
      Id: 10660,
      Name: 'Minnesota Department of Health',
    },
    {
      Id: 10661,
      Name: 'Mary Cronk Farrell',
    },
    {
      Id: 10662,
      Name: 'BNi Publications',
    },
    {
      Id: 10663,
      Name: 'Lynda Juall Carpenito-Moyet',
    },
    {
      Id: 10664,
      Name: 'Hany M. Elsheikha, Ian Wright and John McGarry',
    },
    {
      Id: 10665,
      Name: 'Assessment Technologies Institute',
    },
    {
      Id: 10666,
      Name: 'Sam Porter',
    },
    {
      Id: 10667,
      Name: 'MARY LOUISE WHITE',
    },
    {
      Id: 10668,
      Name: ' Institute of Rural Health in Lublin',
    },
    {
      Id: 10669,
      Name: 'Alternative Therapies in Health and Medicine',
    },
    {
      Id: 10670,
      Name: 'Current Science Association',
    },
    {
      Id: 10671,
      Name: 'Association of Health Professionals and Health Educators',
    },
    {
      Id: 10672,
      Name: 'Indian Journal of Forensic Medicine and Toxicology',
    },
    {
      Id: 10673,
      Name: 'Biosciences Biotechnology Research Asia',
    },
    {
      Id: 10674,
      Name: 'Romanian National Library',
    },
    {
      Id: 10675,
      Name: 'North American Sports Medicine Institute',
    },
    {
      Id: 10676,
      Name: 'Indian Yoga',
    },
    {
      Id: 10677,
      Name: 'American College of Sports Medicne',
    },
    {
      Id: 10678,
      Name: 'DireDawa University,',
    },
    {
      Id: 10679,
      Name: 'Horizon Publisher India',
    },
    {
      Id: 10680,
      Name: 'Irish Nurses & Midwives Organisation ',
    },
    {
      Id: 10681,
      Name: 'Creative Commons',
    },
    {
      Id: 10682,
      Name: 'Universitas Muhammadiyah Semarang',
    },
    {
      Id: 10683,
      Name: 'Zanjan University of Medical Sciences',
    },
    {
      Id: 10684,
      Name: 'Airlangga University',
    },
    {
      Id: 10685,
      Name: '"Decker School of Nursing   Binghamton University"',
    },
    {
      Id: 10686,
      Name: 'Healthcare Information and Management Systems Society, Inc. ',
    },
    {
      Id: 10687,
      Name: 'University of South Bohemia',
    },
    {
      Id: 10688,
      Name: 'Faculty of Nursing Universitas Airlangga Campus',
    },
    {
      Id: 10689,
      Name: 'Golestan University of Medical Sciences',
    },
    {
      Id: 10690,
      Name: 'Journal of Multidisciplinary Care',
    },
    {
      Id: 10691,
      Name: 'San Beda University',
    },
    {
      Id: 10692,
      Name: 'IOMC World',
    },
    {
      Id: 10693,
      Name: 'Iran University of Medical Sciences',
    },
    {
      Id: 10694,
      Name: 'JMIR Publications',
    },
    {
      Id: 10695,
      Name: 'Scientific Press International Limited',
    },
    {
      Id: 10696,
      Name: 'Gratis Open Access Publishers',
    },
    {
      Id: 10697,
      Name: 'Universitas Airlangga',
    },
    {
      Id: 10698,
      Name: 'Istanbul University-Cerrahpasa',
    },
    {
      Id: 10699,
      Name: 'Exeley Inc.',
    },
    {
      Id: 10700,
      Name: 'Academy of Health Professionals',
    },
    {
      Id: 10701,
      Name: 'Archives of Nursing and care',
    },
    {
      Id: 10702,
      Name: 'ProBiologist LLC.',
    },
    {
      Id: 10703,
      Name: 'KARE Yayincilik',
    },
    {
      Id: 10704,
      Name: 'MASTER OF SCIENCE of Rhodes University',
    },
    {
      Id: 10705,
      Name: 'Rekha Mahey',
    },
    {
      Id: 10706,
      Name: 'Cool Springs Press',
    },
    {
      Id: 10707,
      Name: 'UW Distance Learning',
    },
    {
      Id: 10708,
      Name: 'D M Brahmankar',
    },
    {
      Id: 10709,
      Name: 'ANDREW WEIL, M.D.',
    },
    {
      Id: 10710,
      Name: 'Perpustakaan Negara Malaysia',
    },
    {
      Id: 10711,
      Name: 'Irina Haracoglou',
    },
    {
      Id: 10712,
      Name: 'NIRALI PRAKASHAN',
    },
    {
      Id: 10713,
      Name: 'SKYHORSE PUBLISHING',
    },
    {
      Id: 10714,
      Name: 'UNIVERTY OF TORONTO',
    },
    {
      Id: 10715,
      Name: 'American Pharmacists Association',
    },
    {
      Id: 10716,
      Name: 'Ennsthaler Verlag, Steyr',
    },
    {
      Id: 10717,
      Name: 'ROYAL PHARMACEUTICAL SOCIETY',
    },
    {
      Id: 10718,
      Name: 'Waverly Intematioul',
    },
    {
      Id: 10719,
      Name: 'ULYSSES PRESS',
    },
    {
      Id: 10720,
      Name: 'JAMES A. DUKE',
    },
    {
      Id: 10721,
      Name: 'North Atlantic Books',
    },
    {
      Id: 10722,
      Name: 'UNIVERSITY OF OTAGO',
    },
    {
      Id: 10723,
      Name: 'Three Rivers Press',
    },
    {
      Id: 10724,
      Name: 'Graedon Enterprises',
    },
    {
      Id: 10725,
      Name: 'Pfizer Pharmaceuticals Group',
    },
    {
      Id: 10726,
      Name: 'LEA & FEBIGER',
    },
    {
      Id: 10727,
      Name: 'Anatomical Sciences Journal ',
    },
    {
      Id: 10728,
      Name: 'Scientific Research and Community Ltd',
    },
    {
      Id: 10729,
      Name: 'GiLE Foundation',
    },
    {
      Id: 10730,
      Name: 'Quae editions',
    },
    {
      Id: 10731,
      Name: 'Quae editions',
    },
    {
      Id: 10732,
      Name: 'University of Westminster Press',
    },
    {
      Id: 10733,
      Name: ' Daya Publishing House ',
    },
    {
      Id: 10734,
      Name: 'Springer Dordrecht',
    },
    {
      Id: 10735,
      Name: 'Frontiers Media SA',
    },
    {
      Id: 10736,
      Name: ' Frontiers Media SA',
    },
    {
      Id: 10737,
      Name: 'Taylor & Francis',
    },
    {
      Id: 10738,
      Name: 'Springer Cham',
    },
    {
      Id: 10739,
      Name: 'Springer Cham',
    },
    {
      Id: 10740,
      Name: 'Green Candy Press',
    },
    {
      Id: 10741,
      Name: 'SciELO Books - Editorial Universidad del Rosario',
    },
    {
      Id: 10742,
      Name: 'Ledizioni',
    },
    {
      Id: 10743,
      Name: 'International Association of Educators',
    },
    {
      Id: 10744,
      Name: 'Work-Integrated Learning New Zealand',
    },
    {
      Id: 10745,
      Name: ' Saylor Foundation',
    },
    {
      Id: 10746,
      Name: 'the University of Johannesburg and Unisa Press',
    },
    {
      Id: 10747,
      Name: ' The Colombian Asociation of Teachers of English (ASOCOPI)',
    },
    {
      Id: 10748,
      Name: ' ASOCOPI',
    },
    {
      Id: 10749,
      Name: 'KURA Education',
    },
    {
      Id: 10750,
      Name: 'KURA Education ',
    },
    {
      Id: 10751,
      Name: 'WAC Clearinghouse',
    },
    {
      Id: 10752,
      Name: 'College of education kansas state university',
    },
    {
      Id: 10753,
      Name: ' WAC Clearinghouse',
    },
    {
      Id: 10754,
      Name: 'Australian Society for Music Education',
    },
    {
      Id: 10755,
      Name: 'STAR Scholars network',
    },
    {
      Id: 10756,
      Name: 'The Canadian Counselling and Psychotherapy Association',
    },
    {
      Id: 10757,
      Name: 'Canadian Society for Studies in Higher Education',
    },
    {
      Id: 10758,
      Name: 'Canadian Evaluation Society',
    },
    {
      Id: 10759,
      Name: 'The Canadian Society for Education through Art (CSEA)',
    },
    {
      Id: 10760,
      Name: 'JSTOR',
    },
    {
      Id: 10761,
      Name: 'New Prairie Press',
    },
    {
      Id: 10762,
      Name: 'Hipatia Press',
    },
    {
      Id: 10763,
      Name: 'LAR Center Press',
    },
    {
      Id: 10764,
      Name: 'Dwight Schar College of Education, Ashland University',
    },
    {
      Id: 10765,
      Name: 'Edith Cowan University',
    },
    {
      Id: 10766,
      Name: 'Australian Association of Mathematics Teachers Inc',
    },
    {
      Id: 10767,
      Name: ' Bartin University',
    },
    {
      Id: 10768,
      Name: 'Seneca College',
    },
    {
      Id: 10769,
      Name: 'AACE',
    },
    {
      Id: 10770,
      Name: 'Lewis & Clark Graduate School',
    },
    {
      Id: 10771,
      Name: 'ERDAL TOPRAKCI',
    },
    {
      Id: 10772,
      Name: 'Sevilla University',
    },
    {
      Id: 10773,
      Name: 'Academic Publishing House Researcher s.r.o.',
    },
    {
      Id: 10774,
      Name: 'Simmons College School of Social Work',
    },
    {
      Id: 10775,
      Name: 'The Forum on Education Abroad',
    },
    {
      Id: 10776,
      Name: 'INST UNIV COLOMBO AMERICANA-UNICA',
    },
    {
      Id: 10777,
      Name: 'Institución Universitaria Colombo Americana - ÚNICA',
    },
    {
      Id: 10778,
      Name: 'Mercy College',
    },
    {
      Id: 10779,
      Name: 'Walden University',
    },
    {
      Id: 10780,
      Name: 'Special Libraries Association',
    },
    {
      Id: 10781,
      Name: 'Purdue University Press',
    },
    {
      Id: 10782,
      Name: 'VETNET',
    },
    {
      Id: 10783,
      Name: 'Faculty Center at Georgia Southern University',
    },
    {
      Id: 10784,
      Name: 'The Association for the Development of Science, Engineering and Education',
    },
    {
      Id: 10785,
      Name: 'University of Murcia',
    },
    {
      Id: 10786,
      Name: 'Institute of Advanced Engineering and Science (IAES)',
    },
    {
      Id: 10787,
      Name: 'Faculty of Education, University of Ljubljana',
    },
    {
      Id: 10788,
      Name: 'The International Association of Educators',
    },
    {
      Id: 10789,
      Name: 'European Publisher',
    },
    {
      Id: 10790,
      Name: 'European Association for Research on Learning and Instruction',
    },
    {
      Id: 10791,
      Name: 'National Louis University',
    },
    {
      Id: 10792,
      Name: 'Modestum, UK',
    },
    {
      Id: 10793,
      Name: 'Gallaudet University Press',
    },
    {
      Id: 10794,
      Name: 'Gallaudet University Press',
    },
    {
      Id: 10795,
      Name: 'Gallaudet University Press',
    },
    {
      Id: 10796,
      Name: 'Partnership for Peace Consortium of Defense Academies and Security Studies Institutes',
    },
    {
      Id: 10797,
      Name: 'Barcelona University',
    },
    {
      Id: 10798,
      Name: 'Academic Publishing Limited',
    },
    {
      Id: 10799,
      Name: 'Association of Mathematics Teacher Educators ',
    },
    {
      Id: 10800,
      Name: 'International Society for Technology, Education, and Science (ISTES)',
    },
    {
      Id: 10801,
      Name: 'Australian International Academic Centre PTY.LTD',
    },
    {
      Id: 10802,
      Name: 'Lippincott Williams and Wilkins Ltd',
    },
    {
      Id: 10803,
      Name: 'Jaypee Brothers Medical Publishers (P) Ltd',
    },
    {
      Id: 10804,
      Name: 'Lippincott Williams and Wilkins Ltd',
    },
    {
      Id: 10805,
      Name: 'Brieflands',
    },
    {
      Id: 10806,
      Name: 'Longdom Publishing SL',
    },
    {
      Id: 10807,
      Name: 'International Society on Aging and Disease',
    },
    {
      Id: 10808,
      Name: 'International Society on Aging and Disease',
    },
    {
      Id: 10809,
      Name: 'Macedonian Academy of Sciences and Arts',
    },
    {
      Id: 10810,
      Name: 'Wolters Kluwer Health',
    },
    {
      Id: 10811,
      Name: 'Inventi Journals Pvt.Ltd',
    },
    {
      Id: 10812,
      Name: 'Microbiology Research Journal International',
    },
    {
      Id: 10813,
      Name: 'Malwa International Scientific Journals',
    },
    {
      Id: 10814,
      Name: 'Rasht Branch, Islamic Azad University',
    },
    {
      Id: 10815,
      Name: 'Polish Society of Microbiologists',
    },
    {
      Id: 10816,
      Name: 'International Online Medical Council (IOMC)',
    },
    {
      Id: 10817,
      Name: 'EMBO Press',
    },
    {
      Id: 10818,
      Name: 'The Faculty of Biotechnology and Food Sciences',
    },
    {
      Id: 10819,
      Name: 'SciRes Literature',
    },
    {
      Id: 10820,
      Name: 'Pacini Editore s.r.l.',
    },
    {
      Id: 10821,
      Name: 'CMA Impact Inc.',
    },
    {
      Id: 10822,
      Name: 'European Publishing',
    },
    {
      Id: 10823,
      Name: 'ACT Publishing Group',
    },
    {
      Id: 10824,
      Name: 'NORCAL Publications',
    },
    {
      Id: 10825,
      Name: 'SCHOLARENA',
    },
    {
      Id: 10826,
      Name: 'National Association of Managed Care Physicians (NAMCP)',
    },
    {
      Id: 10827,
      Name: 'Acta Dermato-Venereologica',
    },
    {
      Id: 10828,
      Name: 'RJPBCS',
    },
    {
      Id: 10829,
      Name: 'NPS MedicineWise',
    },
    {
      Id: 10830,
      Name: 'GREEN PUBLICATION',
    },
    {
      Id: 10831,
      Name: 'Prime Scholars',
    },
    {
      Id: 10832,
      Name: "Xi'an Jiaotong University",
    },
    {
      Id: 10833,
      Name: 'Association of Pharmacy Professionals',
    },
    {
      Id: 10834,
      Name: 'Society of Pharmaceutical Sciences of Ankara',
    },
    {
      Id: 10835,
      Name: 'Romanian Society for Pharmaceutical Sciences',
    },
    {
      Id: 10836,
      Name: ' IJAHM',
    },
    {
      Id: 10837,
      Name: 'Innovare Academic Sciences Pvt Ltd.',
    },
    {
      Id: 10838,
      Name: 'Sukasiree Publication',
    },
    {
      Id: 10839,
      Name: 'Istanbul Medipol University',
    },
    {
      Id: 10840,
      Name: 'Association of Physiologists and Pharmacologists of India',
    },
    {
      Id: 10841,
      Name: 'Neuroscience Research Center',
    },
    {
      Id: 10842,
      Name: 'Journal of Pharmaceutical Research International',
    },
    {
      Id: 10843,
      Name: 'Lattice Science Publication (LSP)',
    },
    {
      Id: 10844,
      Name: 'Innovative Library',
    },
    {
      Id: 10845,
      Name: 'Scientific Research Archives',
    },
    {
      Id: 10846,
      Name: 'Dr. (Mrs.) Monika. S. Daharwal A and V Publications',
    },
    {
      Id: 10847,
      Name: 'Dr. (Mrs.) Monika. S. Daharwal A and V Publications',
    },
    {
      Id: 10848,
      Name: 'Comprehensive Publications',
    },
    {
      Id: 10849,
      Name: 'Scholar Science Journals',
    },
    {
      Id: 10850,
      Name: 'churchill livingstone',
    },
    {
      Id: 10851,
      Name: 'McGraw Hill',
    },
    {
      Id: 10852,
      Name: 'Demos Medical Publishing, LLC',
    },
    {
      Id: 10853,
      Name: 'Medsci Publications',
    },
    {
      Id: 10854,
      Name: 'INDIAN JOURNALS.COM',
    },
    {
      Id: 10855,
      Name: 'Slovensko Kemijsko Drustvo',
    },
    {
      Id: 10856,
      Name: 'Symbiosis Open Access',
    },
    {
      Id: 10857,
      Name: 'Oriprobe Information Services, Inc',
    },
    {
      Id: 10858,
      Name: '(CPE), University of Maribor',
    },
    {
      Id: 10859,
      Name: 'University of the Witwatersrand (Wits), Johannesburg',
    },
    {
      Id: 10860,
      Name: 'Kennesaw State University',
    },
    {
      Id: 10861,
      Name: 'Blue Eyes Intelligence Engineering and Sciences Publication (BEIESP)',
    },
    {
      Id: 10862,
      Name: 'Nextgen Research Publication',
    },
    {
      Id: 10863,
      Name: 'Universiti Tun Hussein Onn Malaysia',
    },
    {
      Id: 10864,
      Name: 'CSIC Higher Council for Scientific Research',
    },
    {
      Id: 10865,
      Name: "Queen's University Library's ",
    },
    {
      Id: 10866,
      Name: 'Bachelor of Civil Engineering Program  ,  Batam International University',
    },
    {
      Id: 10867,
      Name: 'Maria Curie-Sklodowska University',
    },
    {
      Id: 10868,
      Name: 'Tibiscus University of Timisoara',
    },
    {
      Id: 10869,
      Name: 'Akademia Baru Publishing (M) Sdn Bhd',
    },
    {
      Id: 10870,
      Name: 'Universitas Sriwijaya',
    },
    {
      Id: 10871,
      Name: 'UNIVERSITÄTSBIBLIOTHEK TU BERLIN',
    },
    {
      Id: 10872,
      Name: 'Septentrio Academic Publishing',
    },
    {
      Id: 10873,
      Name: ' Information Technology Institute of Riga Technical University',
    },
    {
      Id: 10874,
      Name: 'Association for Scientific Computing Electronics and Engineering (ASCEE)',
    },
    {
      Id: 10875,
      Name: 'Helvetic Editions',
    },
    {
      Id: 10876,
      Name: 'International Association of Online Engineering',
    },
    {
      Id: 10877,
      Name: 'Facultad de Informática – UNLP',
    },
    {
      Id: 10878,
      Name: 'American Center of Science and Education',
    },
    {
      Id: 10879,
      Name: 'Lukasiewicz PIAP',
    },
    {
      Id: 10880,
      Name: 'International Association of Physical Chemists',
    },
    {
      Id: 10881,
      Name: 'Endeavor Business Media',
    },
    {
      Id: 10882,
      Name: 'WARSAW UNIVERSITY OF LIFE SCIENCES - SGGW PRESS',
    },
    {
      Id: 10883,
      Name: 'VSB-Technical University of Ostrava',
    },
    {
      Id: 10884,
      Name: 'Engineering and Technology Publishing',
    },
    {
      Id: 10885,
      Name: 'Research Institute of Science and Technology',
    },
    {
      Id: 10886,
      Name: 'Loughborough University Library',
    },
    {
      Id: 10887,
      Name: 'USFQ PRESS ',
    },
    {
      Id: 10888,
      Name: 'Kauno Technologijos Universitetas',
    },
    {
      Id: 10889,
      Name: 'Centre of Sociological Research',
    },
    {
      Id: 10890,
      Name: 'Global Vision Press',
    },
    {
      Id: 10891,
      Name: 'Global Academic Excellence',
    },
    {
      Id: 10892,
      Name: 'Universitas Bina Sarana Informatika, LPPM',
    },
    {
      Id: 10893,
      Name: 'Prince of Songkla University',
    },
    {
      Id: 10894,
      Name: 'International Association of Journals and Conferences (IAJC)',
    },
    {
      Id: 10895,
      Name: 'Palacký University in Olomouc',
    },
    {
      Id: 10896,
      Name: 'HATASO Publishing & Editing',
    },
    {
      Id: 10897,
      Name: 'City Net Scientific Research Center Ltd',
    },
    {
      Id: 10898,
      Name: 'Isfahan University of Technology',
    },
    {
      Id: 10899,
      Name: 'Hrcak',
    },
    {
      Id: 10900,
      Name: 'Hrcak',
    },
    {
      Id: 10901,
      Name: 'De Gruyter Open Access',
    },
    {
      Id: 10902,
      Name: 'Universidad de Chile - Centro Interdisciplinario de Estudios en Bioetica',
    },
    {
      Id: 10903,
      Name: 'Faculty of Science University of Zagreb',
    },
    {
      Id: 10904,
      Name: 'Institute for Research and Development (IRD India)',
    },
    {
      Id: 10905,
      Name: 'Stephy Publishers',
    },
    {
      Id: 10906,
      Name: ' PTMTS',
    },
    {
      Id: 10907,
      Name: 'Polskie Towarzystwo Mechaniki Teoretycznej i Stosowanej/Polish Society of Theoretical and Allied Mechanics',
    },
    {
      Id: 10908,
      Name: 'Indonesian Mechanical Engineering Cooperation Agency',
    },
    {
      Id: 10909,
      Name: ' Faculty of Engineering, Eleven Maret University',
    },
    {
      Id: 10910,
      Name: 'Faculty of Nursing of the University of Antioquia',
    },
    {
      Id: 10911,
      Name: 'University of Nevada, Las Vegas',
    },
    {
      Id: 10912,
      Name: 'International Journal of Advance Research in Medical Surgical Nursing',
    },
    {
      Id: 10913,
      Name: 'Society of Medical Biochemists of Serbia',
    },
    {
      Id: 10914,
      Name: 'International Journal of Medical Sciences and Nursing Research',
    },
    {
      Id: 10915,
      Name: 'Association of obstetrics and gynaecology of Delhi',
    },
    {
      Id: 10916,
      Name: 'International Journal of Radiology',
    },
    {
      Id: 10917,
      Name: 'International Journal of Radiology',
    },
    {
      Id: 10918,
      Name: 'Emergency Nurses Association (ENA)',
    },
    {
      Id: 10919,
      Name: 'Deccan College of Medical Sciences',
    },
    {
      Id: 10920,
      Name: ' Gdansk University of Physical Education and Sport',
    },
    {
      Id: 10921,
      Name: 'Western Kentucky University',
    },
    {
      Id: 10922,
      Name: 'University of Alicante. Faculty of Education',
    },
    {
      Id: 10923,
      Name: 'Miguel Hernandez University',
    },
    {
      Id: 10924,
      Name: 'Spanish Sport Science Association',
    },
    {
      Id: 10925,
      Name: 'Edwiser International',
    },
    {
      Id: 10926,
      Name: 'Bulgarian Association of Young Surgeons',
    },
    {
      Id: 10927,
      Name: 'MapSci Digital Publisher OPC Pvt Ltd',
    },
    {
      Id: 10928,
      Name: 'Movement Science Media',
    },
    {
      Id: 10929,
      Name: 'American Society for Bone and Mineral Research',
    },
    {
      Id: 10930,
      Name: 'University of Social Welfare & Rehabilitation Sciences',
    },
    {
      Id: 10931,
      Name: 'Korean Academy of Physical Therapy Rehabilitation Science',
    },
    {
      Id: 10932,
      Name: 'Department of Sports Medicine, Medical Faculty of Uludag University',
    },
    {
      Id: 10933,
      Name: 'Montenegrin Sports Academy',
    },
    {
      Id: 10934,
      Name: 'JOURNAL OF PHARMACEUTICAL NEGATIVE RESULTS',
    },
    {
      Id: 10935,
      Name: 'Massachusetts Institute of Technology',
    },
    {
      Id: 10936,
      Name: 'FRANK W. DICK',
    },
    {
      Id: 10937,
      Name: 'Michael Boyle',
    },
    {
      Id: 10938,
      Name: 'Human Kinetics',
    },
    {
      Id: 10939,
      Name: 'AccScience Publishing',
    },
    {
      Id: 10940,
      Name: 'THE JOURNAL OF PHYTOPHARMACOLOGY',
    },
    {
      Id: 10941,
      Name: 'JDDT-PUBLISHER',
    },
    {
      Id: 10942,
      Name: 'University of Huddersfield Press',
    },
    {
      Id: 10943,
      Name: 'Eastern Kentucky University',
    },
    {
      Id: 10944,
      Name: 'Inventi Journals Pvt. Ltd.',
    },
    {
      Id: 10945,
      Name: 'RVHost',
    },
    {
      Id: 10946,
      Name: 'Anderson Publishing Ltd.',
    },
    {
      Id: 10947,
      Name: 'Academic Publications',
    },
    {
      Id: 10948,
      Name: 'ZDRAVNISKI VESTNIK - SLOVENIAN MEDICAL JOURNAL',
    },
    {
      Id: 10949,
      Name: 'Tech Science Press',
    },
    {
      Id: 10950,
      Name: "Europe's Journal of Psychology",
    },
    {
      Id: 10951,
      Name: "Europe's Journal of Psychology",
    },
    {
      Id: 10952,
      Name: ' Kare Publishing',
    },
    {
      Id: 10953,
      Name: 'Journal of Clinical and Diagnostic Research',
    },
    {
      Id: 10954,
      Name: 'AVES',
    },
    {
      Id: 10955,
      Name: 'Hamadan University of Medical Sciences (UMSHA)',
    },
    {
      Id: 10956,
      Name: 'Scholars Direct',
    },
    {
      Id: 10957,
      Name: 'OPAST GROUP LLC',
    },
    {
      Id: 10958,
      Name: 'University of Economics and Humanities in Warsaw',
    },
    {
      Id: 10959,
      Name: 'American Association of Colleges of Pharmacy (AACP)',
    },
    {
      Id: 10960,
      Name: 'Open Medical Publishing',
    },
    {
      Id: 10961,
      Name: 'Veterinary Solutions LLC',
    },
    {
      Id: 10962,
      Name: 'Farname Inc',
    },
    {
      Id: 10963,
      Name: 'Malaysian Society of Applied Biology',
    },
    {
      Id: 10964,
      Name: 'Korean Society for Microbiolog and Biotechnology',
    },
    {
      Id: 10965,
      Name: 'International Journal of Medical Science in Clinical Research and Review',
    },
    {
      Id: 10966,
      Name: 'CLOCKSS',
    },
    {
      Id: 10967,
      Name: 'London Academic Publishing',
    },
    {
      Id: 10968,
      Name: 'Hamad Bin Khalifa University Press',
    },
    {
      Id: 10969,
      Name: 'Sami Publishing Company (SPC)',
    },
    {
      Id: 10970,
      Name: 'Korean Society for Sexual Medicine and Andrology',
    },
    {
      Id: 10971,
      Name: 'Society of Chemists and Technologists of Macedonia',
    },
    {
      Id: 10972,
      Name: 'Galenos Publishing House',
    },
    {
      Id: 10973,
      Name: 'ABRAN - Brazilian Association of Nutrology',
    },
    {
      Id: 10974,
      Name: 'Panacea Research Library',
    },
    {
      Id: 10975,
      Name: 'European Open Science',
    },
    {
      Id: 10976,
      Name: 'Marshfield Clinic',
    },
    {
      Id: 10977,
      Name: 'Public Health Agency of Canada',
    },
    {
      Id: 10978,
      Name: 'National Library of Medicine',
    },
    {
      Id: 10979,
      Name: 'Medico-Legal Publications',
    },
    {
      Id: 10980,
      Name: 'Endocrine Society of Australia (ESA)',
    },
    {
      Id: 10981,
      Name: 'China University of Geosciences (Beijing) and Peking University',
    },
    {
      Id: 10982,
      Name: 'University of Adelaide',
    },
    {
      Id: 10983,
      Name: 'International Journal of Research',
    },
    {
      Id: 10984,
      Name: 'Journal of Pharmaceutical and Scientific Innovation (JPSI)',
    },
    {
      Id: 10985,
      Name: 'Digital Commons',
    },
    {
      Id: 10986,
      Name: 'Journal of Neolithic Archaeology',
    },
    {
      Id: 10987,
      Name: 'VEDA PUBLICATIONS',
    },
    {
      Id: 10988,
      Name: 'CJES',
    },
    {
      Id: 10989,
      Name: 'Set Publisher',
    },
    {
      Id: 10990,
      Name: 'Medic Scientific',
    },
    {
      Id: 10991,
      Name: 'Journal of Economics, Business and Management (JOEBM)',
    },
    {
      Id: 10992,
      Name: 'University Ave W',
    },
    {
      Id: 10993,
      Name: 'ADVANCES IN INDUSTRIAL ENGINEERING AND MANAGEMENT',
    },
    {
      Id: 10994,
      Name: 'Horizon Research Publishing',
    },
    {
      Id: 10995,
      Name: 'KHEMRAJ SHRIKRISHNADASS',
    },
    {
      Id: 10996,
      Name: 'CK-12 Foundation',
    },
    {
      Id: 10997,
      Name: 'THE NATIONAL ACADEMIES PRESS',
    },
    {
      Id: 10998,
      Name: 'Nomos Verlagsgesellschaft mbH & Co. KG',
    },
    {
      Id: 10999,
      Name: 'University of California Press',
    },
    {
      Id: 11000,
      Name: 'Bloomsbury Academic',
    },
    {
      Id: 11001,
      Name: 'College of the Canyons',
    },
    {
      Id: 11002,
      Name: 'European Investment Bank',
    },
    {
      Id: 11003,
      Name: 'Salehan Institute of Higher Education',
    },
    {
      Id: 11004,
      Name: 'The Science and Information',
    },
    {
      Id: 11005,
      Name: 'Engg Journals Publications',
    },
    {
      Id: 11006,
      Name: 'International Information and Engineering Technology Association',
    },
    {
      Id: 11007,
      Name: 'IOP Publishing Ltd',
    },
    {
      Id: 11008,
      Name: 'LSE Press',
    },
    {
      Id: 11009,
      Name: 'Institute of Commonwealth Studies',
    },
    {
      Id: 11010,
      Name: 'Lund University Press',
    },
    {
      Id: 11011,
      Name: 'Open Book Publishers',
    },
    {
      Id: 11012,
      Name: 'Consultant Connect Ltd',
    },
    {
      Id: 11013,
      Name: 'Maryland Institute for Emergency Medical Services Systems',
    },
    {
      Id: 11014,
      Name: 'NIHR',
    },
    {
      Id: 11015,
      Name: 'AACE',
    },
    {
      Id: 11016,
      Name: 'Universitas Ahmad Dahlan',
    },
    {
      Id: 11017,
      Name: 'Universitas Ahmad Dahlan',
    },
    {
      Id: 11018,
      Name: 'Universitas Ahmad Dahlan',
    },
    {
      Id: 11019,
      Name: 'Universitas Ahmad Dahlan',
    },
    {
      Id: 11020,
      Name: 'jebmh',
    },
    {
      Id: 11021,
      Name: 'DYR Labs Pvt. Ltd.',
    },
    {
      Id: 11022,
      Name: 'VacciMonitor ',
    },
    {
      Id: 11023,
      Name: 'Sociedad Argentina de Genética',
    },
    {
      Id: 11024,
      Name: 'Allergologia et Immunopathologia',
    },
    {
      Id: 11025,
      Name: 'California Pharmacists Association',
    },
    {
      Id: 11026,
      Name: 'California Pharmacists Association',
    },
    {
      Id: 11027,
      Name: 'IT Medical Team',
    },
    {
      Id: 11028,
      Name: 'Society of Pharmaceutical Tecnocrats',
    },
    {
      Id: 11029,
      Name: 'the Belgorod National Research University (BelSU)',
    },
    {
      Id: 11030,
      Name: 'Creative Pharma Assent',
    },
    {
      Id: 11031,
      Name: 'Mazandaran Universitry of Medical Sciences',
    },
    {
      Id: 11032,
      Name: 'Assiut University',
    },
    {
      Id: 11033,
      Name: 'MRI Publications Pvt. Ltd.',
    },
    {
      Id: 11034,
      Name: 'Innovative Scientific Publishers',
    },
    {
      Id: 11035,
      Name: 'Formosa Publisher',
    },
    {
      Id: 11036,
      Name: 'RAND Corporation',
    },
    {
      Id: 11037,
      Name: 'Colegio de Mexico',
    },
    {
      Id: 11038,
      Name: 'CLACSO',
    },
    {
      Id: 11039,
      Name: 'Bristol University Press',
    },
    {
      Id: 11040,
      Name: 'Radboud University Press',
    },
    {
      Id: 11041,
      Name: 'Radboud University Press',
    },
    {
      Id: 11042,
      Name: 'University of North Carolina Press',
    },
    {
      Id: 11043,
      Name: 'University of Minnesota Press',
    },
    {
      Id: 11044,
      Name: 'Verlag Barbara Budrich',
    },
    {
      Id: 11045,
      Name: 'Rutgers University Press',
    },
    {
      Id: 11046,
      Name: 'University of Ottawa Press',
    },
    {
      Id: 11047,
      Name: 'NYU PRESS',
    },
    {
      Id: 11048,
      Name: 'Kriterium',
    },
    {
      Id: 11049,
      Name: 'W.E. Upjohn Institute',
    },
    {
      Id: 11050,
      Name: "University of Hawai'i Press",
    },
    {
      Id: 11051,
      Name: 'Seismo',
    },
    {
      Id: 11052,
      Name: 'Cappelen Damm Akademisk',
    },
    {
      Id: 11053,
      Name: 'éditions Quae',
    },
    {
      Id: 11054,
      Name: 'J.B. Metzler',
    },
    {
      Id: 11055,
      Name: 'McGill-Queen’s University Press ',
    },
    {
      Id: 11056,
      Name: 'River Publishers',
    },
    {
      Id: 11057,
      Name: 'Medizinisch Wissenschaftliche Verlagsgesellschaft',
    },
    {
      Id: 11058,
      Name: 'Birkhauser',
    },
    {
      Id: 11059,
      Name: 'BIITM',
    },
    {
      Id: 11060,
      Name: 'Ethiopia Public Health Training Initiative',
    },
    {
      Id: 11061,
      Name: 'Pavol Jozef Šafárik University in KošiceFaculty of Medicine',
    },
    {
      Id: 11062,
      Name: 'Satori Continuum Publishing',
    },
    {
      Id: 11063,
      Name: 'University of Cape Town',
    },
    {
      Id: 11064,
      Name: 'University of Heidelberg',
    },
    {
      Id: 11065,
      Name: 'Permanyer',
    },
    {
      Id: 11066,
      Name: 'European Medical Group LTD',
    },
    {
      Id: 11067,
      Name: 'eScholarship',
    },
    {
      Id: 11068,
      Name: 'Korean Diabetes Association',
    },
    {
      Id: 11069,
      Name: 'Korean Society for the Study of Obesity',
    },
    {
      Id: 11070,
      Name: ' Macedonian Society of Nephrology, Dialysis, Transplantation and Artificial Organs',
    },
    {
      Id: 11071,
      Name: 'MAK HILL Publications',
    },
    {
      Id: 11072,
      Name: 'IMA-PRESS" LLC',
    },
    {
      Id: 11073,
      Name: 'Finlay Ediciones',
    },
    {
      Id: 11074,
      Name: 'Sped sp. z o.o.',
    },
    {
      Id: 11075,
      Name: 'Gdansk Academy of Physical Education and Sport',
    },
    {
      Id: 11076,
      Name: 'ETUI publications',
    },
    {
      Id: 11077,
      Name: 'ICMR',
    },
    {
      Id: 11078,
      Name: 'ATSDR',
    },
  ],
}
