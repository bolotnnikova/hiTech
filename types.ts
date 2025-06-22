import React from 'react';

export interface MenuItem {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface PageContent {
  title: string;
  text: string;
  imageUrl: string;
}

export interface UserProfile {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}