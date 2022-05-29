import { Amplication1 as TAmplication1 } from "../api/amplication1/Amplication1";

export const AMPLICATION1_TITLE_FIELD = "id";

export const Amplication1Title = (record: TAmplication1): string => {
  return record.id || record.id;
};
