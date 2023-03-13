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
