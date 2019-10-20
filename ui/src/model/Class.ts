export interface Class {
  id: string;
  name: string;
  description: string;

  period_ids: string[];
  teacher_ids: string[];
  helper_ids: string[];
}
