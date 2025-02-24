/* eslint-disable @typescript-eslint/no-unused-vars */
interface SubContent {
  description: string;
  imageUrl: string;
  title: string;
}

interface Module1 {
  linkTitle: string;
  linkUrl: string;
  subContent: SubContent[];
}

interface Module2 {
  imageUrl: string;
  linkTitle: string;
  linkUrl: string;
  subtitle: string;
  title: string;
}

interface ModulesData {
  module1?: Module1;
  module2?: Module2;
}
