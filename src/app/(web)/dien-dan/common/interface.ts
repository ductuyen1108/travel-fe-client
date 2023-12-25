import { CustomFile } from '@/common/components/upload';

export interface IPost {
  id: number;
  content: string;
  description: string;
  title: string;
  image: IImage;
}

export interface IImage {
  id: number;
  key: string;
  type: string;
  size: number;
  url: string;
  uploaderId: number;
}

export interface IResPost {
  items: IPost[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IParamsPost {
  title?: string;
  content?: string;
  userId?: string;
  page?: number;
  limit?: number;
}

// Create
export interface IDataFormCreatePost {
  content: string;
  title: string;
  description: string;
  image: CustomFile | string;
}

export interface ISubmitDataPost {
  content: string;
  title: string;
  description: string;
  imageId: number;
}

export interface IDataEditPost {
  id: number;
  content: string;
  title: string;
  description: string;
  imageId: number;
}

export interface IParamsDeletePost {
  ids: number[];
}
