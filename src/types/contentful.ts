export interface Testimonial {
  author: string;
  location: string;
  testimonial: string;
}

export interface ServiceCard {
  cardTitle: string;
  cardDescription: string;
  cardPhoto: {
    url: string;
  };
  cardPageUrl: string;
}

export interface ContentfulCollection<C> {
  items: C[];
}

export interface LandingPageContentful {
  title: string;
  introduction: string;
  testimonialsCollection: ContentfulCollection<Testimonial>;
  serviceCardsCollection: ContentfulCollection<ServiceCard>;
}
export interface LandingPageStore {
  landingPage: LandingPageContentful;
}

export interface AboutPageContentful {
  title: string;
  subTitle: string;
  profilePicture: {
    url: string;
  };
  aboutDescription: string;
}
export interface AboutPageStore {
  about: AboutPageContentful;
}

export interface GuitarLessonsContentful {
  title: string;
  generalInformationTitle: string;
  generalInformation: {
    json: object;
  };
  curriculumTitle: string;
  curriculumDetailsCollection: {
    items: {
      header: string;
      curriculumDetails: {
        json: object;
      };
    }[];
  };
  pricingTitle: string;
  pricingDataCollection: {
    items: {
      header: string;
      numberOfSessions: number;
      perSessionPrice: number;
    }[];
  };
}
export interface GuitarLessonsStore {
  guitarLessons: GuitarLessonsContentful;
}

export interface Song {
  title: string;
  artist: string;
  description: string;
  song: {
    url: string;
  };
}

export interface EventsContentful {
  title: string;
  generalInformation: {
    json: object;
  };
  songsCollection: {
    items: Song[];
  };
  backgroundImage: {
    url: string;
  };
  guitarAndFluteTitle: string;
  generalGuitarAndFluteInformation: {
    json: object;
  };
}

export interface EventsStore {
  events: EventsContentful;
}

export interface GuitarRepairContentful {
  title: string;
  callToAction: string;
  generalInformation: {
    json: object;
  };
  services: {
    json: object;
  };
}

export interface GuitarRepairStore {
  repair: GuitarRepairContentful;
}

export interface ResourcesContentful {
  title: string;
  lessonResources: {
    json: object;
    links: AssetLink;
  };
  faqCollection: {
    items: {
      answer: object;
      question: string;
    }[];
  };
}

export interface ResourcesStore {
  resources: ResourcesContentful;
}

export interface SocialMediaIcon {
  socialMediaLink: string;
  socialMediaIcon: {
    url: string;
  };
}

export interface FooterContentful {
  title: string;
  phone: string;
  email: string;
  socialMediaIconsCollection: ContentfulCollection<SocialMediaIcon>;
}
export interface FooterStore {
  footer: FooterContentful;
}

export interface AssetLink {
  assets: {
    hyperlink: Asset[];
  };
}

export interface Asset {
  sys: {
    id: string;
  };
  url: string;
}
