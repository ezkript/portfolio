interface ContactInfo {
  email: string;
  location: string;
  availability: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description: string;
}
  
export interface ContactData {
  title: string;
  subtitle: string;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  formLabels: {
    name: string;
    email: string;
    message: string;
  };
  formPlaceholders: {
    name: string;
    email: string;
    message: string;
  };
  submitButton: {
    default: string;
    loading: string;
  };
}