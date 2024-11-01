export type TTag = {
  _id: string;
  url: string;
  text: string;
  category: string;
};

// when adding new tag, used in:
// AddTagDialog and useGenerators hook in addTag function
export type Inputs = {
  url: string;
  text: string;
  category: string;
};
