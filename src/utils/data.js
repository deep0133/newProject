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
    point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
    point_3_1: 'Date of Publsih :',
    point_3_2: '01 April 2015',
  },
]

export const Journal = [
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
