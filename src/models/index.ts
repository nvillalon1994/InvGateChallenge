export type Tag ={
    name: string;
    id: string;
}
export interface Post {
    author: string;
    heading: string;
    excerpt: string;
    image: string;
    tags: Tag[];
}

export type NavLink={
    id:number,
    name:string,
    type:string
}
  